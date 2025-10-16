import React from "react";
import { CircleSmall, Rocket, LayoutGrid, Code, Zap } from "lucide-react";

// --- Mock Data ---
// Using realistic service data for better visual context
const SERVICE_CARDS_DATA = [
  {
    icon: Rocket,
    title: "Digital Strategy",
    description:
      "Tailored roadmaps for digital transformation, market penetration, and long-term scalable growth.",
    features: [
      "Market Analysis",
      "SEO Audit",
      "Content Planning",
      "Goal Setting",
    ],
    buttonText: "Plan Now",
  },
  {
    icon: LayoutGrid,
    title: "UI/UX Design",
    description:
      "Creating intuitive, aesthetically pleasing, and user-centric interfaces based on deep research and testing.",
    features: [
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Design Systems",
    ],
    buttonText: "See Designs",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building high-performance, secure, and custom web applications with modern framework architectures.",
    features: [
      "React/Vue/Angular",
      "Headless CMS",
      "API Integration",
      "Cloud Deployment",
    ],
    buttonText: "Start Project",
  },
  {
    icon: Zap,
    title: "Cloud Migration",
    description:
      "Seamless transition to scalable cloud infrastructure (AWS, Azure, GCP) ensuring security and compliance.",
    features: [
      "Infrastructure Setup",
      "Security Audit",
      "DevOps Pipelines",
      "Cost Optimization",
    ],
    buttonText: "Contact Experts",
  },
];

// --- Service Card Component ---
const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  buttonText,
}) => {
  // Increased hover scale slightly and made the teal shadow more visible
  const CARD_CLASSES =
    "bg-gray-800/60 p-6 sm:p-8 rounded-xl border border-gray-700/50 flex flex-col h-full transition duration-300 transform hover:scale-[1.03] ";
  const BUTTON_CLASSES =
    "mt-auto w-full py-3 hover:text-slate-100 text-sm rounded-lg text-teal-400 border border-teal-400/50 bg-gray-900/50 hover:bg-teal-500 hover:text-gray-900 transition duration-300";

  return (
    <div className={CARD_CLASSES}>
      <div className="mb-4">
        {/* Icon in Accent Color */}
        <Icon
          size={36}
          className="text-teal-400 mb-4 bg-gray-700/50 p-2 rounded-full shadow-lg"
        />

        <h4 className="text-lg font- text-white/90 mb-2 pb-1 text-left border-b border-slate-800">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-400 mb-2 text-left">
          {description}
        </p>
      </div>

      <div className="mb-6">
        <ul className="text-sm space-y-1 text-left text-slate-400">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CircleSmall
                size={10}
                className="mt-1 mr-2 flex-shrink-0 text-teal-400"
              />
              <span className="text-xs sm:text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className={BUTTON_CLASSES}>{buttonText}</button>
    </div>
  );
};

// --- Main Service Section Component ---
const ServiceSection = () => {
  return (
    // Applied dark background and responsive padding
    <section className=" py-16 sm:py-24 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Section Header --- */}
        <div className="mb-12">
          <div className="section-title text-teal-400 mb-4 relative pb-2 inline-block">
            <span className="text-sm font-semibold uppercase tracking-widest">
              OUR SERVICES
            </span>
            {/* Centered underline accent */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-12 bg-teal-400 rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-thin text-white leading-tight mt-4">
            Transform Your Vision into <br /> Digital Reality
          </h2>
          <p className="text-sm text-slate-400 mt-3 max-w-3xl mx-auto">
            From strategic planning to final deployment, we offer end-to-end
            solutions that  <br />drive real business value.
          </p>
        </div>

        {/* --- Services Grid (Mobile Responsive) --- */}
        <div
          // Explicitly set 1 column on mobile, 2 on medium screens, and 4 on large screens (lg)
          className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SERVICE_CARDS_DATA.map((card, index) => (
            <ServiceCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              features={card.features}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
