export const msalConfig = {
    auth: {
      clientId: 'YOUR_CLIENT_ID', // Azure AD app client ID
      authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID', // tenant ID
      redirectUri: 'http://localhost:3000', // redirect URI in Azure AD
    },
    cache: {
      cacheLocation: 'sessionStorage', // Save tokens in sessionStorage
      storeAuthStateInCookie: false,
    },
  };
  
  export const loginRequest = {
    scopes: ['User.Read', 'Sites.Read.All'], // Add necessary scopes
  };