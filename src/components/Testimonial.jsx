import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "Abu Huzaifa",
    imagesrc:
      "https://img.freepik.com/free-photo/front-view-young-male-red-shirt-black-wall_140725-142267.jpg?t=st=1761136431~exp=1761140031~hmac=40dfd5a1dc30408cd9c52668a58119c2d94f6da5efd2754b5c21136688be84a6&w=2000",
    review:
      "We are a web design and development agency. We specialise in bridging the gap between our clients and their goals.",
    clientBusineess: "NA",
    logosrc:
      "https://imgs.search.brave.com/f0vAfkZWfAxc6ZFRBITyOb8U5J4QFg8tfd5VGxEN0aM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
    alt: "client image",
  },
  {
    name: "Abu Huzaifa",
    imagesrc:
      "https://img.freepik.com/free-photo/front-view-young-male-red-shirt-black-wall_140725-142267.jpg?t=st=1761136431~exp=1761140031~hmac=40dfd5a1dc30408cd9c52668a58119c2d94f6da5efd2754b5c21136688be84a6&w=2000",
    review:
      "We are a web design and development agency. We specialise in bridging the gap between our clients and their goals.",
    clientBusineess: "NA",
    logosrc:
      "https://imgs.search.brave.com/f0vAfkZWfAxc6ZFRBITyOb8U5J4QFg8tfd5VGxEN0aM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
    alt: "client image",
  },
  {
    name: "Abu Huzaifa",
    imagesrc:
      "https://img.freepik.com/free-photo/front-view-young-male-red-shirt-black-wall_140725-142267.jpg?t=st=1761136431~exp=1761140031~hmac=40dfd5a1dc30408cd9c52668a58119c2d94f6da5efd2754b5c21136688be84a6&w=2000",
    review:
      "We are a web design and development agency. We specialise in bridging the gap between our clients and their goals.",
    clientBusineess: "NA",
    logosrc:
      "https://imgs.search.brave.com/f0vAfkZWfAxc6ZFRBITyOb8U5J4QFg8tfd5VGxEN0aM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
    alt: "client image",
  },
  {
    name: "Abu Huzaifa",
    imagesrc:
      "https://img.freepik.com/free-photo/front-view-young-male-red-shirt-black-wall_140725-142267.jpg?t=st=1761136431~exp=1761140031~hmac=40dfd5a1dc30408cd9c52668a58119c2d94f6da5efd2754b5c21136688be84a6&w=2000",
    review:
      "We are a web design and development agency. We specialise in bridging the gap between our clients and their goals.",
    clientBusineess: "NA",
    logosrc:
      "https://imgs.search.brave.com/f0vAfkZWfAxc6ZFRBITyOb8U5J4QFg8tfd5VGxEN0aM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
    alt: "client image",
  },
  {
    name: "Abu Huzaifa",
    imagesrc:
      "https://img.freepik.com/free-photo/front-view-young-male-red-shirt-black-wall_140725-142267.jpg?t=st=1761136431~exp=1761140031~hmac=40dfd5a1dc30408cd9c52668a58119c2d94f6da5efd2754b5c21136688be84a6&w=2000",
    review:
      "We are a web design and development agency. We specialise in bridging the gap between our clients and their goals.",
    clientBusineess: "NA",
    logosrc:
      "https://imgs.search.brave.com/f0vAfkZWfAxc6ZFRBITyOb8U5J4QFg8tfd5VGxEN0aM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
    alt: "client image",
  },
  {
    name: "Abu Huzaifa ",
    imagesrc:
      "https://img.freepik.com/free-photo/front-view-young-male-red-shirt-black-wall_140725-142267.jpg?t=st=1761136431~exp=1761140031~hmac=40dfd5a1dc30408cd9c52668a58119c2d94f6da5efd2754b5c21136688be84a6&w=2000",
    review:
      "We are a web design and development agency. We specialise in bridging the gap between our clients and their goals.",
    clientBusineess: "NA",
    logosrc:
      "https://imgs.search.brave.com/f0vAfkZWfAxc6ZFRBITyOb8U5J4QFg8tfd5VGxEN0aM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
    alt: "client image",
  },
  {
    name: "Abu Huzaifa",
    imagesrc:
      "https://img.freepik.com/free-photo/front-view-young-male-red-shirt-black-wall_140725-142267.jpg?t=st=1761136431~exp=1761140031~hmac=40dfd5a1dc30408cd9c52668a58119c2d94f6da5efd2754b5c21136688be84a6&w=2000",
    review:
      "We are a web design and development agency. We specialise in bridging the gap between our clients and their goals.",
    clientBusineess: "NA",
    logosrc:
      "https://imgs.search.brave.com/f0vAfkZWfAxc6ZFRBITyOb8U5J4QFg8tfd5VGxEN0aM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
    alt: "client image",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="max-w-6xl mx-auto py-10 bg-white">
      <div className="py-10 text-center lg:max-w-2xl mx-auto">
        <h2 className="text-slate-800 text-4xl font-extrabold">Customer success stories</h2>
        <p className="py-1 text-slate-600 text-xs lg:max-w-md mx-auto">
          Create convincing customer success stories to boost sales, build trust
          with prospects and increase customer loyalty.
        </p>
      </div>
      <Slider {...settings}>
        {data.map((e, index) => (
          <div key={index} className="px-4">
            <div className="bg-white border rounded-sm p-8 h-full flex flex-col justify-between">
              <p className="italic text-gray-700 mb-6">"{e.review}"</p>
              <div className="border-t pt-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={e.imagesrc}
                    alt={e.alt}
                    className="rounded-full h-14 w-14 border-2 border-teal-500"
                  />
                  <div>
                    <strong className="text-gray-900">{e.name}</strong>
                    <p className="text-xs text-gray-500">{e.clientBusineess}</p>
                  </div>
                </div>
                <img
                  src={e.logosrc}
                  alt="logo"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
