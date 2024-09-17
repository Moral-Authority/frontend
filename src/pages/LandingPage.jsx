import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewestProducts from "../components/LandingPageSections/NewestProducts";
import MainSection from "../components/LandingPageSections/MainSection";
import SecondSection from "../components/LandingPageSections/SecondSection";
import HowItWorks from "../components/LandingPageSections/HowItWorks";
import PieChartComponent from "../components/LandingPageSections/productCycle";
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <MainSection />
      <NewestProducts />
      <HowItWorks />
      <PieChartComponent />
      <SecondSection />
      {/* <Footer /> */}
    </div>
  );
};
export default LandingPage;
