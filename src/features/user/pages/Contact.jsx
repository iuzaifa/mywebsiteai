import { Phone, Mail, MapPin } from "lucide-react";
import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <section className="max-w-7xl lg:mx-auto mx-4 w-full">
        <div className="lg:flex justify-center gap-5">
          <div className="rounded-sm p-5 bg-teal-500 my-3 lg:my-10">
            <h3 className="flex items-center gap-2 text-2xl font-semibold text-white">
              <Phone size={18} /> Phone{" "}
            </h3>
            <Link className="text-sm text-white dark:text-slate-400 py-1">
              +91 6387869214
            </Link>
            <Link className="text-sm text-white dark:text-slate-400 py-1">
              +91 9876543210
            </Link>
          </div>
          <div className="rounded-sm p-5 bg-teal-500 my-3 lg:my-10">
            <div className="contact-call">
              <h3 className="flex justify-center items-center gap-2 text-2xl font-semibold text-teal-500">
                <Mail size={18} /> Phone{" "}
              </h3>
              <Link className="text-sm text-slate-600 dark:text-slate-400 py-1">
                +91 6387869214
              </Link>
              <Link className="text-sm text-slate-600 dark:text-slate-400 py-1">
                +91 9876543210
              </Link>
            </div>
          </div>

          <div className="rounded-sm p-5 bg-teal-500 my-3 lg:my-10">
            <div className="contact-call">
              <h3 className="flex justify-center items-center gap-2 text-2xl font-semibold text-teal-500">
                <MapPin size={18} /> Phone{" "}
              </h3>
              <Link className="text-sm text-slate-600 dark:text-slate-400 py-1">
                121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact