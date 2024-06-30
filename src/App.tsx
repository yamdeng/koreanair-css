import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PublishHome from './PublishHome';
import useCommonRoute from './components/publish/layout/useCommonRoute';
import useAviationRoute from './components/publish/layout/useAviationRoute';
import useIndustryRoute from './components/publish/layout/useIndustryRoute';
import useModalRoute from './components/publish/layout/useModalRoute';
import shaderString from './main?raw';

function App() {
  const commonRoute = useCommonRoute();
  const aviationRoute = useAviationRoute();
  const industryRoute = useIndustryRoute();
  const modalRoute = useModalRoute();
  // const TestComponent = PublishHome;
  // console.log(`PublishHome : ${PublishHome}`);
  // console.log(`shaderString : ${shaderString}`);
  // debugger;

  return (
    <div>
      <Routes>
        <Route path="/" element={<PublishHome />} />
        {commonRoute}
        {aviationRoute}
        {industryRoute}
        {modalRoute}
      </Routes>
      <ToastContainer autoClose={3000} hideProgressBar={true} />
    </div>
  );
}

export default App;
