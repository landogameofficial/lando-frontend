import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  //Scroll to top
  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //alert for box
  const alertBox = ()=>{
    Swal.fire({
      icon: "info",
      title: "Comming Soon"
    })}

  return (
    <>
      <nav className="back-navbar" >
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
              
  
              <li className="link-navbar" onClick={()=>{closeMobileMenu(); alertBox()}}>
                <p1 className="link-text">Lando Box</p1>
              </li>
                         
      
              <li className="link-navbar">
                <p1 className="link-text">Connect Wallet</p1>
              </li>
                         
            </ul>
          </div> 
          </div> 
         </div>

      </nav>
    </>
  );
}

export default Header;
