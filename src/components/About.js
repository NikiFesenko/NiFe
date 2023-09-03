import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div >
        <h1 data-aos="fade-down" data-aos-duration="500" className="About">About Us</h1>
        <h1 data-aos="fade-left" data-aos-duration="1000" className="square"></h1>
        <img data-aos="fade-up" data-aos-duration="1500" src="/1.jpg" alt="" className="robin"/>
        <div className="text-about" data-aos="fade-right" data-aos-duration="2000">
        <p><span>Dogs, often referred to as "man's best friend," have</span><span>shared a special bond with humans for thousands of years.</span></p>
        </div>
       </div>
    )
}

export default About