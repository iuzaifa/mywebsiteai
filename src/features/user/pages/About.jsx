import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import WhoWeAre from "../../../components/WhoWeAre";
import CallToAction from "../../../components/CallToAction";
import TestimonialSection from "../../../components/Testimonial";
import FAQSection from "../../../components/FAQSection.jsx";



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

      <section className="lg:py-20 py-10 bg-white">
        <WhoWeAre />
      </section>

      <section className="py-1 ">
        <TestimonialSection />
      </section>
      {/* <section className="py-1">
        <CallToAction />
      </section> */}

      <section>
        <FAQSection/>
      </section>
    </>
  );
};

export default About;
