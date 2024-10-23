import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FooterModal } from "../../pages/LandingPage/Modal";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaTelegram,
  FaFacebook,
  FaApple,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdOutlineMan, MdEmail } from "react-icons/md";
import {
  IoWoman,
  IoLogoGooglePlaystore,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { TiContacts } from "react-icons/ti";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <footer className="bg-[#1A362B] py-14 px-5 font-Montserrat">
      <div className="container mx-auto flex flex-col">
        {/* Subscription and Apps Section */}
        <div className="flex flex-row justify-between gap-x-10">
          {/* Subscription Section */}
          <div className="flex flex-col gap-y-5 w-full lg:w-1/2 text-center lg:text-start">
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
                    color="#FCE6008A"
                    className="absolute top-4 left-2"
                  />
                  <input
                    type="text"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    className="bg-[#1A362B] border border-white placeholder:text-[#FCE6008A] px-8 py-3 w-full lg:w-[20rem]"
                  />
                </div>
                {/* Gender Inputs */}
                <div className="relative">
                  <MdOutlineMan
                    size={30}
                    color="white"
                    className="absolute top-3 left-1"
                  />
                  <input
                    type="gender"
                    placeholder="Male"
                    aria-label="Male"
                    className="bg-[#1A362B] border border-white text-white px-7 py-3 w-full lg:w-28 placeholder:text-white"
                  />
                </div>
                <div className="relative">
                  <IoWoman
                    size={30}
                    color="white"
                    className="absolute top-3 left-1"
                  />
                  <input
                    type="gender"
                    placeholder="Female"
                    aria-label="Female"
                    className="bg-[#1A362B] border border-white text-white px-7 py-3 w-full lg:w-28 placeholder:text-white"
                  />
                </div>
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
          {/* App Download Section */}
          <div className="hidden lg:block lg:w-1/2">
            <h2 className="text-[#FCE600] text-2xl">Our Apps</h2>
            <div className="flex gap-4 mt-6">
              <div
                className="flex items-center gap-3 bg-white p-5 w-52 rounded-lg cursor-pointer"
                onClick={openModal}
              >
                <FaApple size={40} />
                <p>
                  Download on the <span className="font-bold">App Store</span>
                </p>
              </div>
              <div
                className="flex items-center gap-3 bg-white p-5 w-52 rounded-lg cursor-pointer"
                onClick={openModal}
              >
                <IoLogoGooglePlaystore size={45} />
                <p>
                  Download on the <span className="font-bold">Google Play</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border mt-5"></div>

        {/* Support Section */}
        <div className="flex flex-col md:flex-row items-center lg:justify-center gap-14 lg:gap-24 text-white mt-6">
          <div className="block lg:hidden text-black">
            <h2 className="text-white text-2xl">Our Apps</h2>
            <div className="flex flex-col gap-4 mt-6">
              <div
                className="flex items-center gap-3 bg-white p-5 w-52 rounded-lg cursor-pointer"
                onClick={openModal}
              >
                <FaApple size={40} />
                <p>
                  Download on the <span className="font-bold">App Store</span>
                </p>
              </div>
              <div
                className="flex items-center gap-3 bg-white p-5 w-52 rounded-lg cursor-pointer"
                onClick={openModal}
              >
                <IoLogoGooglePlaystore size={45} />
                <p>
                  Download on the <span className="font-bold">Google Play</span>
                </p>
              </div>
            </div>
          </div>
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
      <FooterModal isOpen={modalIsOpen} onClose={closeModal} />
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
