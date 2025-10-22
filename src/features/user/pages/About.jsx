import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import WhoWeAre from "../../../components/WhoWeAre";
import CallToAction from "../../../components/CallToAction";
import TestimonialSection from "../../../components/Testimonial";



const breadcrumbPath = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
];


const About = () => {
  return (
    <>
      <section className="">
        <Breadcrumb items={breadcrumbPath} />
      </section>

      <section className=" xl:mt-32 lg:py-20 bg-white">
        <WhoWeAre />
      </section>

      <section className="mb-12  my-10">
        <CallToAction />
      </section>

      <section>
          <TestimonialSection/>
      </section>
    </>
  );
};

export default About;
