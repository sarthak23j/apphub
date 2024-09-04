import React from 'react';
import ReactDOM from 'react-dom/client';

import './Styles/globalStyles.css';

import Layout from './Pages/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
