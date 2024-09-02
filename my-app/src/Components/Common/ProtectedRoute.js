import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth'; // Assuming you have an auth hook or context

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Replace with your actual authentication check

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children; // Render the children components if authenticated
};

export default ProtectedRoute;