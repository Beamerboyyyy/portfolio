import React from "react";
import Navbar from "./components/Navbar";
import Box from "./components/Box";
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import About from "./components/About"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import ProgrammingLang from "./components/ProgrammingLang";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Box/>
      <Hero/>
      <About/>
      <Skills/>
      <ProgrammingLang/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
