import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header=()=> {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  //Scroll to top
  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //scroll to bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav className="back-nav">
        <div className="navbar-market">
        <div className="navbar-container">

          <Link to="/">
          <div className="navbar-mainlogo"></div>
          </Link>
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => {
              scrollHome();
              closeMobileMenu();
            }}
          >
            Vega Gun
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => {
                  scrollHome();
                  closeMobileMenu();
                }}
              >
                Home
              </Link>
            </li>


            <li className="nav-item">
              <Link
                to="/marketplace"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Box
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/marketplace"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Connect Wallet
              </Link>
            </li>
          </ul>
        </div>

        </div>
      </nav>
    </>
  );
}

export default Header;
