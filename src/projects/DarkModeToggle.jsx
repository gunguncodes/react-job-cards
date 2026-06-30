import { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6">
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </h1>

      <button
        onClick={handleClick}
        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
          darkMode
            ? "bg-white text-black"
            : "bg-black text-white"
        }`}
      >
        {darkMode ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  );
}

export default DarkModeToggle;