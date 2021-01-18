import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <header className="Navbar">
      <div className="logo">
        <h1>MannaViewer</h1>
        <Link exact to="/" className="nav-link">
          Home
        </Link>
      </div>
    </header>
  );
}
export default Navbar;
