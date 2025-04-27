import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/countries" element={<h1>Countries</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/services" element={<h1>Services</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
