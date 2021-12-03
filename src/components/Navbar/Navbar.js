import React from 'react';
import "./navbar.css";

function Navbar() {
    return (
        <>
    <header className="header">
	    <h1 className="logo"><a href="#">Flexbox</a></h1>
        <ul className="main-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
	</header> 

        </>
    )
}

export default Navbar;
