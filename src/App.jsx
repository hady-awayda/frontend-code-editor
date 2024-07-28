import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipe/:id" element={<CodeEditor />} />
        <Route path="/create-recipe" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
