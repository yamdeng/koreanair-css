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
import PRightCommentLayer from '@/components/publish/modal/PRightCommentLayer';
import PColumnUserSaveModal from '@/components/publish/modal/PColumnUserSaveModal';
import MU1P5detail2Modal from '@/components/publish/modal/MU1P5detail2Modal';
import PReportListModal from '@/components/publish/modal/PReportListModal';
import MU1P8Modal from '@/components/publish/modal/MU1P8Modal';
import PReportLevelModal from '@/components/publish/modal/PReportLevelModal';
import MU1P8Modal2 from '@/components/publish/modal/MU1P8Modal2';
import MU1P7Modal from '@/components/publish/modal/MU1P7Modal';
import MU1P11Modal from '@/components/publish/modal/MU1P11Modal';
import MU2P1Modal from '@/components/publish/modal/MU2P1Modal';
import MU3P5Modal from '@/components/publish/modal/MU3P5Modal';
import MU4P1Modal from '@/components/publish/modal/MU4P1Modal';
import MU3P4ModalS from '@/components/publish/modal/MU3P4ModalS';
import MU3P4ModalE from '@/components/publish/modal/MU3P4ModalE';
import MU3P4Modal from '@/components/publish/modal/MU3P4Modal';
import MU3P4Modal1 from '@/components/publish/modal/MU3P4Modal1';
import MU1P4Modal from '@/components/publish/modal/MU1P4Modal';
import PReportEmailModal from '@/components/publish/modal/PReportEmailModal';
import PSPIcharacteristicModal from '@/components/publish/modal/PSPIcharacteristicModal';
import PSPILoadModal from '@/components/publish/modal/PSPILoadModal';
import PSPINewModal from '@/components/publish/modal/PSPINewModal';
import PAdminSafetyModal from '@/components/publish/modal/PAdminSafetyModal';
import PAdminSafetyDetailModal from '@/components/publish/modal/PAdminSafetyDetailModal';
import PChapterAddModal from '@/components/publish/modal/PChapterAddModal';
import PChapterSaveModal from '@/components/publish/modal/PChapterSaveModal';
import PChapterDeleteModal from '@/components/publish/modal/PChapterDeleteModal';
import PChecklistSaveModal from '@/components/publish/modal/PChecklistSaveModal';
import PChecklistDeleteModal from '@/components/publish/modal/PChecklistDeleteModal';
import PSMSReportModal from '@/components/publish/modal/PSMSReportModal';
import MU5P1Modal from '@/components/publish/modal/MU5P1Modal';
import MU5P2Modal from '@/components/publish/modal/MU5P2Modal';
import MU5P3Modal from '@/components/publish/modal/MU5P3Modal';
import MU5P4Modal from '@/components/publish/modal/MU5P4Modal';
import PReportDocumentModal from '@/components/publish/modal/PReportDocumentModal';
import MU4P2Modal from '@/components/publish/modal/MU4P2Modal';
import PayGroupModal from '@/components/publish/modal/PayGroupModal';

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
    title: '우측 댓글 영역',
    Component: PRightCommentLayer,
    path: 'PRightCommentLayer',
    description: '',
    success: false,
  },
  {
    title: '컬럼 저장 목록 모달',
    Component: PColumnUserSaveModal,
    path: 'PColumnUserSaveModal',
    description: '',
    success: true,
  },

  {
    title: '[항공안전>03.안전위험관리] 보고서분석 > 반려사유 팝업창',
    Component: PReportListModal,
    path: 'PReportListModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전>03.안전위험관리] 보고서분석 > 위험레벨조회 팝업창',
    Component: PReportLevelModal,
    path: 'PReportLevelModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전>03.안전위험관리] 보고서분석 > 이메일보내기 팝업창',
    Component: PReportEmailModal,
    path: 'PReportEmailModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전> 03.안전위험관리] 안전조사 > 조사보고서 > 참고문서번호 팝업창',
    Component: PReportDocumentModal,
    path: 'PReportDocumentModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전> 03.안전위험관리] 안전조사 > 조사보고서 > 결제그룹정보설정 팝업창',
    Component: PayGroupModal,
    path: 'PayGroupModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전> 04.안전보증] SMS종합분석현황 > 대시보드 > 보고서현황 팝업창',
    Component: PSMSReportModal,
    path: 'PSMSReportModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전> 04.안전보증] SPI/SPT > Report List > SPI 지표 추가 팝업창',
    Component: PSPIcharacteristicModal,
    path: 'PSPIcharacteristicModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전> 04.안전보증] SPI/SPT > 지표관리 > 지표 신규 팝업창',
    Component: PSPINewModal,
    path: 'PSPINewModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전> 04.안전보증] SPI/SPT > 지표관리 > 지표불러오기 팝업창',
    Component: PSPILoadModal,
    path: 'PSPILoadModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전 > 06.AUDIT] Checklist 추가 팝업창',
    Component: PChecklistModal,
    path: 'PChecklistModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전 > 06.AUDIT] Checklist 저장 팝업창',
    Component: PChecklistSaveModal,
    path: 'PChecklistSaveModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전 > 06.AUDIT] Checklist 삭제 팝업창',
    Component: PChecklistDeleteModal,
    path: 'PChecklistDeleteeModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전 > 06.AUDIT] Chapter 추가 팝업창',
    Component: PChapterAddModal,
    path: 'PChapterAddModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전 > 06.AUDIT] Chapter 저장 팝업창',
    Component: PChapterSaveModal,
    path: 'PChapterSaveModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전 > 06.AUDIT] Chapter 삭제 팝업창',
    Component: PChapterDeleteModal,
    path: 'PChapterDeleteModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전> 07.관리자] 게시판 관리 > 안전목표 > 안전목표 신규 팝업창',
    Component: PAdminSafetyModal,
    path: 'PAdminSafetyModal',
    description: '',
    success: true,
  },
  {
    title: '[항공안전> 07.관리자] 게시판 관리 > 안전목표 > 안전목표 상세 팝업창',
    Component: PAdminSafetyDetailModal,
    path: 'PAdminSafetyDetailModal',
    description: '',
    success: true,
  },

  {
    title: '산업안전 > 안전경영 > 첨부링크 팝업창',
    Component: MU1P5detail2Modal,
    path: 'MU1P5detail2Modal',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 안전경영 > 사용자정보 팝업창',
    Component: MU1P4Modal,
    path: 'MU1P4Modal',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 안전경영 > 법규등록대장 팝업창',
    Component: MU1P8Modal,
    path: 'MU1P8Modal',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 안전경영 > 법규등록대장 팝업창2',
    Component: MU1P8Modal2,
    path: 'MU1P8Modal2',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 안전경영 > 무재해운동시작 팝업창',
    Component: MU1P7Modal,
    path: 'MU1P7Modal',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 안전경영 > 산업안전보건관리비 실적등록 팝업창',
    Component: MU1P11Modal,
    path: 'MU1P11Modal',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 안전교육 > 사용자검색 팝업창',
    Component: MU2P1Modal,
    path: 'MU2P1Modal',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 안전관리 > 외주업체허가-특별교육 팝업창',
    Component: MU3P4Modal1,
    path: 'MU3P4Modal1',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 안전관리 > 외주업체허가-작업시작 팝업창',
    Component: MU3P4ModalS,
    path: 'MU3P4ModalS',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 안전관리 > 외주업체허가-작업종료 팝업창',
    Component: MU3P4ModalE,
    path: 'MU3P4ModalE',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 안전관리 > 공사장소 관리 팝업창',
    Component: MU3P4Modal,
    path: 'MU3P4Modal',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 안전관리 > 협력업체검색 팝업창',
    Component: MU3P5Modal,
    path: 'MU3P5Modal',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 안전점검 > 점검표검색 팝업창',
    Component: MU4P1Modal,
    path: 'MU4P1Modal',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 위험성평가 > 평가시기안내 팝업창',
    Component: MU5P1Modal,
    path: 'MU5P1Modal',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 위험성평가 > 가능성안내 팝업창',
    Component: MU5P2Modal,
    path: 'MU5P2Modal',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 위험성평가 > 중대성안내 팝업창',
    Component: MU5P3Modal,
    path: 'MU5P3Modal',
    description: '',
    success: true,
  },
  {
    title: '산업안전 > 위험성평가 > 위험도안내 팝업창',
    Component: MU5P4Modal,
    path: 'MU5P4Modal',
    description: '',
    success: true,
  },
  {
    title: '산업점검 > 작업장순회점검 > 점검항목-부적합사항입력 팝업창',
    Component: MU4P2Modal,
    path: 'MU4P2Modal',
    description: '',
    success: true,
  },
];

export default ModalPageInfo;
