import React, {useState} from "react";
import { ReactTyped } from "react-typed";
import holder from "../../assets/LandingPageImg/hero-phone-holder.png";
import mobile from "../../assets/LandingPageImg/hero-mobile.png";
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
          <p className="">Bridging the tap between</p>
          {/* ReactTyped components in a column */}
          <div className="lg:space-y-2 flex flex-col">
            <ReactTyped
              loop={true}
              backSpeed={200}
              typeSpeed={200}
              className="text-[#FCE600]"
              strings={[
                "Buyers and sellers on for a \n Seamless shopping \n Experience",
              ]}
              showCursor={false}
            />
          </div>

          <p className="text-sm md:text-xl text-center mt-6">
            Discover the convenience and speed of our delivery process. Get your
            items delivered right to your doorstep in no time.
          </p>
          <div className=" text-lg flex justify-center items-center ">
            <div className="flex-col lg:flex lg:flex-row gap-3 ">
              <div
                className="flex items-center gap-2 bg-black p-3 w-60 md:w-auto rounded-lg cursor-pointer"
                onClick={openModal}
              >
                <FaApple size={40} />
                <p>
                  Download on the <span className="font-bold">App Store</span>
                </p>
              </div>
              <div
                className="mt-3 lg:mt-0 flex items-center gap-2  bg-black p-3 w-60  md:w-auto rounded-lg cursor-pointer"
                onClick={openModal}
              >
                <IoLogoGooglePlaystore size={45} />
                <p>
                  Download on the <span className="font-bold">Google Play</span>
                </p>
              </div>
            </div>
            <FooterModal isOpen={modalIsOpen} onClose={closeModal} />
          </div>

          <div className=" flex items-center justify-center lg:items-start lg:justify-start">
            {images.map((image) => (
              <img
                src={image.img}
                alt=""
                className="w-10 h-10 md:w-14 md:h-14"
              />
            ))}
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
                className=" py-2 px-4  text-base lg:text-xl w-full lg:w-96 border text-black placeholder:text-black  rounded-full focus:outline-none focus:ring-2 focus:ring-black"
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
        </div>

        <div className="">
          <img
            src={holder}
            alt="Holder Image"
            className=" hidden md:block absolute bottom-0 md:right-44 lg:right-24 right-20 md:w-[21rem] lg:w-[30rem]"
          />
          <img
            src={mobile}
            alt=""
            className="hidden md:block absolute bottom-0 lg:right-24 md:right-44 right-20 lg:h-[44rem] md:h-[28rem] w-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
