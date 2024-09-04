import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FourthSection from "../components/LandingPageSections/FourthSection";
import MainSection from "../components/LandingPageSections/MainSection";
import SecondSection from "../components/LandingPageSections/SecondSection";
import ThirdSection from "../components/LandingPageSections/ThirdSection";
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <MainSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      {/* <Footer /> */}
    </div>
  );
};
export default LandingPage;
