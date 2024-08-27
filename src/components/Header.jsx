import { useStateValue } from "@/utils/stateProvider/useStateValue";
import MainNav from "./Navbar/MainNav";
import MobileNav from "./Navbar/MobileNav";

const Header = () => {
  const [{ user, navMenu }] = useStateValue();
  const userLoggedIn = !!user; // Check if the user is logged in
  return (
    <div>
      {!navMenu ? (
        <MainNav userLoggedIn={userLoggedIn} />
      ) : (
        <MobileNav userLoggedIn={userLoggedIn} />
      )}
    </div>
  );
};

export default Header;
