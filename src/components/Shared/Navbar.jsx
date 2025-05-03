import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/LandingPageImg/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuContentRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect click outside menu content to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuContentRef.current &&
        !menuContentRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <header
        className={`w-full font-Capriola sticky top-0 z-50 shadow-md transition-colors duration-300 ${
          isScrolled ? "bg-transparent/" : "bg-[#1A362B]"
        }`}
      >
        <div className="w-full lg:w-[85vw] mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="w-40 h-12 lg:w-44 lg:h-14 bg-[#4CAF50] rounded-full flex items-center justify-center">
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50"
            ref={buttonRef}
          >
            <div className="space-y-1.5">
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className="block w-8 h-1 bg-[#4CAF50] rounded origin-left"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="block w-6 h-1 bg-[#4CAF50] rounded"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className="block w-8 h-1 bg-[#4CAF50] rounded origin-left"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 bg-white px-6 py-3 rounded-full shadow-md">
            <nav>
              <ul className="flex gap-x-8 text-center text-sm lg:text-base text-[#1A362B] font-medium">
                <li>
                  <a href="#" onClick={closeMenu} className="hover:text-[#4CAF50] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#Vendor" onClick={closeMenu} className="hover:text-[#4CAF50] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#About-Us" onClick={closeMenu} className="hover:text-[#4CAF50] transition-colors">
                    Company
                  </a>
                </li>
                <li>
                  <a href="/#" onClick={closeMenu} className="hover:text-[#4CAF50] transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#Contact-Us" onClick={closeMenu} className="hover:text-[#4CAF50] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <button className="ml-6 bg-[#4CAF50] hover:bg-[#3da445] text-white px-6 py-2 rounded-full shadow-sm transition-all duration-200">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobileOverlay"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 z-40 bg-[#0A1A13] flex items-start justify-center pt-20"
            >
              <div
                ref={menuContentRef}
                className="w-[90%] max-w-sm text-white"
              >
                <nav>
                  <ul className="flex flex-col space-y-6 text-center text-lg font-medium">
                    <li><a href="#About-Us" onClick={closeMenu} className="hover:text-green-400">About Us</a></li>
                    <li><a href="#" onClick={closeMenu} className="hover:text-green-400">Terms of Use</a></li>
                    <li><a href="#" onClick={closeMenu} className="hover:text-green-400">Privacy Policy</a></li>
                    <li><a href="#" onClick={closeMenu} className="hover:text-green-400">Vendor Registration</a></li>
                    <li><a href="#" onClick={closeMenu} className="hover:text-green-400">Vendor Login</a></li>
                    <li><a href="#" onClick={closeMenu} className="hover:text-green-400">Logistic Registration</a></li>
                    <li><a href="#" onClick={closeMenu} className="hover:text-green-400">Logistic Login</a></li>
                    <li><a href="#" onClick={closeMenu} className="hover:text-green-400">Service Provider Registration</a></li>
                    <li><a href="#" onClick={closeMenu} className="hover:text-green-400">Service Provider Login</a></li>
                    <li><button onClick={closeMenu} className="hover:text-green-400">Sign Up</button></li>
                    <li><button onClick={closeMenu} className="hover:text-green-400">FAQs</button></li> 
                    <li><button onClick={closeMenu} className="hover:text-green-400">Contact</button></li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
