import { Routes, Route } from 'react-router-dom';
import PublishHome from './PublishHome';
import useCommonRoute from './components/publish/layout/CommonRoutes';

function App() {
  const commonRoute = useCommonRoute();
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublishHome />} />
        {commonRoute}
      </Routes>
    </div>
  );
}

export default App;
