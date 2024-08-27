import PAviationPortal1 from '@/components/publish/aviation/PAviationPortal1';
import PRiskList from '@/components/publish/aviation/PRiskList';
import PRiskEdit from '@/components/publish/aviation/PRiskEdit';
import SPIInfo1 from '@/components/publish/aviation/SPIInfo1';
import SPIInfo2 from '@/components/publish/aviation/SPIInfo2';
import SPIBoardList from '@/components/publish/aviation/SPIBoardList';
import Checklist1 from '@/components/publish/aviation/Checklist1';
import CheckEdit from '@/components/publish/aviation/CheckEdit';
import TaxonomyList from '@/components/publish/aviation/TaxonomyList';
import TaxonomyEdit from '@/components/publish/aviation/TaxonomyEdit';
import SafetyList from '@/components/publish/aviation/SafetyList';
import SafetyEdit from '@/components/publish/aviation/SafetyEdit';
import SafetyDetail from '@/components/publish/aviation/SafetyDetail';
import SafetyManual from '@/components/publish/aviation/SafetyManual';
import SafetyManualDetail from '@/components/publish/aviation/SafetyManualDetail';
import SafetyPolicy from '@/components/publish/aviation/SafetyPolicy';
import PotentialConList from '@/components/publish/aviation/PotentialConList';
import PotentialConEdit from '@/components/publish/aviation/PotentialConEdit';
import EventtypeList from '@/components/publish/aviation/EventtypeList';
import EventtypeEdit from '@/components/publish/aviation/EventtypeEdit';
import AdminSafetyManualList from '@/components/publish/aviation/AdminSafetyManualList';
import AdminSafetyManualEdit from '@/components/publish/aviation/AdminSafetyManualEdit';
import ReportList from '@/components/publish/aviation/ReportList';
import ReportDetail from '@/components/publish/aviation/ReportDetail';
import CentralizedReportList from '@/components/publish/aviation/CentralizedReportList';
import AdminSafetyCultureList from '@/components/publish/aviation/AdminSafetyCultureList';
import AdminSafetyCultureEdit from '@/components/publish/aviation/AdminSafetyCultureEdit';
import AdminSafetyCultureDetail from '@/components/publish/aviation/AdminSafetyCultureDetail';
import SafetyMeetingList from '@/components/publish/aviation/SafetyMeetingList';
import SPIBoardDetail from '@/components/publish/aviation/SPIBoardDetail';
import SPIReportList from '@/components/publish/aviation/SPIReportList';
import SPIIndicatorList from '@/components/publish/aviation/SPIIndicatorList';
import SafetyMeetingEdit from '@/components/publish/aviation/SafetyMeetingEdit';
import SafetyMeetingDetail from '@/components/publish/aviation/SafetyMeetingDetail';
import AdminSafetyList from '@/components/publish/aviation/AdminSafetyList';
import AdminBoardList from '@/components/publish/aviation/AdminBoardList';
import AdminBoardEdit from '@/components/publish/aviation/AdminBoardEdit';
import CheckDetail from '@/components/publish/aviation/CheckDetail';
import MyAuditList from '@/components/publish/aviation/MyAuditList';
import AdminMailList from '@/components/publish/aviation/AdminMailList';
import { fa } from '@faker-js/faker';

const AviationPageInfo: any = {};

AviationPageInfo.list = [
  {
    title: '항공안전 포탈',
    Component: PAviationPortal1,
    path: 'PAviationPortal1',
    description: '',
    success: false,
  },
  {
    title: '[01.안전보고서] Centralized Report 리스트',
    Component: CentralizedReportList,
    path: 'CentralizedReportList',
    description: '',
    success: true,
  },
  {
    title: '[02.안정정책] 안전정책 > 매뉴얼',
    Component: SafetyManual,
    path: 'SafetyManual',
    description: '',
    success: true,
  },
  {
    title: '[02.안정정책] 안전정책 > 매뉴얼 > 매뉴얼 상세',
    Component: SafetyManualDetail,
    path: 'SafetyManualDetail',
    description: '',
    success: true,
  },
  {
    title: '[02.안정정책] 안전정책',
    Component: SafetyPolicy,
    path: 'SafetyPolicy',
    description: '',
    success: true,
  },
  {
    title: '[02.안정정책] 안전정책 > 안전회의체 리스트',
    Component: SafetyMeetingList,
    path: 'SafetyMeetingList',
    description: '',
    success: true,
  },
  {
    title: '[02.안정정책] 안전정책 > 안전회의체 등록',
    Component: SafetyMeetingEdit,
    path: 'SafetyMeetingEdit',
    description: '',
    success: true,
  },
  {
    title: '[02.안정정책] 안전정책 > 안전회의체 상세',
    Component: SafetyMeetingDetail,
    path: 'SafetyMeetingDetail',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 안전조사 > 조사보고서 리스트',
    Component: PRiskList,
    path: 'PRiskList',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 안전조사 > 조사보고서 신규(등록)',
    Component: PRiskEdit,
    path: 'PRiskEdit',
    description: '',
    success: false,
  },
  {
    title: '[03.안전위험관리] 보고서분석 > 리스트',
    Component: ReportList,
    path: 'ReportList',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 보고서분석 > 상세',
    Component: ReportDetail,
    path: 'ReportDetail',
    description: '',
    success: false,
  },
  {
    title: '[04.안전보증] SPI/SPT > 운영 현황> 운항 정보',
    Component: SPIInfo1,
    path: 'SPIInfo1',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] SPI/SPT > 운영 현황> SPI 지표별 현황',
    Component: SPIInfo2,
    path: 'SPIInfo2',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] SPI/SPT > 게시판 > 리스트',
    Component: SPIBoardList,
    path: 'SPIBoardList',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] SPI/SPT > 게시판 > 상세',
    Component: SPIBoardDetail,
    path: 'SPIBoardDetail',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] SPI/SPT > Report List',
    Component: SPIReportList,
    path: 'SPIReportList',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] SPI/SPT > 지표관리',
    Component: SPIIndicatorList,
    path: 'SPIIndicatorList',
    description: '',
    success: true,
  },
  {
    title: '[ADMIN] 게시판 관리 > 안전목표 List',
    Component: AdminSafetyList,
    path: 'AdminSafetyList',
    description: '',
    success: true,
  },
  {
    title: '[ADMIN] 게시판 관리 > SPI게시판 List',
    Component: AdminBoardList,
    path: 'AdminBoardList',
    description: '',
    success: true,
  },
  {
    title: '[ADMIN] 게시판 관리 > SPI게시판 등록',
    Component: AdminBoardEdit,
    path: 'AdminBoardEdit',
    description: '',
    success: true,
  },
  {
    title: '[06.AUDIT] MyAuditList',
    Component: MyAuditList,
    path: 'MyAuditList',
    description: '',
    success: false,
  },
  {
    title: '[06.AUDIT] CheckList',
    Component: Checklist1,
    path: 'Checklist1',
    description: '',
    success: true,
  },
  {
    title: '[06.AUDIT] CheckEdit',
    Component: CheckEdit,
    path: 'CheckEdit',
    description: '',
    success: true,
  },
  {
    title: '[06.AUDIT] CheckDetail',
    Component: CheckDetail,
    path: 'CheckDetail',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] HAZARD관리 > Taxonomy > 리스트',
    Component: TaxonomyList,
    path: 'TaxonomyList',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] HAZARD관리 > Taxonomy > 등록',
    Component: TaxonomyEdit,
    path: 'TaxonomyEdit',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] HAZARD관리 > PotentialConsequence > 리스트',
    Component: PotentialConList,
    path: 'PotentialConList',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] HAZARD관리 > PotentialConsequence > 등록',
    Component: PotentialConEdit,
    path: 'PotentialConEdit',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] EVENT TYPE관리 > 리스트',
    Component: EventtypeList,
    path: 'EventtypeList',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] EVENT TYPE관리 > 등록',
    Component: EventtypeEdit,
    path: 'EventtypeEdit',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 안전정책 > 리스트',
    Component: SafetyList,
    path: 'SafetyList',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 안전정책 > 등록',
    Component: SafetyEdit,
    path: 'SafetyEdit',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 안전정책 > 상세',
    Component: SafetyDetail,
    path: 'SafetyDetail',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 안전매뉴얼 > 리스트',
    Component: AdminSafetyManualList,
    path: 'AdminSafetyManualList',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 안전매뉴얼 > 등록',
    Component: AdminSafetyManualEdit,
    path: 'AdminSafetyManualEdit',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 안전문화설문관리 > 리스트',
    Component: AdminSafetyCultureList,
    path: 'AdminSafetyCultureList',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 안전문화설문관리 > 등록',
    Component: AdminSafetyCultureEdit,
    path: 'AdminSafetyCultureEdit',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 안전문화설문관리 > 상세',
    Component: AdminSafetyCultureDetail,
    path: 'AdminSafetyCultureDetail',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 메일양식관리 > 리스트',
    Component: AdminMailList,
    path: 'AdminMailList',
    description: '',
    success: false,
  },
];

export default AviationPageInfo;
