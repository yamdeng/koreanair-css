import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PublishHome from './PublishHome';
import useCommonRoute from './components/publish/layout/useCommonRoute';
import useAviationRoute from './components/publish/layout/useAviationRoute';
import useOccupationRoute from './components/publish/layout/useOccupationRoute';
import useAdminRoute from './components/publish/layout/useAdminRoute';
import useModalRoute from './components/publish/layout/useModalRoute';
import useMobileRoute from './components/publish/layout/useMobileRoute';

function App() {
  const commonRoute = useCommonRoute();
  const aviationRoute = useAviationRoute();
  const occupationRoute = useOccupationRoute();
  const modalRoute = useModalRoute();
  const adminRoute = useAdminRoute();
  const mobileRoute = useMobileRoute();

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
