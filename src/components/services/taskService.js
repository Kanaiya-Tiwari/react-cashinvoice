
// taskService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your backend API URL

const getTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/tasks`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createTask = async (taskData) => {
  try {
    const response = await axios.post(`${API_URL}/api/tasks`, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateTask = async (taskId, taskData) => {
  try {
    const response = await axios.put(`${API_URL}/api/tasks/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${API_URL}/api/tasks/${taskId}`);
  } catch (error) {
    throw error;
  }
};

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};