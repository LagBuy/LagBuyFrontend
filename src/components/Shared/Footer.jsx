import React, { useState } from "react";
import logo from "../../assets/logo.png";
// import { FooterModal } from "../../pages/LandingPage/Modal";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaTelegram,
  FaFacebook,

} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import {
  IoLogoWhatsapp,
} from "react-icons/io5";
import { TiContacts } from "react-icons/ti";

const Footer = () => {


  return (
    <footer className="bg-[#1A362B] font-Montserrat container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-8 lg:py-16">
      <div className="container mx-auto flex flex-col">
        {/* Subscription and Apps Section */}
        <div className="flex flex-row justify-center items-center ">
          {/* Subscription Section */}
          <div className="flex flex-col gap-y-5  text-center  ">
            <img
              src={logo}
              alt="LagBuy Logo"
              className="block lg:hidden w-56 place-self-center"
            />
            <h3 className="text-white text-xl font-semibold">NEW TO LAGBUY?</h3>
            <p className="text-white">
              Subscribe to our newsletter to get updates of our latest deals!
            </p>
            <form>
              <div className="flex flex-col lg:flex-row gap-5">
                {/* Email Input */}
                <div className="relative">
                  <CiMail
                    size={20}
                    color="#ffff "
                    className="absolute top-4 left-2"
                  />
                  <input
                    type="text"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    className="bg-[#1A362B] border border-white placeholder:text-[#ffff] px-8 py-3 w-full lg:w-[20rem]"
                  />
                </div>
                <button
                  type="submit"
                  className="text-[#ffff] px-4 py-2 rounded-lg text-lg bg-[#4CAF50]  "
                >
                  send
                </button>
              </div>
              {/* Agreement Checkbox */}
              <div className="mt-5 flex items-center gap-2 text-start">
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  className="bg-[#1A362B]"
                />
                <label htmlFor="agreement" className="text-white text-sm">
                  I agree to LagBuy’s privacy and cookie policy. You can always
                  unsubscribe anytime.
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="border mt-5"></div>

        {/* Support Section */}
        <div className="flex flex-col md:flex-row items-center lg:justify-center gap-14 lg:gap-24 text-white mt-6">
          <SupportItem
            icon={<MdEmail size={50} />}
            title="Email Support"
            contact="help@lagbuy.com"
          />
          <SupportItem
            icon={<TiContacts size={50} />}
            title="Phone Support"
            contact="+234 999-9099-999"
          />
          <SupportItem
            icon={<IoLogoWhatsapp size={50} />}
            title="WhatsApp Support"
            contact="+234 787-8989-954"
          />
        </div>

        <div className="border block lg:hidden mt-5"></div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-8 justify-between text-white mt-14">
          <FooterLinks
            title="ABOUT US"
            links={[
              "Contact us",
              "About us",
              "Career",
              "Our Blog",
              "Forum",
              "Terms and Condition",
            ]}
          />
          <FooterLinks
            title="BUY FROM LAGBUY"
            links={[
              "Buy safety center",
              "Delivery",
              "FAQs",
              "Lagbuy return policy",
              "Digital Services",
              "Bulk purchases",
            ]}
          />
          <FooterLinks
            title="MAKE MONEY FROM LAGBUY"
            links={[
              "Sales consultants",
              "Affiliate",
              "Vendor Hub",
              "Drop Shipper",
              "Sell on Lagbuy",
              "Referral Program",
            ]}
          />
          <FooterLinks
            title="PAYMENT SUPPORT"
            links={[
              "Wallet",
              "Verve",
              "Mastercard",
              "Crypto",
              "Visa",
              "Gift cards",
            ]}
          />
        </div>

        {/* Footer Bottom Social Section */}
        <div className="mt-16 flex items-center justify-between">
          <img src={logo} alt="LagBuy Logo" className="hidden lg:block w-48" />

          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-[#FCE600]">
              <FaInstagramSquare size={30} />
            </a>
            <a href="#" className="text-white hover:text-[#FCE600]">
              <FaTwitterSquare size={30} />
            </a>
            <a href="#" className="text-white hover:text-[#FCE600]">
              <FaTelegram size={30} />
            </a>
            <a href="#" className="text-white hover:text-[#FCE600]">
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
      </div>
      {/* <FooterModal isOpen={modalIsOpen} onClose={closeModal} /> */}
    </footer>
  );
};

// SupportItem Component
const SupportItem = ({ icon, title, contact }) => (
  <div className="flex flex-col items-center gap-3 text-center">
    {icon}
    <h4 className="font-bold text-lg">{title}</h4>
    <p>{contact}</p>
  </div>
);

// FooterLinks Component
const FooterLinks = ({ title, links }) => (
  <div>
    <h3 className="text-[#FCE600] text-lg">{title}</h3>
    <ul className="mt-4 flex flex-col gap-2">
      {links.map((link, index) => (
        <li key={index} className="hover:text-[#FCE600]">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
