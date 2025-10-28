import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/LandingPageImg/logo.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTelegram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuContentRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

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
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 300 },
  };

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
        window.location.href = "https://forms.gle/Y5CfpyMEgz5qti7V9";
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
          <motion.div 
            className="relative"
            whileHover={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="hidden sm:block w-45 h-14 bg-gradient-to-r from-green-500 to-yellow-500 rounded-xl items-center justify-center shadow-xl border-2 border-white/20">
              <button onClick={() => handleScrollTo("HeroSection")}>
                <img src={logo} alt="Logo" className="h-10 drop-shadow-lg" />
              </button>
            </div>
            <div className="sm:hidden w-14 h-14 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20">
              <button onClick={() => handleScrollTo("HeroSection")}>
                <span className="text-black font-black text-xl drop-shadow-lg">LB</span>
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl blur-lg opacity-50 -z-10 animate-pulse" />
          </motion.div>

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

          <div className="hidden md:flex">
            <StageDropdown />
          </div>

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
                  y: menuOpen ? 6 : 0,
                  backgroundColor: menuOpen ? "#F59E0B" : "#10B981"
                }}
                className="block w-6 h-0.5 rounded-full origin-left shadow-sm transition-colors duration-300"
              />
              <motion.span
                animate={{ 
                  opacity: menuOpen ? 0 : 1,
                  backgroundColor: menuOpen ? "#F59E0B" : "#10B981"
                }}
                className="block w-5 h-0.5 rounded-full shadow-sm transition-colors duration-300"
              />
              <motion.span
                animate={{ 
                  rotate: menuOpen ? -45 : 0, 
                  y: menuOpen ? -6 : 0,
                  backgroundColor: menuOpen ? "#F59E0B" : "#10B981"
                }}
                className="block w-6 h-0.5 rounded-full origin-left shadow-sm transition-colors duration-300"
              />
            </div>
          </motion.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobileOverlay"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="md:hidden fixed inset-y-0 right-0 z-40 w-80 bg-gradient-to-b from-black via-green-900 to-black shadow-2xl border-l-2 border-green-500/30 backdrop-blur-md"
            >
              <div ref={menuContentRef} className="w-full h-full p-8 pt-24">
                <nav>
                  <ul className="flex flex-col space-y-4 text-start text-lg font-semibold">
                    {[
                      { name: "Company", icon: "🏢", color: "text-yellow-400", id: "About-Us" },
                      { name: "Vendors", icon: "🏪", color: "text-green-400", href: "https://vendors.lagbuy.com/login" },
                      { name: "Riders", icon: "🚴", color: "text-yellow-300", href: "https://forms.gle/Y5CfpyMEgz5qti7V9" },
                      { name: "Customers", icon: "👥", color: "text-green-300", href: "https://shop.lagbuy.com/login" },
                      { name: "Contact", icon: "📞", color: "text-yellow-200", id: "ContactUs" }
                    ].map((item, index) => (
                      <motion.li 
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-yellow-500/10 hover:from-green-500/20 hover:to-yellow-500/20 transition-all duration-300 border border-white/10"
                      >
                        <span className={`text-xl ${item.color}`}>{item.icon}</span>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="text-white hover:text-yellow-400 transition-colors flex-1"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <button
                            onClick={() => handleScrollTo(item.id)}
                            className="text-white hover:text-yellow-400 transition-colors text-left flex-1"
                          >
                            {item.name}
                          </button>
                        )}
                        <motion.span 
                          className="text-green-400 text-sm"
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          →
                        </motion.span>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <motion.div 
                  className="flex gap-3 mt-12 justify-center"
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform transform"
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.special ? (
                        <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-r from-green-500 to-yellow-500 rounded-lg p-1.5">
                          <FaTiktok
                            size={16}
                            className="absolute text-[#69C9D0] -translate-x-0.5 translate-y-0.5"
                          />
                          <FaTiktok
                            size={16}
                            className="absolute text-[#EE1D52] translate-x-0.5 -translate-y-0.5"
                          />
                          <FaTiktok size={16} className="text-white relative" />
                        </div>
                      ) : social.gradient ? (
                        <div className={`bg-gradient-to-tr ${social.gradient} p-1.5 rounded-lg w-8 h-8 flex items-center justify-center`}>
                          <social.Icon size={16} className="text-white" />
                        </div>
                      ) : (
                        <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-1.5 rounded-lg w-8 h-8 flex items-center justify-center">
                          <social.Icon size={16} className={social.color} />
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
    </>
  );
};

export default Navbar;
