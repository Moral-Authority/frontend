import React from "react";
import { BellIcon, Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import navItems from "@/utils/testAPIs/navItems.json";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./mobileNav.css"; // Ensure this path is correct

const MobileNav = () => {
  const [, dispatch] = useStateValue();
  const navigate = useNavigate();

  // Function to handle navigation and collapsing the menu
  const handleNavigation = (path) => {
    navigate(path);
    dispatch({ type: "CHANGE_NAV_MENU" }); // Collapse the menu after navigation
  };

  return (
    <motion.div className="mobile-nav">
      <div className="top-icons">
        <BellIcon className="icon" />
        <div className="notification">3</div>
        <Bars3Icon className="icon" onClick={() => dispatch({ type: "CHANGE_NAV_MENU" })} />
      </div>

      <div className="auth-buttons">
        <button onClick={() => handleNavigation('/create-account')} className="signup-btn">
          Sign up
        </button>
        <button onClick={() => handleNavigation('/login')} className="login-btn">
          Login
        </button>
      </div>

      <div className="search-bar">
        <MagnifyingGlassIcon className="icon" />
        <input type="search" placeholder="Search" id="site-search" name="q" />
      </div>

      <div className="categories">
        <p className="section-title">Categories</p>
        <ul>
          {navItems?.navItems?.map((item, index) => (
            <li
              onClick={() => handleNavigation(item.navLink)}
              key={index}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <p className="profile-section">My Profile</p>
    </motion.div>
  );
};

export default MobileNav;
