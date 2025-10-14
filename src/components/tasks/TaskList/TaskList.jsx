import React, { useState, useMemo } from 'react';
import { Clock } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import TaskItem from '../TaskItem/TaskItem';
import TaskFilters from '../TaskFilters/TaskFilters';
import { filterTasks } from '../../../utils/taskHelpers';
import { FILTER_STATUS } from '../../../utils/constants';

/**
 * TaskList Component
 * Displays filtered list of tasks with search and filter options
 */
const TaskList = ({ tasks, onToggle, onDelete }) => {
  const { darkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState(FILTER_STATUS.ALL);

  const filteredTaskList = useMemo(() => {
    return filterTasks(tasks, searchQuery, filterStatus);
  }, [tasks, searchQuery, filterStatus]);

  return (
    <div className={`${
      darkMode ? 'bg-gray-800' : 'bg-white'
    } rounded-xl shadow-lg p-6`}>
      <TaskFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
      />

      <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
        {filteredTaskList.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No tasks found</p>
            <p className="text-sm mt-2">
              {tasks.length === 0 
                ? 'Add a task to get started!' 
                : 'Try adjusting your search or filter.'}
            </p>
          </div>
        ) : (
          filteredTaskList.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;