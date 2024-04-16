import React from 'react'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Work from '../components/Work';
import PricingCard from '../components/PricingCard';
const Project = () => {
  return (
    <div>
    <Navbar/>
    <Heroimg2 heading="PROJECTS." text="some of my most recent works " />
    <Work/>
    <PricingCard/>
    <Footer/>
    </div>
  )
}

export default Project
