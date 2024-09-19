import React, { useState, useEffect } from "react";
import clothing from "./../../../img/clothing.png";



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
        height: "auto", minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#fffFff", flexDirection: isMobile ? "column" : "row", // Stack vertically on small screens
      }}>
      <div
        style={{
          display: "flex", alignItems: "left", justifyContent: "left", width: "100%", marginBottom: isMobile ? "1rem" : "0", // Space below image on small screens
        }}>
        <img src={clothing} alt="clothing" style={{ maxWidth: "100%", height: "auto" }} />
      </div>
      <div>
        <div
          style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }} >
          <h1
            style={{
              fontSize: isMobile ? "1.5rem" : "2rem",
              fontWeight: 600,
              textTransform: "capitalize",
              textAlign: "center",
              paddingTop: "2rem",
            }}
          >
            Lasting Change With Every Purchase
          </h1>
        </div>
        <div
          style={{
            fontSize: isMobile ? "1rem" : "1.25rem",
            margin: isMobile ? "1.5rem 0" : ".5rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            textAlign: isMobile ? "center" : "left",
            width: "100%",
            justifyContent: "center",
          }}  >
          <section
            style={{
              padding: "1rem",
              justifyContent: "center",
            }}>
            <ul style={{
              justifyContent: "center",
            }}>
              <li
                style={{
                  justifyContent: "center",
                }}>
                <span style={{ fontWeight: "bold" }}>Explore :</span> Dive into our curated collection of ethical products. Easily browse by certifications, sustainable practices, minority ownership, and more.
              </li>
              <br></br>
              <li
                style={{
                  justifyContent: "center",
                }}>
                <span style={{ fontWeight: "bold" }}>Support :</span> Every purchase champions the values that matter to you—whether it’s fair labor, environmental sustainability, or supporting diverse businesses.
              </li>
              <br></br>
              <li
                style={{
                  justifyContent: "center",
                }}>
                <span style={{ fontWeight: "bold" }}>Impact :</span>  Turn your shopping into advocacy. Let your purchasing power drive meaningful change with every choice you make.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
