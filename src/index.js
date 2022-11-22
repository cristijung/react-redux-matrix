import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'routes';
import './index.css';
import { Provider } from 'react-redux';
import store from 'store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />  
    </Provider>
  
  </React.StrictMode>

);

reportWebVitals();
