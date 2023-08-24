import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/task-pro">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
