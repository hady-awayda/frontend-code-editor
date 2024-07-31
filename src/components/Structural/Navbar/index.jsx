import { Link } from "react-router-dom";
import "./style.css";

import { useEffect, useState } from "react";

const Navbar = () => {
  // console.log(users);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="title-link title">
          CodeMasters
        </Link>
        <div className="links">
          <Link to="/editor">Editor</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
