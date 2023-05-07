import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CustomersContextProvider } from './context/CustomersContext'
import { AuthContextProvider } from './context/AuthContext'
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthContextProvider>
      <CustomersContextProvider>
        <App />
      </CustomersContextProvider>
    </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);