import "./Footer.css";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

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
        {/* <p>info@moralauthority.co</p> */}
      </div>
    </div>
  );
};

export default Footer;
