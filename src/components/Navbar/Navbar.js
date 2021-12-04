import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import ShoppingCart from '@material-ui/icons/ShoppingCart';

function Navbar() {
    return (
        <>
    <header className="header">
	    <h1 className="logo"><Link to="/">Sustainable Waves</Link></h1>
        <ul className="main-nav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <div className="basket-container">
            <ShoppingCart className="basket"/>
                    <div className="counter">
                    <medium className="cart_count">0</medium>
               </div>
        </div>
	</header> 

        </>
    )
}

export default Navbar;
