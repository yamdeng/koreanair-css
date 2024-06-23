import { Route } from 'react-router-dom';
import IndustryPageInfo from '@/config/IndustryPageInfo';
import IndustryLayout from './IndustryLayout';

const useIndustryRoute = () => {
  const routes = (
    <>
      {IndustryPageInfo.list.map((menuInfo, index) => {
        const { Component, path } = menuInfo;
        return <Route key={index} path={path} element={<Component />} />;
      })}
    </>
  );

  return (
    <Route path="/industry" element={<IndustryLayout />}>
      {routes}
    </Route>
  );
};

export default useIndustryRoute;
