import { Outlet } from 'react-router-dom';

export default function AviationLayout() {
  return (
    <div>
      <h3>항공안전 레이아웃</h3>
      <Outlet />
    </div>
  );
}
