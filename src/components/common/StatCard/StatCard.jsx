import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

/**
 * StatCard Component
 * Displays a statistic card with icon, title, and value
 */
const StatCard = ({ icon, title, value }) => {
  const { darkMode } = useTheme();

  return (
    <div 
      className={`${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } rounded-xl shadow-lg p-6 transition-all hover:scale-105 cursor-pointer`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="text-blue-500">{icon}</div>
        <h3 className={`text-sm font-medium ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {title}
        </h3>
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;