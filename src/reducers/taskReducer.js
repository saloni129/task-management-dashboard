// Action types
export const TASK_ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  SET_TASKS: 'SET_TASKS'
};

// Task reducer function
export const taskReducer = (state, action) => {
  switch (action.type) {
    case TASK_ACTIONS.ADD_TASK:
      return [...state, action.payload];
      
    case TASK_ACTIONS.DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
      
    case TASK_ACTIONS.TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload 
          ? { ...task, completed: !task.completed } 
          : task
      );
      
    case TASK_ACTIONS.SET_TASKS:
      return action.payload;
      
    default:
      return state;
  }
};

// Action creators
export const addTask = (task) => ({
  type: TASK_ACTIONS.ADD_TASK,
  payload: task
});

export const deleteTask = (id) => ({
  type: TASK_ACTIONS.DELETE_TASK,
  payload: id
});

export const toggleTask = (id) => ({
  type: TASK_ACTIONS.TOGGLE_TASK,
  payload: id
});

export const setTasks = (tasks) => ({
  type: TASK_ACTIONS.SET_TASKS,
  payload: tasks
});