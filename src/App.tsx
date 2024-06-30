import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GuideHome from './GuideHome';
import useStoreRoute from './components/guide/useStoreRoute';

function App() {
  const storeRoute = useStoreRoute();

  return (
    <div>
      <Routes>
        <Route path="/" element={<GuideHome />} />
        {storeRoute}
      </Routes>
      <ToastContainer autoClose={3000} hideProgressBar={true} />
    </div>
  );
}

export default App;
