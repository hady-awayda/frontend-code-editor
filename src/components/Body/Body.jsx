import "./style.css";

import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Admin from "../../pages/Admin";
import Editor from "../../pages/Editor";
import Profile from "../../pages/Profile";
import Register from "../../pages/Register";
import Navbar from "../../components/Structural/Navbar";
import Footer from "../../components/Structural/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Body = ({ user, conversations, sourceCodes }) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={<Profile {...{ user, conversations }} />}
        />
        <Route path="/editor" element={<Editor {...{ sourceCodes }} />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Body;
