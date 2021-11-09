import React from "react";
import "./App.css";
import Login from "./Login";
import Home1 from "./Home1";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout1 from "./Checkout1";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home1 />} />
          <Route path="/checkout" element={<Checkout1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
