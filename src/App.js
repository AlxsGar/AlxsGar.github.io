import "./App.css";
import React, { useRef } from "react";
import Navbar from "./Components/Navigation/Navbar";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

import css from "./Assets/css.png";
import flutter from "./Assets/flutter.png";
import gh from "./Assets/gh.png";
import html from "./Assets/html.png";
import java from "./Assets/java.png";
import js from "./Assets/js.png";
import mongo from "./Assets/mongo.png";
import mysql from "./Assets/mysql.png";
import php from "./Assets/php.png";
import react from "./Assets/react.png";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const icons = [
    {
      name: "HTML",
      icon: html,
      years: 5,
    },
    {
      name: "CSS",
      icon: css,
      years: 5,
    },
    {
      name: "Javascript",
      icon: js,
      years: 4,
    },
    {
      name: "React.Js",
      icon: react,
      years: 3,
    },
    {
      name: "Flutter",
      icon: flutter,
      years: 1,
    },
    {
      name: "Github",
      icon: gh,
      years: 2,
    },
    {
      name: "Java",
      icon: java,
      years: 3,
    },
    {
      name: "MongoDB",
      icon: mongo,
      years: 1,
    },
    {
      name: "MYSQL",
      icon: mysql,
      years: 4,
    },
    {
      name: "PHP",
      icon: php,
      years: 4,
    },
  ];

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null)

  const handleScroll = (toScroll) => {
    if(toScroll === 'aboutRef'){
      aboutRef.current?.scrollIntoView({behavior: 'smooth'})
    }else if(toScroll === 'projectsRef'){
      projectsRef.current?.scrollIntoView({behavior: 'smooth'})
    }else if(toScroll === 'skillsRef'){
      skillsRef.current?.scrollIntoView({behavior: 'smooth'})
    }else if(toScroll === 'contactRef'){
      contactRef.current?.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <React.Fragment>
      <Navbar onClick={handleScroll}/>
      <Landing icons={icons} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} icons={icons} />
      <Skills ref={skillsRef} icons={icons} />
      <Contact ref={contactRef}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
