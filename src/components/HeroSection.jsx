// src/components/HeroSection.jsx

import React from "react";
import { avatars } from "../../src/data"; // Import data

const HeroSection = () => {
  return (
    <div className="lg:max-w-4xl mx-auto pt-4 lg:pb-16 text-center">
      {/* Sparkle Banner */}
      <div className="inline-flex items-center justify-center mb-5 px-2 mx-4 py-1 rounded-full shadow-sm lg:text-xs text-xs lg:font-medium text-gray-600 border border-gray-300/90">
        <span className="text-teal-500 lg:mr-2 mr-1">✨</span>
        <marquee>
          Video Editor and Analytics, Multichannel Publishing — all in one.
        </marquee>
      </div>

      {/* Main Headline */}
      <h1 className="lg:text-5xl text-4xl lg:px-1 px-2 font-extrabold  leading-tight tracking-tighter dark:text-gray-300 text-black/95  mb-6">
        A
        <span className="relative mx-3">
          <span className="text-teal-600">Creative</span>
          {/* Underline effect */}
          <svg
            className="absolute bottom-0 left-0 w-full h-1"
            viewBox="0 0 100 5"
            preserveAspectRatio="none"
          >
            <path
              d="M0 4 C20 0, 80 0, 100 4"
              stroke="#2D9289"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </span>
        Software Development Company
        <br />
        THAT DRIVES Technologies
      </h1>

      {/* Subtitle */}
      <p className="lg:text-sm lg:px-1 px-8 text-xs lg:max-w-2xl mx-auto text-gray-600 dark:text-slate-500 mb-5">
        We enhance businesses' ability to boost customer engagement through the
        integration of personalized and interactive elements into their videos.
      </p>

      {/* Trust Banner */}
      <div className="lg:w-4xl lg:flex items-center justify-center mb-7 w-3xs">
        <div className="flex -space-x-3 mr-3 justify-center">
          {avatars.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Avatar ${index + 1}`}
              className="lg:w-10 lg:h-10 h-7 w-7 rounded-full border-2 border-white object-cover"
              style={{ zIndex: avatars.length - index }}
            />
          ))}
        </div>
        <p className="lg:text-sm text-xs font-semibold text-gray-700">
          We are trusted by{" "}
          <span className="text-teal-600 font-bold">Fortune 500 Companies</span>
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-center space-x-4">
        <button className="flex items-center space-x-2 px-6 py-2 text-sm text-white bg-teal-500 rounded-sm hover:bg-teal-600 transition duration-200 shadow-xl">
          <span>Request a Demo</span>
        </button>
        <button className="flex items-center space-x-2 px-11 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-sm hover:bg-gray-50 transition duration-200 shadow-md">
          <span>Contact us </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
