import { ProtectedRoute } from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

export const App = () => {
  return (
    <ProtectedRoute>
      <Header />
      <LandingPage />
      <Footer />
  </ProtectedRoute>

  );
};
