import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ----------------- to use bootstrap in my project --------------------
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ContextAPI from './component/ContextAPI';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ContextAPI>
    <App />
  </ContextAPI>
  </React.StrictMode>
);


reportWebVitals();
