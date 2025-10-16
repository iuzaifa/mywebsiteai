// src/components/Navbar.jsx

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Style Definitions ---
  const navLinkClass =
    "text-gray-300 hover:text-gray-400 transition duration-150 text-sm";

  const btnClass =
    // Base styles
    "flex items-center justify-center space-x-2 w-full px-3 py-2.5 text-base font-semibold text-white rounded-sm transition duration-150 shadow-md " +
    // Gradient Background
    "[background-image:linear-gradient(135deg,rgba(81,45,234,0.93),rgba(71,133,253,0.85))] " +
    // Hover Effect
    "hover:[background-image:linear-gradient(135deg,rgba(81,45,234,1),rgba(71,133,253,0.95))]";

  // --- Utility Functions ---
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // --- Navigation Markup ---
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* 1. Logo (FAR LEFT) */}
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl font-bold text-gray-800">
            E-Thinks
          </a>
        </div>

        {/* 2. Desktop Navigation Links (CENTERED) */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center space-x-8">
            <li>
              <a href="#" className={navLinkClass}>
                Product
              </a>
            </li>
            <li>
              <a href="#" className={navLinkClass}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className={navLinkClass}>
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className={navLinkClass}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" className={navLinkClass}>
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4 flex-shrink-0">
          <button className={`${btnClass} hidden lg:flex`}>
            <span>Request a Demo</span>
          </button>

          {/* Log In Link (Desktop Only) */}
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium text-sm hidden lg:block"
          >
            Log in
          </a>

          {/* Hamburger Menu Button (MOBILE ONLY) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-1 text-gray-700 hover:text-gray-900"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              // Close Icon (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Menu Icon (Hamburger)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white shadow-inner border-t border-gray-100 px-4 pb-4"
        >
          {/* Main Navigation Links */}
          <ul className="flex flex-col space-y-1 p-0 pb-4">
            <li>
              <a
                href="#"
                className="block py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md px-2"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md px-2"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md px-2"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md px-2"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md px-2"
              >
                Pricing
              </a>
            </li>
          </ul>

          {/* Action Buttons (FULL WIDTH, STACKED) */}
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
            {/* 1. Request a Demo (FULL WIDTH BUTTON) */}
            <button className={`${btnClass} font-bold`}>Request a Demo</button>

            {/* 2. Log in (FULL WIDTH LINK) */}
            <a
              href="#"
              className="block w-full text-center py-2 text-base font-semibold text-gray-700 border border-gray-300 rounded-sm hover:bg-gray-50 transition duration-150"
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
