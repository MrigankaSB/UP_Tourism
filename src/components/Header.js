// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "/home/mriganka/projects/up-tourism/src/styles/Header.css";
import logo from "/home/mriganka/projects/up-tourism/src/UP.webp"; // Import the logo image

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="UP Tourism Logo" className="logo" />{" "}
        {/* Logo image */}
        <h1>UP Tourism</h1>
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/itinerary">Itinerary Planner</Link>
        <Link to="/feedback">Feedback</Link>
      </nav>
    </header>
  );
}

export default Header;
