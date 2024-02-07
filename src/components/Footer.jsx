import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icons-container">
        <SocialIcon
          url="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="homepage-icon"
          bgColor="white"
          style={{ width: "30px", height: "30px" }}
        />
        <SocialIcon
          url="https://youtube.com"
          className="homepage-icon"
          bgColor="white"
          style={{ width: "30px", height: "30px" }}
        />
        <Link to="/privacy-policy">Privacy Policy</Link> {/* Use Link here */}
        {/* <p>info@moralauthority.co</p> */}
      </div>
    </div>
  );
};

export default Footer;
