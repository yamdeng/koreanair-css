import { Outlet } from 'react-router-dom';
import AviationLeftMenu from './AviationLeftMenu';
import AviationTopMenu from './AviationTopMenu';

export default function AviationLayout() {
  return (
    <div>
      <AviationTopMenu />
      <AviationLeftMenu />
      <Outlet />
    </div>
  );
}
