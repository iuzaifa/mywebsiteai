// import React from "react";

// let abooutData = {
//   title:
//     "Seamless Software Solutions for the Modern World. Lorem ipsum dolor sit amet, consectetur elit.",

//   description:
//     "Aenean varius dui ut purus pulvinar laoreet. Quisque imperdiet, odio eget vestibulum molestie, risus enim suscipit purus, sit amet condimentum diam leo eu justo. Integer dapibus dui id venenatis eros mi, venenatis eget consequat a, vulputate vel diam.",

//   // Assuming 'public/bgabout-us.jpg' is the path to your engaging image
//   image: "public/bg/about-us2.jpg",
// };

// const AboutSection = () => {
//   return (
//     // Apply full-width dark background and subtle gradient
//     <section className={`relative py-16 md:py-16 overflow-hidde`}>
//       <div className="max-w-7xl mx-auto px-6">
//         {/* --- Content Block (Responsive Layout) --- */}
//         <div className="lg:max-w-4xl">
//           {/* 1. Tagline and Accent Line */}
//           <div className="section-title text-teal-400 mb-6 relative pb-2 inline-block">
//             <span className={`text-sm font-semibold uppercase tracking-widest`}>
//               ABOUT US
//             </span>
//             {/* Accent Line matching the design image */}
//             <span
//               className={`absolute left-0 bottom-0 h-0.5 w-12 bg-teal-400`}
//             ></span>
//           </div>

//           {/* 2. Title */}
//           <h2 className="text-4xl md:text-4xl font-thin text-slate-800 dark:text-slate-400  leading-tight mb-2 md:mb-2">
//             {abooutData.title}
//           </h2>

//           {/* 3. Description & CTA (Side-by-side or stacked on mobile) */}
//           <div className="flex flex-col lg:flex-row lg:items-end justify-between">
//             <p className="text-sm text-slate-800 dark:text-slate-400 font-light mb-8 lg:mb-0 lg:pr-12 lg:max-w-[70%]">
//               {abooutData.description}
//             </p>
//           </div>
//         </div>
//         <div className="mt-5 md:mt-2">
//           <img
//             src={abooutData.image}
//             alt="Developers working on a blueprint"
//             className="w-full h-auto max-h-[350px] object-cover border-b-2 hover:border-b-8 border-teal-500 "
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React from "react";
import {
  ArrowRight,
  Users,
  Award,
  Target,
  CheckCircle,
  Calendar,
  Code,
  Globe,
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <Users className="w-5 h-5" />,
      value: "200+",
      label: "Clients Served",
    },
    {
      icon: <Award className="w-5 h-5" />,
      value: "50+",
      label: "Projects Completed",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      value: "5+",
      label: "Years Experience",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      value: "15+",
      label: "Countries Served",
    },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation Driven",
      description: "Constantly exploring cutting-edge technologies",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality First",
      description: "Never compromising on code quality and best practices",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Deep expertise across modern tech stacks",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-100 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Left Column */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2">
              <div className="w-12 h-px bg-teal-500"></div>
              <span className="text-teal-600 dark:text-teal-400 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Crafting Digital
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Excellence
              </span>
              <br />
              Through Code
            </h2>

            {/* Description */}
            <div className="space-y-4 lg:text-sm text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                We are a passionate team of software engineers, designers, and
                innovators dedicated to transforming complex business challenges
                into elegant digital solutions. With expertise in modern
                technologies like React, Spring Boot, and cloud platforms, we
                build scalable applications that drive real business value.
              </p>
              <p>
                Our approach combines technical excellence with deep industry
                knowledge, ensuring every project delivers exceptional
                performance, security, and user experience.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 px-2 bg-teal-500/10 dark:bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-teal-600 dark:text-teal-400 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 justify-center group">
                Our Story & Mission
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-semibold hover:border-teal-300 dark:hover:border-teal-500 transition-all duration-300">
                Meet The Team
              </button>
            </div>
          </div>

          {/* Image/Visual - Right Column */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative group">
              {/* Image with Modern Styling */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=700&fit=crop&crop=center"
                  alt="Our team collaborating on software development"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <Code className="w-8 h-8" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <Award className="w-6 h-6" />
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-6 left-6 w-full h-full bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-2xl transform skew-y-2 group-hover:skew-y-0 transition-transform duration-500"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 right-8 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  5+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
