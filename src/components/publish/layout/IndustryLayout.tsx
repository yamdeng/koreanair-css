import { Outlet } from 'react-router-dom';
import IndustryLeftMenu from './IndustryLeftMenu';
import IndustryTopMenu from './IndustryTopMenu';

export default function IndustryLayout() {
  return (
    <div>
      <IndustryTopMenu />
      <IndustryLeftMenu />
      <Outlet />
    </div>
  );
}
