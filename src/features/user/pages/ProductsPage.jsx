import React, { useState } from "react";
import {
  ArrowRight,
  Search,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Smartphone,
  Database,
  CreditCard,
  Package,
  Code,
  Cloud,
  CheckCircle,
  Play,
  Filter,
  X,
} from "lucide-react";

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const productCategories = [
    { id: "all", name: "All Products", icon: <Package className="w-4 h-4" /> },
    {
      id: "billing",
      name: "Billing Software",
      icon: <CreditCard className="w-4 h-4" />,
    },
    {
      id: "inventory",
      name: "Inventory Systems",
      icon: <Database className="w-4 h-4" />,
    },
    {
      id: "development",
      name: "Development Services",
      icon: <Code className="w-4 h-4" />,
    },
  ];

  const products = [
    {
      id: 1,
      title: "GST Billing Software Pro",
      category: "billing",
      description:
        "Complete GST-compliant billing solution with automated tax filing, invoice management, and real-time reporting for businesses of all sizes.",
      icon: <CreditCard className="w-8 h-8" />,
      features: ["GST Compliance", "Automated Invoicing", "Real-time Reports"],
      color: "from-blue-500 to-blue-600",
      featured: true,
    },
    {
      id: 2,
      title: "Advanced Inventory Management",
      category: "inventory",
      description:
        "Comprehensive inventory tracking system with stock optimization, supplier management, and multi-warehouse support.",
      icon: <Database className="w-8 h-8" />,
      features: ["Stock Optimization", "Multi-warehouse", "Supplier Portal"],
      color: "from-green-500 to-green-600",
      featured: true,
    },
    {
      id: 3,
      title: "Custom Software Development",
      category: "development",
      description:
        "Tailored software solutions built with modern technologies to solve your unique business challenges and drive digital transformation.",
      icon: <Code className="w-8 h-8" />,
      features: ["Custom Solutions", "Modern Stack", "Scalable Architecture"],
      color: "from-purple-500 to-purple-600",
      featured: false,
    },
    {
      id: 4,
      title: "GST Billing Software Lite",
      category: "billing",
      description:
        "Essential GST billing features for small businesses and startups, offering core compliance with an intuitive interface.",
      icon: <CreditCard className="w-8 h-8" />,
      features: ["Basic GST Compliance", "Easy Invoicing", "Mobile Friendly"],
      color: "from-teal-500 to-teal-600",
      featured: false,
    },
    {
      id: 5,
      title: "Smart Inventory System",
      category: "inventory",
      description:
        "AI-powered inventory management with predictive analytics, barcode scanning, and automated reordering capabilities.",
      icon: <Database className="w-8 h-8" />,
      features: ["AI Analytics", "Barcode Support", "Auto Reordering"],
      color: "from-orange-500 to-orange-600",
      featured: false,
    },
    {
      id: 6,
      title: "Enterprise GST Solution",
      category: "billing",
      description:
        "Enterprise-grade billing software with multi-company support, advanced analytics, and integration capabilities.",
      icon: <CreditCard className="w-8 h-8" />,
      features: ["Multi-company", "Advanced Analytics", "API Integration"],
      color: "from-indigo-500 to-indigo-600",
      featured: false,
    },
    {
      id: 7,
      title: "Mobile App Development",
      category: "development",
      description:
        "Cross-platform mobile applications built with React Native and Flutter for seamless user experiences across devices.",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["Cross-platform", "Native Performance", "Offline Support"],
      color: "from-pink-500 to-pink-600",
      featured: false,
    },
    {
      id: 8,
      title: "Cloud Infrastructure Services",
      category: "development",
      description:
        "End-to-end cloud solutions with AWS and Azure, including migration, optimization, and ongoing management services.",
      icon: <Cloud className="w-8 h-8" />,
      features: ["AWS & Azure", "Migration Support", "24/7 Monitoring"],
      color: "from-cyan-500 to-cyan-600",
      featured: false,
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols and data protection",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimized for speed and scalability",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Friendly Design",
      description: "Intuitive interfaces that require minimal training",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Grow with your business needs",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeFilter === "all" || product.category === activeFilter;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Powerful Software
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                Solutions
              </span>
              for Modern Business
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover our suite of innovative software products designed to
              streamline operations, ensure compliance, and drive your business
              growth with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 border border-gray-300 rounded-xl font-semibold hover:border-blue-300 transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Filters and Search */}
            <div className="mb-8 lg:mb-12">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                {/* Search Bar */}
                <div className="relative w-full lg:w-auto flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-xl font-medium"
                >
                  <Filter className="w-4 h-4" />
                  Categories
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      showMobileFilters ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {/* Category Filters - Desktop */}
                <div className="hidden lg:flex flex-wrap gap-2">
                  {productCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        activeFilter === category.id
                          ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg"
                          : "bg-white text-gray-700 border border-gray-300 hover:border-blue-300"
                      }`}
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Category Filters */}
              {showMobileFilters && (
                <div className="lg:hidden mt-4 p-4 bg-white rounded-xl border border-gray-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-gray-900">
                      Filter by Category
                    </span>
                    <button onClick={() => setShowMobileFilters(false)}>
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {productCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveFilter(category.id);
                          setShowMobileFilters(false);
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                          activeFilter === category.id
                            ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category.icon}
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
                {activeFilter !== "all" &&
                  ` in ${
                    productCategories.find((cat) => cat.id === activeFilter)
                      ?.name
                  }`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-gray-200"
                >
                  <div className="p-6">
                    {/* Product Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {product.icon}
                      </div>
                      {product.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Product Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {product.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchQuery("");
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Built with excellence, designed for results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
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

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need a ready-made solution or custom development, we're
            here to help you achieve your business goals with technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Request Custom Demo
            </button>
            <button className="px-8 py-4 bg-transparent text-white border border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
