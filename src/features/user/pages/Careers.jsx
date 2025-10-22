// import React from "react";
// import {
//   Briefcase,
//   MapPin,
//   Clock,
//   DollarSign,
//   Zap,
//   ChevronRight,
//   Users, // For company value/culture section
// } from "lucide-react";

// // The hardcoded job data array
// const jobdata = [
//   {
//     id: 1,
//     jobTitle: "Java Full Stack Developer",
//     companyName: "Sululu Software Developement Company",
//     experience: "3+ Years",
//     location: "New Delhi, India (Hybrid)",
//     jobType: "Full-time",
//     salaryRange: "8 - 12 LPA",
//     skillsRequired: [
//       "Java",
//       "Spring Boot",
//       "Microservices",
//       "React.js",
//       "Docker",
//       "PostgreSQL",
//     ],
//     detailLink: "#/job/java-fs",
//   },
//   {
//     id: 2,
//     jobTitle: "Senior Cloud Architect (GCP)",
//     companyName: "Sululu Software Developement Company",
//     experience: "7+ Years",
//     location: "Remote (India)",
//     jobType: "Full-time",
//     salaryRange: "25 - 35 LPA",
//     skillsRequired: [
//       "GCP",
//       "Kubernetes",
//       "Terraform",
//       "Networking",
//       "Security",
//       "Python",
//     ],
//     detailLink: "#/job/gcp-arch",
//   },
//   {
//     id: 3,
//     jobTitle: "Product Designer (UI/UX)",
//     companyName: "Sululu Software Developement Company",
//     experience: "5+ Years",
//     location: "Bangalore, India",
//     jobType: "Full-time",
//     salaryRange: "15 - 20 LPA",
//     skillsRequired: [
//       "Figma",
//       "User Research",
//       "Prototyping",
//       "Interaction Design",
//       "Tailwind CSS",
//       "Accessibility",
//     ],
//     detailLink: "#/job/product-design",
//   },
// ];

// // --- Job Card Component ---
// const JobCard = ({ job }) => (
//   <div className="bg-white dark:bg-gray-800 rounded-sm p-6 shadow-sm hover:bg-teal-50/40 border-l-4 border-teal-500 dark:border-teal-400">
//     <div className="flex justify-between items-start mb-4">
//       <div>
//         {/* Job Title */}
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
//           {job.jobTitle}
//         </h2>
//         {/* Company Name */}
//         <p className="lg:text-sm text-xs font-normal text-gray-600 dark:text-gray-400">
//           {job.companyName}
//         </p>
//       </div>
//       {/* Apply Button */}
//       <div className="lg:block hidden">
//         <a
//           href={job.detailLink}
//           className="flex items-center text-teal-600 dark:text-teal-400 font-normal text-sm group transition duration-300"
//         >
//           View Details
//           <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
//         </a>
//       </div>
//     </div>

//     {/* Metadata Pills */}
//     <div className="flex flex-wrap gap-3 mb-4 border-b pb-4 border-gray-100 dark:border-gray-700">
//       <div className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
//         <Briefcase className="w-4 h-4 mr-2 text-teal-500" />
//         {job.experience}
//       </div>
//       <div className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
//         <MapPin className="w-4 h-4 mr-2 text-teal-500" />
//         {job.location}
//       </div>
//       <div className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
//         <Clock className="w-4 h-4 mr-2 text-teal-500" />
//         {job.jobType}
//       </div>
//       <div className="flex items-center text-sm font-bold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/40 px-3 py-1 rounded-full">
//         <DollarSign className="w-4 h-4 mr-2" />
//         {job.salaryRange}
//       </div>
//     </div>

//     {/* Skills Tag Cloud */}
//     <div className="mt-4">
//       <h3 className="flex items-center text-base font-normal text-gray-800 dark:text-gray-200 mb-2">
//         <Zap className="w-5 h-5 mr-2 text-teal-500" />
//         Skills
//       </h3>
//       <div className="flex flex-wrap gap-2">
//         {job.skillsRequired.slice(0, 5).map((skill, index) => (
//           <span
//             key={index}
//             className="text-xs font-medium text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-700/30 px-3 py-1 rounded-md"
//           >
//             {skill}
//           </span>
//         ))}
//         {job.skillsRequired.length > 5 && (
//           <span className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 py-1">
//             +{job.skillsRequired.length - 5} more
//           </span>
//         )}
//       </div>
//     </div>
//     <div className="block lg:hidden py-4 text">
//       <a
//         href={job.detailLink}
//         className="flex -center mx-auto items-center text-teal-600 dark:text-teal-400 font-normal text-sm group transition duration-300"
//       >
//         View Details
//         <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
//       </a>
//     </div>
//   </div>
// );

// // --- Main Careers Component ---
// const Careers = () => {
//   // Removed local dark mode state (useState) and effect (useEffect)

//   return (
//     // Component relies on external script or parent component to apply the 'dark' class to html
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500 font-sans">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      

//         {/* --- Job Listings Section --- */}
//         <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-10 b-4 border-gray-200 dark:border-gray-700">
//           Open Positions
//         </h2>

//         <div className="space-y-8">
//           {jobdata.length > 0 ? (
//             jobdata.map((job) => <JobCard key={job.id} job={job} />)
//           ) : (
//             <div className="text-center p-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//               <p className="text-xl font-medium text-gray-600 dark:text-gray-400">
//                 We currently have no open positions. Check back soon for
//                 exciting opportunities!
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Careers;


import React, { useState } from "react";
import {
  Rocket,
  Users,
  TrendingUp,
  BookOpen,
  Heart,
  Calendar,
  MessageCircle,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  Play,
} from "lucide-react";

const Careers = () => {
  const [activeDepartment, setActiveDepartment] = useState("all");

  const valueProps = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Cutting-Edge Technologies",
      description:
        "Work with modern stacks like MERN, Spring Boot, AWS, and Azure on innovative projects that challenge your skills.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth & Learning",
      description:
        "Continuous learning with mentorship programs, conference budgets, and clear career advancement paths.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Impactful Projects",
      description:
        "Solve real-world problems for clients across industries, seeing your code make a tangible difference.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusive Culture",
      description:
        "Collaborative environment where diverse perspectives are valued and everyone has a voice.",
    },
  ];

  const employeeTestimonials = [
    {
      name: "Alex Chen",
      role: "Senior Full-Stack Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote:
        "The technical challenges here pushed me to grow faster than anywhere else. The support from senior engineers is incredible.",
      stats: "2.5 years at company",
    },
    {
      name: "Maria Rodriguez",
      role: "DevOps Engineer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote:
        "I love how we're encouraged to experiment with new cloud technologies. My AWS expertise has grown exponentially.",
      stats: "1 year at company",
    },
    {
      name: "James Kim",
      role: "Frontend Lead",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote:
        "The work-life balance is real, and the projects are technically stimulating. Best of both worlds.",
      stats: "3 years at company",
    },
  ];

  const hiringProcess = [
    {
      step: "1",
      title: "Apply Online",
      description: "Submit your application and portfolio",
      duration: "1-2 days",
    },
    {
      step: "2",
      title: "Initial Screening",
      description: "Culture fit and background discussion",
      duration: "30-45 min",
    },
    {
      step: "3",
      title: "Technical Interview",
      description: "Pair programming and problem-solving",
      duration: "1-2 hours",
    },
    {
      step: "4",
      title: "Team Collaboration",
      description: "Meet the team and project discussion",
      duration: "2 hours",
    },
    {
      step: "5",
      title: "Offer",
      description: "Welcome to the team!",
      duration: "Within 48 hours",
    },
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "frontend",
      type: "Full-time",
      location: "Remote",
      summary:
        "Lead complex frontend architectures using React, TypeScript, and modern state management solutions.",
      tags: ["React", "TypeScript", "Next.js"],
      featured: true,
    },
    {
      id: 2,
      title: "Java Spring Boot Engineer",
      department: "backend",
      type: "Full-time",
      location: "Hybrid",
      summary:
        "Build scalable microservices and REST APIs for enterprise clients using Spring Boot ecosystem.",
      tags: ["Java", "Spring Boot", "Microservices"],
      featured: false,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "infrastructure",
      type: "Full-time",
      location: "Remote",
      summary:
        "Design and maintain cloud infrastructure on AWS/Azure with CI/CD pipelines and monitoring.",
      tags: ["AWS", "Docker", "Kubernetes"],
      featured: true,
    },
    {
      id: 4,
      title: "Full Stack Developer (MERN)",
      department: "fullstack",
      type: "Full-time",
      location: "On-site",
      summary:
        "End-to-end development with MongoDB, Express, React, and Node.js for dynamic web applications.",
      tags: ["MERN", "JavaScript", "MongoDB"],
      featured: false,
    },
    {
      id: 5,
      title: "UX/UI Designer",
      department: "design",
      type: "Full-time",
      location: "Hybrid",
      summary:
        "Create intuitive user experiences and beautiful interfaces for complex web applications.",
      tags: ["Figma", "UI/UX", "Prototyping"],
      featured: false,
    },
  ];

  const departments = [
    { id: "all", name: "All Roles" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" },
    { id: "infrastructure", name: "DevOps" },
    { id: "design", name: "Design" },
  ];

  const filteredJobs =
    activeDepartment === "all"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === activeDepartment);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Join Our Growing Team
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Build Your
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}
                  Legacy
                </span>
                <br />
                in Code
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                Work on challenging projects with cutting-edge technologies
                while growing your skills in a supportive, innovative
                environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  View Open Roles
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 border border-gray-300 rounded-xl font-semibold hover:border-blue-300 transition-all duration-300 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Meet The Team
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm opacity-90">Tech Experts</div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-4 text-white text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm opacity-90">Projects</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Remote Friendly</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white text-center">
                    <div className="text-2xl font-bold">4.9/5</div>
                    <div className="text-sm opacity-90">Team Satisfaction</div>
                  </div>
                </div>
                <div className="text-center text-gray-600">
                  <Star className="w-5 h-5 inline text-yellow-400 mr-1" />
                  <span className="font-semibold">Top 5%</span> of tech talent
                  worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Build Your Career With Us
            </h2>
            <p className="text-xl text-gray-600">
              We invest in our people as much as we invest in our technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Culture & Life */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Life at TechStack Pro
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that great software is built by happy, motivated
                people. That's why we foster an environment where creativity
                flourishes and everyone feels valued and supported.
              </p>

              {/* Photo Gallery Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl aspect-square"></div>
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl aspect-square"></div>
                <div className="bg-gradient-to-br from-green-400 to-blue-400 rounded-xl aspect-square"></div>
                <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-xl aspect-square"></div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              {employeeTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-600 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.stats}
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600">
              Transparent, respectful, and designed to find the right fit for
              both of us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {hiringProcess.map((step, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                <div className="text-xs text-gray-500 bg-gray-100 rounded-full px-2 py-1 inline-block">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Find your perfect role and help us build the future of technology
            </p>
          </div>

          {/* Department Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeDepartment === dept.id
                    ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-300"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      {job.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-3">{job.summary}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Jobs Message */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No current openings
              </h3>
              <p className="text-gray-600 mb-6">
                Check back later or join our talent network
              </p>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl font-semibold hover:border-blue-300 transition-colors">
                Join Talent Network
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Even if you don't see the perfect role, we're always looking for
            talented people. Let's start a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Send Open Application
            </button>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;