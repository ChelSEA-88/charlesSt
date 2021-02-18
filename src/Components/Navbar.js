import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Charles St. Co-Work!
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"}>
                About 
              </Link>
            </li>
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;

