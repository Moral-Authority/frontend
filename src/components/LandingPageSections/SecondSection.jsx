import React from "react";
import "./secondSection.css";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
const SecondSection = () => {
  return (
    <div className="second-section-container">
      <div className="image-container">
        {/* <img className="founder-image"  alt="text" /> */}
        <div className="placeholder-image"></div>
      </div>
      <div>
        <div className="title-container">
          <div className="founder-message-divider"></div>
          <h1 className="founder-message-title">
            Message From the Founder
          </h1>
        </div>
        <div>
          <p className="founder-message-paragraph">
            Lower income individuals and minorities are the most affected and
            least equipped to participate in decisions made by corporations and
            politicians. The need for better resources is clear and immediate.
          </p>
          <p className="founder-message-paragraph">
            Moral Authority is as a public resource, where people can easily
            find companies and products aligned with their values. As Moral
            Authority grows we see it becoming a source of trusted information
            empowering individuals to have impact with their purchases 24/7
            instead of every four years.
          </p>
        </div>
        <div className="button-container">
          {/* <button className="more-about-us-button">
            More About Us
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
