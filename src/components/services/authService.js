import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your backend API URL

const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/current-user`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    await axios.post(`${API_URL}/api/logout`);
  } catch (error) {
    throw error;
  }
};

export default {
  login,
  signup,
  getCurrentUser,
  logout,
};
