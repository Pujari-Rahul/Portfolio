import React from "react";
import './index.css';
import {Routes,Route} from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import Skill from "./routes/Skill";

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="skills" element={<Skill/>}/>
    <Route path="project" element={<Project/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
       
   
   </Routes>
   </>
  );
}

export default App;
