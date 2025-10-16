import React from "react";

const Contact = () => {
  return (
    <>
      <section className="relative bg-gray-50 py-16 px-6 md:px-20 overflow-hidden">
        {/* Optional Noise Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side — Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Have a project in mind or want to collaborate? Fill out the form
              or reach out using the details below. We’ll get back to you as
              soon as possible!
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <i className="ri-map-pin-line text-blue-600 text-xl"></i>
                <span>New Delhi, India</span>
              </p>
              <p className="flex items-center gap-3">
                <i className="ri-phone-line text-blue-600 text-xl"></i>
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center gap-3">
                <i className="ri-mail-line text-blue-600 text-xl"></i>
                <span>contact@yourdomain.com</span>
              </p>
            </div>
          </div>

          {/* Right Side — Contact Form */}
          <form className="bg-white shadow-lg rounded-2xl p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
