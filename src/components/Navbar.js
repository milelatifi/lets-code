import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const currentRoutePath = location.pathname;
  const [click, setClick] = useState(false);
  const [button] = useState(true);

  const handleClick = () => {
    if (
      document.querySelector('.nav-menu').classList.contains('nav-menu-open')
    ) {
      document.querySelector('.nav-menu').classList.remove('nav-menu-open');
    } else {
      document.querySelector('.nav-menu').classList.add('nav-menu-open');
    }
    setClick(!click);
  };
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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          LetsCode <i className=" uil uil-brackets-curly"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'uil uil-times' : 'uil uil-bars'}></i>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-links ${
                currentRoutePath === '/' ? 'active' : ''
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-links ${
                currentRoutePath === '/contact' ? 'active' : ''
              }`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-links ${
                currentRoutePath === '/about' ? 'active' : ''
              }`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          {button && isLoggedIn !== true && (
            <li className="nav-item">
              <Button link="sign-up" buttonStyle="btn--outline">
                Sign Up
              </Button>
            </li>
          )}

          {button && isLoggedIn !== true && (
            <li className="nav-item">
              <Button link="log-in" buttonStyle="btn--outline">
                Log in
              </Button>
            </li>
          )}
          {isLoggedIn === true && (
            <li className="nav-item">
              <Link
                to="/log-in"
                className=" nav-links btn  bg-neutral-900 border-white  text-white btn-mobile "
                buttonstyle="btn--outline"
                onClick={logOut}
              >
                Log Out
              </Link>
            </li>
          )}
          {isLoggedIn === true && (
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <img
                  src={user.profile_picture}
                  className="
              border-2
              w-14
              rounded-full  
              my-1
                        "
                  alt=""
                />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
