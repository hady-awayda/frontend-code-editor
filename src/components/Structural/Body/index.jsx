import "./style.css";
import Home from "../../../pages/Home";
import Login from "../../../pages/Login";
import Admin from "../../../pages/Admin";
import Editor from "../../../pages/Editor";
import UserPage from "../../../pages/User";
import Import from "../../../pages/Import";
import Profile from "../../../pages/Profile";
import Register from "../../../pages/Register";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useInitializeData from "../../../hooks/useInitializeData";

const Body = ({ user, conversations, sourceCodes }) => {
  useInitializeData(user, conversations, sourceCodes);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/import" element={<Import />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Body;
