import React from "react";
import Navbar from "../../../components/layout/Navbar";
import HeroSection from "../../../components/HeroSection";
import LogoSlider from "../../../components/LogoSlider";
import Footer from "../../../components/layout/Footer";
import AboutSection from "../../../components/AboutSection";
import ServiceSection from "../../../components/ServiceSection";

const Home = () => {
  return (
    <>
      <div className="min-h-scree dark:bg-black bg-slate-100/90">
        {/* Background Gradient Layer */}
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
          <HeroSection />
          <LogoSlider />
          <AboutSection />
          <ServiceSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
