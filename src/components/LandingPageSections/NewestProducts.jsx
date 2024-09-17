import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT } from '../../graphql/Queries.js';
import Product from "../ShopComponents/Product.jsx";
import { useStateValue } from "../../utils/stateProvider/useStateValue.jsx";
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 

const NewestProducts = () => {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT, {
    variables: { department: "Home & Garden", subDepartment: "Cleaning Supplies" },
  });

  const [{ user, favorites }] = useStateValue();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const productsToDisplay = data?.getAllProductsBySubDepartment?.slice(0, 4) || [];

  const responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
    { breakpoint: '768px', numVisible: 2, numScroll: 2 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];

  const productTemplate = (product) => (
    <div className="product-item" style={{ display: 'flex', justifyContent: 'center' }}>
      <Product
        key={product._id}
        title={product.Title}
        _id={product._id}
        user={user}
        isFavorite={favorites.has(product._id)}
        company={product.Company}
        purchaseInfo={product.PurchaseInfo}
        imageLinks={product.ImageLinks}
        productDepartment={"Home & Garden"}
        style={{
          width:  '100%',
          height:'auto',
          margin: '0 auto',
        }}
      />
    </div>
  );

  return (
    <div className="newest-products-container"
         style={{
           textAlign: 'center',
           backgroundColor: '#798C74', // Reapply background color
           padding: '2rem', 
           minHeight: '20vh',
           maxHeight: 'auto', // Adjust height for flexibility
         }}
    >
      {isMobile ? (
        <Carousel
          value={productsToDisplay}
          itemTemplate={productTemplate}
          responsiveOptions={responsiveOptions}
          numVisible={1}
          numScroll={1}
          circular
          autoplayInterval={3000}
          className="w-full"
          style={{
            maxWidth: '100%',
            margin: '0 auto',
          }}
        />
      ) : (
        <div
          className="grid-layout"
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {productsToDisplay.map((product) => (
            <Product
              key={product._id}
              title={product.Title}
              _id={product._id}
              user={user}
              isFavorite={favorites.has(product._id)}
              company={product.Company}
              purchaseInfo={product.PurchaseInfo}
              imageLinks={product.ImageLinks}
              productDepartment={"Home & Garden"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewestProducts;