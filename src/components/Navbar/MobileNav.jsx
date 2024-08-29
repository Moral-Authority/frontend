import React, { useEffect } from "react";
import { HeartIcon, Bars3Icon, UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import navItems from "@/utils/testAPIs/navItems.json";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const MobileNav = () => {
  const [{ user, userProfile }, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for user if not already logged in
    if (!user) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        console.log("parsedUser:", parsedUser);
        dispatch({
          type: "SET_USER",
          user: parsedUser,
        });
      }
    }
  }, [user, dispatch]);

  const userLoggedIn = !!user;

  // Function to handle navigation and collapsing the menu
  const handleNavigation = (path) => {
    navigate(path);
    dispatch({ type: "CHANGE_NAV_MENU" }); // Collapse the menu after navigation
  };

  const logoutHandler = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    dispatch({
      type: "SET_USER",
      user: null,
    });
    handleNavigation('/'); 
  };

  return (
    <motion.div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1a1a0a",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "32px 32px 0px 32px",
        color: "#F2F2eb",
      }}
    >
      <div style={{ display: "flex", justifyContent: "right" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "15rem",
            borderBottom: "1px solid #F2F2eb",
          }}
        >
          <MagnifyingGlassIcon style={{ width: "32px", height: "32px", color: "#F2F2eb" }} />
          <input type="search" placeholder="Search Coming Soon!" id="site-search" name="q" style={{ background: "transparent", border: "none", outline: "none", color: "#F2F2eb", width: "100%" }} />
        </div>
        <Bars3Icon
          style={{ width: "32px", height: "32px", color: "#F2F2eb" }}
          onClick={() => dispatch({ type: "CHANGE_NAV_MENU" })}
        />

      </div>

      {userLoggedIn ? (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "15rem",
              borderBottom: "1px solid #F2F2eb",
            }}
          >
          <MagnifyingGlassIcon style={{ width: "32px", height: "32px", color: "#F2F2eb" }} />
          <input type="search" placeholder="Search Coming Soon!" id="site-search" name="q" style={{ background: "transparent", border: "none", outline: "none", color: "#F2F2eb", width: "100%" }} />
        </div>

        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <button
            onClick={() => handleNavigation('/create-account')}
            style={{
              width: "150px",
              height: "50px",
              textAlign: "center",
              borderRadius: "8px",
              fontSize: "16px",
              backgroundColor: "#F2F2EB",
              color: "#0C0F18",
            }}
          >
            Sign up
          </button>
          <button
            onClick={() => handleNavigation('/login')}
            style={{
              width: "150px",
              height: "50px",
              textAlign: "center",
              borderRadius: "8px",
              fontSize: "16px",
              backgroundColor: "transparent",
              border: "2px solid #F2F2EB",
              color: "#F2F2EB",
            }}
          >
            Login
          </button>
        </div>
      )}

      <div style={{ paddingTop: "2px" }}>
        <p style={{ marginBottom: "20px", fontSize: "20px" }}>Shop</p>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            paddingLeft: "1%",
          }}
        >
          {navItems?.navItems?.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNavigation(item.navLink)}
              style={{ cursor: "pointer", opacity: 0.7 }}
              onMouseOver={(e) => (e.target.style.opacity = "1")}
              onMouseOut={(e) => (e.target.style.opacity = "0.7")}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {userLoggedIn ? (
        <div style={{
          position: "absolute",  // Position the div at the bottom
          bottom: 15,             // Stick to the bottom
          left: 0,               // Stick to the left
          width: "100%",         // Full width
          borderTop: "1px solid #F2F2eb",
          display: "flex",
          justifyContent: "space-between", // Distribute space between the items
          padding: "10px 20px" // Add some padding for spacing
        }}>
        <p onClick={logoutHandler} style={{ fontSize: "20px", paddingTop: "20px" }}>
          Sign Out
        </p>
        <p to="/profile" onClick={() => handleNavigation("/profile")} style={{ fontSize: "20px", paddingTop: "20px" }}>
          Edit Profile
        </p>
      </div>
      ) : null}
      

    </motion.div>
  );
};

export default MobileNav;
