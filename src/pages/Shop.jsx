import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Filters from "../components/ShopComponents/Filters";
import Products from "../components/ShopComponents/Products";
import { useStateValue } from "@/utils/stateProvider/useStateValue";

const Shop = () => {
  const [{ shopFiltersToggle }] = useStateValue();
  return (
    <div className="min-h-screen relative">
      <div
        className={`${
          shopFiltersToggle ? "block" : "hidden"
        } absolute w-full px-4 flex lg:items-center justify-center top-0 bottom-0 py-20 lg:py-4 lg:hidden`}
      >
        <Filters />
      </div>
      <div
        className={`w-full ${
          shopFiltersToggle
            ? "opacity-20 blur-sm pointer-events-none"
            : "opacity-100 blur-none"
        } h-full flex flex-col`}
      >
        <Header />
        <div className="flex-1 flex flex-col h-full bg-white">
          <section className="flex text-[#798086] items-center justify-center bg-[#FBF7EC] h-24">
            Home &gt; Shop &gt; Home Goods
          </section>
          <section className="px-4 relative py-2 sm:px-9 sm:py-8 lg:py-12 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-10">
            {!shopFiltersToggle && <Filters />}
            <Products />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
