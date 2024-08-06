import PAlertModal from '@/components/publish/modal/PAlertModal';
import PConfirmModal from '@/components/publish/modal/PConfirmModal';
import PLoadingBar from '@/components/publish/modal/PLoadingBar';
import POrgTreeWithListModal from '@/components/publish/modal/POrgTreeWithListModal';
import PListModal from '@/components/publish/modal/PListModal';
import PUserDeptSelectModal from '@/components/publish/modal/PUserDeptSelectModal';
import POnlyTreeModal from '@/components/publish/modal/POnlyTreeModal';
import PEditFormModal from '@/components/publish/modal/PEditFormModal';
import PDetailFormModal from '@/components/publish/modal/PDetailFormModal';
import PUserEditModal from '@/components/publish/modal/PUserEditModal';
import PUserEditModal2 from '@/components/publish/modal/PUserEditModal2';
import PUserViewModal from '@/components/publish/modal/PUserViewModal';
import PChecklistModal from '@/components/publish/modal/PChecklistModal';

const ModalPageInfo: any = {};

ModalPageInfo.list = [
  {
    title: 'alert 공통',
    Component: PAlertModal,
    path: 'PAlertModal',
    description: '',
    success: true,
  },
  {
    title: 'confirm 공통',
    Component: PConfirmModal,
    path: 'PConfirmModal',
    description: '',
    success: true,
  },
  {
    title: '로딩바',
    Component: PLoadingBar,
    path: 'PLoadingBar',
    description: '',
    success: true,
  },
  {
    title: 'POrgTreeWithListModal',
    Component: POrgTreeWithListModal,
    path: 'POrgTreeWithListModal',
    description: '',
    success: true,
  },
  {
    title: 'PListModal',
    Component: PListModal,
    path: 'PListModal',
    description: '',
    success: true,
  },
  {
    title: '사용자/부서-팝업',
    Component: PUserDeptSelectModal,
    path: 'PUserDeptSelectModal',
    description: '',
    success: true,
  },
  {
    title: '트리만존재하는-팝업',
    Component: POnlyTreeModal,
    path: 'POnlyTreeModal',
    description: '',
    success: true,
  },
  {
    title: '폼-팝업',
    Component: PEditFormModal,
    path: 'PEditFormModal',
    description: '',
    success: true,
  },
  {
    title: '상세-팝업',
    Component: PDetailFormModal,
    path: 'PDetailFormModal',
    description: '',
    success: true,
  },
  {
    title: '사용자등록모달',
    Component: PUserEditModal,
    path: 'PUserEditModal',
    description: '',
    success: true,
  },
  {
    title: '사용자상세모달',
    Component: PUserViewModal,
    path: 'PUserViewModal',
    description: '',
    success: true,
  },
  {
    title: '사용자등록모달2',
    Component: PUserEditModal2,
    path: 'PUserEditModal2',
    description: '',
    success: true,
  },
  {
    title: '[ADUIT] Checklist 팝업창',
    Component: PChecklistModal,
    path: 'PChecklistModal',
    description: '',
    success: false,
  },
];

export default ModalPageInfo;
