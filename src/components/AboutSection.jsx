import React from "react";

let abooutData = {
  title:
    "Seamless Software Solutions for the Modern World. Lorem ipsum dolor sit amet, consectetur elit.",

  description:
    "Aenean varius dui ut purus pulvinar laoreet. Quisque imperdiet, odio eget vestibulum molestie, risus enim suscipit purus, sit amet condimentum diam leo eu justo. Integer dapibus dui id venenatis eros mi, venenatis eget consequat a, vulputate vel diam.",

  // Assuming 'public/bgabout-us.jpg' is the path to your engaging image
  image: "public/bg/about-us2.jpg",
};

const AboutSection = () => {
  return (
    // Apply full-width dark background and subtle gradient
    <section className={`relative py-16 md:py-16 overflow-hidde`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Content Block (Responsive Layout) --- */}
        <div className="lg:max-w-4xl">
          {/* 1. Tagline and Accent Line */}
          <div className="section-title text-teal-400 mb-6 relative pb-2 inline-block">
            <span className={`text-sm font-semibold uppercase tracking-widest`}>
              ABOUT US
            </span>
            {/* Accent Line matching the design image */}
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-12 bg-teal-400`}
            ></span>
          </div>

          {/* 2. Title */}
          <h2 className="text-4xl md:text-4xl font-thin text-slate-800 dark:text-slate-400  leading-tight mb-2 md:mb-2">
            {abooutData.title}
          </h2>

          {/* 3. Description & CTA (Side-by-side or stacked on mobile) */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between">
            <p className="text-sm text-slate-800 dark:text-slate-400 font-light mb-8 lg:mb-0 lg:pr-12 lg:max-w-[70%]">
              {abooutData.description}
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-2">
          <img
            src={abooutData.image}
            alt="Developers working on a blueprint"
            className="w-full h-auto max-h-[350px] object-cover border-b-2 hover:border-b-8 border-teal-500 "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
