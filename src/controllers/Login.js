import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Login.css'; 

const Login = ({ onLoginSuccess, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Hardcoded users for authentication
    const users = [
      { username: 'SurendraSriramula', password: '12345' },
      { username: 'Surendra931', password: '123456' }
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      onLoginSuccess(user.username);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-modal-backdrop">
      <div className="login-modal">
        <div className="login-header">
          <h2 className="login-title">Welcome Back!</h2>
          <CloseIcon onClick={onClose} className="close-icon" />
        </div>
        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button onClick={handleLogin} className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login; 
