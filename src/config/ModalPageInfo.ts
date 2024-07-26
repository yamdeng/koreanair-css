import PAlertModal from '@/components/publish/modal/PAlertModal';
import PConfirmModal from '@/components/publish/modal/PConfirmModal';
import PLoadingBar from '@/components/publish/modal/PLoadingBar';
import POrgTreeWithListModal from '@/components/publish/modal/POrgTreeWithListModal';
import PListModal from '@/components/publish/modal/PListModal';
import PUserDeptSelectModal from '@/components/publish/modal/PUserDeptSelectModal';
import POnlyTreeModal from '@/components/publish/modal/POnlyTreeModal';

const ModalPageInfo: any = {};

ModalPageInfo.list = [
  {
    title: 'alert 공통',
    Component: PAlertModal,
    path: 'PAlertModal',
    description: '',
    success: false,
  },
  {
    title: 'confirm 공통',
    Component: PConfirmModal,
    path: 'PConfirmModal',
    description: '',
    success: false,
  },
  {
    title: '로딩바',
    Component: PLoadingBar,
    path: 'PLoadingBar',
    description: '',
    success: false,
  },
  {
    title: 'POrgTreeWithListModal',
    Component: POrgTreeWithListModal,
    path: 'POrgTreeWithListModal',
    description: '',
    success: false,
  },
  {
    title: 'PListModal',
    Component: PListModal,
    path: 'PListModal',
    description: '',
    success: false,
  },
  {
    title: '사용자/부서-팝업',
    Component: PUserDeptSelectModal,
    path: 'PUserDeptSelectModal',
    description: '',
    success: false,
  },
  {
    title: '트리만존재하는-팝업',
    Component: POnlyTreeModal,
    path: 'POnlyTreeModal',
    description: '',
    success: false,
  },
];

export default ModalPageInfo;
