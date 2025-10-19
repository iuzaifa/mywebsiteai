// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // user can see only  website
// import Home from "../features/user/pages/Home";
// import About from "../features/user/pages/About";
// import Contact from "../features/user/pages/Contact";
// import Products from "../features/user/pages/Products";
// import Services from "../features/user/pages/Services";
// import Careers from "../features/user/pages/Careers";
// import WebLayout from "../components/layout/WebLayout"

// const AppRoutes = () => {
//   return (
//     <>
//       <Router>
//         <Routes>
//           {/*  user can see only website */}
//           <Route path="/" element={<WebLayout />}></Route>
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/product" element={<Products />} />
//           <Route path="/service" element={<Services />} />
//           <Route path="/careers" element={<Careers />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default AppRoutes;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// user can see only  website
import Home from "../features/user/pages/Home";
import About from "../features/user/pages/About";
import Contact from "../features/user/pages/Contact";
import Products from "../features/user/pages/Products";
import Services from "../features/user/pages/Services";
import Careers from "../features/user/pages/Careers";
import WebLayout from "../components/layout/WebLayout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/*  Parent layout */}
        <Route path="/" element={<WebLayout />}>
          {/*  Child routes shown inside <Outlet /> */}
          <Route index element={<Home />} /> {/* / */}
          <Route path="home" element={<Home />} /> {/* /home */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<Products />} />
          <Route path="service" element={<Services />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
