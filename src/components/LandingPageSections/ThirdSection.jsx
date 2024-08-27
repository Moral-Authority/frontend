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
                Discover: Browse our curated selection of ethical products, all carefully vetted to meet our high standards. Use our filters to narrow down your search by certifications, ownership, and more.
                </li>
                <br></br>
                <li className="list-point">
                Support:  Choose to buy from businesses that align with your values. Whether it's fair labor practices, environmental sustainability, or minority ownership, your purchases support causes you care about.
                </li>
                <br></br>
                <li className="list-point">
                Influence: Use your purchasing power to advocate for positive change. Join our community to connect with like-minded individuals and share your impact.
                </li>
              </ul>
            </section>
          </div>
          <div className="buttons-container">
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