import React from "react";
import { ArrowRight, Plus, Linkedin, Twitter, Github } from "lucide-react";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jitu Chauhan",
      role: "Co-Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Leading vision and strategy with 10+ years in tech entrepreneurship.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      id: 2,
      name: "Anita Parmar",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Transforming ideas into user-centric digital products.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Sandip Chauhan",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer specializing in scalable architecture.",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 4,
      name: "Manasvi Suthar",
      role: "Co-Founder & CTO",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face",
      bio: "Tech visionary with expertise in AI and cloud infrastructure.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      id: 5,
      name: "Shweta Singh",
      role: "Sales Team Lead",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Building lasting client relationships and driving business growth.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 6,
      name: "Rohan Kacha",
      role: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Creating intuitive and beautiful user experiences.",
      social: {
        linkedin: "#",
        dribbble: "#",
      },
    },
    {
      id: 7,
      name: "Vallabh Sompura",
      role: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?w=400&h=400&fit=crop&crop=face",
      bio: "Crafting pixel-perfect designs that tell compelling stories.",
      social: {
        linkedin: "#",
        behance: "#",
      },
    },
    {
      id: 8,
      name: "Join Our Team",
      role: "Your Next Role",
      isJoinCard: true,
      cta: "Be part of our innovative journey",
    },
  ];

  const SocialIcon = ({ platform, url }) => {
    const icons = {
      linkedin: <Linkedin size={16} />,
      twitter: <Twitter size={16} />,
      github: <Github size={16} />,
    };

    return (
      <a
        href={url}
        className="p-2 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-lg transition-all duration-200 hover:scale-110"
      >
        {icons[platform]}
      </a>
    );
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
            🚀 Meet Our Team
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Minds Behind
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A diverse team of experts passionate about crafting digital
            excellence and driving your business forward with cutting-edge
            solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`group relative ${
                member.isJoinCard
                  ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
                  : "bg-white hover:bg-gray-50"
              } rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-gray-200`}
            >
              {/* Join Team Card */}
              {member.isJoinCard ? (
                <div className="text-center h-full flex flex-col justify-center items-center min-h-[300px]">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Plus size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{member.name}</h3>
                  <p className="text-gray-300 mb-2">{member.role}</p>
                  <p className="text-blue-200 text-sm mb-6">{member.cta}</p>
                  <button className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 group/btn hover:scale-105">
                    Explore Careers
                    <ArrowRight
                      size={18}
                      className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              ) : (
                /* Team Member Card */
                <>
                  {/* Image Container */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden group-hover:rounded-3xl transition-all duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        member.isJoinCard ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm font-semibold mb-3 ${
                        member.isJoinCard ? "text-blue-300" : "text-blue-600"
                      }`}
                    >
                      {member.role}
                    </p>
                    <p
                      className={`text-sm mb-4 leading-relaxed ${
                        member.isJoinCard ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.social &&
                        Object.entries(member.social).map(([platform, url]) => (
                          <SocialIcon
                            key={platform}
                            platform={platform}
                            url={url}
                          />
                        ))}
                    </div>
                  </div>

                  {/* Hover Gradient Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to build something amazing?
              </h3>
              <p className="text-gray-600">
                Let's discuss how our team can bring your vision to life.
              </p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
