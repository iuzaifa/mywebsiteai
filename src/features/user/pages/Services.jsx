import React from "react";

const Services = () => {
  return (
    <>
      <section className="relative bg-white py-20 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We provide world-class services to help your business scale,
            innovate, and succeed.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 shadow-md hover:shadow-xl rounded-2xl p-8 transition-transform hover:-translate-y-2">
              <i className="ri-code-line text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Web Development
              </h3>
              <p className="text-gray-600">
                Custom, responsive, and scalable websites built with modern
                frameworks.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 shadow-md hover:shadow-xl rounded-2xl p-8 transition-transform hover:-translate-y-2">
              <i className="ri-smartphone-line text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Mobile App Development
              </h3>
              <p className="text-gray-600">
                High-performance mobile apps for Android and iOS platforms.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 shadow-md hover:shadow-xl rounded-2xl p-8 transition-transform hover:-translate-y-2">
              <i className="ri-cloud-line text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Cloud Integration
              </h3>
              <p className="text-gray-600">
                Deploy and manage scalable cloud infrastructure with top
                security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
