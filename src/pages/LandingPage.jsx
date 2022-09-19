import React from "react";
import OurMissionLeft from "../img/OurMissionLeft.png"
import OurMissionRight from "../img/OurMissionRight.png"
const LandingPage = () => {
  return (
    <div className='landingPageConatiner'>
      <img src={OurMissionLeft} alt="left"  className="img-left"/>
      <img src={OurMissionRight} alt="right"  className="img-right"/>
    </div>
  );
};
export default LandingPage;
