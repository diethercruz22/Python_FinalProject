// Header.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "../styles/Header.css"; // Import the CSS file from styles folder


function Header() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <header className="header">
      <button className="home-button" style={{margin:"10px"}}onClick={() => navigate("/")}>
        Home
      </button>
    </header>
  );
}

export default Header;
