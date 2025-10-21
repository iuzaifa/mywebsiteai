import React from "react";

const About = () => {
  return (
    <>
      <section className="py-16 sm:py-24  dark:bg-gray-800 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header and Mission */}
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-teal-600 dark:text-teal-400 tracking-wide uppercase">
              Who We Are
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Engineering Success, Together 💻
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              At{" "}
              <strong className="text-teal-600 dark:text-teal-400">
                Sululu
              </strong>
              , we don't just write code—we engineer **digital transformation**.
              We turn your complex challenges into simple, elegant software
              solutions.
            </p>
          </div>

          {/* Our Development Philosophy (The 'How') */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-teal-500/50 pb-2">
              Our Development Philosophy
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <p className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                  Agile Partnership
                </p>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                  We work in sprints, integrating your team at every stage to
                  ensure the final product aligns perfectly with your evolving
                  needs.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <p className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                  Technology Agnostic
                </p>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                  We choose the right tools for your specific project, utilizing
                  expertise in **React, Python, AWS, and Swift**.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <p className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                  Focus on Scalability
                </p>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                  Our solutions are built for tomorrow's growth, prioritizing
                  **clean architecture** and long-term maintainability.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <p className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                  Transparent Process
                </p>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                  You get full visibility into the timeline, progress, and
                  budget. No hidden costs, no surprises.
                </p>
              </div>
            </div>
          </div>

          {/* Driven By Core Values (Grid/Stats) */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 border-b border-teal-500/50 pb-2 inline-block">
              Driven By Core Values
            </h3>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="p-4">
                <p className="text-4xl font-extrabold text-teal-600 dark:text-teal-400">
                  100+
                </p>
                <p className="mt-1 text-lg font-medium text-gray-700 dark:text-gray-200">
                  Projects Launched
                </p>
              </div>
              <div className="p-4">
                <p className="text-4xl font-extrabold text-teal-600 dark:text-teal-400">
                  98%
                </p>
                <p className="mt-1 text-lg font-medium text-gray-700 dark:text-gray-200">
                  Client Retention
                </p>
              </div>
              <div className="p-4">
                <p className="text-4xl font-extrabold text-teal-600 dark:text-teal-400">
                  7+
                </p>
                <p className="mt-1 text-lg font-medium text-gray-700 dark:text-gray-200">
                  Years of Experience
                </p>
              </div>
              <div className="p-4">
                <p className="text-4xl font-extrabold text-teal-600 dark:text-teal-400">
                  10+
                </p>
                <p className="mt-1 text-lg font-medium text-gray-700 dark:text-gray-200">
                  Industry Awards
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center p-8 bg-teal-500/10 dark:bg-teal-500/20 rounded-xl shadow-inner">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Ready to Build Your Next Success Story? 🚀
            </h3>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Let's discuss how smart software can transform your business.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="#"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition duration-300"
              >
                Start Your Project
              </a>
              <a
                href="#"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-teal-600 dark:text-teal-400 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>


      
    </>
  );
};

export default About;
