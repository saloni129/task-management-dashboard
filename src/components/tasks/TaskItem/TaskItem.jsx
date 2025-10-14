import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { getPriorityColor } from '../../../utils/taskHelpers';

/**
 * TaskItem Component
 * Displays individual task with toggle and delete functionality
 */
const TaskItem = ({ task, onToggle, onDelete }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg transition-all ${
        darkMode 
          ? 'bg-gray-700 hover:bg-gray-650' 
          : 'bg-gray-50 hover:bg-gray-100'
      } ${task.completed ? 'opacity-60' : ''}`}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(task.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          task.completed
            ? 'bg-green-500 border-green-500'
            : darkMode
            ? 'border-gray-500 hover:border-green-500'
            : 'border-gray-300 hover:border-green-500'
        }`}
        aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {task.completed && <Check className="w-4 h-4 text-white" />}
      </button>

      {/* Priority Indicator */}
      <div 
        className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`}
        title={`${task.priority} priority`}
      />

      {/* Task Text */}
      <span className={`flex-1 ${task.completed ? 'line-through' : ''}`}>
        {task.text}
      </span>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(task.id)}
        className={`p-2 rounded-lg transition-colors ${
          darkMode
            ? 'hover:bg-red-900/50 text-red-400'
            : 'hover:bg-red-50 text-red-500'
        }`}
        aria-label="Delete task"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TaskItem;