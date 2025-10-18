import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark/light theme"
        className="p-2
        dark:bg-slate-50/0 dark:border-slate-900/90 dark:text-slate-200
        text-teal-500 border border-slate-200 rounded-full bg-slate-50

        "
      >
        {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    </>
  );
};

export default ThemeToggle;
