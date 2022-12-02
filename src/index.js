import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './context/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ThemeProvider from './context/ThemeProvider';

// Create a client
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
  <ThemeProvider>
  <App />
  </ThemeProvider>
 </AuthProvider>
    </QueryClientProvider>
  
  </React.StrictMode>
);


reportWebVitals();
