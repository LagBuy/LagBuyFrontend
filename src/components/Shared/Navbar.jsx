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
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const menuContentRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Enhanced popup with better animation
  const handleComingSoon = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 3000);
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
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 300 },
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

  // Enhanced Dropdown for stage
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
        handleComingSoon();
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

    const stageOptions = [
      { name: "Customers", icon: "👥", color: "from-green-500 to-green-600" },
      { name: "Vendors", icon: "🏪", color: "from-yellow-500 to-yellow-600" },
      { name: "Riders", icon: "🚴", color: "from-green-400 to-yellow-400" }
    ];

    return (
      <div className="relative" ref={dropdownRef}>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-green-500 to-yellow-500 h-14 px-8 rounded-2xl shadow-2xl text-black font-bold flex items-center gap-3 hover:from-green-400 hover:to-yellow-400 transition-all duration-300 border-2 border-white/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-lg">🚀</span>
          {selectedStage || "Get Started"}
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg"
          >
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-3 w-60 bg-gradient-to-br from-black to-gray-900 rounded-2xl shadow-2xl py-3 z-50 border-2 border-green-500/30 backdrop-blur-md"
            >
              {stageOptions.map((stage, index) => (
                <motion.button
                  key={stage.name}
                  onClick={() => handleSelect(stage.name)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block w-full text-left px-5 py-3 text-sm font-semibold m-2 rounded-xl bg-gradient-to-r ${stage.color} text-black hover:scale-105 transition-all duration-300 border-2 border-white/30`}
                >
                  <span className="text-lg mr-3">{stage.icon}</span>
                  {stage.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <header
        className={`w-full font-Capriola sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-gradient-to-r from-black via-green-900 to-black shadow-2xl py-2" 
            : "bg-gradient-to-r from-black via-[#1A362B] to-black py-4"
        }`}
      >
        <div className="w-full lg:w-[90vw] mx-auto px-4 flex items-center justify-between relative">
          {/* Enhanced Logo */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-44 h-14 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20">
              <button onClick={() => handleScrollTo("HeroSection")}>
                <img src={logo} alt="Logo" className="h-8 drop-shadow-lg" />
              </button>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl blur-lg opacity-50 -z-10 animate-pulse" />
          </motion.div>

          {/* Enhanced Desktop Nav */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <nav className="bg-gradient-to-r from-green-500/20 to-yellow-500/20 backdrop-blur-md px-8 py-3 rounded-2xl shadow-2xl h-14 flex items-center border-2 border-white/10">
              <ul className="flex gap-x-10 text-base font-bold">
                {[
                  { name: "Home", id: "HeroSection" },
                  { name: "About Us", id: "AboutUs" },
                  { name: "FAQs", id: "FAQs" },
                  { name: "Contact", id: "ContactUs" }
                ].map((item) => (
                  <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <button 
                      onClick={() => handleScrollTo(item.id)} 
                      className="text-white hover:text-yellow-400 transition-all duration-300 drop-shadow-lg"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Enhanced Right Dropdown */}
          <div className="hidden md:flex">
            <StageDropdown />
          </div>

          {/* Enhanced Mobile Hamburger */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden z-50 relative"
            ref={buttonRef}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="space-y-1.5">
              <motion.span
                animate={{ 
                  rotate: menuOpen ? 45 : 0, 
                  y: menuOpen ? 8 : 0,
                  backgroundColor: menuOpen ? "#F59E0B" : "#10B981"
                }}
                className="block w-8 h-1 rounded-full origin-left shadow-lg"
              />
              <motion.span
                animate={{ 
                  opacity: menuOpen ? 0 : 1,
                  backgroundColor: menuOpen ? "#F59E0B" : "#10B981"
                }}
                className="block w-6 h-1 rounded-full shadow-lg"
              />
              <motion.span
                animate={{ 
                  rotate: menuOpen ? -45 : 0, 
                  y: menuOpen ? -8 : 0,
                  backgroundColor: menuOpen ? "#F59E0B" : "#10B981"
                }}
                className="block w-8 h-1 rounded-full origin-left shadow-lg"
              />
            </div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobileOverlay"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="md:hidden fixed inset-y-0 right-0 z-40 w-80 bg-gradient-to-b from-black via-green-900 to-black shadow-2xl border-l-2 border-green-500/30"
            >
              <div ref={menuContentRef} className="w-full h-full p-8 pt-24">
                {/* Close Button */}
                <motion.button
                  onClick={closeMenu}
                  className="absolute top-6 right-6 text-white bg-gradient-to-r from-green-500 to-yellow-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>

                <nav>
                  <ul className="flex flex-col space-y-6 text-start text-xl font-bold">
                    {[
                      { name: "Company", icon: "🏢", color: "text-yellow-400", id: "About-Us" },
                      { name: "Vendors", icon: "🏪", color: "text-green-400", href: "https://vendors.lagbuy.com/login" },
                      { name: "Riders", icon: "🚴", color: "text-yellow-300", action: handleComingSoon },
                      { name: "Customers", icon: "👥", color: "text-green-300", href: "https://shop.lagbuy.com/login" },
                      { name: "Contact", icon: "📞", color: "text-yellow-200", id: "ContactUs" }
                    ].map((item, index) => (
                      <motion.li 
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-3 rounded-2xl bg-gradient-to-r from-green-500/10 to-yellow-500/10 hover:from-green-500/20 hover:to-yellow-500/20 transition-all duration-300 border border-white/10"
                      >
                        <span className={`text-2xl ${item.color}`}>{item.icon}</span>
                        {item.href ? (
                          <a
                            href={item.href}
                            onClick={closeMenu}
                            className="text-white hover:text-yellow-400 transition-colors"
                          >
                            {item.name}
                          </a>
                        ) : item.action ? (
                          <button
                            onClick={() => {
                              closeMenu();
                              item.action();
                            }}
                            className="text-white hover:text-yellow-400 transition-colors text-left"
                          >
                            {item.name}
                          </button>
                        ) : (
                          <button
                            onClick={() => handleScrollTo(item.id)}
                            className="text-white hover:text-yellow-400 transition-colors text-left"
                          >
                            {item.name}
                          </button>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Enhanced Social Icons */}
                <motion.div 
                  className="flex gap-4 mt-12 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {[
                    { Icon: FaInstagram, href: "https://www.instagram.com/lagbuy_official", gradient: "from-yellow-400 via-pink-500 to-purple-600" },
                    { Icon: FaTelegram, href: "https://t.me/+GvfwUvSETlphMWFk", color: "text-[#0088cc]" },
                    { Icon: FaFacebook, href: "#", color: "text-[#1877F2]" },
                    { Icon: FaXTwitter, href: "https://x.com/lagbuy_official?s=21", color: "text-white" },
                    { Icon: FaTiktok, href: "https://www.tiktok.com/@lagbuy_official?_t=ZS-8zdVH8JdHCa&_r=1", special: true }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="transition-transform transform hover:scale-110"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.special ? (
                        <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-r from-green-500 to-yellow-500 rounded-xl p-2">
                          <FaTiktok
                            size={20}
                            className="absolute text-[#69C9D0] -translate-x-0.5 translate-y-0.5"
                          />
                          <FaTiktok
                            size={20}
                            className="absolute text-[#EE1D52] translate-x-0.5 -translate-y-0.5"
                          />
                          <FaTiktok size={20} className="text-white relative" />
                        </div>
                      ) : social.gradient ? (
                        <div className={`bg-gradient-to-tr ${social.gradient} p-2 rounded-xl w-10 h-10 flex items-center justify-center`}>
                          <social.Icon size={20} className="text-white" />
                        </div>
                      ) : (
                        <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-2 rounded-xl w-10 h-10 flex items-center justify-center">
                          <social.Icon size={20} className={social.color} />
                        </div>
                      )}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Enhanced Coming Soon Popup */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-yellow-500 text-black px-8 py-4 rounded-2xl shadow-2xl z-[9999] font-bold text-lg border-2 border-white/30 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-2xl"
              >
                🚴
              </motion.span>
              <span>Riders Platform Coming Soon!</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-2xl"
              >
                ⚡
              </motion.span>
            </div>
            
            {/* Progress bar */}
            <motion.div 
              className="h-1 bg-black/20 rounded-full mt-2 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
            >
              <div className="h-full bg-black rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;