import React from 'react'

const HeaderCTA = () => {
  return (
    <>
      <div className="d-flex flex gap-3">
        <button
          className={`flex items-center space-x-2 px-3 py-2 text-sm text-white bg-teal-500 rounded-sm hover:bg-teal-600 transition duration-200 shadow-xl`}
        >
          Request a Demo
        </button>
        <a
          href="#"
          className="flex items-center space-x-2 px-3 py-2 text-sm text-teal-500 hover:dark:bg-teal-500 dark:bg-slate-50/0 bg-slate-50 rounded-sm hover:bg-teal-600 transition duration-200 border border-slate-200 dark:border-teal-500 hover:text-slate-50"
        >
          Client Log in
        </a>
      </div>
    </>
  );
}

export default HeaderCTA