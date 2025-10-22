import React, { useState } from "react";
import {
  Code,
  Cloud,
  Database,
  Smartphone,
  Zap,
  Shield,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  Play,
} from "lucide-react";
import CallToAction from "../../../components/CallToAction";

const Technologies = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const techStack = [
    {
      icon: <Code className="w-8 h-8" />,
      name: "Java & Spring Boot",
      description: "Enterprise-grade backend solutions",
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "MERN Stack",
      description: "Full-stack JavaScript development",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      name: "React & Node.js",
      description: "Modern frontend & server-side applications",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      name: "AWS & Azure",
      description: "Cloud infrastructure & deployment",
    },
  ];

  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimized applications with lightning-fast response times",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols and best practices",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Scalability",
      description: "Auto-scaling solutions for growing businesses",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modernization",
      description: "Legacy system upgrades and digital transformation",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                🚀 Enterprise-Grade Technology Solutions
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Build Digital
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  {" "}
                  Excellence
                </span>
                With Modern Tech Stack
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Full-stack development expertise in Java, Spring Boot, React,
                Node.js, and cloud platforms. Transforming ideas into
                high-performance digital solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 border border-gray-300 rounded-xl font-semibold hover:border-blue-300 transition-all duration-300 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Tech Experts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl p-8 lg:p-12 text-white">
                <div className="grid grid-cols-2 gap-4">
                  {/* Code Blocks */}
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-sm font-mono">// Java Spring Boot</div>
                    <div className="text-xs opacity-75 mt-2">
                      @RestController
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-sm font-mono">// React Component</div>
                    <div className="text-xs opacity-75 mt-2">useState()</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-sm font-mono">// Node.js Server</div>
                    <div className="text-xs opacity-75 mt-2">Express.js</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-sm font-mono">// AWS Cloud</div>
                    <div className="text-xs opacity-75 mt-2">Lambda, S3</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-1 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Expertise in modern, scalable technologies that power today's
              digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Delivering exceptional value through technical excellence and
              innovative approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16">
        <CallToAction />
      </section>
    </div>
  );
};

export default Technologies;
