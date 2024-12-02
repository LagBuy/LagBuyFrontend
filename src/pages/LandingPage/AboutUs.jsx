import React from 'react'
import aboutUs from "../../assets/LandingPageImg/AboutUs.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const AboutUs = () => {
  return (
    <section
      className="container mx-auto flex flex-col-reverse lg:flex-row gap-9 px-5 py-8 lg:py-16"
      id="About-Us"
    >
      <div className="lg:w-1/2 w-full">
        <h1 className="text-xl lg:text-2xl font-semibold mb-6">ABOUT US</h1>
        <p className="text-base md:text-xl  ">
          Welcome to Lagbuy, we are passionate about providing-high quality
          products that enhances your life style. Our journey begins with a
          vision to create a seamless shopping experience for our users,
          offering a wide range of products to meet your needs. We believe in
          transparency and customer satisfaction.that is why we strive to
          deliver exceptional service and top-notch products every time you shop
          with us.
        </p>
      </div>
      <div className="lg:w-1/2 w-full flex items-center">
        <LazyLoadImage
          src={aboutUs}
          alt="aboutUs"
          className="w-full h-auto rounded-2xl"
          effect="blur"
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
        />
      </div>
    </section>
  );
}

export default AboutUs