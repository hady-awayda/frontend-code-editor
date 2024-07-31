import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="title-link title">
          CodeMasters
        </Link>
        <div className="links">
          <Link to="/admin">Admin</Link>
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
