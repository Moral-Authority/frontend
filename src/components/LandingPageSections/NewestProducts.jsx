import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { GET_RECENTLY_ADDED_PRODUCTS } from '../../graphql/Queries.js';
import Product from "../ShopComponents/Product.jsx";
import { useStateValue } from "../../utils/stateProvider/useStateValue.jsx";
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 

const NewestProducts = () => {
  const { data, loading, error } = useQuery(GET_RECENTLY_ADDED_PRODUCTS);

  // console.log(data);

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

  const productsToDisplay = data?.GetRecentlyAddedProducts || [];
  console.log(productsToDisplay);
  const responsiveOptions = [
    { breakpoint: '1024px', numVisible: 4, numScroll: 1 },
    { breakpoint: '768px', numVisible: 2, numScroll: 2 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];

  const productTemplate = (product) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Product
        key={product._id}
        title={product.Title}
        _id={product._id}
        user={user}
        isFavorite={favorites.has(product._id)}
        company={product.Company}
        purchaseInfo={product.PurchaseInfo}
        imageLinks={product.ImageLinks}
        productDepartment={product.Department}
        productSubDepartment={product.subDepartment}
      />
    </div>
  );

  return (
    <div 
         style={{
          contentAlign: 'center',
           textAlign: 'center',
           backgroundColor: '#798C74', // Reapply background color
           padding: '2rem', 
           minHeight: '30vh',
           maxHeight: 'auto', // Adjust height for flexibility
         }}
    >
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

    </div>
  );
};

export default NewestProducts;
