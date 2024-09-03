import React from 'react';
import ReactDOM from 'react-dom/client';

import './Styles/globalStyles.css';

import App from './Pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
