import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="fixed w-full z-10 bg-white font-Capriola"
    >
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-8 w-auto" />

        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? <FaTimes size={35} /> : <GiHamburgerMenu size={35} />}
        </button>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          }  md:flex md:items-center gap-10  lg:gap-[30rem]  transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row md:gap-x-8 gap-y-4 md:gap-y-0 text-center text-2xl text-[#090A0A] font-semibold">
            <li>
              <a href="#" className="hover:text-gray-700">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Contact Us
              </a>
            </li>
          </ul>

          <button className="py-2 px-12  w-auto font-medium text-xl shadow rounded-full bg-[#1A362B] text-[#FCE600] hover:bg-[#154227] transition-all duration-300 ease-in-out">
            SignUp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
