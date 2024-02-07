import React from "react";
import "./thirdSection.css";

const ThirdSection = () => {
  return (
    <div className="third-section-container">
      <section className="section-header">
        <h1 className="section-title">
         How It Works
        </h1>
        <div className="title-divider"></div>
      </section>
      <section className="content-section">
        <div className="content-container">
          <div className="list-container">
            <section>
              <ul className="points-list">
                <li className="list-point">
                Discover: Explore our curated database of companies and products that prioritize ethical standards.
                </li>
                <li className="list-point">
                Support:  Choose to buy from businesses that align with your values, promoting fair and responsible practices.
                </li>
                <li className="list-point">
                Influence: Use your voice and purchasing power to advocate for positive change in corporate behaviors and policies.
                </li>
              </ul>
            </section>
          </div>
          <div className="buttons-container">
            <button className="action-button">
              Sign Up
            </button>
            <button className="action-button">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThirdSection;