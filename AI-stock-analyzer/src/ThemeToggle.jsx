import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`p-2 rounded-full shadow-md transition duration-300 
        ${darkMode
          ? "bg-white text-white"
          : "bg-white text-gray-800"
        }`}
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6 text-black transition duration-200" />
      ) : (
        <MoonIcon className="w-6 h-6 text-black transition duration-200" />
      )}
    </button>
  );
};

export default ThemeToggle;
