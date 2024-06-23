import { Routes, Route } from 'react-router-dom';
import PublishHome from './PublishHome';
import useCommonRoute from './components/publish/layout/useCommonRoute';
import useAviationRoute from './components/publish/layout/useAviationRoute';
import useIndustryRoute from './components/publish/layout/useIndustryRoute';
import useModalRoute from './components/publish/layout/useModalRoute';

function App() {
  const commonRoute = useCommonRoute();
  const aviationRoute = useAviationRoute();
  const industryRoute = useIndustryRoute();
  const modalRoute = useModalRoute();

  return (
    <div>
      <Routes>
        <Route path="/" element={<PublishHome />} />
        {commonRoute}
        {aviationRoute}
        {industryRoute}
        {modalRoute}
      </Routes>
    </div>
  );
}

export default App;
