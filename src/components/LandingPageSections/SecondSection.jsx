import React from "react";
import "./secondSection.css";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

const SecondSection = () => {
  return (
    <div className="second-section-container">
      <div className="image-container">
        {/* <div className="placeholder-image"></div> */}
      </div>
      <div>
        <div className="title-container">
          <div className="founder-message-divider"></div>
          <h1 className="founder-message-title">About Us</h1>
          <div className="founder-message-divider"></div>
        </div>
        <div>
          <p className="founder-message-paragraph">
            At Moral Authority, we believe in the power of informed choices. Our
            platform connects conscientious consumers with companies and
            products that align with their values. From environmental
            sustainability to fair labor practices, we're here to shine a light
            on those making a positive impact.
          </p>
          <div className="title-container">
            <div className="founder-message-divider"></div>
            <h1 className="founder-message-title">Our Mission</h1>
            <div className="founder-message-divider"></div>
          </div>
          <p className="founder-message-paragraph">
            To create a community where ethical practices are the norm, not the
            exception. We're dedicated to providing the tools and information
            needed to make choices that reflect your values, empowering you to
            influence change with your actions and purchases.
          </p>
        </div>
        <div className="button-container">
          {/* Placeholder for future buttons */}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
