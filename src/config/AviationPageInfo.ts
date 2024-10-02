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
import AdminMailEdit from '@/components/publish/aviation/AdminMailEdit';
import AdminMailDetail from '@/components/publish/aviation/AdminMailDetail';
import SMSDashBoardList from '@/components/publish/aviation/SMSDashBoardList';
import SMSDashBoardList2 from '@/components/publish/aviation/SMSDashBoardList2';
import SMSmaturitylevelDashBoard from '@/components/publish/aviation/SMSmaturitylevelDashBoard';
import SMSintellectualList from '@/components/publish/aviation/SMSintellectualList';
import SMSdataList from '@/components/publish/aviation/SMSdataList';
import SMSdataDetail from '@/components/publish/aviation/SMSdataDetail';
import AdminSafetyNoticeList from '@/components/publish/aviation/AdminSafetyNoticeList';
import AdminSafetyNoticeEdit from '@/components/publish/aviation/AdminSafetyNoticeEdit';
import AdminSafetyNoticeDetail from '@/components/publish/aviation/AdminSafetyNoticeDetail';
import ReportEdit from '@/components/publish/aviation/ReportEdit';
import CSRReportEdit from '@/components/publish/aviation/CSRReportEdit';
import MSRReportEdit from '@/components/publish/aviation/MSRReportEdit';
import GSRReportEdit from '@/components/publish/aviation/GSRReportEdit';
import WorkShopList from '@/components/publish/aviation/WorkShopList';
import ExcellenceList from '@/components/publish/aviation/ExcellenceList';
import ExcellenceDetail from '@/components/publish/aviation/ExcellenceDetail';
import MyAuditPlan from '@/components/publish/aviation/MyAuditPlan';
import MyAuditPlanDetail from '@/components/publish/aviation/MyAuditPlanDetail';
import MyAuditConduct from '@/components/publish/aviation/MyAuditConduct';
import MyAuditConductDetail from '@/components/publish/aviation/MyAuditConductDetail';
import MyAuditCAR from '@/components/publish/aviation/MyAuditCAR';
import MyAuditClose from '@/components/publish/aviation/MyAuditClose';
import AdminRiskMATRIX from '@/components/publish/aviation/AdminRiskMATRIX';
import AdminRiskMATRIXDetail from '@/components/publish/aviation/AdminRiskMATRIXDetail';
import PRiskDetail from '@/components/publish/aviation/PRiskDetail';
import PRiskdashboard from '@/components/publish/aviation/PRiskdashboard';
import ChangeList from '@/components/publish/aviation/ChangeList';
import AdminTopEvent from '@/components/publish/aviation/AdminTopEvent';
import AdminEducatDetail from '@/components/publish/aviation/AdminEducatDetail';
import SPIEquipList from '@/components/publish/aviation/SPIEquipList';
import MyReportList from '@/components/publish/aviation/MyReportList';
import AdminkeywordList from '@/components/publish/aviation/AdminkeywordList';
import AdminkeywordEventList from '@/components/publish/aviation/AdminkeywordEventList';
import AdminReportDateList from '@/components/publish/aviation/AdminReportDateList';
import PayList from '@/components/publish/aviation/PayList';
import ReportASRDetail from '@/components/publish/aviation/ReportASRDetail';
import PayDetail from '@/components/publish/aviation/PayDetail';
import SkySafetyList from '@/components/publish/aviation/SkySafetyList';
import ChangeEdit from '@/components/publish/aviation/ChangeEdit';
import AdminInstructorList from '@/components/publish/aviation/AdminInstructorList';
import AdminInstructorEdit from '@/components/publish/aviation/AdminInstructorEdit';
import AdminInstructorDetail from '@/components/publish/aviation/AdminInstructorDetail';
import ReportList1 from '@/components/publish/aviation/ReportList1';
import { fa, fakerLV } from '@faker-js/faker';
import { fail } from 'assert';

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
    title: '[01.안전보고서] Centralized Report 상세',
    Component: CentralizedReportList,
    path: 'CentralizedReportList',
    description: '',
    success: false,
  },
  {
    title: '[01.안전보고서] My Report 리스트',
    Component: MyReportList,
    path: 'MyReportList',
    description: '',
    success: true,
  },
  {
    title: '[01.안전보고서] Report 리스트 -> (모달화면 명은 -> 컬럼 저장 모달)',
    Component: ReportList1,
    path: 'ReportList1',
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
    title: '[03.안전위험관리] 보고서분석 > 리스트',
    Component: ReportList,
    path: 'ReportList',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 보고서분석 > 상세(FOQA까지 포함)',
    Component: ReportDetail,
    path: 'ReportDetail',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 보고서분석 > 상세(ASR)',
    Component: ReportASRDetail,
    path: 'ReportASRDetail',
    description: '',
    success: false,
  },
  {
    title: '[03.안전위험관리] 보고서분석 > 등록(ASR)',
    Component: ReportEdit,
    path: 'ReportEdit',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 보고서분석 > 등록(CSR)',
    Component: CSRReportEdit,
    path: 'CSRReportEdit',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 보고서분석 > 등록(MSR)',
    Component: MSRReportEdit,
    path: 'MSRReportEdit',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 보고서분석 > 등록(GSR)',
    Component: GSRReportEdit,
    path: 'GSRReportEdit',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 결제관리 > 결제관리 리스트',
    Component: PayList,
    path: 'PayList',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 결제관리 > 결제관리 상세',
    Component: PayDetail,
    path: 'PayDetail',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 안전조사 > 대시보드',
    Component: PRiskdashboard,
    path: 'PRiskdashboard',
    description: '',
    success: false,
  },
  {
    title: '[03.안전위험관리] 안전조사 > 위험도대장(RiskRegister)',
    Component: GSRReportEdit,
    path: 'GSRReportEdit',
    description: '',
    success: false,
  },
  {
    title: '[03.안전위험관리] 지상조사 > 조사보고서 리스트',
    Component: PRiskList,
    path: 'PRiskList',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 지상조사 > 조사보고서 신규(등록)',
    Component: PRiskEdit,
    path: 'PRiskEdit',
    description: '',
    success: true,
  },
  {
    title: '[03.안전위험관리] 지상조사 > 조사보고서 상세',
    Component: PRiskDetail,
    path: 'PRiskDetail',
    description: '',
    success: true,
  },

  {
    title: '[03.안전위험관리] 지상조사 > 대시보드',
    Component: PRiskDetail,
    path: 'PRiskDetail',
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
    title: '[04.안전보증] EPS현황 > 운영현항, Risk분석, 진행현황 , HZR 참여실적',
    Component: SMSDashBoardList,
    path: 'SMSDashBoardList',
    description: '',
    success: false,
  },
  {
    title: '[04.안전보증] SMS성숙도점검 > 지적사항 리스트',
    Component: SMSintellectualList,
    path: 'SMSintellectualList',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] SMS성숙도점검 > 자료실 리스트',
    Component: SMSdataList,
    path: 'SMSdataList',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] SMS성숙도점검 > 자료실 상세',
    Component: SMSdataDetail,
    path: 'SMSdataDetail',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] SMS성숙도점검 > 대시보드',
    Component: SMSmaturitylevelDashBoard,
    path: 'SMSmaturitylevelDashBoard',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] 변화관리 > 변화관리 List',
    Component: ChangeList,
    path: 'ChangeList',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] 변화관리 > 변화관리 등록',
    Component: ChangeEdit,
    path: 'ChangeEdit',
    description: '',
    success: true,
  },

  {
    title: '[04.안전보증] 장비관리 > 장비점검 현황',
    Component: SPIEquipList,
    path: 'SPIEquipList',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] 장비관리 > 대시보드',
    Component: SPIEquipList,
    path: 'SPIEquipList',
    description: '',
    success: false,
  },
  {
    title: '[04.안전보증] SMS종합분석현황 > 대시보드',
    Component: SMSDashBoardList,
    path: 'SMSDashBoardList',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] SMS종합분석현황 > 대시보드2',
    Component: SMSDashBoardList2,
    path: 'SMSDashBoardList2',
    description: '',
    success: true,
  },
  {
    title: '[04.안전보증] ESP 현황',
    Component: SMSDashBoardList2,
    path: 'SMSDashBoardList2',
    description: '',
    success: false,
  },
  {
    title: '[05.안전증진] 안전 Communication > Newsletter',
    Component: WorkShopList,
    path: 'WorkShopList',
    description: '',
    success: false,
  },
  {
    title: '[05.안전증진] 안전 Communication > SkySafety21',
    Component: SkySafetyList,
    path: 'SkySafetyList',
    description: '',
    success: false,
  },
  {
    title: '[05.안전증진] 안전 Communication > 안전공지',
    Component: WorkShopList,
    path: 'WorkShopList',
    description: '',
    success: false,
  },
  {
    title: '[05.안전증진] SMS 교육 > 자료실',
    Component: WorkShopList,
    path: 'WorkShopList',
    description: '',
    success: false,
  },
  {
    title: '[05.안전증진] SMS 교육 > 강사현황',
    Component: WorkShopList,
    path: 'WorkShopList',
    description: '',
    success: false,
  },
  {
    title: '[05.안전증진] 안전문화설문',
    Component: WorkShopList,
    path: 'WorkShopList',
    description: '',
    success: false,
  },
  {
    title: '[05.안전증진] Safety Program > WorkShop 리스트',
    Component: WorkShopList,
    path: 'WorkShopList',
    description: '',
    success: false,
  },
  {
    title: '[05.안전증진] Safety Program > SafetyDay 리스트',
    Component: WorkShopList,
    path: 'WorkShopList',
    description: '',
    success: false,
  },
  {
    title: '[05.안전증진] Safety Program > SPIP',
    Component: WorkShopList,
    path: 'WorkShopList',
    description: '',
    success: false,
  },

  {
    title: '[05.안전증진] Safety Program > Newsletter 리스트',
    Component: WorkShopList,
    path: 'WorkShopList',
    description: '',
    success: false,
  },
  {
    title: '[05.안전증진] Safety Program > Excellence 리스트',
    Component: ExcellenceList,
    path: 'ExcellenceList',
    description: '',
    success: true,
  },
  {
    title: '[05.안전증진] Safety Program > Excellence 상세',
    Component: ExcellenceDetail,
    path: 'ExcellenceDetail',
    description: '',
    success: true,
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
    title: '[06.AUDIT] MyAuditList',
    Component: MyAuditList,
    path: 'MyAuditList',
    description: '',
    success: true,
  },
  {
    title: '[06.AUDIT] MyAuditPlan',
    Component: MyAuditPlan,
    path: 'MyAuditPlan',
    description: '',
    success: false,
  },
  {
    title: '[06.AUDIT] MyAuditPlanDetail',
    Component: MyAuditPlanDetail,
    path: 'MyAuditPlanDetail',
    description: '',
    success: false,
  },
  {
    title: '[06.AUDIT] MyAuditConduct',
    Component: MyAuditConduct,
    path: 'MyAuditConduct',
    description: '',
    success: false,
  },
  {
    title: '[06.AUDIT] MyAuditConductDetail',
    Component: MyAuditConductDetail,
    path: 'MyAuditConductDetail',
    description: '',
    success: false,
  },
  {
    title: '[06.AUDIT] MyAuditCAR',
    Component: MyAuditCAR,
    path: 'MyAuditCAR',
    description: '',
    success: false,
  },
  {
    title: '[06.AUDIT] MyAuditClose',
    Component: MyAuditClose,
    path: 'MyAuditClose',
    description: '',
    success: false,
  },
  {
    title: '[06.AUDIT] 품질심사원프로필',
    Component: MyAuditClose,
    path: 'MyAuditClose',
    description: '',
    success: false,
  },
  {
    title: '[06.AUDIT] 예외 Audit 관리',
    Component: MyAuditClose,
    path: 'MyAuditClose',
    description: '',
    success: false,
  },
  {
    title: '[06.AUDIT] 개선조치 CAR 조회',
    Component: MyAuditClose,
    path: 'MyAuditClose',
    description: '',
    success: false,
  },
  {
    title: '[06.AUDIT] 품질심사 현황',
    Component: MyAuditClose,
    path: 'MyAuditClose',
    description: '',
    success: false,
  },
  {
    title: '[07.관리자] 지상관리 > 입력항목관리',
    Component: AdminBoardList,
    path: 'AdminBoardList',
    description: '',
    success: false,
  },
  {
    title: '[07.관리자] 지상관리 > 대시보드관리',
    Component: AdminBoardList,
    path: 'AdminBoardList',
    description: '',
    success: false,
  },
  {
    title: '[07.관리자] 강사이력관리 리스트',
    Component: AdminInstructorList,
    path: 'AdminInstructorList',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 강사이력관리 등록',
    Component: AdminInstructorEdit,
    path: 'AdminInstructorEdit',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 강사이력관리 상세',
    Component: AdminInstructorDetail,
    path: 'AdminInstructorDetail',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 게시판 관리 > 안전목표 List',
    Component: AdminSafetyList,
    path: 'AdminSafetyList',
    description: '',
    success: true,
  },

  {
    title: '[07.관리자] 게시판 관리 > SPI게시판 List',
    Component: AdminBoardList,
    path: 'AdminBoardList',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 게시판 관리 > SPI게시판 등록',
    Component: AdminBoardEdit,
    path: 'AdminBoardEdit',
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
    success: true,
  },
  {
    title: '[07.관리자] 메일양식관리 > 등록',
    Component: AdminMailEdit,
    path: 'AdminMailEdit',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 메일양식관리 > 상세',
    Component: AdminMailDetail,
    path: 'AdminMailDetail',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 게시판관리 > Safety게시판 리스트',
    Component: AdminSafetyNoticeList,
    path: 'AdminSafetyNoticeList',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 게시판관리 > Safety게시판 등록',
    Component: AdminSafetyNoticeEdit,
    path: 'AdminSafetyNoticeEdit',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 게시판관리 > Safety게시판 상세',
    Component: AdminSafetyNoticeDetail,
    path: 'AdminSafetyNoticeDetail',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 게시판관리 > RISK MATRIX 관리',
    Component: AdminRiskMATRIX,
    path: 'AdminRiskMATRIX',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 게시판관리 > RISK MATRIX 관리 수정',
    Component: AdminRiskMATRIXDetail,
    path: 'AdminRiskMATRIXDetail',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] Top 10 Event 관리',
    Component: AdminTopEvent,
    path: 'AdminTopEvent',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 교육관리 상세',
    Component: AdminEducatDetail,
    path: 'AdminEducatDetail',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 보고서기한관리',
    Component: AdminReportDateList,
    path: 'AdminReportDateList',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 보고서키워드 관리 > 키워드',
    Component: AdminkeywordList,
    path: 'AdminkeywordList',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] 보고서키워드 관리 > 이벤트',
    Component: AdminkeywordEventList,
    path: 'AdminkeywordEventList',
    description: '',
    success: true,
  },
  {
    title: '[09.AMO] AMO페이지는 레이어팝업처리 -->모달페이지에 있음',
    Component: AdminRiskMATRIXDetail,
    path: 'AdminRiskMATRIXDetail',
    description: '',
    success: false,
  },
];

export default AviationPageInfo;
