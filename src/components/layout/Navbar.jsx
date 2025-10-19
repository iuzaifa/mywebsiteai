// import React from "react";
// import { Link } from "react-router-dom";
// import { ChevronDown } from "lucide-react";
// import navdata from "./navData";
// import ThemeToggle from "../ThemeToggle";
// import HeaderCTA from "./navbar/HeaderCTA";
// import HeaderLogo from "./navbar/HeaderLogo";

// const Navbar = () => {
//   // --- COLOR MAPPING ---
//   const ACCENT_COLOR_CLASS = "teal"; // Tailwind color name for #0D9488
//   const ACCENT_LIGHT_SHADE = "teal-400";
//   const ACCENT_DARK_SHADE = "teal-600";
//   const ctaBtnClass =
//     "px-3 py-2 text-xs rounded-lg transition duration-300 shadow-md text-slate-50";
//   const linkBaseClasses =
//     "relative flex items-center gap-1.5 text-base py-2 transition-all duration-300 tracking-wide";

//   // Safety check for dynamic classes for Tailwind JIT/AOT
//   // In a real project with Tailwind JIT, you'd configure safelist, but for this component,
//   // we must ensure the full class names are present somewhere.
//   const linkTextClasses = `text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400`;
//   const dropdownItemClasses = `flex items-center gap-2 py-2 px-3 text-xs text-gray-700 dark:text-gray-300 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-600 transition-colors duration-150`;

//   // --- MEGA MENU COLUMN COMPONENT ---
//   const MegaMenuColumn = ({ title, items, accentColor }) => {
//     const safeAccent = "teal-600";
//     // Adjusted for JIT - using full names like 'text-teal-600'
//     const titleClass = `text-sm text-${safeAccent}-600 dark:text-${safeAccent}-400`;
//     const hoverClass = `hover:text-${safeAccent}-600 dark:hover:text-${safeAccent}-400`;

//     return (
//       <div className="p-2 min-w-[150px] max-w-[250px]">
//         <h3
//           className={`${titleClass} mb-4 text-sm  pb-1 border-slate-200 dark:border-gray-700  text-teal-400`}
//         >
//           {title}
//         </h3>
//         <ul className="space-y-3">
//           {items.map((item, index) => (
//             <li key={index}>
//               <Link
//                 to={item.link || "#"}
//                 className={` flex items-cente hover:text-teal-600 text-xs font-medium text-gray-700 dark:text-gray-300 ${hoverClass} transition-colors duration-200`}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <header className="sticky py-1 text-xs top-0 z-50 w-full flex items-center justify-between border-teal-600 dark:border-teal-500 transition-colors duration-500 ">
//       <div className="flex items-center justify-between px-8 py-2 max-w-7xl mx-auto w-full">
//         {/* 1. Logo */}
//         <div className="header-logo">
//           <HeaderLogo />
//         </div>

//         {/* 2. Navigation (Desktop) */}
//         <nav className="hidden lg:block">
//           <ul className="flex gap-2 items-center">
//             {navdata.map((item, index) => (
//               // Parent LI is relative
//               <li key={index} className="relative group">
//                 {/* --- TOP-LEVEL LINK/SPAN --- */}
//                 <Link
//                   to={item.link || "#"}
//                   className={`${linkBaseClasses} ${linkTextClasses} ${
//                     item.dropdown ? "pr-2" : "pr-4"
//                   }`}
//                 >
//                   {item.label}
//                   {item.dropdown && (
//                     <ChevronDown
//                       size={14}
//                       className="transition-transform duration-200 group-hover:rotate-180"
//                     />
//                   )}
//                   {/* Accent Underline on Hover */}
//                   <span
//                     className={`absolute left-0 bottom-[-5px] h-1 w-0 bg-${ACCENT_DARK_SHADE} transition-all duration-300 group-hover:w-full`}
//                   ></span>
//                 </Link>

//                 {/* --- DROPDOWN RENDER LOGIC --- */}
//                 {item.dropdown &&
//                   item.dropdownItems &&
//                   (item.dropdownItems[0]?.items ? (
//                     // MegaMenu Style (USE 'left-0' FOR LEFT ALIGNMENT)
//                     <div
//                       className="
//                                                 absolute top-full left-0 mt-3 p-4 min-w-[400px] lg:min-w-[600px]
//                                                 bg-white dark:bg-black/90 border border-slate-200 dark:border-gray-700
//                                                 rounded-lg shadow-2xl z-50
//                                                 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
//                                             "
//                     >
//                       <div className="flex gap-4">
//                         {item.dropdownItems.map((category, catIdx) => (
//                           <MegaMenuColumn
//                             key={catIdx}
//                             title={category.title}
//                             items={category.items}
//                             accentColor={
//                               category.accentColor || ACCENT_COLOR_CLASS
//                             }
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   ) : (
//                     <ul
//                       className="
//                                                 absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 // Changed w-60 to w-48 for a tighter look
//                                                 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700
//                                                 rounded-lg shadow-2xl z-50
//                                                 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
//                                             "
//                     >
//                       {item.dropdownItems.map((dropItem, i) => (
//                         <li key={i}>
//                           <Link
//                             to={dropItem.link || "#"}
//                             className={dropdownItemClasses}
//                           >
//                             {dropItem.title}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   ))}
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* 3. CTA & Theme Toggle */}
//         <div className="flex items-center gap-3">
//           <ThemeToggle />
//           <HeaderCTA />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import navdata from "./navData";
import ThemeToggle from "../ThemeToggle";
import HeaderCTA from "./navbar/HeaderCTA";
import HeaderLogo from "./navbar/HeaderLogo";

// --- Mobile Navigation Links & CTAs (CORRECTED Component) ---
const MobileMenu = ({
  navdata,
  isMenuOpen,
  toggleMenu,
  linkTextClasses,
  linkBaseClasses,
}) => {
  // Simple Mobile Link/Dropdown Item
  const MobileLink = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Ensure correct base classes for mobile links
    const mobileLinkClasses = `w-full text-left px-4 py-2 text-sm block transition-colors duration-200 mt-3`;

    // 1. Simple Links (No Dropdown)
    if (!item.dropdown) {
      return (
        <Link
          to={item.link || "#"}
          // Applying text and hover styles
          className={`${mobileLinkClasses} ${linkTextClasses}`}
          onClick={toggleMenu}
        >
          {item.label}
        </Link>
      );
    }

    // 2. Dropdowns/Mega Menus
    return (
      <div
        className={`
        ${mobileLinkClasses}
        ${linkTextClasses.replace(
          "py-2",
          ""
        )}
      `}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex justify-between items-center w-full 
            focus:outline-none 
            ${linkTextClasses}
          `}
        >
          {item.label}
          <ChevronDown
            size={18} // Slightly larger icon for mobile
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="pt-2 pb-4 space-y-3 bg-gray-50 dark:bg-slate-950/40 -mx-4 px-4 lg:border-t border-gray-200 dark:border-gray-700">
            {/* Logic to iterate through simple dropdowns OR mega menu columns */}
            {item.dropdownItems.map((categoryOrItem, i) => {
              // Check if it's a Mega Menu column (has 'items' property)
              if (categoryOrItem.items) {
                return (
                  <div
                    key={i}
                    className="pt-2 border-t border-gray-200 dark:border-gray-700"
                  >
                    {/* Mega Menu Category Title */}
                    <h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2 mt-2 px-2">
                      {categoryOrItem.title}
                    </h4>
                    {/* Mega Menu Items */}
                    <ul className="space-y-2 pl-2">
                      {categoryOrItem.items.map((subItem, subI) => (
                        <li key={subI}>
                          <Link
                            to={subItem.link || "#"}
                            className="text-sm block py-1 px-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                            onClick={toggleMenu}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              // Simple Dropdown Item (if not a mega menu column)
              return (
                <Link
                  key={i}
                  to={categoryOrItem.link || "#"}
                  className="text-xs block py-1 px-4 text-gray-700  dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  onClick={toggleMenu}
                >
                  {categoryOrItem.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // The actual menu panel
  return (
    // Updated transition for better mobile experience
    <div
      className={`
        lg:hidden fixed top-[49px] sm:top-[50px] left-0 w-full h-[calc(100vh-49px)] // Fixed height below header
        bg-white dark:bg-black/80 
        transition-transform duration-300 ease-in-out z-40
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
        overflow-y-auto pb-20 
    `}
    >
      <div className="flex flex-col">
        {/* Navigation Links for Mobile */}
        {navdata.map((item, index) => (
          <MobileLink key={index} item={item} />
        ))}

        {/* --- CTA Buttons (as shown in your image) --- */}
        <div className="p-4 pt-6 space-y-4 bg-white dark:dark:bg-black/80 mx-auto">
          <HeaderCTA />{" "}
          {/* Contains the 'Request a demo' and 'Client Login' buttons */}
        </div>
      </div>
    </div>
  );
};

// --- Main Navbar Component (UNCHANGED from previous mobile implementation) ---
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // ... (rest of color/class definitions remain the same) ...
  const ACCENT_COLOR_CLASS = "teal";
  const ACCENT_LIGHT_SHADE = "teal-400";
  const ACCENT_DARK_SHADE = "teal-600";
  const ctaBtnClass =
    "px-3 py-2 text-xs rounded-lg transition duration-300 shadow-md text-slate-50";
  const linkBaseClasses =
    "relative flex items-center gap-1.5 text-base py-2 transition-all duration-300 tracking-wide";
  const linkTextClasses = `text-gray-600 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400`;
  const dropdownItemClasses = `flex items-center gap-2 py-2 px-3 text-xs text-gray-700 dark:text-gray-300 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-600 transition-colors duration-150`;

  // ... (MegaMenuColumn component definition remains the same) ...
  const MegaMenuColumn = ({ title, items, accentColor }) => {
    const safeAccent = "teal-600";
    const titleClass = `text-sm text-${safeAccent}-600 dark:text-${safeAccent}-400`;
    const hoverClass = `hover:text-${safeAccent}-600 dark:hover:text-${safeAccent}-400`;

    return (
      <div className="p-2 min-w-[150px] max-w-[250px]">
        <h3
          className={`${titleClass} mb-4 text-sm pb-1 border-slate-200 dark:border-gray-700 text-teal-400`}
        >
          {title}
        </h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link || "#"}
                className={`flex items-cente hover:text-teal-600 text-xs font-medium text-gray-700 dark:text-gray-300 ${hoverClass} transition-colors duration-200`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <header className="sticky py-1 text-xs top-0 z-50 w-full flex items-center justify-between backdrop-blur-sm transition-colors duration-500">
        <div className="flex items-center justify-between px-4 sm:px-8 py-2 max-w-7xl mx-auto w-full">
          {/* 1. Logo */}
          <div className="header-logo">
            <HeaderLogo />
          </div>

          {/* 2. Navigation (Desktop) */}
          <nav className="hidden lg:block">
            {/* ... (Desktop nav rendering logic) ... */}
            <ul className="flex gap-2 items-center">
              {navdata.map((item, index) => (
                <li key={index} className="relative group">
                  {/* --- TOP-LEVEL LINK/SPAN --- */}
                  <Link
                    to={item.link || "#"}
                    className={`${linkBaseClasses} ${linkTextClasses} ${
                      item.dropdown ? "pr-2" : "pr-4"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}
                  </Link>

                  {/* --- DROPDOWN RENDER LOGIC (Desktop) --- */}
                  {item.dropdown &&
                    item.dropdownItems &&
                    (item.dropdownItems[0]?.items ? (
                      // MegaMenu Style
                      <div
                        className="
                                                absolute top-full left-0 mt-3 p-4 min-w-[400px] lg:min-w-[600px]
                                                bg-white dark:bg-black/90 border border-slate-200 dark:border-gray-700
                                                rounded-lg shadow-2xl z-50
                                                opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
                                            "
                      >
                        <div className="flex gap-4">
                          {item.dropdownItems.map((category, catIdx) => (
                            <MegaMenuColumn
                              key={catIdx}
                              title={category.title}
                              items={category.items}
                              accentColor={
                                category.accentColor || ACCENT_COLOR_CLASS
                              }
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Simple Dropdown
                      <ul
                        className="
                                                absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48
                                                bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 
                                                rounded-lg shadow-2xl z-50
                                                opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
                                            "
                      >
                        {item.dropdownItems.map((dropItem, i) => (
                          <li key={i}>
                            <Link
                              to={dropItem.link || "#"}
                              className={dropdownItemClasses}
                            >
                              {dropItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. CTA, Theme Toggle, and Mobile Menu Icon */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <HeaderCTA /> {/* Desktop CTA */}
            </div>
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 dark:text-gray-200 transition-colors"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* 4. Mobile Menu Content */}
      <MobileMenu
        navdata={navdata}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        ACCENT_DARK_SHADE={ACCENT_DARK_SHADE}
        linkTextClasses={linkTextClasses}
        dropdownItemClasses={dropdownItemClasses}
        linkBaseClasses={linkBaseClasses}
      />

      {/* Optional: Overlay to close menu on outside click */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
