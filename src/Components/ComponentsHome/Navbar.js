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
      <nav className="back-navbar">
        <div className="navbar">
          <div className="content">
            <p1 className="navbar-name">Lando Game</p1>
            <div className="main-logo"></div>
            <div className="menu-mobile" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>

            <div calssName="text-content">
              <ul className={click ? "navbar-items active" : "navbar-items"}>
                <Link
                  to="/"
                  className="link-navbar"
                  onClick={() => {
                    scrollHome();
                    closeMobileMenu();
                  }}
                >
                  <li>
                    <p1 className="link-text">Home</p1>
                  </li>
                </Link>
                <Link
                  to="/marketplace"
                  className="link-navbar"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  <li>
                    <p1 className="link-text">Markets</p1>
                  </li>
                </Link>
                <a
                  href="https:docs.landogame.com"
                  target="_blank"
                  className="link-navbar"
                  onClick={closeMobileMenu}
                >
                  <li>
                    <p1 className="link-text">White Paper</p1>
                  </li>
                </a>
                <Scroll.Link
                  to="roadmap"
                  spy={true}
                  duration={1000}
                  smooth={true}
                  className="link-navbar"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  <li>
                    <p1 className="link-text">RoadMap</p1>
                  </li>
                </Scroll.Link>


                <Scroll.Link
                  to="gameplay"
                  spy={true}
                  duration={1000}
                  smooth={true}
                  className="link-navbar"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  <li>
                    <p1 className="link-text">Game Play</p1>
                  </li>
                </Scroll.Link>



                <Scroll.Link
                  to="team"
                  spy={true}
                  duration={1000}
                  smooth={true}
                  className="link-navbar"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  <li>
                    <p1 className="link-text">Team</p1>
                  </li>
                </Scroll.Link>
                <Scroll.Link
                  to="partners"
                  spy={true}
                  duration={1000}
                  smooth={true}
                  className="link-navbar"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  <li>
                    <p1 className="link-text">Partner</p1>
                  </li>
                </Scroll.Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
