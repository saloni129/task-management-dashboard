import { useReducer, useEffect } from 'react';
import { taskReducer } from '../reducers/taskReducer';
import { STORAGE_KEY } from '../utils/constants';

/**
 * Custom hook for task management
 * Handles task CRUD operations and localStorage persistence
 */
export const useTasks = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY);
      if (savedTasks) {
        dispatch({ 
          type: 'SET_TASKS', 
          payload: JSON.parse(savedTasks) 
        });
      }
    } catch (error) {
      console.error('Error loading tasks from localStorage:', error);
    }
  }, []);
  
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }, [tasks]);

  const addTask = (taskText, priority) => {
    if (!taskText.trim()) return;
    
    const newTask = {
      id: Date.now(),
      text: taskText,
      priority,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const toggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask
  };
};

export default useTasks;