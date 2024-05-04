import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Tools from "./components/Tools";
import { MyContext } from "./MyContext.js";

function App() {
  return (
    <div>
      <MyContext.Provider>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Tools />
        <Contact />
        <SocialLinks />
      </MyContext.Provider>
    </div>
  );
}

export default App;
