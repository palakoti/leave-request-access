// App.js
import React from 'react';
import LoginModule from './LoginModule';
import Logout from './Logout';
import Information from './Information';
import niulogo from "./niulogo.png";

const App = () => {
  return (
    <div className="app">  
    <div id="appLogo"><img src={niulogo} alt="niulogo" className="logo" /></div>
     
     <h2>Benefits Sheet Data</h2>
      <LoginModule />
      <Logout/>
      <Information />
    </div>
  );
};

export default App;