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
            Behind the Brand
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
         At Moral Authority, we believe informed choices have the power to change the world. Our platform connects conscious consumers with brands and products that reflect their values. Whether it's environmental sustainability, fair labor practices, or supporting minority-owned businesses, we’re here to spotlight those creating positive change.
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
            Driven by Purpose
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
          Our mission is simple: to build a community where ethical practices become the standard, not the exception. We're committed to equipping you with the knowledge and resources to make value-driven decisions—empowering you to drive meaningful change through your actions and purchases.
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
