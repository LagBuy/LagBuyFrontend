import { useState } from "react";
import { motion } from "framer-motion";
import phone from "../../assets/LandingPageImg/phone.jpg";
import heroImg1 from "../../assets/LandingPageImg/hero-circle (1).png";
import heroImg2 from "../../assets/LandingPageImg/hero-circle (2).png";
import heroImg3 from "../../assets/LandingPageImg/hero-circle (3).png";
import heroImg4 from "../../assets/LandingPageImg/hero-circle (4).png";
import heroImg5 from "../../assets/LandingPageImg/hero-circle (5).png";
import heroImg6 from "../../assets/LandingPageImg/hero-circle (6).png";
import heroImg7 from "../../assets/LandingPageImg/hero-circle (7).png";
import { TypeAnimation } from "react-type-animation";

import { FooterModal } from "./Modal";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

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
    <section className="bg-[#1A362B] relative min-h-screen flex flex-col lg:flex-row text-center lg:text-start overflow-x-hidden"
 
    >
      <div className="absolute bottom-0 bg-hero-bg bg-no-repeat bg-cover h-100 lg:h-1/2 w-full"></div>

      <div className="w-full mx-auto py-8 lg:py-4 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 z-20 lg:pt-16 flex flex-col lg:flex-row">
        {/* Left section */}
        <motion.div
          className="text-white w-full lg:w-3/5 space-y-5 md:space-y-3 lg:space-y-6 text-base md:text-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="space-y-5 md:auto-y-3 lg:space-y-6 text-base md:text-4xl">
            <motion.h1
              className="text-2xl capitalize"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Making it easy for you to find{" "}
              <span className="text-[#2ecc71]">
                top-notch products and trusted services
              </span>, all in one place.
            </motion.h1>

            <motion.div
              className="text-sm md:text-base mt-6 text-gray-200 leading-relaxed tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  "Hey, is this bag available?",
                  2000,
                  "Yes! I can have it delivered today.",
                  2000,
                  "Delivery en route notification pops up",
                  2000,
                  "Your manicure appointment is scheduled for today at 3 PM.",
                  2000,
                  "Your lash extension appointment is confirmed for today at 2 PM.",
                  2000,
                  "See you soon for your service! We can’t wait to pamper you.",
                  2000,
                  "LagBuy has everything you need! Join today and experience convenience.",
                  2000,
                ]}
                repeat={Infinity}
                className="bg-gradient-to-r from-green-400 to-lime-300 text-lg text-black font-semibold p-1 rounded-lg shadow-md mt-6"
                style={{
                  wordBreak: "break-word",
                  display: "inline-block",
                  whiteSpace: "normal",
                }}
                typingSpeed={150}
                deleteSpeed={0}
                delay={1000}
                cursor={false}
                clearAll={true}
              />
            </motion.div>

            <motion.div
              className="text-lg flex justify-center items-center py-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex flex-col lg:flex-row gap-5">
                <div
                  className="flex items-center gap-3 bg-black text-white px-5 py-4 w-60 md:w-auto rounded-xl cursor-pointer 
                           hover:scale-105 hover:shadow-xl transition-all duration-300 border border-neutral-700"
                  onClick={openModal}
                >
                  <FaApple size={40} className="text-white" />
                  <p className="text-sm md:text-base">
                    Download on the{" "}
                    <span className="font-bold text-white">App Store</span>
                  </p>
                </div>

                <div
                  className="flex items-center gap-3 bg-black text-white px-5 py-4 w-60 md:w-auto rounded-xl cursor-pointer 
                           hover:scale-105 hover:shadow-xl transition-all duration-300 border border-neutral-700"
                  onClick={openModal}
                >
                  <IoLogoGooglePlaystore size={40} className="text-green-400" />
                  <p className="text-sm md:text-base">
                    Download on the{" "}
                    <span className="font-bold text-green-400">
                      Google Play
                    </span>
                  </p>
                </div>
              </div>

              <FooterModal isOpen={modalIsOpen} onClose={closeModal} />
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:items-start lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
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
            </motion.div>

            <p className="text-sm md:text-xl">
              Join our website to enjoy seamless order
            </p>
          </div>
        </motion.div>

        {/* Right section - Phone Image */}
        <motion.div
          className="hidden md:block absolute bottom-0 right-0 w-auto"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src={phone}
            alt="phone"
            className="lg:h-[35rem] md:h-[26rem] w-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
