import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PublishHome from './PublishHome';
import useCommonRoute from './components/publish/layout/useCommonRoute';
import useAviationRoute from './components/publish/layout/useAviationRoute';
import useIndustryRoute from './components/publish/layout/useIndustryRoute';
import useAdminRoute from './components/publish/layout/useAdminRoute';
import useModalRoute from './components/publish/layout/useModalRoute';

function App() {
  const commonRoute = useCommonRoute();
  const aviationRoute = useAviationRoute();
  const industryRoute = useIndustryRoute();
  const modalRoute = useModalRoute();
  const adminRoute = useAdminRoute();

  return (
    <div>
      <Routes>
        <Route path="/" element={<PublishHome />} />
        {commonRoute}
        {aviationRoute}
        {industryRoute}
        {adminRoute}
        {modalRoute}
      </Routes>
      <ToastContainer autoClose={3000} hideProgressBar={true} />
    </div>
  );
}

export default App;
