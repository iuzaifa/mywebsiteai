// import React from "react";
// import { CircleSmall, Rocket, LayoutGrid, Code, Zap } from "lucide-react";

// // --- Mock Data ---
// // Using realistic service data for better visual context
// const SERVICE_CARDS_DATA = [
//   {
//     icon: Rocket,
//     title: "Digital Strategy",
//     description:
//       "Tailored roadmaps for digital transformation, market penetration, and long-term scalable growth.",
//     features: [
//       "Market Analysis",
//       "SEO Audit",
//       "Content Planning",
//       "Goal Setting",
//     ],
//     buttonText: "Plan Now",
//   },
//   {
//     icon: LayoutGrid,
//     title: "UI/UX Design",
//     description:
//       "Creating intuitive, aesthetically pleasing, and user-centric interfaces based on deep research and testing.",
//     features: [
//       "Wireframing",
//       "Prototyping",
//       "Usability Testing",
//       "Design Systems",
//     ],
//     buttonText: "See Designs",
//   },
//   {
//     icon: Code,
//     title: "Web Development",
//     description:
//       "Building high-performance, secure, and custom web applications with modern framework architectures.",
//     features: [
//       "React/Vue/Angular",
//       "Headless CMS",
//       "API Integration",
//       "Cloud Deployment",
//     ],
//     buttonText: "Start Project",
//   },
//   {
//     icon: Zap,
//     title: "Cloud Migration",
//     description:
//       "Seamless transition to scalable cloud infrastructure (AWS, Azure, GCP) ensuring security and compliance.",
//     features: [
//       "Infrastructure Setup",
//       "Security Audit",
//       "DevOps Pipelines",
//       "Cost Optimization",
//     ],
//     buttonText: "Contact Experts",
//   },
// ];

// // --- Service Card Component ---
// const ServiceCard = ({
//   icon: Icon,
//   title,
//   description,
//   features,
//   buttonText,
// }) => {
//   // Increased hover scale slightly and made the teal shadow more visible
//   const CARD_CLASSES =
//     "bg-black/90 p-6 sm:p-8 rounded-xl border border-gray-700/50 flex flex-col h-full transition duration-300 transform hover:scale-[1.03] ";
//   const BUTTON_CLASSES =
//     "mt-auto w-full py-3 hover:text-slate-100 text-sm rounded-lg text-teal-400 border border-teal-400/50 bg-gray-900/50 hover:bg-teal-500 hover:text-gray-900 transition duration-300";

//   return (
//     <div className={CARD_CLASSES}>
//       <div className="mb-4">
//         {/* Icon in Accent Color */}
//         <Icon
//           size={36}
//           className="text-teal-400 mb-4 bg-gray-700/50 p-2 rounded-full shadow-lg"
//         />

//         <h4 className="text-lg font- text-white/90 mb-2 pb-1 text-left border-b border-slate-600">
//           {title}
//         </h4>
//         <p className="text-xs sm:text-sm text-slate-400 mb-2 text-left">
//           {description}
//         </p>
//       </div>

//       <div className="mb-6">
//         <ul className="text-sm space-y-1 text-left text-slate-400">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-start">
//               <CircleSmall
//                 size={10}
//                 className="mt-1 mr-2 flex-shrink-0 text-teal-400"
//               />
//               <span className="text-xs sm:text-sm">{feature}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <button className={BUTTON_CLASSES}>{buttonText}</button>
//     </div>
//   );
// };

// // --- Main Service Section Component ---
// const ServiceSection = () => {
//   return (
//     // Applied dark background and responsive padding
//     <section className=" py-16 sm:py-24 text-center">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* --- Section Header --- */}
//         <div className="mb-12">
//           <div className="section-title text-teal-400 mb-4 relative pb-2 inline-block">
//             <span className="text-sm font-semibold uppercase tracking-widest">
//               OUR SERVICES
//             </span>
//             {/* Centered underline accent */}
//             <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-12 bg-teal-400 rounded-full"></span>
//           </div>
//           <h2 className="text-3xl sm:text-5xl font-thin text-slate-600 dark:text-slate-400 leading-tight mt-4">
//             Transform Your Vision into <br /> Digital Reality
//           </h2>
//           <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 max-w-3xl mx-auto">
//             From strategic planning to final deployment, we offer end-to-end
//             solutions that <br />
//             drive real business value.
//           </p>
//         </div>

//         {/* --- Services Grid (Mobile Responsive) --- */}
//         <div
//           // Explicitly set 1 column on mobile, 2 on medium screens, and 4 on large screens (lg)
//           className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4"
//         >
//           {SERVICE_CARDS_DATA.map((card, index) => (
//             <ServiceCard
//               key={index}
//               icon={card.icon}
//               title={card.title}
//               description={card.description}
//               features={card.features}
//               buttonText={card.buttonText}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;

// import React from "react";
// import {
//   ArrowRight,
//   Code,
//   Cloud,
//   Smartphone,
//   Cpu,
//   GitBranch,
//   CheckCircle,
//   Palette,
//   Zap,
//   Database,
//   Shield,
//   Users,
//   Globe,
//   ShoppingCart,
//   Search,
//   Gauge,
// } from "lucide-react";

// const ServiceSection = () => {
//   const services = [
//     {
//       title: "Custom Software Development",
//       description:
//         "Tailored solutions built with modern technologies to solve your unique business challenges and drive digital transformation.",
//       icon: <Code className="w-6 h-6" />,
//       features: [
//         "Scalable Architecture",
//         "Modern Tech Stack",
//         "Agile Development",
//       ],
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Cloud Solutions & DevOps",
//       description:
//         "End-to-end cloud infrastructure and CI/CD pipelines for scalable, reliable, and cost-effective application deployment.",
//       icon: <Cloud className="w-6 h-6" />,
//       features: ["AWS & Azure", "Infrastructure as Code", "Auto Scaling"],
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Mobile App Development",
//       description:
//         "Cross-platform mobile applications with native performance, offline capabilities, and seamless user experiences.",
//       icon: <Smartphone className="w-6 h-6" />,
//       features: ["React Native", "Flutter", "Native Performance"],
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       title: "UI/UX Design",
//       description:
//         "User-centered design that combines aesthetics with functionality, creating intuitive and engaging digital experiences.",
//       icon: <Palette className="w-6 h-6" />,
//       features: ["User Research", "Prototyping", "Design Systems"],
//       gradient: "from-orange-500 to-red-500",
//     },
//     {
//       title: "E-commerce Solutions",
//       description:
//         "Complete online store development with secure payment integration, inventory management, and analytics.",
//       icon: <ShoppingCart className="w-6 h-6" />,
//       features: ["Payment Integration", "Inventory Management", "Analytics"],
//       gradient: "from-teal-500 to-blue-500",
//     },
//     {
//       title: "AI & Machine Learning",
//       description:
//         "Intelligent solutions powered by artificial intelligence for data-driven insights and automation.",
//       icon: <Zap className="w-6 h-6" />,
//       features: ["Predictive Analytics", "Machine Learning", "AI Automation"],
//       gradient: "from-yellow-500 to-orange-500",
//     },
//     {
//       title: "Enterprise Security",
//       description:
//         "Comprehensive security solutions including threat detection, data encryption, and compliance management.",
//       icon: <Shield className="w-6 h-6" />,
//       features: ["Threat Detection", "Data Encryption", "Compliance"],
//       gradient: "from-red-500 to-pink-500",
//     },
//     {
//       title: "SEO & Digital Marketing",
//       description:
//         "Data-driven digital marketing strategies to increase visibility, drive traffic, and boost conversions.",
//       icon: <Search className="w-6 h-6" />,
//       features: ["Technical SEO", "Content Strategy", "Analytics"],
//       gradient: "from-indigo-500 to-purple-500",
//     },
//   ];

//   const PremiumServiceCard = ({ service, index }) => (
//     <div className="group relative">
//       {/* Glassmorphism Card */}
//       <div className="relative bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
//         {/* Animated Background Gradient */}
//         <div
//           className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
//         ></div>

//         {/* Subtle Grid Pattern */}
//         <div
//           className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
//           style={{
//             backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
//             backgroundSize: "20px 20px",
//           }}
//         ></div>

//         {/* Premium Icon Container */}
//         <div className="relative mb-6">
//           <div
//             className={`w-14 h-14 bg-gradient-to-r ${
//               service.gradient
//             } rounded-2xl flex items-center justify-center text-white shadow-lg shadow-${
//               service.gradient.split(" ")[1]
//             }/30 group-hover:scale-110 transition-transform duration-500`}
//           >
//             {service.icon}
//           </div>
//           {/* Outer Glow Effect */}
//           <div
//             className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
//           ></div>
//         </div>

//         {/* Content */}
//         <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-500 transition-all duration-500">
//           {service.title}
//         </h3>

//         <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm">
//           {service.description}
//         </p>

//         {/* Features */}
//         <div className="space-y-2 mb-6">
//           {service.features.map((feature, featureIndex) => (
//             <div
//               key={featureIndex}
//               className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
//             >
//               <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
//               {feature}
//             </div>
//           ))}
//         </div>

//         {/* Premium CTA Button */}
//         <button className="w-full py-3 text-teal-400 border border-teal-400/50 rounded-xl font-semibold hover:bg-teal-500 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 group/btn backdrop-blur-sm">
//           Explore Service
//           <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
//         </button>

//         {/* Corner Accents */}
//         <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-teal-400/20 rounded-tr-2xl group-hover:border-teal-400/50 transition-colors duration-500"></div>
//         <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-teal-400/20 rounded-bl-2xl group-hover:border-teal-400/50 transition-colors duration-500"></div>
//       </div>

//       {/* Outer Glow on Hover */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
//       ></div>
//     </div>
//   );

//   return (
//     <section
//       id="services"
//       className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute top-10 left-10 w-72 h-72 bg-teal-100 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Enhanced Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
//           <div className="inline-flex flex-col items-center space-y-3 mb-8">
//             <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
//             <span className="text-teal-600 dark:text-teal-400 font-semibold text-sm uppercase tracking-wider">
//               OUR SERVICES
//             </span>
//           </div>

//           <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
//             Premium Software
//             <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
//               {" "}
//               Solutions
//             </span>
//           </h2>

//           <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
//             Delivering cutting-edge technology services with unparalleled
//             quality, innovation, and attention to detail for businesses
//             worldwide.
//           </p>
//         </div>

//         {/* Premium Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//           {services.map((service, index) => (
//             <PremiumServiceCard key={index} service={service} index={index} />
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-gray-700/50">
//             <div className="text-left">
//               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
//                 Ready to elevate your business?
//               </h3>
//               <p className="text-slate-600 dark:text-slate-300">
//                 Let's discuss how our premium services can transform your
//                 digital presence.
//               </p>
//             </div>
//             <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
//               Start Your Project
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;


import React from "react";
import {
  ArrowRight,
  Code,
  Cloud,
  Smartphone,
  CheckCircle,
  Palette,
  Zap,
  ShoppingCart,
  Search,
  Shield,
} from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailored solutions built with modern technologies to solve your unique business challenges and drive digital transformation.",
      icon: <Code className="w-6 h-6" />,
      features: [
        "Scalable Architecture",
        "Modern Tech Stack",
        "Agile Development",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cloud Solutions & DevOps",
      description:
        "End-to-end cloud infrastructure and CI/CD pipelines for scalable, reliable, and cost-effective application deployment.",
      icon: <Cloud className="w-6 h-6" />,
      features: ["AWS & Azure", "Infrastructure as Code", "Auto Scaling"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications with native performance, offline capabilities, and seamless user experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["React Native", "Flutter", "Native Performance"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with functionality, creating intuitive and engaging digital experiences.",
      icon: <Palette className="w-6 h-6" />,
      features: ["User Research", "Prototyping", "Design Systems"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Complete online store development with secure payment integration, inventory management, and analytics.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Payment Integration", "Inventory Management", "Analytics"],
      gradient: "from-teal-500 to-blue-500",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions powered by artificial intelligence for data-driven insights and automation.",
      icon: <Zap className="w-6 h-6" />,
      features: ["Predictive Analytics", "Machine Learning", "AI Automation"],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Enterprise Security",
      description:
        "Comprehensive security solutions including threat detection, data encryption, and compliance management.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Threat Detection", "Data Encryption", "Compliance"],
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "SEO & Digital Marketing",
      description:
        "Data-driven digital marketing strategies to increase visibility, drive traffic, and boost conversions.",
      icon: <Search className="w-6 h-6" />,
      features: ["Technical SEO", "Content Strategy", "Analytics"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const PremiumServiceCard = ({ service }) => (
    // Card Wrapper: Added responsive width classes for carousel mode (w-11/12, sm:w-1/2, md:w-1/3) and flex-shrink-0
    <div className="group relative flex-shrink-0 w-11/12 sm:w-72 md:w-80 lg:w-auto lg:flex-shrink snap-center">
      {/* Glassmorphism Card */}
      <div className="relative bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] overflow-hidden h-full flex flex-col">
        {/* Subtle Grid Pattern - KEPT */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Premium Icon Container */}
        <div className="relative mb-6">
          <div
            className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}
          >
            {service.icon}
          </div>
          {/* Outer Glow Effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
          ></div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-500 transition-all duration-500">
          {service.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm flex-grow">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6 mt-auto">
          {" "}
          {/* Added mt-auto to push to bottom */}
          {service.features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        {/* Premium CTA Button */}
        <button className="w-full py-3 text-teal-400 border border-teal-400/50 rounded-xl font-semibold hover:bg-teal-500 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 group/btn backdrop-blur-sm">
          Explore Service
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-teal-400/20 rounded-tr-2xl group-hover:border-teal-400/50 transition-colors duration-500"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-teal-400/20 rounded-bl-2xl group-hover:border-teal-400/50 transition-colors duration-500"></div>
      </div>

      {/* Outer Glow on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
      ></div>
    </div>
  );

  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-100 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header - UNCHANGED */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex flex-col items-center space-y-3 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
            <span className="text-teal-600 dark:text-teal-400 font-semibold text-sm uppercase tracking-wider">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Premium Software
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Solutions
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Delivering cutting-edge technology services with unparalleled
            quality, innovation, and attention to detail for businesses
            worldwide.
          </p>
        </div>

        {/* --- Responsive Services Carousel/Grid --- */}
        <div
          // CAROUSEL LOGIC:
          // flex and overflow-x-scroll for mobile/tablet carousel
          // lg:grid-cols-4 for desktop grid reset
          // space-x-6 for gaps in carousel mode
          // snap-x snap-mandatory for smooth scrolling
          // -mx-4/px-4 to allow scroll items to reach edge on mobile (full width scroll)
          className="flex overflow-x-scroll space-x-6 pb-6 pt-2 snap-x snap-mandatory -mx-4 px-4 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-x-auto lg:mx-auto lg:px-0 no-scrollbar"
        >
          {services.map((service, index) => (
            <PremiumServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        {/* NOTE: To completely hide the scrollbar, you'll need to define a custom CSS utility 
          like '.no-scrollbar' in your project's main CSS file:
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        */}

        {/* Bottom CTA - UNCHANGED */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-gray-700/50">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Ready to elevate your business?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Let's discuss how our premium services can transform your
                digital presence.
              </p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;