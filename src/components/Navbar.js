import React from 'react';
import "../styles/nav.css";
// import {logo} from "../data/data.json";
import {Link} from "react-router-dom"; 

// const logo=
const searchIcon = <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 121.75 122.88" width="24px"><title>flash-search</title><path d="M54,0A53.88,53.88,0,0,1,74.58,4.09l.14.07a53.93,53.93,0,0,1,25.46,77.61l20.89,22.77a2.58,2.58,0,0,1-.15,3.65l-15.34,14a2.58,2.58,0,0,1-3.64-.16l-20-22a54,54,0,0,1-48.64,3.75l-.14-.06A54,54,0,0,1,4.09,33.32l.07-.14A53.95,53.95,0,0,1,54,0Zm4.73,46.89h8.55a2.25,2.25,0,0,1,1.86,3.5L48.74,85.1a2.24,2.24,0,0,1-4.11-1.6l3-21.3-10.13.17A2.23,2.23,0,0,1,35.56,59l20-34.7a2.23,2.23,0,0,1,4.13,1.45l-1,21.14ZM84.39,23.51a43.17,43.17,0,0,0-14-9.35l-.12-.06a43,43,0,0,0-46.78,9.41l-.14.13a43.25,43.25,0,0,0-9.21,13.85l-.06.12A43,43,0,0,0,84.39,84.39l.14-.13a43.25,43.25,0,0,0,9.21-13.85l.06-.12a43,43,0,0,0-9.41-46.78Z"/></svg>
const Navbar = () => {
  return (
    <div className="nav">

        <div className="logo">

            
                <Link to="/dsd">
                <img id="logoImage" src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"></img>
                </Link>
                  
              
              </div>

              <Link to="/miphones" className="navlinks">MI PHONES</Link>
              <Link to="/redmiphones" className="navlinks">REDMI PHONES</Link>
              <Link to="/tv" className="navlinks">TV</Link>
              <Link to="/laptops" className="navlinks">LAPTOPS</Link>
              <Link to="/lifestyle" className="navlinks">FITNESS & LIFESTYLE</Link>
              <Link to="/home" className="navlinks">HOME</Link>
              <Link to="/audio" className="navlinks">RADIO</Link>
              <Link to="/acesssories" className="navlinks">ACCESSORIES</Link>

              <div className="searchbox">
                <input type="text" name="search" placeholder="Search Products" />
                {searchIcon}

              </div>
 



    </div>
  )
}

export default Navbar