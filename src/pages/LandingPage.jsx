import React from "react";
import Header from "../components/Header";
import NewestProducts from "../components/LandingPageSections/NewestProducts";
import MainSection from "../components/LandingPageSections/MainSection";
import SecondSection from "../components/LandingPageSections/SecondSection";
import HowItWorks from "../components/LandingPageSections/HowItWorks";
// import CertificationSection from "../components/LandingPageSections/Certifications";
import PieChartComponent from "../components/LandingPageSections/productCycle";
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <MainSection />
      <NewestProducts />
      <HowItWorks />
      {/* <PieChartComponent /> */}
      {/* <CertificationSection /> */}
      <SecondSection />
    </div>
  );
};
export default LandingPage;
