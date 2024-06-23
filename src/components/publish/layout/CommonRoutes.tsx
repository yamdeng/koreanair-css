import { Route } from 'react-router-dom';
import CommonLayout from './CommonLayout';
import PReactSelect from '../common/PReactSelect';
import PTestSample from '../common/PTestSample';

const useCommonRoute = () => {
  return (
    <Route path="/common" element={<CommonLayout />}>
      <Route path="sample" element={<PTestSample />} />
      <Route path="sample-react-select" element={<PReactSelect />} />
    </Route>
  );
};

export default useCommonRoute;
