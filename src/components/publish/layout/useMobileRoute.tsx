import { Route } from 'react-router-dom';
import MobilePageInfo from '@/config/MobilePageInfo';
import MobileLayout from './MobileLayout';

const useMobileRoute = () => {
  const routes = (
    <>
      {MobilePageInfo.list.map((menuInfo, index) => {
        const { Component, path } = menuInfo;
        return <Route key={index} path={path} element={<Component />} />;
      })}
    </>
  );

  return (
    <Route path="/mobile" element={<MobileLayout />}>
      {routes}
    </Route>
  );
};

export default useMobileRoute;
