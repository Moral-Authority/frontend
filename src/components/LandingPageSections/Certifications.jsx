import React, { useState, useEffect } from "react";
import clothing from "./../../../img/clothing.png";

// Sample data for certifications (you can adjust or replace with actual data)
const certifications = [
  { id: 1, name: "B Corp Certified", logo: clothing },
  { id: 2, name: "Climate Neutral Certified", logo: clothing },
  { id: 3, name: "Cradle to Cradle", logo: clothing },
  { id: 4, name: "EPA Safer Choice", logo:clothing },
  { id: 5, name: "Certified Vegan", logo: clothing },
  { id: 6, name: "EWG", logo: clothing },
];


const CertificationSection = () => {
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
            <div className="bg-blue-100 py-8">
            <h1
            style={{
              fontSize: isMobile ? "1.5rem" : "2rem",
              fontWeight: 600,
              textTransform: "capitalize",
              textAlign: "center",
              paddingTop: "2rem",
            }}
          >
            Certifications
          </h1> 
      <div className="flex flex-wrap justify-center gap-8">
        {certifications.map((cert) => (
          <div key={cert.id} className="flex flex-col items-center">
            <img src={cert.logo} alt={cert.name} className="h-16 mb-2" />
            <p className="text-center">{cert.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default CertificationSection;