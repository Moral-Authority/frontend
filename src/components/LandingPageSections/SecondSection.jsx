import React, { useState, useEffect } from "react";

const SecondSection = () => {
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
        backgroundColor: "#F2F2EB",
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
            About Us
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
          At Moral Authority, we believe in the power of informed choices. Our
          platform connects conscientious consumers with companies and products
          that align with their values. From environmental sustainability to
          fair labor practices, we're here to shine a light on those making a
          positive impact.
        </p>
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
            Our Mission
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
          To create a community where ethical practices are the norm, not the
          exception. We're dedicated to providing the tools and information
          needed to make choices that reflect your values, empowering you to
          influence change with your actions and purchases.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1.25rem",
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      >
        {/* Placeholder for future buttons */}
      </div>
    </div>
  );
};

export default SecondSection;
