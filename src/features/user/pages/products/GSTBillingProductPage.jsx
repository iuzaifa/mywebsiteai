import React, { useState } from "react";
import {
  ArrowRight,
  Play,
  Shield,
  Zap,
  CheckCircle,
  FileText,
  Package,
  Users,
  BarChart3,
  CreditCard,
  Database,
  Cloud,
  Code,
  Smartphone,
  TrendingUp,
  Calendar,
  Download,
  MessageCircle,
} from "lucide-react";

const GSTBillingProductPage = () => {
  const [activeModule, setActiveModule] = useState(0);

  const keyBenefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% GST Compliant",
      description: "Automated tax calculations and seamless return filing",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Invoicing",
      description: "Generate professional invoices in seconds",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Integration",
      description: "Real-time stock tracking with billing",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Smart Reporting",
      description: "Advanced analytics for business insights",
    },
  ];

  const modules = [
    {
      title: "Invoicing & Billing",
      icon: <FileText className="w-6 h-6" />,
      features: [
        "Custom invoice templates with branding",
        "Recurring invoices and automated billing",
        "Credit/Debit note management",
        "Multi-currency and multi-language support",
        "Bulk invoice generation",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "GST Compliance",
      icon: <CheckCircle className="w-6 h-6" />,
      features: [
        "Automatic GSTR-1, GSTR-3B generation",
        "HSN/SAC code management",
        "E-way bill integration",
        "Tax liability calculations",
        "GST return filing status tracking",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Inventory Management",
      icon: <Package className="w-6 h-6" />,
      features: [
        "Real-time stock level tracking",
        "Low stock alerts and auto-reordering",
        "Multi-warehouse management",
        "Batch and expiry tracking",
        "Inventory valuation reports",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Client & Vendor Management",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Centralized customer/vendor database",
        "Outstanding balance tracking",
        "Credit limit management",
        "Communication history",
        "Customer statement generation",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Reporting & Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        "Sales and purchase reports",
        "Profit & loss statements",
        "GST summary and filing reports",
        "Accounts receivable/payable aging",
        "Custom report builder",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Security & Administration",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "Multi-user role-based access",
        "Data encryption and backup",
        "Audit trail and activity logs",
        "IP restriction and session management",
        "Automated cloud backups",
      ],
      color: "from-red-500 to-red-600",
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      icon: <Code className="w-5 h-5" />,
      description: "Modern, responsive UI with excellent user experience",
    },
    {
      category: "Backend & API",
      technologies: ["Java", "Spring Boot", "Node.js"],
      icon: <Database className="w-5 h-5" />,
      description: "Scalable microservices architecture",
    },
    {
      category: "Database",
      technologies: ["PostgreSQL", "MongoDB", "Redis"],
      icon: <Database className="w-5 h-5" />,
      description: "Relational and NoSQL for optimal performance",
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes"],
      icon: <Cloud className="w-5 h-5" />,
      description: "Enterprise-grade infrastructure and deployment",
    },
  ];

  const roadmap = [
    {
      quarter: "Q1 2024",
      features: ["Mobile App Launch", "Payment Gateway Integration"],
      status: "completed",
    },
    {
      quarter: "Q2 2024",
      features: ["AI-powered Expense Tracking", "Advanced Analytics Dashboard"],
      status: "completed",
    },
    {
      quarter: "Q3 2024",
      features: ["Multi-branch Support", "API Marketplace"],
      status: "in-progress",
    },
    {
      quarter: "Q4 2024",
      features: ["Predictive Cash Flow", "Automated Reconciliation"],
      status: "planned",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                GST Ready • B2B & B2C
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Streamline Your
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}
                  GST Compliance
                </span>
                & Billing
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Automated GST billing software that reduces compliance errors by
                95%, saves 20+ hours monthly on manual work, and improves cash
                flow with faster invoicing and payment tracking.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Start Free Trial
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
                  <div className="text-2xl font-bold text-gray-900">
                    10,000+
                  </div>
                  <div className="text-sm text-gray-600">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Software Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-gray-900">
                      GST Invoice
                    </div>
                    <div className="text-xs text-gray-500">#INV-2024-001</div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxable Amount:</span>
                      <span className="font-semibold">₹15,000.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">CGST (9%):</span>
                      <span className="font-semibold">₹1,350.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">SGST (9%):</span>
                      <span className="font-semibold">₹1,350.00</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2">
                      <span className="text-gray-900 font-bold">Total:</span>
                      <span className="text-blue-600 font-bold">
                        ₹17,700.00
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between text-xs text-gray-500">
                  <span>GSTIN: 07AABCU9603R1ZM</span>
                  <span>Auto-generated</span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <FileText className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Manage Your Billing
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive modules designed to handle all aspects of your
                business billing and compliance
              </p>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-8">
              {/* Module Navigation */}
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveModule(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeModule === index
                        ? "bg-white shadow-lg border border-gray-200"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center text-white`}
                      >
                        {module.icon}
                      </div>
                      <span className="font-semibold text-gray-900">
                        {module.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Module Details */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${modules[activeModule].color} rounded-xl flex items-center justify-center text-white`}
                    >
                      {modules[activeModule].icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {modules[activeModule].title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {modules[activeModule].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile & Tablet Layout */}
            <div className="lg:hidden space-y-6">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center text-white`}
                    >
                      {module.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {module.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {module.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
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
                Engineered for Performance and Scalability
              </h2>
              <p className="text-xl text-gray-600">
                Built with modern technologies to ensure reliability, security,
                and exceptional user experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>

                  <h3 className="font-bold text-gray-900 mb-3">
                    {tech.category}
                  </h3>

                  <div className="space-y-2 mb-4">
                    {tech.technologies.map((technology, techIndex) => (
                      <div
                        key={techIndex}
                        className="text-sm text-gray-700 bg-white px-3 py-1 rounded-lg border border-gray-200"
                      >
                        {technology}
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Roadmap */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Continuously Evolving for Your Success
              </h2>
              <p className="text-xl text-gray-600">
                Our commitment to innovation ensures you always have access to
                the latest features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {roadmap.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                      item.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : item.status === "in-progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.status === "completed" && "✓ "}
                    {item.status === "in-progress" && "⟳ "}
                    {item.quarter}
                  </div>

                  <div className="space-y-3">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            item.status === "completed"
                              ? "bg-green-500"
                              : item.status === "in-progress"
                              ? "bg-blue-500"
                              : "bg-gray-400"
                          }`}
                        ></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Billing Process?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 10,000+ businesses that trust our GST billing software. Get a
              personalized demo and see how we can streamline your operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center">
                <MessageCircle className="w-5 h-5" />
                Request Personalized Demo
              </button>
              <button className="px-8 py-4 bg-transparent text-white border border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 justify-center">
                <Download className="w-5 h-5" />
                Download Brochure
              </button>
            </div>

            <p className="text-blue-200 text-sm mt-6">
              ✅ 14-day free trial • No credit card required • Setup in 10
              minutes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GSTBillingProductPage;
