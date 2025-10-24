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
import { Sparkles, Zap, Star, Shield, Truck } from "lucide-react";

const HeroSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleInputChange = (event) => setInputValue(event.target.value);

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
    <section
      className="relative min-h-screen flex flex-col lg:flex-row text-center lg:text-start overflow-hidden"
      id="HeroSection"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0A2F1C 30%, #1A4D2E 70%, #000000 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-3xl animate-pulse opacity-20" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400 to-yellow-300 rounded-full blur-3xl animate-pulse opacity-20 delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full blur-3xl animate-pulse opacity-20 delay-500" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: 0,
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative w-full mx-auto py-8 lg:py-4 px-4 sm:px-6 md:px-10 lg:px-20 z-20 lg:pt-16 flex flex-col lg:flex-row items-center">
        {/* Left section - Enhanced Content */}
        <motion.div
          className="text-white w-full lg:w-1/2 space-y-6 md:space-y-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/30 to-yellow-500/30 backdrop-blur-md border border-white/20 rounded-full px-6 py-3"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold text-white">Will soon exceed 500,000+ happy customers</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-white">Stop Shopping,</span>
            <motion.span
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 bg-[length:200%_auto]"
            >
              Start Experiencing
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Quality & premium products from trusted vendors, delivered at{" "}
            <span className="text-green-400 font-bold">warp speed</span> with a{" "}
            <span className="text-yellow-400 font-bold">smile guarantee</span>.
          </motion.p>

          {/* Feature Icons */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-green-400">
              <Zap className="w-6 h-6" />
              <span className="text-sm font-semibold">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-3 text-yellow-400">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-semibold">100% Verified</span>
            </div>
            <div className="flex items-center gap-3 text-green-300">
              <Star className="w-6 h-6" />
              <span className="text-sm font-semibold">Premium Quality</span>
            </div>
            <div className="flex items-center gap-3 text-yellow-300">
              <Truck className="w-6 h-6" />
              <span className="text-sm font-semibold">Cheap Delivery</span>
            </div>
          </motion.div>

          {/* Animated Type Text */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                "Looking for the perfect Product? We've got it ready for you!",
                2500,
                "Need it delivered today? No problem, LagBuy got your back.",
                2500,
                "From groceries to gadgets, our vendors have everything you need.",
                2500,
                "Join thousands of happy customers enjoying fast, reliable deliveries.",
                2500,
              ]}
              repeat={Infinity}
              className="text-lg md:text-xl font-semibold bg-gradient-to-r from-green-500 to-yellow-500 text-white p-4 rounded-2xl shadow-2xl inline-block"
              style={{
                wordBreak: "break-word",
                display: "inline-block",
                whiteSpace: "normal",
                background: 'linear-gradient(45deg, #10B981, #F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              typingSpeed={50}
              deleteSpeed={30}
              cursor={true}
            />
          </motion.div>

          {/* App Download Buttons - Enhanced */}
          <motion.div
            className="flex flex-col lg:flex-row gap-6 justify-center lg:justify-start items-center mt-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div
              className="flex items-center gap-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-2xl cursor-pointer border-2 border-white/20 shadow-2xl shadow-green-500/25"
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(45deg, #059669, #047857)",
                boxShadow: "0 20px 40px rgba(5, 150, 105, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
            >
              <FaApple size={32} className="text-white" />
              <div className="text-left">
                <p className="text-xs opacity-90">Download on the</p>
                <p className="font-bold text-lg">App Store</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-2xl cursor-pointer border-2 border-white/20 shadow-2xl shadow-yellow-500/25"
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(45deg, #F59E0B, #D97706)",
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
            >
              <IoLogoGooglePlaystore size={32} className="text-black" />
              <div className="text-left">
                <p className="text-xs opacity-90">Get it on</p>
                <p className="font-bold text-lg">Google Play</p>
              </div>
            </motion.div>
          </motion.div>

          {/* User Avatars & Social Proof */}
          <motion.div
            className="flex flex-col items-center lg:items-start gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="flex -space-x-4">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image.img}
                  alt="Happy customer"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-green-500 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                />
              ))}
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-yellow-500 text-black text-sm font-black flex items-center justify-center rounded-full border-4 border-white shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.3 }}
                whileHover={{ scale: 1.2 }}
              >
                500+
              </motion.div>
            </div>
            <p className="text-lg md:text-xl text-green-300 font-semibold">
              Join the vendors and many happy customers
            </p>
          </motion.div>
        </motion.div>

        {/* Right section - Enhanced Phone Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-400 rounded-3xl blur-3xl opacity-30 animate-pulse" />
            
            {/* Phone Image */}
            <motion.img
              src={phone}
              alt="LagBuy App"
              className="relative z-10 lg:h-[35rem] md:h-[28rem] h-[20rem] w-auto drop-shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-2xl shadow-2xl"
              animate={{ 
                y: [-10, 10, -10],
                rotate: [-5, 5, -5]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <span className="font-bold text-sm">⚡ Live Tracking</span>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-2xl shadow-2xl"
              animate={{ 
                y: [10, -10, 10],
                rotate: [5, -5, 5]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <span className="font-bold text-sm">🎯 Instant Delivery</span>
            </motion.div>
          </div>
        </motion.div>

        <FooterModal isOpen={modalIsOpen} onClose={closeModal} />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-green-400 text-sm font-semibold">Discover the Magic</p>
          <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;