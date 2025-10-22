import React from "react";
// ⚠️ FIX: Removed unused imports (Users, Trophy, Sparkles)
// The FeatureCard component should import these instead.
import { ArrowRight } from "lucide-react";
import FeatureCard from "./FeatureCard";

// Who we are section
const WhoWeAre = () => {
  return (
    // Converted: my-xl-9 -> xl:my-32, my-5 -> my-12
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Text Content Column */}
          <div className="w-full px-4 lg:w-6/12 xl:w-5/12">
            <div className="mb-8">
              {/* Converted: text-uppercase ls-md fw-semibold -> uppercase tracking-widest font-semibold */}
              <small className="uppercase tracking-widest text-sm font-semibold text-teal-500">
                who we are
              </small>
              {/* Converted: h1 mt-4 mb-3 -> text-4xl lg:text-5xl mt-4 mb-3 font-extrabold */}
              <h2 className="text-4xl lg:text-5xl mt-4 mb-5 font-extrabold text-gray-900">
                Believes in the power of creative strategy.
              </h2>
              <p className="mb-3 text-gray-600 lg:text-sm text-xs">
                We are a web design and development agency. We specialise in
                bridging the gap between our clients and their goals.
              </p>
              <p className="mb-0 text-gray-600 lg:text-sm text-xs">
                Consequat mauris nunc congue nisi vitae suscipit tellus mauris
                a. Amet mattis vulputate enim nulla aliquet porttitor lacus.
              </p>
            </div>

            {/* Link with Icon */}
            {/* Converted: icon-link icon-link-hover (custom class approximated with tailwind utility classes) */}
            <a
              href="/about"
              className="inline-flex lg:text-sm text-xs items-center text-teal-600 hover:text-teal-800 font-medium group transition duration-300"
            >
              More about us
              {/* Replaced Bootstrap SVG with Lucide ArrowRight */}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Image Grid Column */}
          <div className="w-full px-4 lg:w-6/12 xl:w-6/12 xl:ml-[8.333333%] mt-8 lg:mt-0">
            <div className="flex flex-wrap -mx-4">
              {/* Left Image Card */}
              <div className="w-full md:w-6/12 px-4">
                <a href="#!">
                  <div
                    className="rounded-xl border-teal-500 border-2 overflow-hidden  hover:-translate-y-1 transition duration-300"
                    style={{
                      backgroundImage:
                        "url(https://img.freepik.com/premium-photo/real-diverse-office-indian-it-programmer-working-desktop-computer_1313853-202376.jpg?ga=GA1.1.75141066.1760189849&semt=ais_hybrid&w=740&q=80)",
                      backgroundRepeat: "no-repeat",
                      height: "386px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </a>
              </div>

              <div className="w-full md:w-6/12 px-4 mt-8 md:mt-0">
                <a href="#!">
                  <div
                    className="mb-4 rounded-xl border-teal-500 border-2 overflow-hidden  hover:shadow-xl hover:-translate-y-1 transition duration-300"
                    style={{
                      backgroundImage:
                        "url(https://img.freepik.com/free-photo/team-software-engineers-doing-brainstorming-office_482257-123976.jpg?ga=GA1.1.75141066.1760189849&semt=ais_hybrid&w=740&q=80)",
                      backgroundRepeat: "no-repeat",
                      height: "180px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </a>

                <a href="#!">
                  <div
                    className="mb-0 border-teal-500 border-2 rounded-xl overflow-hidden  hover:shadow-xl hover:-translate-y-1 transition duration-300"
                    style={{
                      backgroundImage:
                        "url(https://img.freepik.com/free-photo/business-executives-discussing-computer-their-desk_1170-1946.jpg?ga=GA1.1.75141066.1760189849&semt=ais_hybrid&w=740&q=80)",
                      backgroundRepeat: "no-repeat",
                      height: "180px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeatureCard />
    </>
  );
};

export default WhoWeAre;
