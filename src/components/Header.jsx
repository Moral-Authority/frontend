import './Header.css';

const Header = () => {
  return (
    <div>
      <div>

        <header className="navHeader header responsive-Nav">
          <h1 className="logo">Logo</h1>
          <nav>
            <ul className="navbar">
              <li><label for="site-search">Search the site:</label>
                <input type="search" id="site-search" name="q" />

                <button>Search</button></li>
              <li>Welcome</li>
              <li>Businesses</li>
              <li>Volunteer</li>
              <li>More</li>
              <li>Register</li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
