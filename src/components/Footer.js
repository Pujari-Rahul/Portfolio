import './Footerstyles.css'
import React from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
         <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>Pune,Maharastra</p>
                    <p>India</p>
                </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                9096220910</h4>
                
                </div>
                <div className='email'>
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
               rahulpujari012020@gmail.com</h4>
                </div>
                </div>   
         <div className='right'>
            <h4>About me</h4>
            <p>This is me Rahul Pujari.I enjoy discussing new projects and design challenges</p>
            <div className='social'>
              <Link to="https://www.instagram.com/_rp_4302/#"><FaInstagram size={20} style={{color:"#fff",marginRight:"1rem"}}/></Link>
            <Link to="https://github.com/Pujari-Rahul"> <FaGithub size={20} style={{color:"#fff",marginRight:"1rem"}}/></Link>
           <Link to="https://www.linkedin.com/in/pujari-rahul-366268279/"> <FaLinkedin size={20} style={{color:"#fff",marginRight:"1rem"}}/></Link>
           
            </div>
            
            </div>  
        </div>
      
    </div>
  )
}

export default Footer
