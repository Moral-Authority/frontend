import React, { useState, useEffect } from "react";
import "./HowItWorks.css";
import "./../../../img/clothing.png";



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
        backgroundColor: "#fffFff",
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
          <img src="../../../img/clothing.png" alt="clothing" style={{ maxWidth: "100%", height: "auto" }} />
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
            Unleash Your Power
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


                Discover:
                        Browse our selection of carefully vetted ethical products, filter
                        by certifications, ownership, and more.
                </li>
                <br></br>
                <li className="list-point">
                Support:
                        Whether it's fair labor practices, environmental sustainability, or minority
                        ownership, your purchases support causes you care about.                
                        </li>
                <br></br>
                <li className="list-point">
                Influence:
                Use your purchasing power to advocate for positive change with every purchase.                
                </li>
              </ul>
            </section>
          </div>
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
