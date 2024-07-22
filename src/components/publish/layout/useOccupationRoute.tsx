import { Route } from 'react-router-dom';
import OccupationPageInfo from '@/config/OccupationPageInfo';
import OccupationLayout from './OccupationLayout';

const useOccupationRoute = () => {
  const routes = (
    <>
      {OccupationPageInfo.list.map((menuInfo, index) => {
        const { Component, path } = menuInfo;
        return <Route key={index} path={path} element={<Component />} />;
      })}
    </>
  );

  return (
    <Route path="/occupation" element={<OccupationLayout />}>
      {routes}
    </Route>
  );
};

export default useOccupationRoute;
