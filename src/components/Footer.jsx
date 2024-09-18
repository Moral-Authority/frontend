import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";


const Footer = () => {
return (
  <div className="footer-container">
    <div className="icons-container">
      <div className="column-social">
      <SocialIcon
          url="https://www.instagram.com/moralauthority/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          bgColor="black"
          style={{ maxWidth: "30px", maxHeight: "30px" }}
        />
      </div>
      <div className="privacy-policy">
      <Link className="column-social" to="/privacy-policy">Privacy Policy</Link> {/* Use Link here */}
      </div>

      <div className="column-social">
       <p>info@moralauthority.co</p>
      </div>
    </div>

  </div>
);
};
export default Footer;
