import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";  
import Pricing from "./components/Pricing"; 
import "./main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import About from "./components/About";
import "./adaptive.css"

const App = () => {
let component
switch(window.location.pathname){
case "/":
    component = <Home />
    break
    case "/pricing":
      component= <Pricing/>
      break
      case "/about":
        component = <About/>
        break
   }
  return(
    <>
    <Navbar />
    {component}

    </>
   )
}


export default App

