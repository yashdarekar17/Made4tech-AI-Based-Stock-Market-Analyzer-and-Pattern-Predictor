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
          ? "bg-gradient-to-br from-green-600 to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-200 to-green-100 text-gray-800"
        }`}
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6 text-yellow-400 transition duration-200" />
      ) : (
        <MoonIcon className="w-6 h-6 text-green-700 transition duration-200" />
      )}
    </button>
  );
};

export default ThemeToggle;
