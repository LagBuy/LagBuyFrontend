import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="fixed w-full z-50 bg-white shadow-sm font-Capriola">
        <div className="container mx-auto px-5 py-4 flex justify-between items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-8" />

          {/* Desktop Search Form */}
          <form
            action=""
            className="hidden md:flex items-center gap-4 w-full lg:w-3/5"
          >
            <div className="w-full">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search..."
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <button type="submit" className="bg-[#fdeea6] px-4 py-2 rounded-md">
              Search
            </button>
          </form>

          {/* Hamburger Menu for Mobile */}
          <button onClick={toggleMenu} className="md:hidden ">
            <svg
              className="w-6 h-6 text-[#a6c833] fill-current"
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
          <nav className="hidden md:block">
            <ul className="flex gap-x-8 text-center text-lg text-[#090A0A] font-semibold">
              <li>
                <a href="#" className="hover:text-green-500">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden w-full absolute top-16 right-0 mx-4 bg-white shadow-lg rounded-lg px-7 py-5 z-50 text-lg font-semibold">
            <nav>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="#" className="hover:text-green-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    Term of use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    privacy policy
                  </a>
                </li>
                <li className="  border-gray-200 border-[0.5px]"></li>

                <li>
                  <a href="#" className="hover:text-green-500">
                    vendor registration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    vendor login
                  </a>
                </li>
                <li className="  border-gray-200 border-[0.5px]"></li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    logistic Registration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    logistic Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <form action="" className="block md:hidden">
          <div className="flex gap-4 items-center px-5 pb-6 ">
            <div className="w-full">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search..."
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <button type="submit" className="bg-[#fdeea6] px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </form>
      </header>

      {/* Mobile Search Form */}
    </>
  );
};

export default Navbar;
