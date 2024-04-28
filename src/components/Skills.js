import React from 'react'
import './SkillStyle.css';
import skill1 from '../assets/html_5.svg';
import skill2 from '../assets/css_3.svg';
import skill3 from '../assets/bootstrap-5.svg';
import skill4 from '../assets/javascript-logo.svg';
import skill5 from '../assets/react.svg';
import skill6 from '../assets/mongodb-icon.svg';
import skill7 from '../assets/nodejs-icon.svg';
import skill8 from '../assets/expressjs.png';
const Skills = () => {
  return (
    <>
    <h1>SKILLS</h1>
  <div className='con'>
 <div className='s1'>
 <img src={skill1} alt='html'></img>
 <figcaption>HTML</figcaption>
 </div>
 <div className='s2'>
    <img src={skill2} alt='css'></img>
    <figcaption>CSS</figcaption>

 </div>
 <div className='s3'>
<img src={skill4} alt='js'></img>
<figcaption>JAVASCRIPT</figcaption>

 </div>
 <div className='s4'>
<img src={skill3} alt='boostrap'></img>
<figcaption>BOOTSTRAP</figcaption>

 </div>
 

  </div>
  <div className='con1'>
  <div className='s5'>
<img src={skill5} alt='react'></img>
<figcaption>REACT JS</figcaption>
</div>


<div className='s6'>
<img src={skill6} alt='mongo'></img>
<figcaption>MONGO DB</figcaption>

 </div>

 <div className='s7'>
<img src={skill7} alt='boostrap'></img>
<figcaption>NODE JS</figcaption>

 </div>

 <div className='s8'>
<img src={skill8} alt='boostrap'></img>
<figcaption>EXPRESS JS</figcaption>

 </div>


  </div>
  </>
  )
}

export default Skills