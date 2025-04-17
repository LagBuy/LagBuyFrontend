import { useState } from "react";
// import mobile from "../../assets/LandingPageImg/mobile.png";
import heroImg1 from  "../../assets/LandingPageImg/hero-circle (1).png"
import heroImg2 from "../../assets/LandingPageImg/hero-circle (2).png";
import heroImg3 from "../../assets/LandingPageImg/hero-circle (3).png";
import heroImg4 from "../../assets/LandingPageImg/hero-circle (4).png";
import heroImg5 from "../../assets/LandingPageImg/hero-circle (5).png";
import heroImg6 from "../../assets/LandingPageImg/hero-circle (6).png";
import heroImg7 from "../../assets/LandingPageImg/hero-circle (7).png";

import { FooterModal } from "./Modal";
import {
  FaApple
} from "react-icons/fa";
import {

  IoLogoGooglePlaystore

} from "react-icons/io5";



const HeroSection = () => {
  const [inputValue, setInputValue] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };

    const closeModal = () => {
      setModalIsOpen(false);
    };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 
  const images = [
    { img: heroImg1 },
    { img: heroImg2 },
    { img: heroImg3 },
    { img: heroImg4 },
    { img: heroImg5 },
    { img: heroImg6 },
    { img: heroImg7 },
  ];

  

  return (
    <section className="bg-[#1A362B] relative h-screen flex flex-col lg:flex-row text-center lg:text-start">
      <div className="absolute bottom-0 bg-hero-bg bg-no-repeat bg-cover h-1/5 lg:h-1/2 w-full"></div>
      <div className="container z-20 mx-auto px-4  py-8 lg:py-12 ">
        <div className="text-white w-full  lg:w-1/2 space-y-5 md:space-y-3 lg:space-y-6 text-base md:text-4xl">

          <div>
          <h1 className="text-2xl sm:text-3xl">Bridging the gap <span className="text-[#2ecc71]">between buyers And sellers</span>  for a <span className="text-[#2ecc71]">Seamless shopping</span>  experience.</h1>

          <p className="text-sm md:text-base text-center mt-6 max-w-xl mx-auto text-gray-200 leading-relaxed tracking-wide">
            Discover the <span className="text-gradient font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-300">
            convenience and speed 
           </span> of our delivery process. Get your items delivered right to your doorstep in no time.
</p>
          </div>

          
        <div className="text-lg flex justify-center items-center py-2">
  <div className="flex flex-col lg:flex-row gap-5">
    <div
      className="flex items-center gap-3 bg-black text-white px-5 py-4 w-60 md:w-auto rounded-xl cursor-pointer 
                 hover:scale-105 hover:shadow-xl transition-all duration-300 border border-neutral-700"
      onClick={openModal}
    >
      <FaApple size={40} className="text-white" />
      <p className="text-sm md:text-base">
        Download on the <span className="font-bold text-white">App Store</span>
      </p>
    </div>

    <div
      className="flex items-center gap-3 bg-black text-white px-5 py-4 w-60 md:w-auto rounded-xl cursor-pointer 
                 hover:scale-105 hover:shadow-xl transition-all duration-300 border border-neutral-700"
      onClick={openModal}
    >
      <IoLogoGooglePlaystore size={40} className="text-green-400" />
      <p className="text-sm md:text-base">
        Download on the <span className="font-bold text-green-400">Google Play</span>
      </p>
    </div>
  </div>

  <FooterModal isOpen={modalIsOpen} onClose={closeModal} />
</div>


          <div className="flex items-center justify-center lg:items-start lg:justify-start">
             <div className="flex -space-x-5">
             {images.map((image, index) => (
             <img
             key={index}
             src={image.img}
             alt=""
             className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white animate-pulse"
             />
             ))}
            <div
            className="w-10 h-10 md:w-14 md:h-14 bg-white text-black text-xs md:text-sm font-semibold 
                 flex items-center justify-center rounded-full border-2 border-white animate-bounce"
            >
            500+
            </div>
            </div>
            </div>

          <p className="text-sm md:text-xl">
            Join our website to enjoy seamless order
          </p>

          <form action="" className="flex flex-col lg:flex-row gap-5 ">
            <div>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className=" py-2 px-4  text-base lg:text-xl w-full lg:w-96 border text-black placeholder:text-black  rounded-full focus:outline-none focus:ring-2 focus:ring-[#343434]"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#4CAF50] px-4 py-2 rounded-full text-lg w-52  "
              >
                Get started
              </button>
            </div>
          </form>
          {/* <img
            src= {mobile}
            alt=""
            className="hidden md:block absolute bottom-10 lg:right-24 md:right-44 right-20 lg:h-[28rem] md:h-[28rem] w-auto  "
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



