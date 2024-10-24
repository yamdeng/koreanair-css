import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PublishHome from './PublishHome';
import useCommonRoute from './components/publish/layout/useCommonRoute';
import useAviationRoute from './components/publish/layout/useAviationRoute';
import useOccupationRoute from './components/publish/layout/useOccupationRoute';
import useAdminRoute from './components/publish/layout/useAdminRoute';
import useModalRoute from './components/publish/layout/useModalRoute';
import useMobileRoute from './components/publish/layout/useMobileRoute';
import { useEffect } from 'react';

const handleResizeEvent = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

function App() {
  const commonRoute = useCommonRoute();
  const aviationRoute = useAviationRoute();
  const occupationRoute = useOccupationRoute();
  const modalRoute = useModalRoute();
  const adminRoute = useAdminRoute();
  const mobileRoute = useMobileRoute();

  useEffect(() => {
    handleResizeEvent();

    window.addEventListener('resize', handleResizeEvent);
    return () => {
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<PublishHome />} />
        {commonRoute}
        {aviationRoute}
        {occupationRoute}
        {adminRoute}
        {modalRoute}
        {mobileRoute}
      </Routes>
      <ToastContainer autoClose={3000} hideProgressBar={true} />
    </div>
  );
}

export default App;
