import { Phone, Mail, MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="w-full px-5">
        <div className="h-80">
          <img src="public/bg/contact1.jpg" alt="Contact page image" className="h-80" />
        </div>
        <div className="p-5">
          <h2 className="text-5xl font-thin text-black dark:text-slate-300 lg:pb-4">
            CONTACT US
          </h2>
          <h3 className="text-black dark:text-slate-300">
            Drop Your Message Here
          </h3>
          <p className="lg:text-sm text-xs text-slate-700 dark:text-slate-400">
            Thank you for your interest in XYZ Softwares Services. Please mail
            us your requirements and your needs to help us serve you better.
            This information will enable us to route your request to the
            appropriate person. You should receive a response within 24 working
            hours.
          </p>
        </div>
      </section>

      <section className="w-full px-5">
        <div className="lg:flex justify-center gap-5 items-center">
          <div className="flex flex-col justify-center h-32 w-80 w-md rounded-sm p-5 bg-teal-200/10 border-b-4 my-3 lg:my-10 border border-teal-500 dark:bg-slate-900 dark:border-slate-800">
            <h3 className="pb-3 flex items-center gap-3 text-xl  font-semibold text-teal-500">
              <Phone size={16} /> Phone{" "}
            </h3>
            <Link className="lg:text-sm text-xs text-teal-700 dark:text-slate-400 py-1">
              +91 6387869214
            </Link>
            <Link className="lg:text-sm text-xs text-teal-700 dark:text-slate-400 py-1">
              +91 9876543210
            </Link>
          </div>

          <div className="flex flex-col justify-center h-32 w-80 w-md rounded-sm p-5 bg-teal-200/10 border-b-4 my-3 lg:my-10 border border-teal-500 dark:bg-slate-900 dark:border-slate-800">
            <h3 className="pb-3 flex items-center gap-3 text-xl  font-semibold text-teal-500">
              <Mail size={17} /> Email{" "}
            </h3>
            <Link className="text-sm text-teal-700 dark:text-slate-400 pb-1">
              abuhuzaifaw7@gmail.com
            </Link>
            <Link className="text-sm text-teal-700 dark:text-slate-400">
              fazlurrahman345@gmail.com
            </Link>
          </div>

          <div className="flex flex-col justify-center h-32 w-80 rounded-sm p-5 bg-teal-200/10 border-b-4 my-3 lg:my-10 border border-teal-500 dark:bg-slate-900 dark:border-slate-800">
            <h3 className="pb-3 flex items-center gap-3 text-xl  font-semibold text-teal-500">
              <MapPin size={16} /> Hours{" "}
            </h3>
            <p className="text-sm text-teal-700 dark:text-slate-400 pb-1">
              Mon – Fri …… 11 am – 8 pm, Sat, Sun …… 6 am – 8 pm
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
