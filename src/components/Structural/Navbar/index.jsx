import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../../Cards/SearchBox";
// import { useSelector } from "react-redux";

const Navbar = () => {
  const [role, setRole] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("jwtData"));
    const data = storage?.data;

    setRole(data?.role);
    setName(data?.name);
  }, []);

  // const user = useSelector((state) => state.auth.userData);

  const handleLogout = () => {
    localStorage.removeItem("jwtData");
    setRole(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="title-link title">
          CodeMasters
        </Link>
        <Search />
        <div className="links">
          <Link to="/editor">Editor</Link>
          <Link to={`${role === "admin" ? "/admin" : "/profile"}`}>
            Profile
          </Link>
          {role === "admin" ? (
            "Welcome, Admin!"
          ) : role === "user" ? (
            <>{name && `Welcome, ${name}!`}</>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          {role && (
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
