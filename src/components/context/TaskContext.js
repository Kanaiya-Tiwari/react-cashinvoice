import React, { createContext, useState, useEffect } from 'react';
import taskService from '../services/taskService';

const TaskContext = createContext();

export function useTasks() {
  return React.useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the server when the component mounts
  useEffect(() => {
    async function fetchTasks() {
      try {
        const taskData = await taskService.getTasks();
        setTasks(taskData);
      } catch (error) {
        console.error('TaskContext - Error fetching tasks:', error);
      }
    }

    fetchTasks();
  }, []);

  const value = {
    tasks,
    setTasks,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
