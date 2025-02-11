import React, { useState } from "react";
import logo from "../../assets/LandingPageImg/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className=" w-full bg-[#1A362B] shadow-sm font-Capriola">
        <div className="container mx-auto px-5 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="w-40 h-12  lg:w-44 lg:h-14 bg-[#4CAF50]  rounded-full flex items-center justify-center">
            <img src={logo} alt="Logo" className="h-8  " />
          </div>

          {/* Hamburger Menu for Mobile */}
          <button onClick={toggleMenu} className="md:hidden">
            <svg
              className="w-10 h-10 text-[#4CAF50] fill-current"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block bg-white rounded-full p-5">
            <ul className="flex gap-x-8 text-center md:text-base lg:text-xl text-black font-semibold">
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="hover:text-[#4CAF50]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="hover:text-[#4CAF50]"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#About-Us"
                  onClick={closeMenu}
                  className="hover:text-[#4CAF50]"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#Contact-Us"
                  onClick={closeMenu}
                  className="hover:text-[#4CAF50]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <button className="hidden md:block bg-[#4CAF50]  text-white px-5 py-3 rounded-full">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden w-72 absolute top-16 right-0 mx-4 bg-white shadow-lg rounded-lg px-7 py-5 z-50 text-lg font-semibold">
            <nav>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a
                    href="#About-Us"
                    onClick={closeMenu}
                    className="hover:text-green-500"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact-Us"
                    onClick={closeMenu}
                    className="hover:text-green-500"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={closeMenu}
                    className="hover:text-green-500"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={closeMenu}
                    className="hover:text-green-500"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="border-gray-200 border-[0.5px]"></li>
                <li>
                  <a
                    href="#"
                    onClick={closeMenu}
                    className="hover:text-green-500"
                  >
                    Vendor Registration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={closeMenu}
                    className="hover:text-green-500"
                  >
                    Vendor Login
                  </a>
                </li>
                <li className="border-gray-200 border-[0.5px]"></li>
                <li>
                  <a
                    href="#"
                    onClick={closeMenu}
                    className="hover:text-green-500"
                  >
                    Logistic Registration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={closeMenu}
                    className="hover:text-green-500"
                  >
                    Logistic Login
                  </a>
                </li>
                <li>
                  <li>
                    <button
                      onClick={closeMenu}
                      className="hidden md:block text-gray-600 hover:text-green-500"
                    >
                      Sign Up
                    </button>
                  </li>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
