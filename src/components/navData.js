// navData.js
const navdata = [
  { label: "Home", link: "/", dropdown: false },

  {
    label: "About",
    link: "/about",
    dropdown: true,
    dropdownItems: [
      { title: "About Us", link: "/about" },
      { title: "Our Works", link: "/ourworks" },
      { title: "Our Team", link: "/ourteam" },
      { title: "Technologies", link: "/technologies" },
    ],
  },

  {
    label: "Services",
    link: "/services-page",
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
    link: "/product",
    dropdown: true,
    dropdownItems: [
      { title: "GST Billing Software", link: "/gst-billing-product-page" },
      { title: "GST Billing Software 3", link: "/products/gst-billing-3" },
      { title: "Software Development", link: "/products/software-development" },
      { title: "GST Billing Software", link: "/products/gst-billing" },
      { title: "Inventory Management System", link: "/products/inventory" },
    ],
  },

  { label: "Insight", link: "/insight", dropdown: false },
  { label: "Career", link: "/careers", dropdown: false },
  { label: "Contact", link: "/contact", dropdown: false },
];

export default navdata;
