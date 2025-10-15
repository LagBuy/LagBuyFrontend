import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/LandingPageImg/logo.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTelegram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false); // 👈🏽 new state
  const menuContentRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Show popup for a few seconds
  const handleComingSoon = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 2500);
  };

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

  // Smooth scroll handler for hash links
  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
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
        window.location.href = "https://shop.lagbuy.com/login";
      }
      if (stage === "Vendors") {
        window.location.href = "https://vendors.lagbuy.com/login";
      }
      if (stage === "Riders") {
        handleComingSoon(); // 👈🏽 Show popup instead of navigating
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

    const stageOptions = ["Customers", "Vendors", "Riders"];

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
                  selectedStage === stage
                    ? "text-[#4CAF50] font-semibold"
                    : "text-[#1A362B]"
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
          isScrolled ? "bg-transparent" : "bg-[#1A362B]"
        }`}
      >
        <div className="w-full lg:w-[90vw] mx-auto px-4 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <div className="w-40 h-12 lg:w-44 lg:h-14 bg-[#4CAF50] rounded-full flex items-center justify-center">
            <button onClick={() => handleScrollTo("HeroSection")}>
              <img src={logo} alt="Logo" className="h-8" />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <nav className="bg-white px-6 py-3 rounded-full shadow-md h-14 flex items-center">
              <ul className="flex gap-x-8 text-sm lg:text-base text-[#1A362B] font-medium">
                <li>
                  <button onClick={() => handleScrollTo("HeroSection")} className="hover:text-[#4CAF50]">Home</button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("AboutUs")} className="hover:text-[#4CAF50]">About Us</button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("FAQs")} className="hover:text-[#4CAF50]">FAQs</button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("ContactUs")} className="hover:text-[#4CAF50]">Contact</button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Dropdown */}
          <div className="hidden md:flex">
            <StageDropdown />
          </div>

          {/* Mobile Hamburger */}
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
                      <a
                        href="#About-Us"
                        onClick={closeMenu}
                        className="hover:text-yellow-400"
                      >
                        Company
                      </a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>

                    <li className="flex items-center space-x-3">
                      <i className="fa fa-cogs text-blue-400"></i>
                      <a
                        href="https://vendors.lagbuy.com/login"
                        onClick={closeMenu}
                        className="hover:text-blue-400"
                      >
                        Vendors
                      </a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>

                    <li className="flex items-center space-x-3">
                      <i className="fa fa-bicycle text-red-400"></i>
                      <button
                        onClick={() => {
                          closeMenu();
                          handleComingSoon(); // 👈🏽 show popup on mobile
                        }}
                        className="hover:text-red-400 text-left"
                      >
                        Riders
                      </button>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>

                    <li className="flex items-center space-x-3">
                      <i className="fa fa-users text-teal-400"></i>
                      <a
                        href="https://shop.lagbuy.com/login"
                        onClick={closeMenu}
                        className="hover:text-teal-400"
                      >
                        Customers
                      </a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>

                    <li className="flex items-center space-x-3">
                      <i className="fa fa-envelope text-orange-400"></i>
                      <a
                        href="#ContactUs"
                        onClick={closeMenu}
                        className="hover:text-orange-400"
                      >
                        Contact
                      </a>
                    </li>
                    <div className="border-t border-gray-800 mt-4"></div>
                  </ul>
                </nav>

                {/* Social Icons */}
                <div className="flex gap-6 mt-6">
                  <a
                    href="https://www.instagram.com/lagbuy_official"
                    className="transition-transform transform hover:scale-110"
                  >
                    <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1 rounded-lg">
                      <FaInstagram size={22} className="text-white" />
                    </div>
                  </a>

                  <a
                    href="https://t.me/+GvfwUvSETlphMWFk"
                    className="transition-transform transform hover:scale-110"
                  >
                    <FaTelegram size={22} className="text-[#0088cc]" />
                  </a>

                  <a
                    href="#"
                    className="transition-transform transform hover:scale-110"
                  >
                    <FaFacebook size={22} className="text-[#1877F2]" />
                  </a>

                  <a
                    href="https://x.com/lagbuy_official?s=21"
                    className="transition-transform transform hover:scale-110"
                  >
                    <FaXTwitter size={22} className="text-white" />
                  </a>

                  <a
                    href="https://www.tiktok.com/@lagbuy_official?_t=ZS-8zdVH8JdHCa&_r=1"
                    className="transition-transform transform hover:scale-110"
                  >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <FaTiktok
                        size={22}
                        className="absolute text-[#69C9D0] -translate-x-0.5 translate-y-0.5"
                      />
                      <FaTiktok
                        size={22}
                        className="absolute text-[#EE1D52] translate-x-0.5 -translate-y-0.5"
                      />
                      <FaTiktok size={22} className="text-white relative" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 👇🏽 Coming Soon Popup */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-[#1A362B] text-white px-6 py-3 rounded-full shadow-lg z-[9999] font-medium"
          >
            🚴‍♂️ Riders Page Coming Soon
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
