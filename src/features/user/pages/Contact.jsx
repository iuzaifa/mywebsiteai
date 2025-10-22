// import {
//   MessageSquareText,
//   Headset,
//   Mail,
//   MessagesSquare,
//   Phone,
//   MapPin,
//   Send,
// } from "lucide-react";
// import React from "react";
// import { Link } from "react-router-dom";
// import Breadcrumb from "../../../components/Breadcrumb";

// const breadcrumbPath = [
//   { name: "Home", path: "/" },
//   { name: "Contact us", path: "/contact" },
// ];

// const Contact = () => {
//   return (
//     <>
//       {/* <Breadcrumb /> */}
//       <div className="pb-4">
//         <Breadcrumb items={breadcrumbPath} />
//       </div>

//       <section className="max-w-6xl lg:mx-auto  mt-5 bg-white dark:bg-slate-900">
//         <div className="lg:p-10 m-5 py-5">
//           <h2 className="border-teal-500 border-b-2 lg:text-5xl text-3xl font-thin text-black text-left dark:text-slate-300 py-2">
//             CONTACT US
//           </h2>
//           <h3 className="text-black dark:text-slate-300 lg:pt-6 pt-3 text-left">
//             Drop Your Message Here
//           </h3>
//           <p className="lg:text-sm text-xs text-slate-700 dark:text-slate-400 text-left lg:pt-2 pt-1">
//             Thank you for your interest in XYZ Softwares Services. Please mail
//             us your requirements and your needs to help us serve you better.
//             This information will enable us to route your request to the
//             appropriate person. You should receive a response within 24 working
//             hours.
//           </p>
//         </div>
//       </section>

//       <section className="lg:max-w-6xl mx-auto bg-white lg:my-20 my-10  dark:bg-slate-950/90">
//         <div className="lg:flex py-8 justify-center max-w-6xl mx-auto px-5 gap-10 lg:py-10 rounded-sm">
//           <div className="lg:w-1/2 border lg:p-8 p-4 bg-white dark:bg-slate-950/90 dark:border-slate-600 rounded-md">
//             <form action="">
//               <div className="lg:flex gap-2 justify-center items-center my-1">
//                 <div className="w-full pb-2">
//                   <label
//                     htmlFor=""
//                     className="text-sm text-slate-700 dark:text-slate-400"
//                   >
//                     First Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     className="dark:text-slate-300 dark:placeholder-slate-700  p-2 w-full rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30  focus:outline-teal-500/60 text-slate-700"
//                     type="text"
//                     name=""
//                     id=""
//                     placeholder="First Name"
//                   />
//                 </div>
//                 <div className="w-full pb-2">
//                   <label
//                     htmlFor=""
//                     className="text-sm text-slate-700 dark:text-slate-400"
//                   >
//                     Last Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     className="p-2 w-full dark:text-slate-300 dark:placeholder-slate-700 rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30 focus:outline-teal-500/60 text-slate-800"
//                     type="text"
//                     name=""
//                     id=""
//                     placeholder="Last Name"
//                   />
//                 </div>
//               </div>
//               <div className="lg:flex gap-2 justify-center items-center my-1">
//                 <div className="w-full pb-2">
//                   <label
//                     htmlFor=""
//                     className="text-sm text-slate-700 dark:text-slate-400"
//                   >
//                     Email <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     className="p-2 w-full dark:text-slate-300 dark:placeholder-slate-700 rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30 focus:outline-teal-500/60 text-slate-800"
//                     type="email"
//                     name=""
//                     id=""
//                     placeholder="Email Address"
//                   />
//                 </div>
//                 <div className="w-full pb-2">
//                   <label
//                     htmlFor=""
//                     className="text-sm text-slate-700 dark:text-slate-400"
//                   >
//                     Mobile Number <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     className="p-2 w-full dark:text-slate-300 dark:placeholder-slate-700 rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30 focus:outline-teal-500/60 text-slate-800"
//                     type="phone"
//                     name=""
//                     id=""
//                     placeholder="Mobile Number"
//                   />
//                 </div>
//               </div>

//               <div className="flex gap-2 justify-center items-center my-1">
//                 <div className="w-full pb-2">
//                   <label
//                     htmlFor=""
//                     className="text-sm dark:text-slate-300 dark:placeholder-slate-700 text-slate-700 dark:text-slate-400"
//                   >
//                     Company OR Organisation Name
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     className="p-2 w-full dark:text-slate-300 dark:placeholder-slate-700 rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30 focus:outline-teal-500/60 text-slate-800"
//                     type="text"
//                     name=""
//                     id=""
//                     placeholder="Company / Organisation Name"
//                   />
//                 </div>
//               </div>
//               <div className="flex gap-2 justify-center items-center my-1">
//                 <div className="w-full pb-2">
//                   <label
//                     htmlFor=""
//                     className="text-sm text-slate-700 dark:text-slate-400"
//                   >
//                     Information Require For..
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name=""
//                     id=""
//                     className="p-2 w-full dark:text-slate-300 dark:placeholder-slate-700 rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30 focus:outline-teal-500/60 text-slate-400"
//                     defaultValue="defaultValue"
//                   >
//                     <option className="bg-white" value="defaultValue">
//                       ------
//                     </option>
//                     <option className="bg-white" value="">
//                       Web Developemt
//                     </option>
//                     <option className="bg-white" value="">
//                       Application Developemt
//                     </option>
//                     <option className="bg-white" value="">
//                       CRM Development
//                     </option>
//                     <option className="bg-white" value="">
//                       ERP Development
//                     </option>
//                     <option className="bg-white" value="">
//                       Graphic Desing
//                     </option>
//                     <option className="bg-white" value="">
//                       Social Media
//                     </option>
//                   </select>
//                 </div>
//               </div>
//               <div className="flex gap-2 justify-center items-center my-1">
//                 <div className="w-full pb-2">
//                   <label
//                     htmlFor=""
//                     className="text-sm text-slate-700 dark:text-slate-400"
//                   >
//                     Your Message
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     placeholder="Write your message ? ..."
//                     name=""
//                     id=""
//                     className="p-2 h-28 w-full rounded-sm dark:text-slate-300 dark:placeholder-slate-700 text-xs bg-slate-200/50 dark:bg-slate-600/30 focus:outline-teal-500/60 text-slate-800"
//                   ></textarea>
//                 </div>
//               </div>

//               <div class="flex justify-center pt-4 border-t border-gray-200 dark:border-gray-700">
//                 <button
//                   type="submit"
//                   id="submit-button"
//                   class="py-2 px-6 lg:text-sm text-xs  w-full flex items-center justify-center gap-2 bg-teal-500 text-white rounded-sm shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 transition duration-150"
//                 >
//                   <Send size={16} />
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>

//           <div className="lg:w-1/2 w-full ">
//             <h3 className="text-5xl font-thin py-5 dark:text-slate-400">
//               Location
//             </h3>

//             <p className="text-slate-500 pb-3">
//               <strong>Address:</strong> 12, Kalindi Kunj Rd, Block B, Jamia
//               Nagar, Okhla, New Delhi, Delhi 110025
//             </p>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83922907926!2d77.06889943342536!3d28.5272803436318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2e972e8a0b1%3A0xbcd6ea6f5c63e2e7!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1692269836550!5m2!1sen!2sin"
//               width="100%"
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="lg:h-80 h-32 border-teal-500 border-4"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="items-cente text-center m-2 lg:max-w-7xl mx-auto">
//         <h2 className="text-black/90 text-4xl">Need More Help?</h2>

//         <div className="lg:flex items-center lg:gap-x-6 lg:gap-y-6 flex-wrap justify-center lg:m-5 m-2 lg:p-5 p-2 ">
//           <div className="bg-white dark:bg-slate-900/50  gap-3 lg:w-1/3 lg:mb-0 mb-3 flex items-center p-5">
//             <div className="size-28 items-center text-teal-500 text-center flex justify-center bg-slate-50 dark:bg-slate-800/50 rounded-md">
//               <MessageSquareText size={30} />
//             </div>

//             <div className="text-left">
//               <h5 className="font-semibold text-black/90 dark:text-slate-300 text-sm">
//                 Text us at 309-650-8582
//               </h5>
//               <p className="lg:text-sm text-xs text-slate-700 dark:text-slate-500">
//                 Message and data rates may apply
//               </p>
//               <Link className="text-xs border-b border-black/90" to={"#"}>
//                 Text US
//               </Link>
//             </div>
//           </div>
//           <div className="bg-white dark:bg-slate-900/50 gap-3 lg:w-1/3 lg:mb-0 mb-3 flex items-center p-5 ">
//             <div className="size-28 items-center text-teal-500 text-center flex justify-center bg-slate-50 dark:bg-slate-800/50 rounded-md">
//               <MessagesSquare size={30} />
//             </div>

//             <div className="text-left">
//               <h5 className="font-semibold text-black/90 text-sm dark:text-slate-300">
//                 Chat with a specialist
//               </h5>
//               <p className="lg:text-sm text-xs text-slate-700 dark:text-slate-500">
//                 Available 10am-12pm IST, 7 days a week
//               </p>
//               <Link className="text-xs border-b border-black/90" to={"#"}>
//                 Chat now
//               </Link>
//             </div>
//           </div>
//           <div className="bg-white dark:bg-slate-900/50 gap-3 lg:w-1/3 lg:mb-0 mb-3 flex items-center p-5 ">
//             <div className="size-28 items-center text-teal-500 text-center flex justify-center bg-slate-50 dark:bg-slate-800/50 rounded-md">
//               <Headset size={30} />
//             </div>

//             <div className="text-left">
//               <h5 className="font-semibold text-black/90 text-sm dark:text-slate-300">
//                 Call us at 1-866-983-8582
//               </h5>
//               <p className="lg:text-sm text-xs text-slate-700 dark:text-slate-500">
//                 Available 10am-12pm IST, 7 days a week
//               </p>
//               <Link className="text-xs border-b border-black/90" to={"#"}>
//                 Call us
//               </Link>
//             </div>
//           </div>
//           <div className="bg-white dark:bg-slate-900/50 gap-3 lg:w-1/3 lg:mb-0 mb-3 flex items-center p-5 ">
//             <div className="size-28 items-center text-teal-500 text-center flex justify-center bg-slate-50 dark:bg-slate-800/50 rounded-md">
//               <Mail size={30} />
//             </div>

//             <div className="text-left">
//               <h5 className="font-semibold text-black/90 text-sm dark:text-slate-300">
//                 Send us an email
//               </h5>
//               <p className="lg:text-sm text-xs text-slate-700 dark:text-slate-500">
//                 We'd love to hear from you!
//               </p>
//               <Link className="text-xs border-b border-black/90" to={"#"}>
//                 Email us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="text-center py-20">
//         <p className="text-xs text-slate-400"> Thanks 🥰❤️</p>
//       </div>
//     </>
//   );
// };

// export default Contact;


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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
      value: "123 Tech Drive, San Francisco, CA 94105",
      href: "https://maps.google.com",
      color: "from-purple-500 to-purple-600",
    },
  ];

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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus("success");

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitStatus(null);
    }, 5000);
  };

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

                {/* Success Message */}
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
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company (optional)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      How can we help you? *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none bg-white"
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, challenges, or how we can help..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                        123 Tech Drive, San Francisco, CA
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