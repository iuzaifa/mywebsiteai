// import React, { useState } from "react";
// import {
//   ArrowRight,
//   Quote,
//   Star,
//   Play,
//   Building,
//   Globe,
//   ShoppingBag,
//   Heart,
//   GraduationCap,
//   Car,
//   Smartphone,
// } from "lucide-react";

// const CompaniesTrustUs = () => {
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   const companies = [
//     {
//       name: "TechNova Inc",
//       logo: <Building className="w-8 h-8" />,
//       industry: "Enterprise Software",
//       color: "from-blue-500 to-blue-600",
//     },
//     {
//       name: "Global Retail",
//       logo: <ShoppingBag className="w-8 h-8" />,
//       industry: "E-commerce",
//       color: "from-green-500 to-green-600",
//     },
//     {
//       name: "EduLearn",
//       logo: <GraduationCap className="w-8 h-8" />,
//       industry: "Education Technology",
//       color: "from-purple-500 to-purple-600",
//     },
//     {
//       name: "AutoDrive",
//       logo: <Car className="w-8 h-8" />,
//       industry: "Automotive",
//       color: "from-orange-500 to-orange-600",
//     },
//     {
//       name: "HealthPlus",
//       logo: <Heart className="w-8 h-8" />,
//       industry: "Healthcare",
//       color: "from-red-500 to-red-600",
//     },
//     {
//       name: "MobileFirst",
//       logo: <Smartphone className="w-8 h-8" />,
//       industry: "Mobile Solutions",
//       color: "from-cyan-500 to-cyan-600",
//     },
//     {
//       name: "CloudScale",
//       logo: <Globe className="w-8 h-8" />,
//       industry: "Cloud Services",
//       color: "from-indigo-500 to-indigo-600",
//     },
//     {
//       name: "FinSecure",
//       logo: <Building className="w-8 h-8" />,
//       industry: "Financial Services",
//       color: "from-emerald-500 to-emerald-600",
//     },
//     {
//       name: "DataInsight",
//       logo: <Building className="w-8 h-8" />,
//       industry: "Analytics",
//       color: "from-violet-500 to-violet-600",
//     },
//     {
//       name: "LogiChain",
//       logo: <Building className="w-8 h-8" />,
//       industry: "Supply Chain",
//       color: "from-amber-500 to-amber-600",
//     },
//     {
//       name: "MediaFlow",
//       logo: <Play className="w-8 h-8" />,
//       industry: "Media & Entertainment",
//       color: "from-rose-500 to-rose-600",
//     },
//     {
//       name: "SmartOffice",
//       logo: <Building className="w-8 h-8" />,
//       industry: "Enterprise Solutions",
//       color: "from-sky-500 to-sky-600",
//     },
//   ];

//   const testimonials = [
//     {
//       quote:
//         "Their team delivered a scalable e-commerce platform that increased our conversion rate by 45%. The technical expertise and attention to detail were exceptional.",
//       author: "Sarah Chen",
//       position: "CTO, Global Retail",
//       company: "Global Retail",
//       rating: 5,
//     },
//     {
//       quote:
//         "The custom learning management system they built transformed our educational platform. Performance improved by 60% and user engagement tripled.",
//       author: "Michael Rodriguez",
//       position: "Product Director, EduLearn",
//       company: "EduLearn",
//       rating: 5,
//     },
//     {
//       quote:
//         "Outstanding cloud migration strategy and implementation. Our infrastructure costs reduced by 35% while achieving 99.9% uptime.",
//       author: "Jennifer Park",
//       position: "VP of Engineering, CloudScale",
//       company: "CloudScale",
//       rating: 5,
//     },
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100">
//       <div className="container mx-auto px-4">
//         {/* Header Section */}
//         <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium mb-6 shadow-sm">
//             <Star className="w-4 h-4 mr-2 text-amber-500" />
//             Trusted by Industry Leaders
//           </div>

//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//             Companies Who Trust Our Expertise
//           </h2>

//           <p className="text-xl text-gray-600 leading-relaxed">
//             We've empowered businesses across diverse sectors with our bespoke
//             software solutions, driving innovation and digital transformation at
//             scale.
//           </p>
//         </div>

//         {/* Companies Grid */}
//         <div className="max-w-7xl mx-auto mb-16 lg:mb-20">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8">
//             {companies.map((company, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-gray-300 hover:scale-105"
//               >
//                 <div className="flex flex-col items-center text-center space-y-3">
//                   {/* Company Logo */}
//                   <div
//                     className={`w-16 h-16 bg-gradient-to-r ${company.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-md`}
//                   >
//                     {company.logo}
//                   </div>

//                   {/* Company Info */}
//                   <div className="space-y-1">
//                     <h3 className="font-semibold text-gray-900 text-sm leading-tight">
//                       {company.name}
//                     </h3>
//                     <p className="text-gray-500 text-xs">{company.industry}</p>
//                   </div>
//                 </div>

//                 {/* Hover Gradient Border */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Featured Testimonial */}
//         <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
//           <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 lg:p-12">
//             <div className="text-center mb-6">
//               <Quote className="w-8 h-8 text-cyan-500 mx-auto mb-4" />
//               <div className="flex justify-center mb-4">
//                 {[...Array(testimonials[activeTestimonial].rating)].map(
//                   (_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 text-amber-500 fill-current"
//                     />
//                   )
//                 )}
//               </div>
//             </div>

//             <blockquote className="text-xl lg:text-2xl text-gray-700 text-center leading-relaxed mb-6 font-light">
//               "{testimonials[activeTestimonial].quote}"
//             </blockquote>

//             <div className="text-center">
//               <div className="font-semibold text-gray-900 text-lg">
//                 {testimonials[activeTestimonial].author}
//               </div>
//               <div className="text-gray-600 text-sm">
//                 {testimonials[activeTestimonial].position}
//               </div>
//             </div>

//             {/* Testimonial Navigation */}
//             <div className="flex justify-center space-x-2 mt-6">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveTestimonial(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     activeTestimonial === index
//                       ? "bg-cyan-500 scale-125"
//                       : "bg-gray-300 hover:bg-gray-400"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
//             {[
//               { number: "200+", label: "Projects Delivered" },
//               { number: "50+", label: "Enterprise Clients" },
//               { number: "99.9%", label: "Uptime Record" },
//               { number: "24/7", label: "Support Coverage" },
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 text-sm lg:text-base">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 lg:p-12 text-white shadow-xl">
//             <h3 className="text-2xl lg:text-3xl font-bold mb-4">
//               Ready to Join Our Success Stories?
//             </h3>
//             <p className="text-cyan-100 text-lg mb-6 max-w-2xl mx-auto">
//               Let's discuss how our expertise can drive your digital
//               transformation and deliver exceptional results.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center">
//                 View Case Studies
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//               <button className="px-8 py-4 bg-transparent text-white border border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
//                 Start Your Project
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompaniesTrustUs;


import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Quote,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CompaniesTrustUs = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const companies = [
    {
      name: "Amazon",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      industry: "E-commerce & Cloud",
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "Meta",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      industry: "Social Technology",
      color: "from-blue-600 to-purple-600",
    },
    {
      name: "Tesla",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
      industry: "Sustainable Energy",
      color: "from-red-600 to-rose-600",
    },
    {
      name: "Pepsi",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/Pepsi_logo_2014.svg",
      industry: "Food & Beverage",
      color: "from-blue-400 to-red-500",
    },
    {
      name: "Flipkart",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/Flipkart_logo.svg",
      industry: "E-commerce",
      color: "from-yellow-400 to-orange-400",
    },
    {
      name: "Microsoft",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      industry: "Software & Cloud",
      color: "from-green-500 to-blue-500",
    },
    {
      name: "Google",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      industry: "Technology & AI",
      color: "from-blue-500 to-green-500",
    },
    {
      name: "Netflix",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      industry: "Entertainment",
      color: "from-red-500 to-red-700",
    },
    {
      name: "Uber",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/Uber_Logo_2018.svg",
      industry: "Mobility",
      color: "from-black to-gray-800",
    },
    {
      name: "Airbnb",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      industry: "Hospitality",
      color: "from-rose-500 to-red-500",
    },
    {
      name: "Spotify",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      industry: "Audio Streaming",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Salesforce",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      industry: "CRM Solutions",
      color: "from-blue-400 to-cyan-400",
    },
  ];

  const testimonials = [
    {
      quote:
        "Their team delivered a scalable e-commerce platform that increased our conversion rate by 45%. The technical expertise and attention to detail were exceptional.",
      author: "Sarah Chen",
      position: "CTO, Amazon Web Services",
      company: "Amazon",
      rating: 5,
    },
    {
      quote:
        "The AI-powered analytics system they built transformed our advertising platform. Performance improved by 60% and user engagement tripled.",
      author: "Michael Rodriguez",
      position: "Product Director, Meta",
      company: "Meta",
      rating: 5,
    },
    {
      quote:
        "Outstanding cloud migration strategy and implementation. Our infrastructure costs reduced by 35% while achieving 99.9% uptime.",
      author: "Jennifer Park",
      position: "VP of Engineering, Tesla",
      company: "Tesla",
      rating: 5,
    },
  ];

  // Auto-scroll carousel
  useEffect(() => {
    if (isPaused || !carouselRef.current) return;

    const carousel = carouselRef.current;
    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;
    let scrollLeft = carousel.scrollLeft;

    const scroll = () => {
      scrollLeft += 1;
      if (scrollLeft >= scrollWidth - clientWidth) {
        scrollLeft = 0;
      }
      carousel.scrollLeft = scrollLeft;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isPaused]);

  const PremiumLogoCarousel = () => (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-hidden space-x-8 py-8 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Double the companies for seamless loop */}
        {[...companies, ...companies].map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex-shrink-0 w-40 h-24 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-500 group hover:scale-110 flex items-center justify-center"
          >
            <img
              src={company.imageUrl}
              alt={`${company.name} logo`}
              className="h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
            />

            {/* Hover Gradient Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"></div>
          </div>
        ))}
      </div>

      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent pointer-events-none"></div>
    </div>
  );

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-100 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex flex-col items-center space-y-4 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
            <span className="text-teal-600 dark:text-teal-400 font-bold text-lg uppercase tracking-wider">
              Trusted by Industry Leaders
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Partnered with Global
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Innovators
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            We collaborate with forward-thinking companies worldwide to deliver
            cutting-edge software solutions that drive digital transformation at
            scale.
          </p>
        </div>

        {/* Premium Logo Carousel */}
        <div className="max-w-7xl mx-auto mb-16 lg:mb-20">
          <PremiumLogoCarousel />
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 p-8 lg:p-12">
            <div className="text-center mb-6">
              <Quote className="w-8 h-8 text-cyan-500 mx-auto mb-4" />
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current"
                    />
                  )
                )}
              </div>
            </div>

            <blockquote className="text-xl lg:text-2xl text-slate-700 dark:text-slate-200 text-center leading-relaxed mb-6 font-light">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>

            <div className="text-center">
              <div className="font-bold text-slate-900 dark:text-white text-lg">
                {testimonials[activeTestimonial].author}
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                {testimonials[activeTestimonial].position}
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? "bg-cyan-500 scale-125"
                      : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { number: "200+", label: "Enterprise Clients" },
              { number: "500+", label: "Projects Delivered" },
              { number: "99.9%", label: "Uptime Record" },
              { number: "24/7", label: "Global Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm lg:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            ></div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-4 relative z-10">
              Ready to Join Industry Leaders?
            </h3>
            <p className="text-cyan-100 text-lg mb-6 max-w-2xl mx-auto relative z-10">
              Let's discuss how our expertise can drive your digital
              transformation and deliver exceptional business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center">
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent text-white border border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesTrustUs;