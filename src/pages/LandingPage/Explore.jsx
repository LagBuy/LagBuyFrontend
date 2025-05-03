import React from 'react'
import Riders from "../../assets/LandingPageImg/Riders.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AboutUs = () => {
  return (
    <section
      className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-8 lg:py-16"
      id="About-Us"
      style={{ marginTop: '-40px' }} // Reduced gap by applying negative margin-top

    >
      <div className="flex flex-col lg:flex-row w-full h-auto rounded-xl overflow-hidden"> {/* Border radius applied here */}
        {/* Text Side */}
        <div className="w-full lg:w-1/2 bg-[rgba(49,159,67,0.2)] flex flex-col items-start justify-center p-8 space-y-6">
          <h1 className="text-2xl font-semibold mb-2">Our Delivery <br /> Services</h1>
          <p className="text-base text-[#828282]">
          LagBuy offers smooth, on-time delivery services, bridging the gap between buyers, sellers, and riders.          </p>
          <button className="bg-[#319F43] text-white font-semibold py-2 px-6 rounded-3xl mt-4 lg:mt-8">
            Get Started
          </button>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 h-full">
          <LazyLoadImage
            src={Riders}
            alt="aboutUs"
            className="w-full h-full object-cover"
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: "1s" },
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
