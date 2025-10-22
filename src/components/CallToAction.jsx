import React from "react";
import { Zap, ArrowRight, Sparkles } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      {/* Version 1: Modern Gradient */}
      <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 p-8">
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white lg:text-sm text-xs">
                  Limited Time Offer
                </span>
              </div>

              <h2 className="text-2xl lg:text-4xl font-semibold text-white max-w-2xl leading-tight">
                Ready to Transform Your{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  Digital Presence?
                </span>
              </h2>

              <p className="text-white/90 mt-3 lg:text-sm text-xs max-w-xl">
                Join 500+ successful businesses that trusted us. Start your free
                consultation today and get a personalized strategy.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button className="group relative inline-flex items-center justify-center lg:px-6 px-4 py-3 text-xs  text-teal-950 bg-white rounded-sm hover:shadow-sm transition-all duration-300 transform hover:scale-101 hover:-translate-y-1">
                <Zap className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
                Start Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
      </div>

      {/* Version 2: Minimal Clean Design (Alternative) */}
      {/* <div className="border-2 border-teal-200 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 max-w-xl leading-tight">
              Let's Build Something{" "}
              <span className="text-teal-600">Exceptional</span> Together
            </h2>
            <p className="text-gray-600 mt-2 text-sm lg:text-base">
              Schedule your free discovery call and get a customized project roadmap.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-teal-500 text-teal-600 font-semibold rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300">
              Book a Call
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-lg">
              <Zap className="w-4 h-4 mr-2" />
              Get Proposal
            </button>
          </div>
        </div>
      </div> */}

      {/* Version 3: Stats Focused (Alternative) */}
      {/* <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Join <span className="text-teal-400">500+</span> Successful Projects
            </h2>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">30+</div>
                <div className="text-sm text-gray-400">Days Warranty</div>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-400 transition-all duration-300 transform hover:scale-105">
              <Zap className="w-5 h-5 mr-3 animate-pulse" />
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default CallToAction;
