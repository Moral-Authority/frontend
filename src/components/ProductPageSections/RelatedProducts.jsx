import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Product from "../ShopComponents/Product";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import { SEARCH_PRODUCTS, GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT } from "../../graphql/Queries";
import { Carousel } from 'primereact/carousel'; // PrimeReact Carousel

const RelatedProducts = ({ title, department, subDepartment }) => {
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [{ user, favorites }] = useStateValue();

  const { data: searchData, loading: searchLoading, error: searchError } = useQuery(SEARCH_PRODUCTS, {
    variables: { input: title },
  });

  const { data: subDepartmentData, loading: subDepartmentLoading, error: subDepartmentError } = useQuery(
    GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT,
    {
      variables: { department, subDepartment },
      skip: searchData?.search.length > 1,
    }
  );

  useEffect(() => {
    if (searchData?.search.length > 1) {
      setProductsToDisplay(searchData.search.slice(0, 10));
    } else if (subDepartmentData?.getAllProductsBySubDepartment.length > 0) {
      setProductsToDisplay(subDepartmentData.getAllProductsBySubDepartment.slice(0, 10));
    }
  }, [searchData, subDepartmentData]);

  if (searchLoading || subDepartmentLoading) return <p>Loading...</p>;
  if (searchError || subDepartmentError) return <p>Error: {searchError?.message || subDepartmentError?.message}</p>;

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const productTemplate = (product) => {
    return (
      <div className="product-carousel-item">
        <Product
          key={product._id}
          title={product.Title}
          _id={product._id}
          user={user}
          isFavorite={favorites?.has(product._id)}
          company={product.Company}
          purchaseInfo={product.PurchaseInfo}
          imageLinks={product.ImageLinks}
          productDepartment={department}
        />
      </div>
    );
  };

  return (
    <div className="related-products">
      {productsToDisplay.length === 0 ? (
        <p>No related products found.</p>
      ) : (
        <Carousel
          value={productsToDisplay}
          itemTemplate={productTemplate}
          responsiveOptions={responsiveOptions}
          numVisible={3}
          numScroll={1}
          circular
          autoplayInterval={5000}
          className="w-full"
          style={{
            minHeight: '30vh',
            maxWidth: '100%',
            margin: '0 auto',
          }}
        />
      )}
    </div>
  );
};

export default RelatedProducts;
