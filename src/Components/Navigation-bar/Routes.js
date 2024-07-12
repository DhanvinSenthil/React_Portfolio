import React from "react";
import "../../styles/App.css.js";
import Navbar from "./navconsts.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../About/About.js";
import Home from "../Home/Home.js";
import Contact from "../Contact/contact";
import Projects from "../Projects/project.js";
import { StyleToastContainer } from "../../styles/App.css.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <StyleToastContainer
        position="bottom-center"
        hideProgressBar={false}
        newestOnTop={false}
        autoClose={5000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
}

export default App;
