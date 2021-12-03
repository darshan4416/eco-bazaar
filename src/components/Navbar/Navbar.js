import React from 'react';
import "./navbar.css";

function Navbar() {
    return (
        <>
    <header className="header">
	    <h1 className="logo"><a href="#">Sustainable Waves</a></h1>
        <ul className="main-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">About</a></li>
        </ul>
	</header> 

        </>
    )
}

export default Navbar;
