import React from 'react'
import HeroSection from './HeroSection'
import WhatToDoWithLadbuySection from './WhatToDoWithLadbuySection'
import AboutUs from './AboutUs'
import Service from './Service'
import Explore from './Explore'
import Process from './Process'
import Customer from './Customer'
import TermAndCondition from './TermAndCondition'
import Vendor from './Vendor'
import ContactUs from './ContactUs'
import MessageUs from './MessageUs'
import Footer from '../../components/Shared/Footer'


const LandingPage = () => {
  return (
    <div className='min-h-screen'>
        <HeroSection/>
        <WhatToDoWithLadbuySection/>
        <AboutUs/>
        <Service/>
        <Explore/>
        <Process/>
        <Customer/>
        <TermAndCondition/>
        <Vendor/>
  
        <ContactUs/>
        <MessageUs/>
        <Footer/>
    </div>
  )
}

export default LandingPage