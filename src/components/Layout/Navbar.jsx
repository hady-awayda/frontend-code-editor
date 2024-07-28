import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="home-link">
        <Link to="/">Home</Link>
      </div>
      <div className="links">
        <Link to="/admin">Admin</Link>
        <Link to="/editor">Editor</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
