import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './comonents/Navbar';
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>
);

reportWebVitals();
