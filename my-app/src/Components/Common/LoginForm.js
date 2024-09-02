import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ isVisible, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const checkSession = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/auth/check-session');
        if (response.data.loggedIn) {
          setIsLoggedIn(true);
          setTimeout(() => navigate('/dashboard'),0); // Redirect after 5 seconds
        }
      } catch (err) {
        console.error('Session check failed', err);
      }
    };

    checkSession();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', { username, password });
      alert(response.data.message);
      setIsLoggedIn(true);
      setTimeout(() => navigate('/dashboard'),0); // Redirect after 5 seconds
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred during login');
    }
  };

  return (
    <div className={`login-modal ${isVisible ? 'show' : ''}`}>
      <div className="login-content">
        <form onSubmit={handleSubmit}>
          <button onClick={onClose} id="close-button">X</button>
          <h1>Login</h1>
          {error && <div className="error-message">{error}</div>}
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="loginBtn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
