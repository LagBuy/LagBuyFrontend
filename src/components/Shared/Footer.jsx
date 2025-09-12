import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaInstagram, FaFacebook, FaTelegram, FaTiktok, FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FooterModal } from "../../pages/LandingPage/Modal";
  

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <footer className="bg-[#1A362B] text-white font-Montserrat px-6 md:px-16 lg:px-24 pt-10 pb-6">
      {/* Gradient Divider */}
      <div className="h-1 w-full bg-gradient-to-r from-[#94BD0A] via-[#FCE67A] to-[#94BD0A] rounded-full mb-8"></div>

      {/* Newsletter Section */}
      <div className="text-center mb-10">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#FCE67A]">
          Be the First to Get LagBuy Updates!
        </h3>
        <p className="text-gray-300 text-sm md:text-base mb-4">
          Get the latest deals, vendor highlights, and shopping tips straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-lg w-full sm:w-72 text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#94BD0A] hover:bg-[#7da307] text-white px-5 py-2 rounded-lg"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="border-t border-gray-600 pt-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        {/* About */}
        <div>
          <img src={logo} alt="LagBuy Logo" className="w-40 mb-4" />
          <p className="text-gray-300 text-sm leading-relaxed">
            LagBuy connects buyers, vendors, and riders, for a
            seamless shopping and delivery experience across Lagos.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-[#FCE67A] font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#AboutUs">About Us</a></li>
            <li><a href="#ContactUs">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Socials & Apps */}
        <div>
          <h4 className="text-[#FCE67A] font-semibold mb-3">Connect With Us</h4>
          <div className="flex gap-5 mb-5">
            <a href="https://www.instagram.com/lagbuy_official" className="hover:text-[#FCE67A] transition-transform transform hover:scale-110">
              <FaInstagram size={22} />
            </a>
            <a href="https://x.com/lagbuy_official?s=21" className="hover:text-[#FCE67A] transition-transform transform hover:scale-110">
              <FaXTwitter size={22} />
            </a>
            <a href="https://t.me/+GvfwUvSETlphMWFk" className="hover:text-[#FCE67A] transition-transform transform hover:scale-110">
              <FaTelegram size={22} />
            </a>
            <a href="#" className="hover:text-[#FCE67A] transition-transform transform hover:scale-110">
              <FaFacebook size={22} />
            </a>
            <a href="https://www.tiktok.com/@lagbuy_official?_t=ZS-8zdVH8JdHCa&_r=1" className="hover:text-[#FCE67A] transition-transform transform hover:scale-110">
              <FaTiktok size={22} />
            </a>
          </div>

          <h4 className="text-[#FCE67A] font-semibold mb-2">Download Our App</h4>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* App Store */}
            <div
              className="flex items-center gap-3 bg-black text-white px-5 py-3 w-60 md:w-auto rounded-xl cursor-pointer 
                         hover:scale-105 hover:shadow-xl transition-all duration-300 border border-neutral-700"
              onClick={openModal}
            >
              <FaApple size={28} className="text-white" />
              <p className="text-sm md:text-base">
                Download on the{" "}
                <span className="font-bold text-white">App Store</span>
              </p>
            </div>

            {/* Google Play */}
            <div
              className="flex items-center gap-3 bg-black text-white px-5 py-3 w-60 md:w-auto rounded-xl cursor-pointer 
                         hover:scale-105 hover:shadow-xl transition-all duration-300 border border-neutral-700"
              onClick={openModal}
            >
              <IoLogoGooglePlaystore size={28} className="text-green-400" />
              <p className="text-sm md:text-base">
                Download on the{" "}
                <span className="font-bold text-green-400">Google Play</span>
              </p>
            </div>
          </div>

          
          <FooterModal isOpen={modalIsOpen} onClose={closeModal} />
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 text-xs mt-10 border-t border-gray-701 pt-4">
        © {new Date().getFullYear()} LagBuy. All rights reserved. | Lagos, Nigeria
      </div>
    </footer>
  );
};

export default Footer;
