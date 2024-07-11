import PAlertModal from '@/components/publish/modal/PAlertModal';
import PConfirmModal from '@/components/publish/modal/PConfirmModal';
import PLoadingBar from '@/components/publish/modal/PLoadingBar';

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
  {
    title: '로딩바',
    Component: PLoadingBar,
    path: 'loading',
    description: '',
    success: false,
  },
];

export default ModalPageInfo;
