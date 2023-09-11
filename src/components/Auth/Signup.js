import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Signup() {
  const history = useHistory();
  const { signup } = useAuth();
  const [userData, setUserData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(userData);
      history.push('/tasks'); // Redirect to tasks page after successful signup
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
