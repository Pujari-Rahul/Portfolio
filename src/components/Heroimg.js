import "./Heroimgstyle.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
      <img className="into-img" src={IntroImg} alt="IntroImg"/>

        </div>
        <div className="content">
            <p>HI ,I'M RAHUL PUJARI</p>
         <h1>React Developer.</h1>
         <div>
            <Link to="https://drive.google.com/file/d/1RRkbw_PZTIKHIo5A0D-bz3BYL31GNUdZ/view?usp=sharing" className="btn" target="_blank">Resume</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
         </div>
        </div>
      
    </div>
  )
}

export default Heroimg
