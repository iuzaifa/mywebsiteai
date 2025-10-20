import React from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Zap,
  ChevronRight,
  Users, // For company value/culture section
} from "lucide-react";

// The hardcoded job data array
const jobdata = [
  {
    id: 1,
    jobTitle: "Java Full Stack Developer",
    companyName: "Sululu Software Developement Company",
    experience: "3+ Years",
    location: "New Delhi, India (Hybrid)",
    jobType: "Full-time",
    salaryRange: "8 - 12 LPA",
    skillsRequired: [
      "Java",
      "Spring Boot",
      "Microservices",
      "React.js",
      "Docker",
      "PostgreSQL",
    ],
    detailLink: "#/job/java-fs",
  },
  {
    id: 2,
    jobTitle: "Senior Cloud Architect (GCP)",
    companyName: "Sululu Software Developement Company",
    experience: "7+ Years",
    location: "Remote (India)",
    jobType: "Full-time",
    salaryRange: "25 - 35 LPA",
    skillsRequired: [
      "GCP",
      "Kubernetes",
      "Terraform",
      "Networking",
      "Security",
      "Python",
    ],
    detailLink: "#/job/gcp-arch",
  },
  {
    id: 3,
    jobTitle: "Product Designer (UI/UX)",
    companyName: "Sululu Software Developement Company",
    experience: "5+ Years",
    location: "Bangalore, India",
    jobType: "Full-time",
    salaryRange: "15 - 20 LPA",
    skillsRequired: [
      "Figma",
      "User Research",
      "Prototyping",
      "Interaction Design",
      "Tailwind CSS",
      "Accessibility",
    ],
    detailLink: "#/job/product-design",
  },
];

// --- Job Card Component ---
const JobCard = ({ job }) => (
  <div className="bg-white dark:bg-gray-800 rounded-sm p-6 shadow-sm hover:bg-teal-50/40 border-l-4 border-teal-500 dark:border-teal-400">
    <div className="flex justify-between items-start mb-4">
      <div>
        {/* Job Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
          {job.jobTitle}
        </h2>
        {/* Company Name */}
        <p className="lg:text-sm text-xs font-normal text-gray-600 dark:text-gray-400">
          {job.companyName}
        </p>
      </div>
      {/* Apply Button */}
      <a
        href={job.detailLink}
        className="flex items-center text-teal-600 dark:text-teal-400 font-normal text-sm group transition duration-300"
      >
        View Details
        <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>

    {/* Metadata Pills */}
    <div className="flex flex-wrap gap-3 mb-4 border-b pb-4 border-gray-100 dark:border-gray-700">
      <div className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
        <Briefcase className="w-4 h-4 mr-2 text-teal-500" />
        {job.experience}
      </div>
      <div className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
        <MapPin className="w-4 h-4 mr-2 text-teal-500" />
        {job.location}
      </div>
      <div className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
        <Clock className="w-4 h-4 mr-2 text-teal-500" />
        {job.jobType}
      </div>
      <div className="flex items-center text-sm font-bold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/40 px-3 py-1 rounded-full">
        <DollarSign className="w-4 h-4 mr-2" />
        {job.salaryRange}
      </div>
    </div>

    {/* Skills Tag Cloud */}
    <div className="mt-4">
      <h3 className="flex items-center text-base font-normal text-gray-800 dark:text-gray-200 mb-2">
        <Zap className="w-5 h-5 mr-2 text-teal-500" />
        Skills
      </h3>
      <div className="flex flex-wrap gap-2">
        {job.skillsRequired.slice(0, 5).map((skill, index) => (
          <span
            key={index}
            className="text-xs font-medium text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-700/30 px-3 py-1 rounded-md"
          >
            {skill}
          </span>
        ))}
        {job.skillsRequired.length > 5 && (
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 py-1">
            +{job.skillsRequired.length - 5} more
          </span>
        )}
      </div>
    </div>
  </div>
);

// --- Main Careers Component ---
const Careers = () => {
  // Removed local dark mode state (useState) and effect (useEffect)

  return (
    // Component relies on external script or parent component to apply the 'dark' class to html
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      

        {/* --- Job Listings Section --- */}
        <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-10 b-4 border-gray-200 dark:border-gray-700">
          Open Positions
        </h2>

        <div className="space-y-8">
          {jobdata.length > 0 ? (
            jobdata.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <div className="text-center p-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <p className="text-xl font-medium text-gray-600 dark:text-gray-400">
                We currently have no open positions. Check back soon for
                exciting opportunities!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
