// src/components/HeroSection.jsx

import React from "react";
import { avatars } from "../../src/data"; // Import data

const HeroSection = () => {
  return (
    <div className="max-w-4xl mx-auto pt- pb-16 text-center">
      {/* Sparkle Banner */}
      <div className="inline-flex items-center justify-center mb-5 px-4 py-1 bg-gray-950 rounded-full shadow-sm text-xs font-medium text-gray-700 border border-gray-700">
        <span className="text-teal-500 mr-2">✨</span>
        Video Editor and Analytics, Multichannel Publishing — all in one.
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl font-extrabold leading-tight tracking-tighter text-gray-300 mb-6">
        A
        <span className="relative mx-3">
          <span className="text-teal-600">CREATIVE</span>
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
      <p className="text-sm max-w-2xl mx-auto text-gray-400 mb-5">
        We enhance businesses' ability to boost customer engagement through the
        integration of personalized and interactive elements into their videos.
      </p>

      {/* Trust Banner */}
      <div className="flex items-center justify-center mb-5">
        <div className="flex -space-x-3 mr-3">
          {avatars.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Avatar ${index + 1}`}
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
              style={{ zIndex: avatars.length - index }}
            />
          ))}
        </div>
        <p className="text-sm font-semibold text-gray-700">
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
