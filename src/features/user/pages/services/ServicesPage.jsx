import React, { useState } from "react";
import {
  ArrowRight,
  Code,
  Cloud,
  Smartphone,
  Cpu,
  GitBranch,
  CheckCircle,
  Globe,
  ShoppingCart,
  Layout,
  Palette,
  Gauge,
  Search,
  Users,
  MessageCircle,
  Calendar,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("core");
  const [isScrolled, setIsScrolled] = useState();

  const categories = [
    {
      id: "core",
      name: "Core Engineering & Infrastructure",
      description: "Foundation technologies and development services",
    },
    {
      id: "digital",
      name: "Digital Presence & UX",
      description: "Web solutions and user experience design",
    },
  ];

  const coreServices = [
    {
      title: "Software Development",
      icon: <Code className="w-6 h-6" />,
      description:
        "End-to-end custom software solutions using modern technologies like Java, Spring Boot, and React for scalable business applications.",
      features: ["Custom Solutions", "Scalable Architecture", "Modern Stack"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Custom Software",
      icon: <Cpu className="w-6 h-6" />,
      description:
        "Tailored software solutions designed specifically for your unique business processes and operational requirements.",
      features: [
        "Bespoke Development",
        "Process Automation",
        "Enterprise Grade",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Mobile Apps",
      icon: <Smartphone className="w-6 h-6" />,
      description:
        "Cross-platform mobile applications built with React Native and Flutter for seamless user experiences across iOS and Android.",
      features: ["Cross-platform", "Native Performance", "Offline Support"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Cloud Solutions",
      icon: <Cloud className="w-6 h-6" />,
      description:
        "Comprehensive cloud services including migration, infrastructure setup, and management on AWS and Azure platforms.",
      features: ["AWS & Azure", "Migration Support", "Cost Optimization"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "AI/ML Integration",
      icon: <Zap className="w-6 h-6" />,
      description:
        "Intelligent solutions powered by artificial intelligence and machine learning for data-driven decision making and automation.",
      features: ["Predictive Analytics", "Machine Learning", "AI Automation"],
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "DevOps",
      icon: <GitBranch className="w-6 h-6" />,
      description:
        "Automated CI/CD pipelines, infrastructure as code, and cloud deployment strategies for faster, reliable releases.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring"],
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "QA & Testing",
      icon: <CheckCircle className="w-6 h-6" />,
      description:
        "Comprehensive quality assurance services including automated testing, performance testing, and security audits.",
      features: ["Automated Testing", "Performance Testing", "Security Audit"],
      color: "from-red-500 to-red-600",
    },
  ];

  const digitalServices = [
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      description:
        "Modern web applications built with React, Next.js, and Node.js for exceptional performance and user engagement.",
      features: ["Modern Frameworks", "Performance Focus", "Scalable Backend"],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Modern Websites",
      icon: <Layout className="w-6 h-6" />,
      description:
        "Responsive, high-performance websites with modern design principles and optimized user experiences across all devices.",
      features: ["Responsive Design", "Fast Loading", "Modern UI"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "E-commerce Solutions",
      icon: <ShoppingCart className="w-6 h-6" />,
      description:
        "Complete online store development with secure payment integration, inventory management, and analytics.",
      features: ["Payment Integration", "Inventory Management", "Analytics"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Headless CMS",
      icon: <Code className="w-6 h-6" />,
      description:
        "Decoupled content management systems providing flexibility and scalability for content-rich applications.",
      features: ["Content API", "Multi-channel", "Developer Friendly"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      description:
        "User-centered design services creating intuitive, engaging interfaces with a mobile-first approach and accessibility focus.",
      features: ["User Research", "Prototyping", "Accessibility"],
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Performance Audit",
      icon: <Gauge className="w-6 h-6" />,
      description:
        "Comprehensive website and application performance analysis with actionable recommendations for optimization.",
      features: ["Speed Analysis", "SEO Audit", "Optimization Plan"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "SEO Services",
      icon: <Search className="w-6 h-6" />,
      description:
        "Search engine optimization strategies to improve visibility, drive organic traffic, and increase conversion rates.",
      features: ["Technical SEO", "Content Strategy", "Analytics"],
      color: "from-teal-500 to-teal-600",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discover & Plan",
      description:
        "We analyze your requirements and create a detailed project roadmap",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Design & Develop",
      description:
        "Agile development with continuous testing and client collaboration",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Deploy & Scale",
      description: "Seamless deployment with ongoing support and optimization",
      icon: <Cloud className="w-6 h-6" />,
    },
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "Tailwind CSS", category: "UI" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
  ];

  const currentServices =
    activeCategory === "core" ? coreServices : digitalServices;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Ideas into
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                Digital Reality
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              End-to-end technology solutions from strategy and design to
              development and deployment. We bring your vision to life with
              cutting-edge technology and expert craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center">
                <MessageCircle className="w-5 h-5" />
                Discuss Your Project
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 border border-gray-300 rounded-xl font-semibold hover:border-blue-300 transition-all duration-300 flex items-center gap-2 justify-center">
                <Calendar className="w-5 h-5" />
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-2 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-1 min-w-[280px] text-left p-6 rounded-xl border transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white border-transparent shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
                }`}
              >
                <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                <p
                  className={`text-sm ${
                    activeCategory === category.id
                      ? "text-blue-100"
                      : "text-gray-600"
                  }`}
                >
                  {category.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {categories.find((cat) => cat.id === activeCategory)?.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {
                  categories.find((cat) => cat.id === activeCategory)
                    ?.description
                }
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {currentServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-gray-200"
                >
                  <div className="p-6">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {service.icon}
                      </div>
                    </div>

                    {/* Service Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      Explore Solution
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Agile Development Process
              </h2>
              <p className="text-xl text-gray-600">
                Transparent, collaborative, and designed for success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Trusted Technology Stack
              </h2>
              <p className="text-xl text-gray-600">
                We work with modern, proven technologies to deliver exceptional
                results
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <div className="text-sm font-semibold text-gray-900 mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-500">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a customized solution
            that drives your business forward with cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get Free Consultation
            </button>
            <button className="px-8 py-4 bg-transparent text-white border border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              Request Detailed Quote
            </button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Secure & Confidential
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              ROI-Focused Solutions
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Fast Response Time
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
