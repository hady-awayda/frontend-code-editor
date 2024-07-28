import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CodeEditor from "./pages/CodeEditor";
import Admin from "./pages/Admin";
import { Provider } from "react-redux";
import store from "./State/Stores/store";
import { Navbar, Footer } from "./src/components/Structural";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recipe/:id" element={<CodeEditor />} />
          <Route path="/create-recipe" element={<Admin />} />
        </Routes>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
