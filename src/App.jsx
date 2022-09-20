import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ProtectedRoute } from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

export const App = () => {
  return (
    <ProtectedRoute>
      <div>
        <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <LandingPage />}/>  
      </Routes>
      <Footer />
      </Router>
      </div>
  </ProtectedRoute>

  );
};
