import React from 'react'
import HeroSection from './HeroSection'
import WhatToDoWithLadbuySection from './WhatToDoWithLadbuySection'
import AboutUs from './AboutUs'
import Service from './Service'
import Explore from './Explore'
import Customer from './Customer'
// import Process from './Process'
// import TermAndCondition from './TermAndCondition'
import Vendor from './Vendor'
// import ContactUs from './ContactUs'
// import MessageUs from './MessageUs'
import Footer from '../../components/Shared/Footer'
import Navbar from '../../components/Shared/Navbar'
import FeaturedVendors from '../FeaturedVendors'
import BenefitSection from './BenefitSection'
import FAQs from './FAQs'



const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Vendor />
      <Service />
      <FeaturedVendors/>
      <Explore />
      <WhatToDoWithLadbuySection />
      <BenefitSection/>
      <FAQs/>
      <Customer />
      {/* <Process />
      <TermAndCondition /> */}
      {/* <ContactUs />
      <MessageUs /> */}
      <Footer />
    </div>
  );
}

export default LandingPage