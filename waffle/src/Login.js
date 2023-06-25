import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const handleLogin = (userType) => {
    if (userType === 'user') {
      window.location.href = '/user';
    } else if (userType === 'provider') {
      window.location.href = '/provider';
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handleLogin('user')}>Sign in as User</button>
      <button onClick={() => handleLogin('provider')}>Sign in as Provider</button>
    </div>
  );
}

export default Login;
