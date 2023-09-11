import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './components/context/AuthContext'; // Import your authentication context 

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth(); // Access the current user from your authentication context

  return (
    <Route
      {...rest}
      render={(props) => {
        // Check if the user is authenticated
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;