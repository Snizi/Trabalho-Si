import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes'
import { AuthProvider } from './context/authContext'
import { ToastProvider } from './context/toastContext'

import './index.css';

function App() {
  return (
      <AuthProvider>
        <ToastProvider>
          <Routes/>
        </ToastProvider>
      </AuthProvider>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
