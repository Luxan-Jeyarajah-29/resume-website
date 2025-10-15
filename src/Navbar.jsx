import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
         <div className="nav-logo">
             <a href= "home">🚀</a>
              </div>

      <ul className="nav-links">

        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>

        <li><a href="#projects">PROJECT</a></li>
        <li><a href="#skills">SKILLS</a></li>


      </ul>
      <div className="nav-icons">
        <span className="icon">LJ</span>

              </div>
            </nav>
          );
        }

export default Navbar;
