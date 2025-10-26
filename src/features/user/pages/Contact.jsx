
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Github,
  Twitter,
  ArrowRight,
} from "lucide-react";
import ContactFrom from "../../../components/ContactFrom";

const Contact = () => {
 
 

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      value: "hello@techstackpro.com",
      href: "mailto:hello@techstackpro.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Mon-Fri, 9AM-6PM EST",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "New Delhi 110025 , Delhi India 94105",
      href: "https://maps.google.com",
      color: "from-purple-500 to-purple-600",
    },
  ];

  

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Build Something
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                Amazing
              </span>
              Together
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your ideas into exceptional digital solutions?
              Let's discuss your project and explore how our expertise can drive
              your success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <ContactFrom/>

              {/* Contact Information & Map */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {method.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {method.description}
                          </p>
                          <p className="text-gray-900 font-medium">
                            {method.value}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                      </div>
                    </a>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center relative">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                      <p className="text-gray-700 font-medium">
                        Interactive Map
                      </p>
                      <p className="text-gray-600 text-sm">
                        New Delhi 110025 , Delhi India
                      </p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        View Larger Map
                      </button>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Follow Our Work
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Response Time Info */}
                <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">
                        What happens next?
                      </h4>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• We'll respond within 24 hours</li>
                        <li>• Schedule a discovery call</li>
                        <li>• Provide initial project assessment</li>
                        <li>• Discuss next steps and timeline</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Have quick questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out our FAQ section for answers to common inquiries about
              our services, process, and partnerships.
            </p>
            <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Visit FAQ Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;