import React, { useMemo } from 'react';
import { Calendar, Check, AlertCircle, TrendingUp } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import StatCard from '../../common/StatCard/StatCard';
import TaskForm from '../../tasks/TaskForm/TaskForm';
import TaskList from '../../tasks/TaskList/TaskList';
import Header from '../Header/Header';
import { useTasks } from '../../../hooks/useTasks';
import { calculateStats } from '../../../utils/taskHelpers';

/**
 * Dashboard Component
 * Main dashboard layout with statistics, task form, and task list
 */
const Dashboard = () => {
  const { darkMode } = useTheme();
  const { tasks, addTask, deleteTask, toggleTask } = useTasks();

  const stats = useMemo(() => calculateStats(tasks), [tasks]);

  const themeClasses = darkMode
    ? 'bg-gray-900 text-white'
    : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900';

  return (
    <div className={`min-h-screen ${themeClasses} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Calendar className="w-6 h-6" />}
            title="Total Tasks"
            value={stats.total}
          />
          <StatCard
            icon={<Check className="w-6 h-6" />}
            title="Completed"
            value={stats.completed}
          />
          <StatCard
            icon={<AlertCircle className="w-6 h-6" />}
            title="High Priority"
            value={stats.highPriority}
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Completion Rate"
            value={`${stats.completionRate}%`}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <TaskForm onAddTask={addTask} />
          </div>

          <div className="lg:col-span-2">
            <TaskList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;