import React, { useEffect, useState } from "react";
import { HeartIcon, Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import navItems from "@/utils/testAPIs/navItems.json";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MobileNav = () => {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [expandedMenu, setExpandedMenu] = useState(null); // Track the expanded menu

  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        dispatch({
          type: "SET_USER",
          user: parsedUser,
        });
      }
    }
  }, [user, dispatch]);

  const userLoggedIn = !!user;

  const handleNavigation = (departmentTitle, subDepartmentTitle ) => {
    let url = `/shop/${departmentTitle}/${subDepartmentTitle}`;
    navigate(url);
    // Close the menu after navigation
    setExpandedMenu(null);
    dispatch({ type: "CHANGE_NAV_MENU" });
  };


  const toggleMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu); // Toggle the expanded menu
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

      <div style={{ display: "flex", justifyContent: "center", background: "transparent", gap: "30px" }}>
        
        <div
            style={{ display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "15rem",
              borderBottom: "1px solid #F2F2eb",
              justifyContent: "left",
            }}
          >
          <MagnifyingGlassIcon style={{ width: "32px", height: "32px", color: "#F2F2eb", justifyContent: "left" }} />
              <input
                  type="search"
                  placeholder="Find Products" id="site-search" name="q" style={{ background: "transparent", border: "none",outline: "none", color: "#F2F2eb", width: "100%", }}
              />
        </div>
        
        
        <Bars3Icon
          style={{ width: "32px", height: "32px", color: "#F2F2eb",  justifyContent: "right" }}
          onClick={() => dispatch({ type: "CHANGE_NAV_MENU" })}
        />
      </div>
      

      {userLoggedIn ? (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button
          onClick={() =>  navigate('/create-account')}
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
          Favorites
        </button>
        <button
          onClick={() => navigate('/login')}
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
          Profile
        </button>
      </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <button
            onClick={() =>  navigate('/profile')}
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
            onClick={() => navigate('/profile')}
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
        <ul style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "1%" }}>
          {navItems?.navItems?.map((item, index) => (
            <li
              key={index}
              onClick={() => toggleMenu(item.title)}
              style={{ cursor: "pointer", opacity: 0.7 }}
              onMouseOver={(e) => (e.target.style.opacity = "1")}
              onMouseOut={(e) => (e.target.style.opacity = "0.7")}
            >
              {item.title}

              {/* Show subheadings if the current menu is expanded */}
              {expandedMenu === item.title && (
                <ul style={{ marginTop: "10px", paddingLeft: "10px", color: "#ddd" }}>
                  {item?.children?.items?.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      style={{ cursor: "pointer", opacity: 0.9 }}
                      onClick={() => handleNavigation(item.title, subItem.title)}
                    >
                      {subItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {userLoggedIn ? (
        <div style={{
          position: "absolute",  
          bottom: 15,            
          left: 0,               
          width: "100%",         
          borderTop: "1px solid #F2F2eb",
          display: "flex",
          justifyContent: "space-between", 
          padding: "10px 20px" 
        }}>
          <p onClick={logoutHandler} style={{ fontSize: "20px", paddingTop: "20px" }}>
            Sign Out
          </p>
          <p onClick={() => navigate("/profile")} style={{ fontSize: "20px", paddingTop: "20px" }}>
            Edit Profile
          </p>
        </div>
      ) : null}
    </motion.div>
  );
};

export default MobileNav;
