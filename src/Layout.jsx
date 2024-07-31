import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Editor from "./pages/Editor";
import Navbar from "./components/Structural/Navbar";
import Footer from "./components/Structural/Footer";
import useAuth from "./components/hooks/useAuth";
import fetchAdminData from "./data/remote/admin/data";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  useEffect(() => {
    const fetchData = async () => {
      await fetchAdminData("hady");
    };

    fetchData();
  }, []);

  // const { loading, error } = useAuth();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Layout;
