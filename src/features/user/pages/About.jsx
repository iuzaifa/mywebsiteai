import React from "react";

const About = () => {
  return (
    <div>
      <section className="relative bg-gray-100 py-16 px-6 md:px-20 overflow-hidden">
        {/* Optional Noise Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          {/* Left: Image or Illustration */}
          <div className="flex justify-center">
            <img
              src="https://www.vacobinary.in/img/bg-16.jpg"
              alt="About Us"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right: Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are a team of passionate developers and designers dedicated to
              crafting high-quality, user-centric digital solutions. Our mission
              is to help businesses grow through technology, creativity, and
              innovation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              From modern web applications to custom software systems, we
              deliver reliable solutions tailored to meet every client's unique
              goals.
            </p>

            <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
