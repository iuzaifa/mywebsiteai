// import {
//   Home,
//   Info,
//   Briefcase,
//   Box,
//   FileText,
//   Users,
//   Phone,
// } from "lucide-react";

// const navdata = [
//   { icon: <Home size={18} />, label: "Home", link: "/", dropdown: false },

//   {
//     icon: <Info size={18} />,
//     label: "About",
//     link: "/about",
//     dropdown: true,
//     dropdownItems: [
//       { title: "About Us", link: "/about" },
//       { title: "Our Works", link: "/our-works" },
//       { title: "Our Team", link: "/our-team" },
//       { title: "Technologies", link: "/technologies" },
//     ],
//   },

//   {
//     icon: <Briefcase size={18} />,
//     label: "Services",
//     link: "/services",
//     dropdown: true,
//     dropdownItems: [
//       {
//         title: "Software Development",
//         items: [
//           {
//             label: "Software Development",
//             link: "/services/software-development",
//           },
//           {
//             label: "Ecommerce Software Development",
//             link: "/services/ecommerce-software",
//           },
//           {
//             label: "Custom Software Development",
//             link: "/services/custom-software",
//           },
//           {
//             label: "Stock Management Software",
//             link: "/services/stock-management",
//           },
//           { label: "CRM Software Development", link: "/services/crm-software" },
//           {
//             label: "Online Complaint Management System",
//             link: "/services/complaint-system",
//           },
//           { label: "Web Application Development", link: "/services/web-apps" },
//           {
//             label: "IT Asset Management Software",
//             link: "/services/it-asset-management",
//           },
//         ],
//       },
//       {
//         title: "Web Development",
//         items: [
//           { label: "Web Design", link: "/services/web-design" },
//           { label: "Website Redesigning", link: "/services/website-redesign" },
//           { label: "Static Web Designing", link: "/services/static-web" },
//           { label: "Dynamic Website Designing", link: "/services/dynamic-web" },
//           { label: "Mobile Website Designing", link: "/services/mobile-web" },
//           { label: "Custom Web Designing", link: "/services/custom-web" },
//           { label: "Landing Page Designing", link: "/services/landing-page" },
//           { label: "Design Identity Branding", link: "/services/branding" },
//         ],
//       },
//       {
//         title: "Digital Marketing",
//         items: [
//           { label: "Digital Marketing", link: "/services/digital-marketing" },
//           { label: "Local SEO Services", link: "/services/local-seo" },
//           { label: "Social Media Optimization", link: "/services/smo" },
//           { label: "Google Adwords PPC", link: "/services/google-ads" },
//           { label: "Search Engine Optimization", link: "/services/seo" },
//         ],
//       },
//     ],
//   },

//   {
//     icon: <Box size={18} />,
//     label: "Products",
//     link: "/products",
//     dropdown: true,
//     dropdownItems: [
//       { title: "GST Billing Software", link: "/products/gst-billing" },
//       {
//         title: "Online Complaint Management System",
//         link: "/products/complaint-system",
//       },
//       { title: "Inventory Management System", link: "/products/inventory" },
//       { title: "IT Asset Management System", link: "/products/it-asset" },
//       { title: "QR Code Generator", link: "/products/qr-generator" },
//       { title: "URL Shorten API", link: "/products/url-shortener" },
//     ],
//   },

//   {
//     icon: <FileText size={18} />,
//     label: "Insight",
//     link: "/insight",
//     dropdown: false,
//   },
//   {
//     icon: <Users size={18} />,
//     label: "Career",
//     link: "/career",
//     dropdown: false,
//   },
//   {
//     icon: <Phone size={18} />,
//     label: "Contact",
//     link: "/contact",
//     dropdown: false,
//   },
// ];

// export default navdata;

// navData.js
const navdata = [
  {  label: "Home", link: "/", dropdown: false },

  {
    label: "About",
    link: "/about",
    dropdown: true,
    dropdownItems: [
      { title: "About Us", link: "/about" },
      { title: "Our Works", link: "/our-works" },
      { title: "Our Team", link: "/our-team" },
      { title: "Technologies", link: "/technologies" },
    ],
  },

  {
    label: "Services",
    link: "/services",
    dropdown: true,
    dropdownItems: [
      {
        title: "Software Development",
        items: [
          {
            icon: "-",
            label: "Custom Software",
            link: "/services/custom-software",
          },
          { icon: "-", label: "Mobile Apps", link: "/services/mobile-apps" },
          { icon: "-", label: "Cloud Solutions", link: "/services/cloud" },
          { icon: "-", label: "AI/ML Integration", link: "/services/ai-ml" },
          { icon: "-", label: "DevOps", link: "/services/devops" },
          { icon: "-", label: "QA & Testing", link: "/services/testing" },
        ],
      },
      {
        title: "Web Development",
        accentColor: "text-slate-400", // Changed to 'teal' for visual distinction in mega-menu
        items: [
          {
           
            label: "Modern Websites",
            link: "/services/modern-websites",
          },
          { icon: "-", label: "E-commerce Solutions", link: "/services/ecom" },
          { icon: "-", label: "Headless CMS", link: "/services/headless" },
          { icon: "-", label: "UI/UX Design", link: "/services/ui-ux" },
          { icon: "-", label: "Performance Audit", link: "/services/audit" },
          { icon: "-", label: "SEO Services", link: "/services/seo" },
        ],
      },
      {
        title: "Web Development",
        accentColor: "teal", // Changed to 'teal' for visual distinction in mega-menu
        items: [
          {
            icon: "-",
            label: "Modern Websites",
            link: "/services/modern-websites",
          },
          { icon: "-", label: "E-commerce Solutions", link: "/services/ecom" },
          { icon: "-", label: "Headless CMS", link: "/services/headless" },
          { icon: "-", label: "UI/UX Design", link: "/services/ui-ux" },
          { icon: "-", label: "Performance Audit", link: "/services/audit" },
          { icon: "-", label: "SEO Services", link: "/services/seo" },
        ],
      },
    ],
  },

  {
    label: "Products",
    link: "/products",
    dropdown: true,
    dropdownItems: [
      { title: "GST Billing Software 1", link: "/products/gst-billing-1" },
      { title: "GST Billing Software 3", link: "/products/gst-billing-3" },
      { title: "Software Development", link: "/products/software-development" },
      { title: "GST Billing Software", link: "/products/gst-billing" },
      { title: "Inventory Management System", link: "/products/inventory" },
    ],
  },

  {  label: "Insight", link: "/insight", dropdown: false },
  {  label: "Career", link: "/career", dropdown: false },
  {  label: "Contact", link: "/contact", dropdown: false },
];

export default navdata;
