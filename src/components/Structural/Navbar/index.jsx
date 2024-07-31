import "./style.css";
import Search from "../../Cards/SearchBox";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="title-link title">
          CodeMasters
        </Link>
        <Search />
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
