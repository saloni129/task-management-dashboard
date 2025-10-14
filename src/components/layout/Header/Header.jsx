import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import ThemeToggle from '../../common/ThemeToggle/ThemeToggle';

/**
 * Header Component
 * Application header with title and theme toggle
 */
const Header = () => {
  const { darkMode } = useTheme();

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Task Dashboard
        </h1>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Manage your tasks efficiently with React
        </p>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;