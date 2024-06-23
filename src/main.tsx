import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

// third lib css import
import 'react-datepicker/dist/react-datepicker.css';

// scss import
// import './resources/css/import.scss';

// css import
import './resources/css/import.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
