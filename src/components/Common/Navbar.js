import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import your authentication context
import './Navbar.css'

function Navbar() {
  const { currentUser } = useAuth(); // Access the current user from your authentication context

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link to="/">Task Manager</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/create-task">Create Task</Link>
          </li>
          {currentUser ? (
            <>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
