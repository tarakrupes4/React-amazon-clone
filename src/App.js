import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Home1 from "./Home1";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout1 from "./Checkout1";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
