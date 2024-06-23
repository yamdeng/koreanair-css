import { Outlet } from 'react-router-dom';

export default function ModalLayout() {
  return (
    <div>
      <h3>모달 레이아웃</h3>
      <Outlet />
    </div>
  );
}
