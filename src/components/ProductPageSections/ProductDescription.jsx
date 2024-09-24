import React from "react";


const ProductDescription = () => {
  return (
    <div className="w-full flex justify-between space-x-24 items-center">
      <section className="items-start flex flex-col w-1/2 space-y-3">
        <p className="text-[#697383]">Product Certifications</p>
        <div className="flex px-2" style={{ marginTop: '50%' }}>
          <img src="https://res.cloudinary.com/dxm6doeqd/image/upload/e_background_removal/c_crop,w_90,h_90,ar_1:1,f_png,e_improve,e_sharpen/v1675104249/logos-certifications/r6ynnwqatym7h6gmjjp6.png" 
          alt="certified gluten free" className="h-20 w-20 object-cover" />
        </div>
      </section>

      <section className="items-start flex flex-col w-1/2 space-y-3">
        <p className="text-[#697383]">Company Certifications</p>
        <div className="flex px-2" style={{ marginTop: '50%' }}>
          <img src="https://res.cloudinary.com/dxm6doeqd/image/upload/e_background_removal/c_crop,w_90,h_90,ar_1:1,f_png,e_improve,e_sharpen/v1675104249/logos-certifications/r6ynnwqatym7h6gmjjp6.png" 
          alt="certified gluten free" className="h-20 w-20 object-cover" />
        </div>
      </section>
      
      <section className="items-start flex flex-col w-1/2 space-y-3">
        <p className="text-[#697383]">Product Features</p>
        <div className="leading-loose text-sm text-[#758BAE]">
          <ul className="flex flex-col space-y-2 text-sm">
            <li className="flex space-x-3 items-center">
              <div className="h-2 w-2 bg-[#D6DDEB]"></div>
              <span>Dye Free </span>
            </li>
            <li className="flex space-x-2 items-center">
              <div className="h-2 w-2 bg-[#D6DDEB]"></div>
              <span>Recycled </span>
            </li>
            <li className="flex space-x-2 items-center">
              <div className="h-2 w-2 bg-[#D6DDEB]"></div>
              <span> Organic </span>
            </li>
          </ul>
        </div>
      </section>
      
    </div>
  );
};

export default ProductDescription;
