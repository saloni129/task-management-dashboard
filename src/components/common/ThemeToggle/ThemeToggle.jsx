import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

/**
 * ThemeToggle Component
 * Button to toggle between light and dark mode
 */
const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-lg ${
        darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
      } transition-colors shadow-md font-medium`}
      aria-label="Toggle theme"
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;