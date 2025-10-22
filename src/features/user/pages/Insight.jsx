import React, { useState } from "react";
import { 
  Search, 
  Clock, 
  Calendar,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Cloud,
  Code,
  Database,
  Mail,
  Users,
  ChevronDown,
  Filter,
  X
} from "lucide-react";

const Insight = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(6);

  const categories = [
    { id: "all", name: "All Insights", icon: <BookOpen className="w-4 h-4" /> },
    { id: "ai-ml", name: "AI & ML", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "cloud", name: "Cloud Computing", icon: <Cloud className="w-4 h-4" /> },
    { id: "web-dev", name: "Web Development", icon: <Code className="w-4 h-4" /> },
    { id: "case-studies", name: "Case Studies", icon: <Database className="w-4 h-4" /> },
    { id: "industry", name: "Industry Trends", icon: <Users className="w-4 h-4" /> }
  ];

  const insights = [
    {
      id: 1,
      title: "The Future of Microservices: Beyond Monoliths",
      excerpt: "Exploring how microservices architecture is evolving with serverless computing and event-driven patterns for better scalability.",
      category: "cloud",
      readTime: "8 min read",
      date: "Nov 15, 2024",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Development: Revolutionizing Code Generation",
      excerpt: "How large language models are transforming software development workflows and boosting developer productivity.",
      category: "ai-ml",
      readTime: "6 min read",
      date: "Nov 12, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Case Study: Scaling E-commerce Platform to 1M Users",
      excerpt: "Our journey optimizing a React/Node.js application for high traffic and implementing effective caching strategies.",
      category: "case-studies",
      readTime: "10 min read",
      date: "Nov 8, 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "React 18 Concurrent Features: Real-World Applications",
      excerpt: "Practical implementations of concurrent rendering and how it improves user experience in complex applications.",
      category: "web-dev",
      readTime: "7 min read",
      date: "Nov 5, 2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "AWS vs Azure: Choosing the Right Cloud Platform in 2024",
      excerpt: "Comprehensive comparison of AWS and Azure services for enterprise applications and cost optimization strategies.",
      category: "cloud",
      readTime: "9 min read",
      date: "Nov 2, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "The Rise of Edge Computing in Modern Applications",
      excerpt: "How edge computing is reducing latency and improving performance for global user bases.",
      category: "industry",
      readTime: "5 min read",
      date: "Oct 28, 2024",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Machine Learning Model Deployment Best Practices",
      excerpt: "Strategies for deploying and monitoring ML models in production environments with MLOps principles.",
      category: "ai-ml",
      readTime: "8 min read",
      date: "Oct 25, 2024",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Building Secure APIs with Spring Boot and OAuth2",
      excerpt: "Implementing robust authentication and authorization in microservices architecture.",
      category: "web-dev",
      readTime: "6 min read",
      date: "Oct 20, 2024",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Digital Transformation in Healthcare: A Success Story",
      excerpt: "How we helped a healthcare provider modernize their patient management system with cloud technologies.",
      category: "case-studies",
      readTime: "12 min read",
      date: "Oct 15, 2024",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
    }
  ];

  const featuredPost = insights.find(post => post.featured);
  const filteredInsights = insights.filter(post => {
    const matchesCategory = activeFilter === "all" || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedInsights = filteredInsights.slice(0, visiblePosts);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-8 lg:py-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Tech Insights
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Expert perspectives on software development, cloud architecture, 
              and emerging technologies from our team of practitioners.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-bold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 text-gray-900">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                      {categories.find(cat => cat.id === featuredPost.category)?.name}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
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
                    placeholder="Search insights..."
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
                  Filters
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
                </button>

                {/* Category Filters - Desktop */}
                <div className="hidden lg:flex flex-wrap gap-2">
                  {categories.map((category) => (
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
                    <span className="font-semibold text-gray-900">Filter by Category</span>
                    <button onClick={() => setShowMobileFilters(false)}>
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
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
                Showing {displayedInsights.length} of {filteredInsights.length} insights
                {activeFilter !== "all" && ` in ${categories.find(cat => cat.id === activeFilter)?.name}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {/* Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {displayedInsights.map((insight) => (
                <article 
                  key={insight.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-gray-200"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-lg backdrop-blur-sm">
                        {categories.find(cat => cat.id === insight.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {insight.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {insight.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {insight.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {insight.excerpt}
                    </p>
                    
                    <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/readmore">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/readmore:translate-x-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results */}
            {displayedInsights.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No insights found</h3>
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

            {/* Load More */}
            {visiblePosts < filteredInsights.length && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMore}
                  className="px-8 py-4 bg-white text-gray-700 border border-gray-300 rounded-xl font-semibold hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  Load More Insights
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated with Tech Insights
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest articles, case studies, and technology trends delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insight;