import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { PRIORITY_LEVELS } from '../../../utils/constants';
import { getPriorityColor } from '../../../utils/taskHelpers';

/**
 * TaskForm Component
 * Form for adding new tasks with priority selection
 */
const TaskForm = ({ onAddTask }) => {
  const { darkMode } = useTheme();
  const [taskInput, setTaskInput] = useState('');
  const [priority, setPriority] = useState(PRIORITY_LEVELS.MEDIUM);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      onAddTask(taskInput, priority);
      setTaskInput('');
      setPriority(PRIORITY_LEVELS.MEDIUM);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className={`${
      darkMode ? 'bg-gray-800' : 'bg-white'
    } rounded-xl shadow-lg p-6`}>
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <Plus className="w-6 h-6" />
        Add New Task
      </h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          className={`w-full px-4 py-3 rounded-lg mb-4 ${
            darkMode 
              ? 'bg-gray-700 text-white border-gray-600' 
              : 'bg-gray-50 border-gray-200'
          } border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
        />

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Priority Level
          </label>
          <div className="flex gap-2">
            {Object.values(PRIORITY_LEVELS).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPriority(p)}
                className={`flex-1 py-2 rounded-lg capitalize transition-all font-medium ${
                  priority === p
                    ? `${getPriorityColor(p)} text-white shadow-lg`
                    : darkMode
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-md"
        >
          <Plus className="w-5 h-5" />
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;