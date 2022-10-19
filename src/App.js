// import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='contact'>Contact</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
