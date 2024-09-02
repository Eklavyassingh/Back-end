import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/dashboard'); // Redirect to the actual dashboard or homepage
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on unmount
  }, [navigate]);

  return (
    <div className="dashboard">
      <h1>Welcome!</h1>
      <p>You are being redirected to your dashboard in {countdown} seconds...</p>
    </div>
  );
};

export default Dashboard;
