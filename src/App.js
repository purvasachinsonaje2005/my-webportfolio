import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
