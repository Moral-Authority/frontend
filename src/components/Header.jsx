import { useStateValue } from "@/utils/stateProvider/useStateValue";
import MainNav from "./Navbar/MainNav";
import MobileNav from "./Navbar/MobileNav";

const Header = ({ userLoggedIn = false }) => {
  const [{ navMenu }] = useStateValue();
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
