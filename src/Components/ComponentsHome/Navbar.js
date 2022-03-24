import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  //Scroll to top
  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="back-nav">
        <div className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => {
              scrollHome();
              closeMobileMenu();
            }}
          >
            Lando Game
          </Link>
          <div className="navbar-mainlogo"></div>
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
                Markets
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/whitepaper"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                White Paper
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/swap"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Swap
              </Link>
            </li>
            <li className="nav-item">
              <Scroll.Link
                to="roadmap"
                spy={true}
                duration={200}
                smooth={true}
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                RoadMap
              </Scroll.Link>
            </li>

            <li className="nav-item">
              <Scroll.Link 
                to="team"
                spy={true}
                duration={200}
                smooth={true}
                
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Team
              </Scroll.Link>
            </li>
            <li className="nav-item">
              <Scroll.Link
                to="partner"
                spy={true}
                duration={200}
                smooth={true}
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Partner
              </Scroll.Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
