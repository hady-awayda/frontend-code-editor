import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Editor from "./pages/Editor";
import Admin from "./pages/Admin";
import Navbar from "./components/Layout";
import Footer from "./components/Layout/Footer";

// import { Provider } from "react-redux";
// import store from "./State/Stores/store";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
      {/* </Provider> */}
    </>
  );
}

export default App;
