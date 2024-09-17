import React, { useState, useEffect } from "react";
import "./HowItWorks.css";



const HowItWorks = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        height: "auto",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E5DFDC",
        padding: isMobile ? "2rem 1rem" : "3rem 2rem",
        flexDirection: isMobile ? "column" : "row", // Stack vertically on small screens
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: isMobile ? "2rem" : "0", // Space below image on small screens
          marginRight: !isMobile ? "2rem" : "0",
        }}
      >
        {/* Placeholder for the image */}
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              width: "40px",
              border: "2px solid #8f8e63",
            }}
          />
          <h1
            style={{
              fontSize: isMobile ? "1.5rem" : "2rem",
              fontWeight: 600,
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            How It Works
          </h1>
          <div
            style={{
              width: "40px",
              border: "2px solid #8f8e63",
            }}
          />
        </div>
        <p
          style={{
            fontSize: isMobile ? "1rem" : "1.25rem",
            margin: isMobile ? "1.5rem 0" : "2.5rem 0",
            textAlign: isMobile ? "center" : "left",
          }}
        >
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
        </p>
        <button className="action-button">
              Learn More
            </button>
      </div>
    </div>
  );
};

export default HowItWorks;
