import { Route } from 'react-router-dom';
import AviationPageInfo from '@/config/AviationPageInfo';
import AviationLayout from './AviationLayout';

const useAviationRoute = () => {
  const routes = (
    <>
      {AviationPageInfo.list.map((menuInfo, index) => {
        const { Component, path } = menuInfo;
        return <Route key={index} path={path} element={<Component />} />;
      })}
    </>
  );

  return (
    <Route path="/aviation" element={<AviationLayout />}>
      {routes}
    </Route>
  );
};

export default useAviationRoute;
