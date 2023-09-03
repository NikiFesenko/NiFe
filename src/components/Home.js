import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
    <div>
    <h1 data-aos="fade-right" className="Home">Home</h1> 
    <img src="/logo192.png" alt=""/> 
    </div>      
    )
}

export default Home 