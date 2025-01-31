import React from 'react';
import { useMsal } from '@azure/msal-react';

const Logout = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutPopup().catch((error) => console.error('Logout failed:', error));
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;