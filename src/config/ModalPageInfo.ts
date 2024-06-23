import PAlertModal from '@/components/publish/modal/PAlertModal';
import PConfirmModal from '@/components/publish/modal/PConfirmModal';

const ModalPageInfo: any = {};

ModalPageInfo.list = [
  {
    title: 'alert 공통',
    Component: PAlertModal,
    path: 'alert',
    description: '',
    success: false,
  },
  {
    title: 'confirm 공통',
    Component: PConfirmModal,
    path: 'confirm',
    description: '',
    success: false,
  },
];

export default ModalPageInfo;
