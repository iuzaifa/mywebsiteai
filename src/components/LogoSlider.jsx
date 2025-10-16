// src/components/LogoSlider.jsx

import React from "react";
import { duplicatedLogos } from "../data"; // Import duplicated logos

const LogoSlider = () => {
  return (
    <div className="max-w-7xl mx-auto py-16">
      <p className="text-gray-500 mb-12 flex items-center justify-center text-sm font-medium">
        Companies who trust us
        <span className="text-lg ml-2">→</span>
      </p>

      {/* Slider Container (fixed width, hides overflow) */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        {/* Inner Container (Applies the `animate-loop-scroll` class defined in tailwind.config.js) */}
        <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll">
          {duplicatedLogos.map((logo, index) => (
            <span
              key={`${logo.name}-${index}`} // Unique key for duplicated items
              className={`flex-shrink-0 text-6xl font-extrabold uppercase ${logo.color} opacity-80 mx-8`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
