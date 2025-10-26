import React, { useState } from "react";
import {
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import axios from "axios";

const ContactFrom = () => {


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    inquiry: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  

  const inquiryTypes = [
    "New Project Inquiry",
    "Partnership Opportunity",
    "Technical Support",
    "Career Opportunities",
    "General Question",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:8080/api/v1/lead/new-lead", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setIsSubmitting(false);
      setSubmitStatus("success");

      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          phone: "",
          inquiry: "",
          message: "",
        });
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");
    }
  };

  return (
    <>
      <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-200">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center text-white">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Send us a message
            </h2>
            <p className="text-gray-600">We'd love to hear from you</p>
          </div>
        </div>

        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <div>
              <p className="text-green-800 font-medium">
                Message sent successfully!
              </p>
              <p className="text-green-700 text-sm">
                We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@company.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Your company (optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How can we help you? *
            </label>
            <select
              name="inquiry"
              required
              value={formData.inquiry}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an inquiry type</option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Message *
            </label>
            <textarea
              name="message"
              required
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us how we can help..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactFrom;
