import { Route } from 'react-router-dom';
import ModalPageInfo from '@/config/ModalPageInfo';
import ModalLayout from './ModalLayout';

const useModalRoute = () => {
  const routes = (
    <>
      {ModalPageInfo.list.map((menuInfo, index) => {
        const { Component, path } = menuInfo;
        return <Route key={index} path={path} element={<Component />} />;
      })}
    </>
  );

  return (
    <Route path="/modal" element={<ModalLayout />}>
      {routes}
    </Route>
  );
};

export default useModalRoute;
