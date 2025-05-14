import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/LandingPageImg/logo.png";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuContentRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Dropdown for stage
  const StageDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedStage, setSelectedStage] = useState("");
    const dropdownRef = useRef(null);

    const handleSelect = (stage) => {
      setSelectedStage(stage);
      setIsOpen(false);

      if (stage === "Customers") {
        window.location.href = "https://shop.lagbuy.com";
      }
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const stageOptions = ["Customers", "Vendors", "Service Providers", "Riders"];

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white h-14 px-6 rounded-full shadow-md text-[#1A362B] font-medium flex items-center gap-2 hover:text-[#4CAF50] transition-all"
        >
          {selectedStage || "Sign In"}
          <span className="text-xl">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg py-2 z-50">
            {stageOptions.map((stage) => (
              <button
                key={stage}
                onClick={() => handleSelect(stage)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  selectedStage === stage ? "text-[#4CAF50] font-semibold" : "text-[#1A362B]"
                } hover:bg-gray-100`}
              >
                {stage}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <header
        className={`w-full font-Capriola sticky top-0 z-50 shadow-md transition-colors duration-300 ${
          isScrolled ? "bg-transparent/" : "bg-[#1A362B]"
        }`}
      >
        <div className="w-full lg:w-[90vw] mx-auto px-4 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <div className="w-40 h-12 lg:w-44 lg:h-14 bg-[#4CAF50] rounded-full flex items-center justify-center">
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Center Nav */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <nav className="bg-white px-6 py-3 rounded-full shadow-md h-14 flex items-center">
              <ul className="flex gap-x-8 text-sm lg:text-base text-[#1A362B] font-medium">
                <li><a href="#" onClick={closeMenu} className="hover:text-[#4CAF50]">Home</a></li>
                <li><a href="#Vendor" onClick={closeMenu} className="hover:text-[#4CAF50]">Company</a></li>
                <li><a href="/#" onClick={closeMenu} className="hover:text-[#4CAF50]">FAQs</a></li>
                <li><a href="#Contact-Us" onClick={closeMenu} className="hover:text-[#4CAF50]">Contact</a></li>
              </ul>
            </nav>
          </div>

          {/* Right Dropdown */}
          <div className="hidden md:flex">
            <StageDropdown />
          </div>

          {/* Mobile Hamburger */}
          <button onClick={toggleMenu} className="md:hidden z-50" ref={buttonRef}>
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
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobileOverlay"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 z-40 bg-[#000000] flex items-start justify-center pl-8 pt-20"
            >
              <div ref={menuContentRef} className="w-[90%] max-w-sm text-white">
                <nav>
                  <ul className="flex flex-col space-y-6 text-start text-lg font-medium">
                    <li className="flex items-center space-x-3">
                      <i className="fa fa-building text-yellow-400"></i>
                      <a href="#About-Us" onClick={closeMenu} className="hover:text-yellow-400">Company</a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>

                    <li className="flex items-center space-x-3">
                      <i className="fa fa-cogs text-blue-400"></i>
                      <a href="#" onClick={closeMenu} className="hover:text-blue-400">Vendors</a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>

                    <li className="flex items-center space-x-3">
                      <i className="fa fa-bicycle text-red-400"></i>
                      <a href="#" onClick={closeMenu} className="hover:text-red-400">Riders</a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>

                    <li className="flex items-center space-x-3">
                      <i className="fa fa-users text-teal-400"></i>
                      <a href="https://shop.lagbuy.com" onClick={closeMenu} className="hover:text-teal-400">Customers</a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>

                    <li className="flex items-center space-x-3">
                      <i className="fa fa-hands-helping text-purple-400"></i>
                      <a href="#" onClick={closeMenu} className="hover:text-purple-400">Service provider</a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>

                    <li className="flex items-center space-x-3">
                      <i className="fa fa-envelope text-orange-400"></i>
                      <a href="#" onClick={closeMenu} className="hover:text-orange-400">Contact</a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>

                    <li className="flex items-center space-x-3">
                      <i className="fab fa-instagram text-pink-500"></i>
                      <a href="https://www.instagram.com/lagbuy_official" onClick={closeMenu} className="hover:text-pink-500">Instagram</a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>

                    <li className="flex items-center space-x-3">
                      <i className="fab fa-telegram-plane text-teal-500"></i>
                      <a href="https://t.me/+GvfwUvSETlphMWFk" onClick={closeMenu} className="hover:text-teal-500">Telegram</a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>

                    <li className="flex items-center space-x-3">
                      <i className="fab fa-facebook-f text-blue-600"></i>
                      <a href="#" onClick={closeMenu} className="hover:text-blue-600">Facebook</a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>
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
