import React from "react";

// --- Navbar Component Section ---
const Navbar = () => {
  const navLinkClass =
    "text-gray-700 hover:text-gray-900 transition duration-150 font-medium text-sm";
  const btnClass =
    "flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition duration-150 shadow-md";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo/Brand */}
        <a href="#" className="text-2xl font-bold text-gray-800">
          E-Thinks
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
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

          {/* Action Buttons */}
          <div className="flex items-center space-x-6">
            <button className={btnClass}>
              <span>Request a Demo</span>
              <span className="text-lg">→</span>
            </button>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium text-sm"
            >
              Log in
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

// --- Hero Section Component ---
const HomePage = () => {
  // Mock image data for the avatars (assuming a service like Unsplash or local files)
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250",
    "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=250",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250",
  ];

  // Mock logo data
  // const logos = [
  //   { name: "Netflix", color: "text-red-600" },
  //   { name: "Stripe", color: "text-indigo-600" },
  //   { name: "Google", color: "text-gray-800" },
  //   { name: "X", color: "text-black" },
  //   { name: "Zara", color: "text-black" },
  // ];
  const logos = [
    { name: "Alpha", color: "text-red-500" },
    { name: "Delta", color: "text-yellow-500" },
    { name: "Beta", color: "text-blue-500" },
    { name: "Gamma", color: "text-green-500" },
    { name: "Delta", color: "text-yellow-500" },
    { name: "Epsilon", color: "text-purple-500" },
    { name: "Delta", color: "text-yellow-500" },
    // Add more as needed
  ];

  // Duplicate the logos array to ensure a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    // Outer container for the entire page, including the light teal background gradient
    <div className="min-h-screen bg-white">
      {/* Background Gradient Layer (Matches the image's top-right glow) */}
      <div
        className="absolute top-0 right-0 w-full h-full opacity-30 z-0 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 0%, rgba(204, 251, 241, 0.5) 0%, rgba(255, 255, 255, 0) 40%)",
        }}
      ></div>

      {/* Main Content (z-10 to sit above the background) */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto pt-16 pb-16 text-center">
          {/* Sparkle Banner */}
          <div className="inline-flex items-center justify-center mb-5 px-4 py-1 bg-gray-50 rounded-full shadow-sm text-xs font-medium text-gray-700 border border-gray-200">
            <span className="text-yellow-500 mr-2">✨</span>
            Video Editor and Analytics, Multichannel Publishing — all in one.
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tighter text-gray-900 mb-6">
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
            VIDEO CREATION AGENCY
            <br />
            THAT DRIVES ENGAGEMENT
          </h1>

          {/* Subtitle */}
          <p className="text-sm max-w-2xl mx-auto text-gray-600 mb-5">
            We enhance businesses' ability to boost customer engagement through
            the integration of personalized and interactive elements into their
            videos.
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
              <span className="text-teal-600 font-bold">
                Fortune 500 Companies
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 px-6 py-2 text-sm font-semibold text-white bg-teal-500 rounded-sm hover:bg-teal-600 transition duration-200 shadow-xl shadow-teal-500/50">
              <span>Request a Demo</span>
              <span className="text-xl">→</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-2 text-sm font-semibold text-gray-800 bg-white border border-gray-300 rounded-sm hover:bg-gray-50 transition duration-200 shadow-md">
              <span>Create your own</span>
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Client Logos Section */}
        {/* <div className="max-w-7xl mx-auto py-16 text-center">
          <p className="text-gray-500 mb-12 flex items-center justify-center text-sm font-medium">
            Companies who trust us
            <span className="text-lg ml-2">→</span>
          </p>
          <div className="flex justify-around items-center space-x-8 px-8">
            {logos.map((logo) => (
              <span
                key={logo.name}
                className={`text-6xl font-extrabold uppercase ${logo.color} opacity-80`}
                // Simplified logo representation using bold text, matching the visual weight
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div> */}
        <div className="max-w-7xl mx-auto py-16">
          <p className="text-gray-500 mb-12 flex items-center justify-center text-sm font-medium">
            Companies who trust us
            <span className="text-lg ml-2">→</span>
          </p>

          {/* Slider Container (fixed width, hides overflow) */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            {/* Inner Container (will be animated) */}
            <div
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll"
              // Add a `group` class if you want hover pause, and adjust the animation duration
              // e.g., group-hover:pause
            >
              {duplicatedLogos.map((logo, index) => (
                <span
                  key={`${logo.name}-${index}`} // Use index in key since logos are duplicated
                  className={`flex-shrink-0 text-6xl font-extrabold uppercase ${logo.color} opacity-80 mx-8`}
                >
                  {logo.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
