import { Outlet } from 'react-router-dom';
import AdminLeftMenu from './AdminLeftMenu';
import AdminTopMenu from './AdminTopMenu';

export default function AdminLayout() {
  return (
    <div>
      <AdminTopMenu />
      <AdminLeftMenu />
      <Outlet />
    </div>
  );
}
