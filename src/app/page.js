import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const page = () => {
  return (
    <div  id="home">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects /> 
      <Contact/>
      <Footer/>
    </div>
  );
};

export default page;
