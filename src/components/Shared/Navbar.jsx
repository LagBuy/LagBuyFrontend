import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/LandingPageImg/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // adjust this value to control when transparency kicks in
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
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
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
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
                  <a href="#" onClick={closeMenu} className="hover:text-[#4CAF50] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#About-Us" onClick={closeMenu} className="hover:text-[#4CAF50] transition-colors">
                    Company
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobileMenu"
              ref={menuRef}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-20 right-4 w-72 bg-white shadow-lg rounded-lg px-7 py-5 z-40 text-lg font-semibold"
            >
              <nav>
                <ul className="flex flex-col space-y-2">
                  <li><a href="#About-Us" onClick={closeMenu} className="hover:text-green-500">About Us</a></li>
                  <li><a href="#Contact-Us" onClick={closeMenu} className="hover:text-green-500">Contact Us</a></li>
                  <li><a href="#" onClick={closeMenu} className="hover:text-green-500">Terms of Use</a></li>
                  <li><a href="#" onClick={closeMenu} className="hover:text-green-500">Privacy Policy</a></li>
                  <li className="border-gray-200 border-[0.5px]"></li>
                  <li><a href="#" onClick={closeMenu} className="hover:text-green-500">Vendor Registration</a></li>
                  <li><a href="#" onClick={closeMenu} className="hover:text-green-500">Vendor Login</a></li>
                  <li className="border-gray-200 border-[0.5px]"></li>
                  <li><a href="#" onClick={closeMenu} className="hover:text-green-500">Logistic Registration</a></li>
                  <li><a href="#" onClick={closeMenu} className="hover:text-green-500">Logistic Login</a></li>
                  <li><button onClick={closeMenu} className="text-gray-600 hover:text-green-500">Sign Up</button></li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
