import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, MessageSquareText } from "lucide-react";

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
    logosrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    alt: "client image",
    rating: 4,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-3 h-3 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          strokeWidth={0}
          fill={index < rating ? "#eab308 " : "none"}
        />
      ))}
    </div>
  );
};

const Testimonial = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 800,
  //   autoplaySpeed: 3000000,
  //   pauseOnHover: true,
  //   cssEase: "ease-in-out",
  //   responsive: [
  //     {
  //       breakpoint: 1280,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: true,
  //       },
  //     },
  //   ],
  // };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2, // default for desktop
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // small mobile
        settings: {
          slidesToShow: 1, // SHOW ONLY ONE CARD
          slidesToScroll: 1,
          dots: true,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <section className="w-full py-16 bg-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="lg:text-sm text-xs text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <Slider {...settings}>
            {data.map((testimonial, index) => (
              <div
                key={index}
                className="px-3 focus:outline-none hover:cursor-pointer"
              >
                <div className="bg-white py-8 px-10 rounded-md transition-all duration-300 h-full lg:flex flex-col border border-teal-300">
                  {/* Rating */}

                  {/* Review Text */}
                  <blockquote className="flex-1">
                    <p className="text-gray-600  text-xs leading-relaxed mb-3 line-clamp-5">
                      {testimonial.review}
                    </p>
                  </blockquote>
                  {/* Client Info */}
                  <div className="border-t border-dashed border-gray-300 mt-auto">
                    <div className="flex items-center justify-between pt-3">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={testimonial.imagesrc}
                            alt={testimonial.alt}
                            className="rounded-full h-12 w-12 object-cover border-2 border-teal-500 shadow-sm"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                            <MessageSquareText className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        <div className="">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-xs">
                            {testimonial.position}
                          </p>
                          <StarRating rating={testimonial.rating} />
                        </div>
                      </div>

                      <img
                        src={testimonial.logosrc}
                        alt="company logo"
                        className="h-8 w-auto object-contain hover:opacity-100 grayscale hover:grayscale-0 cursor-pointer "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-teal-600">98%</div>
            <div className="text-gray-600 mt-2">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600">250+</div>
            <div className="text-gray-600 mt-2">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600">5+</div>
            <div className="text-gray-600 mt-2">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600">50+</div>
            <div className="text-gray-600 mt-2">Happy Clients</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
