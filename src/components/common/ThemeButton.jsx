import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <button onClick={toggleTheme}>
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </>
  );
};

export default ThemeButton;
