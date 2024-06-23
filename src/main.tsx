import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// third lib css import
// import 'react-datepicker/dist/react-datepicker.css';

// scss import
// import './resources/css/import.scss';

// css import
// import './resources/css/import.css';
// import '@resources/css/import.css';

// public css import
// import viteLogo from '/vite.svg';
// import banner from '/images/banner.png';

// console.log(viteLogo);
// console.log(banner);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
