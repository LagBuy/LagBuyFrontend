import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import { FaInstagram, FaFacebook, FaTelegram, FaTiktok, FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Mail, MapPin, Phone, ArrowUp, Zap, Users, Shield } from "lucide-react";
import { FooterModal } from "../../pages/LandingPage/Modal";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

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
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setEmail("");
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/lagbuy_official", color: "hover:text-pink-400" },
    { icon: FaXTwitter, href: "https://x.com/lagbuy_official?s=21", color: "hover:text-gray-300" },
    { icon: FaTelegram, href: "https://t.me/+GvfwUvSETlphMWFk", color: "hover:text-blue-400" },
    { icon: FaFacebook, href: "#", color: "hover:text-blue-500" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@lagbuy_official?_t=ZS-8zdVH8JdHCa&_r=1", color: "hover:text-red-400" },
  ];

  const companyLinks = [
    { label: "About Us", id: "AboutUs" },
    { label: "Contact", id: "ContactUs" },
    { label: "FAQs", id: "FAQs" },
    { label: "Terms of Use", to: "/TermsOfUse" },
    { label: "Privacy Policy", to: "/PrivacyPolicy" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-[#1A362B] to-gray-900 text-white font-Montserrat overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full blur-3xl opacity-5 animate-pulse delay-1000" />
      </div>

      {/* Gradient Divider */}
      <div className="h-1 w-full bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 rounded-full"></div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 pt-12 pb-8">
        {/* Newsletter Section */}
        <motion.div 
          className="text-center mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-semibold">Stay Updated</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-3 text-white"
          >
            Be the First to Get{" "}
            <motion.span
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-[length:200%_auto]"
            >
              LagBuy Updates!
            </motion.span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-300 text-base mb-6 max-w-2xl mx-auto"
          >
            Get the latest deals, vendor highlights, and shopping tips straight to your inbox.
          </motion.p>

          <motion.form 
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative flex-1 w-full sm:max-w-md">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-sm border-2 border-gray-600 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-all duration-300"
                required
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-green-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-green-500/25 border-2 border-white/20 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              whileHover={{ 
                scale: isSubmitting ? 1 : 1.05,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <Zap className="w-5 h-5" />
                )}
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </span>
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.img 
              src={logo} 
              alt="LagBuy Logo" 
              className="w-40 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              LagBuy connects buyers, vendors, and riders for a seamless shopping and delivery experience across Lagos.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-sm">07077236556</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-sm">support@lagbuy.com</span>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" />
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {link.to ? (
                    <Link
                      to={link.to}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-base flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleScrollTo(link.id)}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-base flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </button>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Socials & Apps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-yellow-400" />
              Connect With Us
            </h4>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:border-green-400`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* App Download Buttons */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white mb-4">Download Our App</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* App Store */}
                <motion.div
                  onClick={openModal}
                  className="flex items-center gap-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-2xl cursor-pointer border-2 border-gray-700 hover:border-green-500 transition-all duration-300 flex-1"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="p-2 bg-gradient-to-r from-gray-800 to-black rounded-xl">
                    <FaApple size={24} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Download on the</p>
                    <p className="font-bold text-white">App Store</p>
                  </div>
                </motion.div>

                {/* Google Play */}
                <motion.div
                  onClick={openModal}
                  className="flex items-center gap-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-2xl cursor-pointer border-2 border-gray-700 hover:border-green-500 transition-all duration-300 flex-1"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="p-2 bg-gradient-to-r from-gray-800 to-black rounded-xl">
                    <IoLogoGooglePlaystore size={24} className="text-green-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Get it on</p>
                    <p className="font-bold text-green-400">Google Play</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="text-center text-gray-400 text-sm border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} LagBuy. All rights reserved. | Lagos, Nigeria
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-green-500 to-yellow-500 text-white p-3 rounded-2xl shadow-lg border-2 border-white/20 hover:shadow-green-500/25 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      <FooterModal isOpen={modalIsOpen} onClose={closeModal} />
    </footer>
  );
};

export default Footer;