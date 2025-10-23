import React from "react";
import {
  ArrowRight,
  Play,
  Zap,
  Shield,
  TrendingUp,
  Code,
  Cloud,
  Database,
  CodeIcon,
  CloudIcon,
  DatabaseIcon,
  ShieldIcon,
} from "lucide-react";

const ModernHero = () => {
  return (
    // <section className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
    //   {/* Animated Background Elements */}
    //   <div className="absolute inset-0">
    //     {/* Grid Pattern */}
    //     <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

    //     {/* Animated Orbs */}
    //     <div className="absolute top-1/4 -left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
    //     <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    //     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    //   </div>

    //   {/* Floating Code Elements */}
    //   <div className="absolute top-20 left-10 opacity-5 text-2xl font-mono">
    //     {`<InnovateWithCode />`}
    //   </div>
    //   <div className="absolute bottom-20 right-10 opacity-5 text-2xl font-mono">
    //     {`// Engineering Excellence`}
    //   </div>

    //   <div className="container mx-auto px-4 relative z-10">
    //     <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20 lg:py-0">
    //       {/* Text Content - Left Column */}
    //       <div className="text-center lg:text-left space-y-8">
    //         {/* Trust Badge */}
    //         <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium backdrop-blur-sm">
    //           <Zap className="w-4 h-4 mr-2" />
    //           Trusted by Fortune 500 Companies
    //         </div>

    //         {/* Main Headline */}
    //         <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
    //           Engineering
    //           <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    //             {" "}
    //             Digital
    //           </span>
    //           <br />
    //           Excellence
    //         </h1>

    //         {/* Sub-headline */}
    //         <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
    //           Leveraging{" "}
    //           <span className="text-cyan-400 font-semibold">
    //             React, Spring Boot, and Cloud infrastructure
    //           </span>{" "}
    //           to deliver high-performance, future-proof applications that drive
    //           business growth.
    //         </p>

    //         {/* CTA Buttons */}
    //         <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
    //           <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 justify-center">
    //             Start Your Project
    //             <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    //           </button>
    //           <button className="group px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-300 flex items-center gap-3 justify-center">
    //             <Play className="w-5 h-5" />
    //             Watch Demo
    //           </button>
    //         </div>

    //         {/* Trust Signals */}
    //         <div className="pt-8 border-t border-slate-700/50">
    //           <p className="text-slate-400 text-sm mb-4">
    //             Built with cutting-edge technologies
    //           </p>
    //           <div className="flex flex-wrap justify-center lg:justify-start gap-6">
    //             {[
    //               { name: "React", icon: <Code className="w-5 h-5" /> },
    //               { name: "Spring Boot", icon: <Shield className="w-5 h-5" /> },
    //               { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
    //               { name: "Node.js", icon: <TrendingUp className="w-5 h-5" /> },
    //               {
    //                 name: "PostgreSQL",
    //                 icon: <Database className="w-5 h-5" />,
    //               },
    //             ].map((tech, index) => (
    //               <div
    //                 key={index}
    //                 className="flex items-center gap-2 text-slate-300 group hover:text-cyan-400 transition-colors duration-200"
    //               >
    //                 <div className="text-cyan-500 group-hover:scale-110 transition-transform duration-200">
    //                   {tech.icon}
    //                 </div>
    //                 <span className="text-sm font-medium">{tech.name}</span>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>

    //       {/* Visual Element - Right Column */}
    //       <div className="relative">
    //         {/* Main 3D Card Container */}
    //         <div className="relative group perspective-1000">
    //           {/* Floating Card */}
    //           <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 shadow-2xl transform-style-preserve-3d group-hover:rotate-x-5 group-hover:rotate-y-5 transition-transform duration-700">
    //             {/* Card Header */}
    //             <div className="flex items-center gap-3 mb-6">
    //               <div className="flex gap-2">
    //                 <div className="w-3 h-3 bg-red-400 rounded-full"></div>
    //                 <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
    //                 <div className="w-3 h-3 bg-green-400 rounded-full"></div>
    //               </div>
    //               <div className="text-slate-400 text-sm">
    //                 software_engine.js
    //               </div>
    //             </div>

    //             {/* Code Preview */}
    //             <div className="space-y-4 font-mono text-sm">
    //               <div className="flex gap-4">
    //                 <div className="text-cyan-400 flex-shrink-0">const</div>
    //                 <div className="text-white">digitalSolution =</div>
    //               </div>
    //               <div className="flex gap-4 pl-8">
    //                 <div className="text-purple-400 flex-shrink-0">{`{`}</div>
    //               </div>
    //               <div className="flex gap-4 pl-12">
    //                 <div className="text-cyan-400">technology</div>
    //                 <div className="text-white">:</div>
    //                 <div className="text-emerald-400">[</div>
    //                 <div className="text-yellow-400">"React"</div>
    //                 <div className="text-white">,</div>
    //                 <div className="text-yellow-400">"Spring Boot"</div>
    //                 <div className="text-white">,</div>
    //                 <div className="text-yellow-400">"AWS"</div>
    //                 <div className="text-emerald-400">]</div>
    //                 <div className="text-white">,</div>
    //               </div>
    //               <div className="flex gap-4 pl-12">
    //                 <div className="text-cyan-400">impact</div>
    //                 <div className="text-white">:</div>
    //                 <div className="text-yellow-400">"scale + performance"</div>
    //               </div>
    //               <div className="flex gap-4 pl-8">
    //                 <div className="text-purple-400">{`}`}</div>
    //               </div>
    //             </div>

    //             {/* Animated Progress Bars */}
    //             <div className="mt-8 space-y-3">
    //               {[
    //                 { label: "Performance", value: 95, color: "bg-cyan-500" },
    //                 { label: "Scalability", value: 92, color: "bg-blue-500" },
    //                 { label: "Security", value: 98, color: "bg-green-500" },
    //               ].map((metric, index) => (
    //                 <div key={index} className="space-y-2">
    //                   <div className="flex justify-between text-xs text-slate-400">
    //                     <span>{metric.label}</span>
    //                     <span>{metric.value}%</span>
    //                   </div>
    //                   <div className="w-full bg-slate-700 rounded-full h-2">
    //                     <div
    //                       className={`${metric.color} h-2 rounded-full transition-all duration-1000 ease-out`}
    //                       style={{ width: `${metric.value}%` }}
    //                     ></div>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>

    //           {/* Floating Elements */}
    //           <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg">
    //             <Zap className="w-4 h-4" />
    //           </div>
    //           <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center text-white shadow-lg">
    //             <Shield className="w-3 h-3" />
    //           </div>

    //           {/* Glow Effect */}
    //           <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 -z-10"></div>
    //         </div>

    //         {/* Background Decorative Elements */}
    //         <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
    //           <div className="absolute inset-0 border-2 border-cyan-500/10 rounded-3xl rotate-45 animate-pulse"></div>
    //           <div className="absolute inset-4 border-2 border-blue-500/10 rounded-2xl rotate-12 animate-pulse delay-1000"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Scroll Indicator */}
    //   <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
    //     <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
    //       <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2 animate-bounce"></div>
    //     </div>
    //   </div>
    // </section>

    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Text Content Column */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold dark:text-slate-300 tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Build your next idea{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                effortlessly
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 lg:text-lg text-sm text-gray-600 dark:text-slate-400">
              The fastest way to build and deploy your next project with our
              expertly crafted components and templates.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="dark:bg-gray-500/30 px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                Get Started
              </button>
              <button className="dark:text-slate-300 hover:bg-slate-500/30 px-8 py-3 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Live Demo
              </button>
            </div>

            {/* Trust Signals */}
            <div className="mt-16">
              <p className="text-sm font-medium text-gray-500 mb-6">
                TRUSTED BY TECH TEAMS AT
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <CodeIcon />
                  <span className="font-semibold">TechCorp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CloudIcon />
                  <span className="font-semibold">CloudNet</span>
                </div>
                <div className="flex items-center gap-2">
                  <DatabaseIcon />
                  <span className="font-semibold">DataSystems</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldIcon />
                  <span className="font-semibold">SecureSoft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-gray-900 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm text-gray-300 space-y-4">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-green-400">project</span> ={" "}
                  <span className="text-blue-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-400">name</span>:
                  <span className="text-yellow-400"> 'MyApp'</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">framework</span>:
                  <span className="text-yellow-400"> 'React'</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">features</span>:
                  <span className="text-blue-400"> [</span>
                </div>
                <div className="ml-8 text-yellow-400">
                  'Responsive', 'Fast', 'Modern'
                </div>
                <div className="ml-4 text-blue-400">]</div>
                <div className="text-blue-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
