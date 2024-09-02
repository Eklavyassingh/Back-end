import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [countdown, setCountdown] = useState(0); // Countdown time in seconds
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [loading, setLoading] = useState(true); // Loading state to handle async operations
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('/api/check-auth', {
          method: 'GET',
          credentials: 'include', // Include credentials (cookies) if using sessions
        });
        const data = await response.json();

        if (response.ok && data.user) {
          setIsLoggedIn(true);
          setCountdown(0); // Set countdown only if user is logged in
        } else {
          setIsLoggedIn(false);
          navigate('/login'); // Redirect to login if not logged in
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        setIsLoggedIn(false);
        navigate('/login'); // Redirect to login on error
      } finally {
        setLoading(false); // Set loading to false after checking status
      }
    };

    checkLoginStatus();
  }, [navigate]);

  useEffect(() => {
    if (!isLoggedIn) return; // Do not start countdown if not logged in

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/dashboard'); // Redirect to actual dashboard or homepage
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on unmount
  }, [isLoggedIn, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while checking authentication
  }

  return (
    <div className="dashboard">
      <h1>Welcome!</h1>
      {isLoggedIn ? (
        <p>You are being redirected to your dashboard in {countdown} seconds...</p>
      ) : (
        <p>Redirecting to login...</p>
      )}
    </div>
  );
};

export default Dashboard;
