import React from 'react';
import ReactDOM from 'react-dom/client';
import { saveUTMParams } from './utils/utmTracker';
import App from './App';
import './index.css';

// Capture UTM parameters on initial page load
saveUTMParams();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);