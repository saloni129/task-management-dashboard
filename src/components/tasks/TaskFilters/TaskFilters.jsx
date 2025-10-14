import React from 'react';
import { Search } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { FILTER_STATUS } from '../../../utils/constants';

/**
 * TaskFilters Component
 * Provides search and filter functionality for tasks
 */
const TaskFilters = ({ searchQuery, onSearchChange, filterStatus, onFilterChange }) => {
  const { darkMode } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tasks..."
          className={`w-full pl-10 pr-4 py-2 rounded-lg ${
            darkMode 
              ? 'bg-gray-700 text-white border-gray-600' 
              : 'bg-gray-50 border-gray-200'
          } border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
        />
      </div>
      
      <div className="flex gap-2">
        {Object.values(FILTER_STATUS).map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded-lg capitalize transition-all font-medium ${
              filterStatus === filter
                ? 'bg-blue-600 text-white shadow-md'
                : darkMode
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilters;