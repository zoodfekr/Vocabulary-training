import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './fonts/B-Mitra.ttf'
import './fonts/B-Mitra-Bold.ttf';


// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);




