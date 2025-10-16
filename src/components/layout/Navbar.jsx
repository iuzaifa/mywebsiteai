import React, { useState } from "react";

// Reusable Tailwind classes for cleaner code
const linkClass =
  "text-gray-300 hover:text-white transition duration-200 text-sm font-medium tracking-wide";
const ctaBtnClass =
  "px-4 py-2 text-sm rounded-lg transition duration-300 shadow-md text-slate-50";

const Navbar = () => {
  // Added state for mobile responsiveness (hamburger menu)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // Modern Header: Sticky, dark background, slight blur, subtle border
    <header className="sticky top-0 z-50 backdrop-blur-s">
      {/* Container: Centered, max width, uses flex to justify content */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* 1. Logo (FAR LEFT) */}
        <div className="flex-shrink-0">
          <h2 className="text-2xl  text-teal-400 tracking-tight">E-Thinks</h2>
        </div>

        {/* 2. Desktop Navigation Links (CENTERED) */}
        {/* Hidden on mobile, flex on large screens */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center space-x-8">
            <li>
              <a href="#" className={linkClass}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                Product
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                Service
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        {/* 3. Action Buttons & Mobile Toggle (FAR RIGHT) */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          {/* Request a Demo Button (Desktop Only) */}
          <button
            className={`${ctaBtnClass} bg-teal-500 text-gray-900 hover:bg-teal-400 hidden lg:block`}
          >
            Request a Demo
          </button>

          {/* Log in Button/Link (Desktop Only) */}
          <a
            href="#"
            className="text-teal-400 hover:text-white font-medium text-sm hidden lg:block"
          >
            Log in
          </a>

          {/* Hamburger Menu Button (MOBILE ONLY) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-1 text-gray-300 hover:text-white"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {/* Using a simple hamburger icon for consistency */}
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
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-gray-800 border-t border-gray-700 p-4 space-y-3"
        >
          {/* Nav Links */}
          <div className="flex flex-col space-y-1 pb-3 border-b border-gray-700">
            <a
              href="#"
              className="block py-2 px-2 text-base font-medium text-gray-300 hover:bg-gray-700 rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 px-2 text-base font-medium text-gray-300 hover:bg-gray-700 rounded-md"
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 px-2 text-base font-medium text-gray-300 hover:bg-gray-700 rounded-md"
            >
              Product
            </a>
            <a
              href="#"
              className="block py-2 px-2 text-base font-medium text-gray-300 hover:bg-gray-700 rounded-md"
            >
              Service
            </a>
            <a
              href="#"
              className="block py-2 px-2 text-base font-medium text-gray-300 hover:bg-gray-700 rounded-md"
            >
              Pricing
            </a>
          </div>

          {/* Mobile CTAs (Stacked) */}
          <div className="flex flex-col space-y-3 pt-3">
            <button
              className={`${ctaBtnClass} bg-teal-500 text-gray-900 hover:bg-teal-400 w-full`}
            >
              Request a Demo
            </button>
            <a
              href="#"
              className="text-center block py-2 text-base font-semibold text-teal-400 hover:text-white"
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
