// import React from "react";
// import Breadcrumb from "../../../components/Breadcrumb";
// import WhoWeAre from "../../../components/WhoWeAre";
// import CallToAction from "../../../components/CallToAction";
// import TestimonialSection from "../../../components/Testimonial";
// import FAQSection from "../../../components/FAQSection.jsx";



// const breadcrumbPath = [
//   { name: "Home", path: "/" },
//   { name: "About us", path: "/about" },
// ];


// const About = () => {
//   return (
//     <>
//       <section className="">
//         <Breadcrumb items={breadcrumbPath} />
//       </section>

//       <section className="lg:py-20 py-10 bg-white">
//         <WhoWeAre />
//       </section>

//       <section className="py-1 ">
//         <TestimonialSection />
//       </section>
//       {/* <section className="py-1">
//         <CallToAction />
//       </section> */}

//       <section>
//         <FAQSection/>
//       </section>
//     </>
//   );
// };

// export default About;


import React from "react";
import {
  Target,
  Users,
  Code,
  Shield,
  Zap,
  TrendingUp,
  Award,
  Calendar,
  Rocket,
  HeartHandshake,
  BookOpen,
  GitBranch,
} from "lucide-react";

const About = () => {
  const cultureValues = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description:
        "We stay ahead of technology trends through dedicated R&D and ongoing education",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Client Partnership",
      description: "We work as an extension of your team, not just a vendor",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Code Excellence",
      description:
        "Clean, maintainable code with comprehensive testing and documentation",
    },
  ];

  const leadership = [
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      expertise: "Cloud Architecture & System Design",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "15+ years in enterprise software development",
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Full-Stack Engineer",
      expertise: "React & Node.js Ecosystems",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Specialized in scalable web applications",
    },
    {
      name: "Priya Patel",
      role: "DevOps Architect",
      expertise: "AWS & Azure Infrastructure",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Infrastructure automation and cloud security",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Started with vision for enterprise-grade software solutions",
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      year: "2019",
      title: "First AWS Partnership",
      description: "Achieved AWS Advanced Consulting Partner status",
      icon: <Award className="w-5 h-5" />,
    },
    {
      year: "2020",
      title: "50+ Projects Delivered",
      description: "Reached milestone of successful project deployments",
      icon: <Target className="w-5 h-5" />,
    },
    {
      year: "2022",
      title: "Azure Gold Competency",
      description: "Earned Microsoft Azure Gold Partner certification",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      year: "2024",
      title: "100+ Client Partners",
      description: "Growing community of successful digital transformations",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        </div>

        {/* Code Background Elements */}
        <div className="absolute top-1/4 left-5 opacity-5 text-2xl font-mono">
          {`// Engineering digital excellence`}
        </div>
        <div className="absolute bottom-1/4 right-5 opacity-5 text-2xl font-mono">
          {`<CodeWithPurpose />`}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Engineering
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}
                  Digital
                </span>
                <br />
                Excellence
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                We transform complex business challenges into
                <span className="font-semibold text-gray-900">
                  {" "}
                  scalable, high-performance digital solutions
                </span>
                through expert software engineering.
              </p>

              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                <Target className="w-4 h-4 mr-2" />
                Solving complex problems through elegant code
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="font-mono text-sm text-gray-700 space-y-2">
                    <div className="text-blue-600">// Our Mission</div>
                    <div>const buildFuture = (challenge) =&gt; {"{"}</div>
                    <div className="ml-4">return engineerSolution(</div>
                    <div className="ml-8 text-green-600">challenge,</div>
                    <div className="ml-8 text-green-600">
                      'scalable-architecture',
                    </div>
                    <div className="ml-8 text-green-600">
                      'performance-first'
                    </div>
                    <div className="ml-4">);</div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
                <Code className="w-4 h-4 mr-2" />
                Our Engineering Philosophy
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                We Don't Just Write Code,
                <br />
                We <span className="text-blue-600">Engineer Foundations</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Like architects designing skyscrapers, we build software with
                <span className="font-semibold text-gray-900">
                  {" "}
                  scalability, security, and performance
                </span>
                as our core principles. Every line of code serves a purpose in
                creating robust digital infrastructure that grows with your
                business.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Performance First
                    </h4>
                    <p className="text-gray-600">
                      Optimized applications that deliver exceptional user
                      experiences
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Security by Design
                    </h4>
                    <p className="text-gray-600">
                      Enterprise-grade security integrated into every layer
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Scalable Architecture
                    </h4>
                    <p className="text-gray-600">
                      Systems designed to handle growth without compromising
                      performance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-sm font-mono">// Our Approach</div>
                    <div className="text-xs opacity-90 mt-2 font-mono">
                      agileProcess + technicalExcellence
                      <br />= measurableResults
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-xs opacity-90">Uptime</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">2.5M+</div>
                      <div className="text-xs opacity-90">Users Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Culture of Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Building great software requires more than technical skills—it
              demands the right mindset and values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cultureValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technical Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experts who drive our technical vision and engineering
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {leader.role}
                </p>
                <p className="text-gray-700 font-medium mb-3">
                  {leader.expertise}
                </p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our commitment to technical excellence and
              client success.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="text-sm text-blue-600 font-semibold">
                            {milestone.year}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our engineering expertise can transform your
            vision into a high-performance digital solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
            <button className="px-8 py-4 bg-transparent text-white border border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              Meet Our Engineers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
