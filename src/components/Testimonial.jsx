import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "Abu Huzaifa",
    position: "CEO, Tech Solutions",
    imagesrc:
      "https://img.freepik.com/free-photo/front-view-young-male-red-shirt-black-wall_140725-142267.jpg?t=st=1761136431~exp=1761140031~hmac=40dfd5a1dc30408cd9c52668a58119c2d94f6da5efd2754b5c21136688be84a6&w=2000",
    review:
      "Working with this team was an absolute pleasure. They delivered exceptional results that exceeded our expectations and helped us achieve our business goals efficiently.",
    clientBusiness: "Technology",
    logosrc:
      "https://imgs.search.brave.com/f0vAfkZWfAxc6ZFRBITyOb8U5J4QFg8tfd5VGxEN0aM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
    alt: "client image",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    imagesrc:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    review:
      "The attention to detail and creative approach brought our vision to life. Our website traffic increased by 200% within the first month!",
    clientBusiness: "E-commerce",
    logosrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    alt: "client image",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "Product Manager",
    imagesrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    review:
      "Outstanding service from start to finish. The team was professional, responsive, and delivered high-quality work on time and within budget.",
    clientBusiness: "SaaS",
    logosrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    alt: "client image",
    rating: 4,
  },
  {
    name: "Emily Rodriguez",
    position: "Founder & CEO",
    imagesrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    review:
      "They transformed our digital presence completely. The results speak for themselves - we've seen a 150% increase in customer engagement.",
    clientBusiness: "Healthcare",
    logosrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    alt: "client image",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <Slider {...settings}>
            {data.map((testimonial, index) => (
              <div key={index} className="px-3 focus:outline-none">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col border border-gray-100">
                  {/* Rating */}
                  <StarRating rating={testimonial.rating} />

                  {/* Review Text */}
                  <blockquote className="flex-1">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 line-clamp-5">
                      "{testimonial.review}"
                    </p>
                  </blockquote>

                  {/* Client Info */}
                  <div className="border-t border-gray-100 pt-6 mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={testimonial.imagesrc}
                            alt={testimonial.alt}
                            className="rounded-full h-14 w-14 object-cover border-2 border-blue-500 shadow-sm"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm">
                            {testimonial.position}
                          </p>
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mt-1">
                            {testimonial.clientBusiness}
                          </span>
                        </div>
                      </div>
                      <img
                        src={testimonial.logosrc}
                        alt="company logo"
                        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-gray-600 mt-2">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">250+</div>
            <div className="text-gray-600 mt-2">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">5+</div>
            <div className="text-gray-600 mt-2">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600 mt-2">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Slick Carousel */}
      <style jsx>{`
        .slick-dots li button:before {
          font-size: 12px;
          color: #d1d5db;
          opacity: 1;
        }
        .slick-dots li.slick-active button:before {
          color: #3b82f6;
        }
        .slick-prev:before,
        .slick-next:before {
          color: #3b82f6;
          font-size: 24px;
        }
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
