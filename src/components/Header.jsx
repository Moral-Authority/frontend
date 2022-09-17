import './Header.css';

const Header = () => {
  return (
    <div>
      <div>

        <header className="navHeader header responsive-Nav">
          <h1 className="logo">Logo</h1>
          <div className='searchbar'>
       <label for="site-search">Search the site:</label>
                <input type="search" id="site-search" name="q" />

                <button>Search</button>
          </div>
          <nav>
            <ul className="navbar">
              <li>Login</li>
             
              <li>Register</li>
            </ul>
          </nav>
        </header>
        <div className='departments'>
            <ul>
              <li>Welcome</li>
              <li>Featured Businesses</li>
              <li>Contact Us</li>
              <li>More</li>
            </ul>
            </div>
      </div>
    </div>
  );
};

export default Header;
