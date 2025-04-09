"use client";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "@/context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="border border-primary-900 bg-secondary-50 rounded-xl py-0.5 px-2 text-primary-900"
    >
      {isDarkMode ? (
        <HiOutlineSun className="h-5 w-5" />
      ) : (
        <HiOutlineMoon className="h-5 w-5" />
      )}
    </button>
  );
}
export default DarkModeToggle;
