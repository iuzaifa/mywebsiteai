import React, { useState } from "react";
import { Code, ChevronDown } from "lucide-react";
import CallToAction from "./CallToAction";

const FAQSection = () => {
  const [activeAccordion, setActiveAccordion] = useState("flush-collapseOne");

  const faqData = [
    {
      id: "flush-collapseOne",
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Azure. Our team is proficient in both frontend and backend development, delivering full-stack solutions tailored to your business needs.",
    },
    {
      id: "flush-collapseTwo",
      question: "What is your development process?",
      answer:
        "We follow an agile development methodology with iterative sprints, regular client check-ins, and continuous deployment. Our process includes requirement analysis, UI/UX design, development, testing, and deployment with ongoing support and maintenance.",
    },
    {
      id: "flush-collapseThree",
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance optimization, and feature enhancements. We provide 24/7 monitoring and quick response times to ensure your applications run smoothly.",
    },
    {
      id: "flush-collapseFour",
      question: "Can you work with our existing team?",
      answer:
        "Absolutely! We seamlessly integrate with existing teams through dedicated collaboration tools and processes. We can augment your team with our expertise or work as an independent unit while maintaining clear communication and alignment with your goals.",
    },
    {
      id: "flush-collapseFifth",
      question: "What is your project timeline and pricing structure?",
      answer:
        "Project timelines vary based on complexity, but we typically deliver MVP within 4-8 weeks. We offer flexible pricing models including fixed-price projects, time-and-material contracts, and dedicated team options. We provide detailed estimates after understanding your requirements.",
    },
    {
      id: "flush-collapseSixth",
      question: "Do you handle mobile app development?",
      answer:
        "Yes, we develop cross-platform mobile applications using React Native and Flutter, as well as native iOS and Android apps. Our mobile solutions are optimized for performance, user experience, and platform-specific guidelines.",
    },
    {
      id: "flush-collapseSeventh",
      question: "How do you ensure code quality and security?",
      answer:
        "We implement rigorous testing protocols including unit tests, integration tests, and security audits. Our code review process, CI/CD pipelines, and security best practices ensure we deliver robust, scalable, and secure applications that meet industry standards.",
    },
    {
      id: "flush-collapseEighth",
      question: "Can you help with digital transformation?",
      answer:
        "Absolutely! We help businesses modernize their legacy systems, implement cloud solutions, and develop digital strategies. Our expertise includes digital transformation consulting, system architecture design, and implementation of cutting-edge technologies.",
    },
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="py-8 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="mb-6">
              <div className="mb-4">
                <Code size={48} className="text-teal-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Software Development FAQs
              </h2>
              <p className="text-gray-600 mt-4 lg:text-sm text-xs">
                Get answers to common questions about our development services,
                processes, and how we can help bring your ideas to life.
              </p>
            </div>
          </div>

          {/* Right Content - FAQ Accordion */}
          <div className="lg:w-2/3 lg:pl-12">
            <div className="space-y-2">
              {faqData.map((faq) => {
                const isActive = activeAccordion === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border-b border-gray-200 bg-white rounded-sm border hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Accordion Header */}
                    <button
                      className="flex justify-between items-center w-full text-left p-6 hover:text-teal-600 transition-colors duration-200 group"
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={isActive}
                      aria-controls={faq.id}
                    >
                      <h3 className="text-sm font-semibold pr-4 text-gray-800 group-hover:text-teal-600 transition-colors duration-200">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        size={20}
                        className={`text-gray-500 transition-transform duration-300 ${
                          isActive ? "rotate-180 text-teal-600" : ""
                        } group-hover:text-teal-600`}
                      />
                    </button>

                    {/* Accordion Content */}
                    <div
                      id={faq.id}
                      className={`overflow-hidden transition-all duration-300 ${
                        isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed text-xs">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional CTA */}
          </div>
        </div>
      </div>
      <CallToAction />
    </section>
  );
};

export default FAQSection;
