import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('logged_in') === 'true'
  );
  const user = JSON.parse(localStorage.getItem('user'));

  const logOut = () => {
    localStorage.removeItem('logged_in');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          LetsCode <i className=" uil uil-brackets-curly"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'uil uil-times' : 'uil uil-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          {isLoggedIn === true && (
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {' '}
                <img
                  src={user.profile_picture}
                  className="
              border-2
              w-14
              rounded-full  
              my-1
              
          "
                />
              </Link>
            </li>
          )}
        </ul>
        {button && isLoggedIn !== true && (
          <Button link="sign-up" buttonStyle="btn--outline">
            Sign Up
          </Button>
        )}

        {button && isLoggedIn !== true && (
          <Button link="log-in" buttonStyle="btn--outline">
            Log in
          </Button>
        )}
        {isLoggedIn === true && (
          <Link
            to="/log-in"
            className="btn  bg-neutral-900 border-white  text-white btn-mobile "
            buttonstyle="btn--outline"
            onClick={logOut}
          >
            Log Out
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
