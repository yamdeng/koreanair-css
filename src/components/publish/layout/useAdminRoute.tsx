import { Route } from 'react-router-dom';
import AdminPageInfo from '@/config/AdminPageInfo';
import AdminLayout from './AdminLayout';

const useAdminRoute = () => {
  const routes = (
    <>
      {AdminPageInfo.list.map((menuInfo, index) => {
        const { Component, path } = menuInfo;
        return <Route key={index} path={path} element={<Component />} />;
      })}
    </>
  );

  return (
    <Route path="/admin" element={<AdminLayout />}>
      {routes}
    </Route>
  );
};

export default useAdminRoute;
