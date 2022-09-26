import React from "react";
import './App.css'

function Navbar() {
    return(
        <>
        <div className="nav-container">
        <div className="navbarBrand"></div>
        <div className="navbar-parent">
            <a href='/'id="navbar-item">Our Services</a>
            <a href="/" id="navbar-item">Why Us</a>
            <a href="/" id="navbar-item">Testimonial</a>
            <a href="/" id="navbar-item">FAQ</a>
        </div>
        </div>
        </>
    )
}

export default Navbar;