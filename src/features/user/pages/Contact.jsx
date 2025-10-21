import { Phone, Mail, MapPin, Send } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";

const breadcrumbPath = [
  { name: "Home", path: "/" },
  { name: "Contact us", path: "/contact" },
];

const Contact = () => {
  return (
    <>
      {/* <Breadcrumb /> */}
      <div className="pb-4">
        <Breadcrumb items={breadcrumbPath} />
      </div>

      <section className="max-w-6xl lg:mx-auto  mt-10">
        <div className="p-5">
          <h2 className="border-teal-500 border-b-2 lg:text-5xl text-3xl font-thin text-black text-left dark:text-slate-300 py-2">
            CONTACT US
          </h2>
          <h3 className="text-black dark:text-slate-300 lg:pt-6 pt-3 text-left">
            Drop Your Message Here
          </h3>
          <p className="lg:text-sm text-xs text-slate-700 dark:text-slate-400 text-left lg:pt-2 pt-1">
            Thank you for your interest in XYZ Softwares Services. Please mail
            us your requirements and your needs to help us serve you better.
            This information will enable us to route your request to the
            appropriate person. You should receive a response within 24 working
            hours.
          </p>
        </div>
      </section>

      <section className="lg:max-w-6xl mx-auto  dark:bg-slate-950/90 py-32 lg:my-14  lg:p-10  ">
        <div className="lg:flex py-8 justify-center max-w-6xl mx-auto px-5 gap-10 lg:py-10 rounded-sm">
          <div className="lg:w-1/2 border lg:p-8 p-4 bg-white dark:bg-slate-950/90 dark:border-slate-600 rounded-md">
            <form action="">
              <div className="lg:flex gap-2 justify-center items-center my-2">
                <div className="w-full pb-2">
                  <label
                    htmlFor=""
                    className="text-sm text-slate-700 dark:text-slate-400"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 w-full rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30  focus:outline-teal-500/60 text-slate-800"
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full pb-2">
                  <label
                    htmlFor=""
                    className="text-sm text-slate-700 dark:text-slate-400"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 w-full rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30 focus:outline-teal-500/60 text-slate-800"
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="lg:flex gap-2 justify-center items-center my-2">
                <div className="w-full pb-2">
                  <label
                    htmlFor=""
                    className="text-sm text-slate-700 dark:text-slate-400"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 w-full rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30 focus:outline-teal-500/60 text-slate-800"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email Address"
                  />
                </div>
                <div className="w-full pb-2">
                  <label
                    htmlFor=""
                    className="text-sm text-slate-700 dark:text-slate-400"
                  >
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 w-full rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30 focus:outline-teal-500/60 text-slate-800"
                    type="phone"
                    name=""
                    id=""
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              <div className="flex gap-2 justify-center items-center my-2">
                <div className="w-full pb-2">
                  <label
                    htmlFor=""
                    className="text-sm text-slate-700 dark:text-slate-400"
                  >
                    Company OR Organisation Name
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 w-full rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30 focus:outline-teal-500/60 text-slate-800"
                    type="text"
                    name=""
                    id=""
                    placeholder="Company / Organisation Name"
                  />
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center my-2">
                <div className="w-full pb-2">
                  <label
                    htmlFor=""
                    className="text-sm text-slate-700 dark:text-slate-400"
                  >
                    Information Require For..
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name=""
                    id=""
                    className="p-2 w-full rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30 focus:outline-teal-500/60 text-slate-400"
                    defaultValue="defaultValue"
                  >
                    <option className="bg-white" value="defaultValue">
                      ------
                    </option>
                    <option className="bg-white" value="">
                      Web Developemt
                    </option>
                    <option className="bg-white" value="">
                      Application Developemt
                    </option>
                    <option className="bg-white" value="">
                      CRM Development
                    </option>
                    <option className="bg-white" value="">
                      ERP Development
                    </option>
                    <option className="bg-white" value="">
                      Graphic Desing
                    </option>
                    <option className="bg-white" value="">
                      Social Media
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center my-2">
                <div className="w-full pb-2">
                  <label
                    htmlFor=""
                    className="text-sm text-slate-700 dark:text-slate-400"
                  >
                    Your Message
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Write your message ? ..."
                    name=""
                    id=""
                    className="p-2 h-28 w-full rounded-sm text-xs bg-slate-200/50 dark:bg-slate-600/30 focus:outline-teal-500/60 text-slate-800"
                  ></textarea>
                </div>
              </div>

              <div class="flex justify-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="submit"
                  id="submit-button"
                  class="py-2 px-6 lg:text-sm text-xs  w-full flex items-center justify-center gap-2 bg-teal-500 text-white rounded-sm shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 transition duration-150"
                >
                  <Send size={16} />
                  Submit
                </button>
              </div>
            </form>
          </div>
         
         
          <div className="lg:w-1/2 w-full ">
            <h3 className="text-5xl font-thin py-5 dark:text-slate-400">
              Location
            </h3>

            <p className="text-slate-500 pb-3">
              <strong>Address:</strong> 12, Kalindi Kunj Rd, Block B, Jamia
              Nagar, Okhla, New Delhi, Delhi 110025
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83922907926!2d77.06889943342536!3d28.5272803436318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2e972e8a0b1%3A0xbcd6ea6f5c63e2e7!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1692269836550!5m2!1sen!2sin"
              width="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="lg:h-80 h-32 border-teal-500 border-4"
            />
          </div>
        </div>
        
        
        
        <div className="lg:flex justify-center gap-5 items-center m-3">
          <div className="flex flex-col justify-center lg:w-1/3 w-full  rounded-sm px-5 py-7 bg-white  hover:bg-white/70  border-b-4 my-3 lg:my-10 border border-slate-300 dark:bg-slate-900 dark:border-slate-800">
            <h3 className="pb-3 flex items-center gap-3 text-xl  font-semibold text-teal-500">
              <Phone size={16} /> Phone{" "}
            </h3>
            <Link className="lg:text-sm text-xs text-slate-500 dark:text-slate-400 pb-1">
              +91 6387869214
            </Link>
            <Link className="lg:text-sm text-xs text-slate-500 dark:text-slate-400">
              +91 9876543210
            </Link>
          </div>

          <div className="flex flex-col justify-center lg:w-1/3 w-full rounded-sm px-5 py-7 bg-white  hover:bg-white/70 border-b-4 my-3 lg:my-10 border border-slate-300 dark:bg-slate-900 dark:border-slate-800">
            <h3 className="pb-3 flex items-center gap-3 text-xl  font-semibold text-teal-500">
              <Mail size={17} /> Email{" "}
            </h3>
            <Link className="text-sm text-slate-500 dark:text-slate-400 pb-1">
              abuhuzaifaw7@gmail.com
            </Link>
            <Link className="text-sm text-slate-500 dark:text-slate-400">
              fazlurrahman345@gmail.com
            </Link>
          </div>

          <div className="flex flex-col justify-center lg:w-1/3 w-full rounded-sm px-5 py-7 bg-white  hover:bg-white/70 border-b-4 my-3 lg:my-10 border border-slate-300 dark:bg-slate-900 dark:border-slate-800">
            <h3 className="pb-3 flex items-center gap-3 text-xl  font-semibold text-teal-500">
              <MapPin size={16} /> Hours{" "}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 pb-1">
              Mon – Fri …… 11 am – 8 pm, Sat, Sun …… 6 am – 8 pm
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
