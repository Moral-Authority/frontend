import React, { useState } from "react";
import { HeartIcon, UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import NavItems from "./NavItems";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useLazyQuery } from "@apollo/client";
import { useStateValue, actionTypes } from "@/utils/stateProvider/useStateValue"; // Ensure actionTypes is imported here
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "images/MoralAuthorityLogo.png";
import { SEARCH_PRODUCTS } from "../../graphql/Queries.js"; 


const MainNav = ({ userLoggedIn }) => {
  const [{ userProfile }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchProducts, { data, loading, error }] = useLazyQuery(SEARCH_PRODUCTS);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      searchProducts({ variables: { input: searchTerm } }).then((res) => {
        if (res.data && res.data.search.length > 0) {
          const products = res.data.search; // Declare products
          const product = products[0]; // Declare product
          const departmentTitle = product.Department; // Declare departmentTitle
  
          console.log("Search results:", departmentTitle);
          console.log("Search results:", departmentTitle);
          // Dispatch search results to global state as filtered products
          dispatch({
            type: actionTypes.SET_FILTERED_PRODUCTS,
            filteredProducts: res.data.search,
          });
          // Redirect to Shop page
          navigate("/shop", { state: { departmentTitle: departmentTitle } });
        } else {
          console.log("No products found.");
        }
      });
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <header className="w-full flex h-20 bg-white border justify-between text-center items-center px-2.5 md:px-5 xl:px-5">
        <Link to="/">
          <h1 className="text-2xl lg:text-3xl font-bold">
            <img
              className="h-auto max-h-[60px] sm:max-h-[60px] md:max-h-[60px] lg:max-h-[80px] w-auto"
              src={Logo}
              alt="Logo"
            />
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="hidden lg:flex m:flex sm:flex xs:flex py-1 items-center border-b border-b-black w-1/3 xl:w-1/3 space-x-2">
          <MagnifyingGlassIcon className="h-6 w-6" onClick={handleSearch} />
          <input
            type="search"
            className="placeholder:text-black focus:border-none focus:outline-none w-full"
            placeholder="Search for products..."
            id="site-search"
            name="q"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>



        {userLoggedIn ? (
          <nav className="hidden lg:flex m:flex sm:flex">
            <ul className="flex items-center space-x-5">
              <li>
                <Link to={userProfile ? "/profile" : "#"}>
                  <div className="h-10 w-10 rounded-full">
                    <HeartIcon className="h-10 w-10 text-[#1a1a0a]" />
                  </div>
                </Link>
              </li>
              <li>
                <Link to={userProfile ? "/profile" : "#"}>
                  <div className="h-10 w-10 rounded-full">
                    <UserCircleIcon className="h-10 w-10" />
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="hidden lg:flex">
            <ul className="flex space-x-5">
              <li>
                <Link to="/create-account">
                  <button className="h-[46px] text-base w-[128px] bg-[#1a1a0a] text-white text-center rounded-sm">
                    Signup
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button
                    className="h-[46px] w-[128px] text-base bg-white text-black border border-black text-center rounded-sm"
                  >
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        )}

        {/* Bars Icon Menu for Smaller Screens */}
        <nav className="flex sm:hidden m:hidden lg:hidden space-x-3">
          <Link to={userProfile ? "/profile" : "#"}>
            <div className="h-8 w-8 space-x-3 rounded-full">
              <HeartIcon className="h-8 w-8 text-[#1a1a0a]" />
            </div>
          </Link>
          <Bars3Icon
            className="h-8 w-8"
            onClick={() =>
              dispatch({
                type: "CHANGE_NAV_MENU",
              })
            }
          />
        </nav>
      </header>

      {/* Search Results */}
      <div className="search-results">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <ul>
            {data.search.map((product) => (
              <li key={product._id}>
                <h3>{product.Title}</h3>
                <p>Company: {product.Company.name}</p>
                <p>Price: ${product.PurchaseInfo.Price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* NavItems for Categories, Visible on Larger, medium and small screens */}
      <div className="hidden justify-center space-x-5 w-full h-14 bg-[#2C3A46] text-white 
      m:flex lg:flex xs:flex sm:flex text-sm sm:text-base md:text-lg lg:text-xl">
        <NavItems />
      </div>
    </div>
  );
};

export default MainNav;
