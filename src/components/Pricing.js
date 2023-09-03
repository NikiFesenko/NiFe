import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

const Pricing = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className="Pricing">
            <h1 data-AOS="fade-down" data-aos-duration="1000">Pricing</h1>
        </div>
    )
}

export default Pricing