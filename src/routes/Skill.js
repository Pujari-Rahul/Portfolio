import React from 'react'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'

const Skill = () => {
  return (
   <>
   <Navbar/>
   <Heroimg2 heading="SKILLS." text="my Skills Are... " />
   <Skills/>
   <Footer/>
   </>
  )
}

export default Skill