import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authentication';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Initialize MSAL
const msalInstance = new PublicClientApplication(msalConfig);

// Account handling
msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    msalInstance.setActiveAccount(event.payload.account);
  }
});

root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
    <App />
  </MsalProvider>,
  </React.StrictMode>
);

// To start measuring performance in the app, pass a function
// to log results (like reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals();
