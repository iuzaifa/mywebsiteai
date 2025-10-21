import { Phone, Mail, MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section
        className="max-w-6xl lg:mx-auto  "
        style={{ background: "public/bg/contact1.jpg" }}
      >
        <div className=" p-4">
          <img
            src="public/bg/contact1.jpg"
            alt="Contact page image"
            className="w-full border-teal-500 border"
          />
        </div>

        <div className="p-5">
          <h2 className="text-5xl font-thin text-black text-left dark:text-slate-300 py-6">
            CONTACT US
          </h2>
          <h3 className="text-black dark:text-slate-300 py-2 text-left">
            Drop Your Message Here
          </h3>
          <p className="lg:text-sm text-xs text-slate-700 dark:text-slate-400 text-left">
            Thank you for your interest in XYZ Softwares Services. Please mail
            us your requirements and your needs to help us serve you better.
            This information will enable us to route your request to the
            appropriate person. You should receive a response within 24 working
            hours.
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-5">
        <div className="lg:flex justify-center gap-5 items-center">
          <div className="flex flex-col justify-center w-96 w-md rounded-sm px-5 py-7 bg-teal-200/10 hover:bg-teal-200/30  border-b-4 my-3 lg:my-10 border border-teal-500 dark:bg-slate-900 dark:border-slate-800">
            <h3 className="pb-3 flex items-center gap-3 text-xl  font-semibold text-teal-500">
              <Phone size={16} /> Phone{" "}
            </h3>
            <Link className="lg:text-sm text-xs text-teal-700 dark:text-slate-400 pb-1">
              +91 6387869214
            </Link>
            <Link className="lg:text-sm text-xs text-teal-700 dark:text-slate-400">
              +91 9876543210
            </Link>
          </div>

          <div className="flex flex-col justify-center w-96 rounded-sm px-5 py-7 bg-teal-200/10 hover:bg-teal-200/30 border-b-4 my-3 lg:my-10 border border-teal-500 dark:bg-slate-900 dark:border-slate-800">
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

          <div className="flex flex-col justify-center w-96 rounded-sm px-5 py-7 bg-teal-200/10 hover:bg-teal-200/30 border-b-4 my-3 lg:my-10 border border-teal-500 dark:bg-slate-900 dark:border-slate-800">
            <h3 className="pb-3 flex items-center gap-3 text-xl  font-semibold text-teal-500">
              <MapPin size={16} /> Hours{" "}
            </h3>
            <p className="text-sm text-teal-700 dark:text-slate-400 pb-1">
              Mon – Fri …… 11 am – 8 pm, Sat, Sun …… 6 am – 8 pm
            </p>
          </div>
        </div>
      </section>


      <section></section>
    </>
  );
};

export default Contact;

