import React from 'react';
import ReactDOM from 'react-dom/client';
// importacion de boostrap 
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode vuelve a renderizar nuestro rederizado del DOM virtual de react | generalmente hace que se renderize "2 veces"
  // <React.StrictMode> 
    <App />
   // </React.StrictMode>
);
