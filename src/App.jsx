import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ProtectedRoute } from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import MobileNav from "./components/Navbar/MobileNav";
import { useStateValue } from "./utils/stateProvider/useStateValue";
import { AnimatePresence } from "framer-motion";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import FavoritedProducts from "./components/ProfileComponents/FavoritedProducts";
import AddProduct from "./components/ProfileComponents/AddProduct";
import AddedProducts from "./components/ProfileComponents/AddedProducts";
import ProductsReview from "./components/ProfileComponents/ProductsReview";
import Product from "./pages/Product";
import PrivacyPolicy from "./pages/privacyPolicy";



export const App = () => {
  const [{ navMenu }] = useStateValue();
  return (
    // <ProtectedRoute>
      <Router>
        <AnimatePresence>
          {navMenu ? (
            <MobileNav key="mobileNav" />
          ) : (
            <>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/create-account" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/product" element={<Product />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/profile" element={<Profile />}>
                  <Route index path="add-product" element={<AddProduct />} />
                  <Route path="added" element={<AddedProducts />} />
                  <Route path="favorited" element={<FavoritedProducts />} />
                  <Route
                    index
                    path="products-reviews"
                    element={<ProductsReview />}
                  />
                </Route>
              </Routes>
            </>
          )}
        </AnimatePresence>
      </Router>
    // {/* </ProtectedRoute> */}
  );
};
