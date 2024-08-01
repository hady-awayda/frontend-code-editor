import "./style.css";
import Search from "../../Cards/SearchBox";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const Navbar = () => {
  const storage = JSON.parse(localStorage.getItem("jwtData"));
  const data = storage?.data;
  // const user = useSelector((state) => state.auth.userData);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="title-link title">
          CodeMasters
        </Link>
        <Search />
        <div className="links">
          <Link to="/editor">Editor</Link>
          <Link to={`${data?.role === "admin" ? "/admin" : "/profile"}`}>
            Profile
          </Link>
          {data?.role === "admin" ? (
            "Welcome, Admin!"
          ) : data?.role === "user" ? (
            "Welcome, User!"
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          {data?.role && (
            <button onClick={() => localStorage.clear()}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
