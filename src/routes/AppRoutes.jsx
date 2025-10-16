import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// user can see only  website
import Home from "../features/user/pages/Home";
import About from "../features/user/pages/About";
import Contact from "../features/user/pages/Contact";
import Products from "../features/user/pages/Products";
import Services from "../features/user/pages/Services";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          {/*  user can see only website */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Products />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
