import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Logout() {
  const history = useHistory();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login'); // Redirect to the login page after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;