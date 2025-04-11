import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="shadow-lg mb-8">
      <div className="flex justify-between items-center p-8 px-16 bg-white dark:text-white dark:bg-gray-800">
        <h1 className="font-bold text-2xl">Where in the world?</h1>
        <div className="flex items-start gap-2" onClick={toggleDarkMode}>
          <img src="" alt="" />
          <p className="text-sm">{darkMode ? "Light Mode" : "Dark Mode"}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
