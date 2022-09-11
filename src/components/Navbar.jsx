import React from 'react'
import '../styles/Navbar.scss'
import 'typeface-quicksand'
function Navbar() {
  return (
    <div className="navbar">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="navbar-styles">
        <div className="navbar-logo">
          <img className="navbar-logo-styles" src="./logo195.png" alt="" />
        </div>
        <div className="navbar-searchbar">
          <input className="navbar-searchbar-styles" type="text" placeholder="Search here..." />
        </div>
        <div className="navbar-searchbtn">
          <a href="#"><button  className="navbar-searchbtn-styles"><i class="fa-solid fa-magnifying-glass"></i></button></a>
        </div>
        <div className="navbar-menu">
          <a href="#"><button className="navbar-menu-styles"><i class="fa-solid fa-bars"></i></button></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;