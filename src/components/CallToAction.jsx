import React from "react";
import { Zap } from "lucide-react";

const CallToAction = () => {
  return (
    // Section Container: Constrained width, centered, white background, border, margin
    <section className="bg-white lg:py-12 py-8 max-w-6xl mx-auto border mb-7 bg-slate-200/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10">
        {/* Main Flex Container: This creates the two-column layout */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left mb-6 md:mb-0 md:pr-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black/80 max-w-3xl leading-tight">
              Ready to Transform Your Project?
            </h2>

            {/* Subheading/Paragraph */}
            <p className="text-black/70 mt-2 max-w-3xl text-sm">
              Let's build something exceptional together. Start your free
              consultation today.
            </p>
          </div>

          {/* Right Side: CTA Button */}
          <div className="flex-shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent lg:text-sm text-xs  rounded-sm text-white bg-teal-500 hover:bg-teal-600 transition duration-300 transform hover:scale-[1.03] shadow-lg"
            >
              {/* Lucide Icon */}
              <Zap className="w-4 h-4 mr-3" />
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
