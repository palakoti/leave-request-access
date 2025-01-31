import React from 'react';
import { useMsal } from '@azure/msal-react';

const LoginModule = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup().catch((error) => console.error('Login failed:', error));
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginModule;