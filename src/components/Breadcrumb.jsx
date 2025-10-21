// import { Home, ChevronRight } from "lucide-react";
// import React from "react";
// import { Link } from "react-router-dom";

// const Breadcrumb = () => {
//   return (
//     <>
//       <div className="py-3 bg-slate-300/30 border-b-2 border-teal-500 dark:bg-slate-800/50">
//         <ul className="flex items-center gap-2">
//           <li className="flex items-end justify-center">
//             <Link
//               to={"/"}
//               className="text-slate-700  gap-2 flex items-center lg:text-sm text-xs"
//             >
//               <span className="text-teal-500">
//                 <Home size={14} />
//               </span>
//               Home
//             </Link>
//           </li>
//           <li>
//             <span className="text-slate-400 dark:text-slate-800">
//               <ChevronRight size={14} />
//             </span>
//           </li>
//           <li className="flex items-end justify-center">
//             <Link
//               to={"/"}
//               className="text-slate-700  gap-2 flex items-center lg:text-sm text-xs"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <span className="text-slate-400 dark:text-slate-800">
//               <ChevronRight size={14} />
//             </span>
//           </li>
//           <li className="flex items-end justify-center">
//             <Link
//               to={"/"}
//               className="text-slate-700  gap-2 flex items-center lg:text-sm text-xs"
//             >
//               Contact US
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

import { Home, ChevronRight } from "lucide-react";
import React from "react";
// In a real application, 'react-router-dom' would be imported.
// We keep this functional Link for the self-contained Canvas environment.
const Link = ({ to, children, className }) => (
  <a href={to} className={className} onClick={(e) => e.preventDefault()}>
    {children}
  </a>
);

/**
 * Reusable Breadcrumb component that accepts an array of path items.
 * @param {{ name: string, path: string }[]} items - Array of breadcrumb links.
 */
const Breadcrumb = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      <section className="mx-auto max-w-7xl relative ">
        <div className="h-2/3">
          <img
            src="https://img.freepik.com/free-photo/portrait-asian-girl-works-cafe-uses-laptop-sits-outdoors-street-digital-nomad_1258-189137.jpg?t=st=1761054821~exp=1761058421~hmac=d7edef35051a989d9466dcce98d31702b3d584bf3b7534e6bd5c3683058aad28&w=2000"
            // src="https://plus.unsplash.com/premium_photo-1661757425320-2bf2032fd991?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032"
            alt="Contact page image"
            className="lg:h-80 h-40 w-full"
          />
        </div>

        <nav
          aria-label="breadcrumb"
          className="absolute w-full bottom-0 p-4 dark:bg-slate-950/80 bg-white/80 border-b-2 border-teal-500 transition duration-300"
        >
          <ul className="flex items-center space-x-2">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const isFirst = index === 0;

              return (
                <React.Fragment key={item.path + index}>
                  <li className="flex items-center">
                    {isLast ? (
                      // Current Page (Last item - non-link, bold, teal)
                      <span className="text-teal-500 font-semibold lg:text-sm text-xs dark:text-teal-500 flex items-center gap-2">
                        {isFirst && (
                          <span className="text-teal-500">
                            <Home size={14} />
                          </span>
                        )}
                        {item.name}
                      </span>
                    ) : (
                      // Intermediate Links
                      <Link
                        to={item.path}
                        className="text-gray-700 hover:text-teal-500 transition duration-150 lg:text-sm text-xs dark:text-gray-600 dark:hover:text-teal-400 flex items-center gap-2"
                      >
                        {isFirst && (
                          // Only show the home icon on the first item
                          <span className="text-teal-500">
                            <Home size={14} />
                          </span>
                        )}
                        {item.name}
                      </Link>
                    )}
                  </li>

                  {/* Separator: Only show if it is NOT the last item */}
                  {!isLast && (
                    <li className="text-gray-400 dark:text-gray-600">
                      <ChevronRight size={14} />
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Breadcrumb;

// --- Single Usage Example ---
