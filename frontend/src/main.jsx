import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import StoreContextProvider  from './context/StoreContext.jsx';

const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
      <ClerkProvider publishableKey={clerkFrontendApi}>
        <App />
      </ClerkProvider>
    </StoreContextProvider>
  </React.StrictMode>
);