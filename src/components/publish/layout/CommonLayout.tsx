import { Outlet } from 'react-router-dom';

export default function CommonLayout() {
  return (
    <div>
      <h3>공통/홈/레이아웃</h3>
      <Outlet />
    </div>
  );
}
