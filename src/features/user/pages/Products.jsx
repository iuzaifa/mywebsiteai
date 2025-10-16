import React from "react";

const Products = () => {
  return (
    <>
      <section className="relative bg-gray-50 py-20 px-6 md:px-20 overflow-hidden">
        {/* Optional Noise Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Discover our range of innovative software products designed to
            empower businesses.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white shadow-md hover:shadow-xl rounded-2xl p-8 transition-transform hover:-translate-y-2">
              <i className="ri-dashboard-line text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                CRM System
              </h3>
              <p className="text-gray-600">
                Manage customers, leads, and sales pipelines efficiently with
                our easy-to-use CRM.
              </p>
            </div>

            {/* Product 2 */}
            <div className="bg-white shadow-md hover:shadow-xl rounded-2xl p-8 transition-transform hover:-translate-y-2">
              <i className="ri-store-2-line text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                E-Commerce Suite
              </h3>
              <p className="text-gray-600">
                A complete solution for online stores — from inventory to secure
                checkout.
              </p>
            </div>

            {/* Product 3 */}
            <div className="bg-white shadow-md hover:shadow-xl rounded-2xl p-8 transition-transform hover:-translate-y-2">
              <i className="ri-bar-chart-box-line text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600">
                Visualize business performance with real-time insights and clean
                dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
