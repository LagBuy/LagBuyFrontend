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
import Navbar from '../../components/Shared/Navbar'



const LandingPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth">
      <Navbar />
      <HeroSection />
      <Vendor />
      <Explore />
      <AboutUs />
      <WhatToDoWithLadbuySection />
      <Service />
      <Process />
      <Customer />
      <TermAndCondition />
      <ContactUs />
      <MessageUs />
      <Footer />
    </div>
  );
}

export default LandingPage