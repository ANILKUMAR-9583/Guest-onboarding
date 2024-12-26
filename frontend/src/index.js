import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';          // Importing the global styles
import './styles/header.css';        // Importing the header styles
import './styles/guestForm.css';     // Importing guest form styles
import './styles/hotelTable.css';    // Importing hotel table styles
import './styles/loginForm.css';     // Importing login form styles
// import './styles/qrCodeModal.css';   // Importing QR Code modal styles

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
