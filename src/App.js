import React from 'react';
import {  BrowserRouter ,Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext'; // Import your AuthProvider
import { TaskProvider } from './components/context/TaskContext'; // Import your TaskProvider
import PrivateRoute from './PrivateRoute'; // Create a PrivateRoute component for protected routes
import Navbar from './components/Common/Navbar'; // Import your Navbar component

import Login from './components/Auth/Login'; // Create a Login component
import Signup from './components/Auth/Signup'; // Create a Signup component
import Logout from './components/Auth/Logout'; // Create a Logout component
import FetchTasks from './components/Task/FetchTask'; // Create a component for displaying tasks
import CreateTask from './components/Task/CreateTask'; // Create a CreateTask component
import UpdateTask from './components/Task/UpdateTask'; // Create an UpdateTask component
import DeleteTask from './components/Task/DeleteTask'; // Create a DeleteTask component

function App() {
  return (
    <BrowserRouter>
    
      <AuthProvider>
        <TaskProvider>
          <Navbar /> {/* Display a navigation bar */}
          <div className="container">
            <Routes>
              <Route exact path="/" element={Home} />
              <Route path="/login" element={Login} />
              <Route path="/signup" element={Signup} />
              <Route path="/logout" element={Logout} />
              <PrivateRoute path="/tasks" element={FetchTasks} />
              <PrivateRoute path="/create-task" element={CreateTask} />
              <PrivateRoute path="/update-task/:taskId" element={UpdateTask} />
              <PrivateRoute path="/delete-task/:taskId" element={DeleteTask} />
            </Routes>
          </div>
        </TaskProvider>
      </AuthProvider>
      </BrowserRouter>
  );
}

export default App;