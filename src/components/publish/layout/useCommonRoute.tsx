import { Route } from 'react-router-dom';
import CommonPageInfo from '@/config/CommonPageInfo';
import AviationLayout from './AviationLayout';

const useCommonRoute = () => {
  const routes = (
    <>
      {CommonPageInfo.list.map((menuInfo, index) => {
        const { Component, path } = menuInfo;
        return <Route key={index} path={path} element={<Component />} />;
      })}
    </>
  );

  return (
    <Route path="/common" element={<AviationLayout />}>
      {routes}
    </Route>
  );
};

export default useCommonRoute;
