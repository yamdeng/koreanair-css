import { Outlet } from 'react-router-dom';
import OccupationLeftMenu from './OccupationLeftMenu';
import OccupationTopMenu from './OccupationTopMenu';

export default function OccupationLayout() {
  return (
    <div>
      <OccupationTopMenu />
      <OccupationLeftMenu />
      <Outlet />
    </div>
  );
}
