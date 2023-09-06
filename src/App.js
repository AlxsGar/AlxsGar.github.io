import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Body/Home/Home";
import { Routes, Route} from "react-router-dom";
import Portfolio from "./Components/Body/Portfolio/Portfolio";
import Hobbies from "./Components/Body/Hobbies/Hobbies";
import About from "./Components/Body/AboutMe/About";
import Contact from "./Components/Body/Contact/Contact";

function App() {
  return (
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/hobbies" exact element={<Hobbies />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact/>}/>
        </Routes>
      </div>
  );
}

export default App;
