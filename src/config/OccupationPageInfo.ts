import POccupationPortal1 from '@/components/publish/occupation/POccupationPortal1';
import POccupationMu1P1list from '@/components/publish/occupation/POccupationMu1P1list';
import POccupationMu1P1edit from '@/components/publish/occupation/POccupationMu1P1edit';
import POccupationMu1P1detail from '@/components/publish/occupation/POccupationMu1P1detail';
import POccupationMu1P2list from '@/components/publish/occupation/POccupationMu1P2list';
import POccupationMu1P3list from '@/components/publish/occupation/POccupationMu1P3list';
import POccupationMu1P5list from '@/components/publish/occupation/POccupationMu1P5list';
import POccupationMu1P5edit from '@/components/publish/occupation/POccupationMu1P5edit';
import POccupationMu1P5detail from '@/components/publish/occupation/POccupationMu1P5detail';
import POccupationMu1P5detail2 from '@/components/publish/occupation/POccupationMu1P5detail2';
import POccupationMu1P6list from '@/components/publish/occupation/POccupationMu1P6list';
import POccupationMu1P6edit from '@/components/publish/occupation/POccupationMu1P6edit';
import POccupationMu1P6detail from '@/components/publish/occupation/POccupationMu1P6detail';
import POccupationMu1P7list from '@/components/publish/occupation/POccupationMu1P7list';
import POccupationMu1P7edit from '@/components/publish/occupation/POccupationMu1P7edit';
import POccupationMu1P7detail from '@/components/publish/occupation/POccupationMu1P7detail';
import POccupationMu1P8list from '@/components/publish/occupation/POccupationMu1P8list';
import POccupationMu1P9list from '@/components/publish/occupation/POccupationMu1P9list';
import POccupationMu1P9edit from '@/components/publish/occupation/POccupationMu1P9edit';
import POccupationMu1P10list from '@/components/publish/occupation/POccupationMu1P10list';
import POccupationMu1P10list1 from '@/components/publish/occupation/POccupationMu1P10list1';
import POccupationMu1P10edit from '@/components/publish/occupation/POccupationMu1P10edit';
import POccupationMu1P10detail from '@/components/publish/occupation/POccupationMu1P10detail';
import POccupationMu1P11list from '@/components/publish/occupation/POccupationMu1P11list';
import POccupationMu1P11list1 from '@/components/publish/occupation/POccupationMu1P11list1';
import POccupationMu1P11edit from '@/components/publish/occupation/POccupationMu1P11edit';
import POccupationMu1P11detail from '@/components/publish/occupation/POccupationMu1P11detail';
import POccupationMu3P1list from '@/components/publish/occupation/POccupationMu3P1list';
import POccupationMu3P1edit from '@/components/publish/occupation/POccupationMu3P1edit';
import POccupationMu3P2list from '@/components/publish/occupation/POccupationMu3P2list';
import POccupationMu3P2list1 from '@/components/publish/occupation/POccupationMu3P2list1';
import POccupationMu3P2edit from '@/components/publish/occupation/POccupationMu3P2edit';
import POccupationMu3P3list from '@/components/publish/occupation/POccupationMu3P3list';
import POccupationMu3P3edit from '@/components/publish/occupation/POccupationMu3P3edit';
import POccupationMu3P4list from '@/components/publish/occupation/POccupationMu3P4list';
import POccupationMu3P4list1 from '@/components/publish/occupation/POccupationMu3P4list1';
import POccupationMu3P4edit from '@/components/publish/occupation/POccupationMu3P4edit';
import POccupationMu3P5list from '@/components/publish/occupation/POccupationMu3P5list';
import POccupationMu3P8list from '@/components/publish/occupation/POccupationMu3P8list';
import POccupationMu3P8edit from '@/components/publish/occupation/POccupationMu3P8edit';
import POccupationMu4P1list from '@/components/publish/occupation/POccupationMu4P1list';
import POccupationMu4P1edit from '@/components/publish/occupation/POccupationMu4P1edit';
import POccupationMu4P2list from '@/components/publish/occupation/POccupationMu4P2list';
import POccupationMu4P2list1 from '@/components/publish/occupation/POccupationMu4P2list1';
import POccupationMu4P2edit from '@/components/publish/occupation/POccupationMu4P2edit';

const OccupationPageInfo: any = {};

OccupationPageInfo.list = [
  {
    title: '산업안전 포탈',
    Component: POccupationPortal1,
    path: 'POccupationPortal1',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 공지사항-리스트',
    Component: POccupationMu1P1list,
    path: 'POccupationMu1P1list',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 공지사항-입력',
    Component: POccupationMu1P1edit,
    path: 'POccupationMu1P1edit',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 공지사항-상세',
    Component: POccupationMu1P1detail,
    path: 'POccupationMu1P1detail',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 관리지표',
    Component: POccupationMu1P2list,
    path: 'POccupationMu1P2list',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 산업안전보건 조직도',
    Component: POccupationMu1P3list,
    path: 'POccupationMu1P3list',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 규정/지침/메뉴얼/양식-리스트',
    Component: POccupationMu1P5list,
    path: 'POccupationMu1P5list',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 규정/지침/메뉴얼/양식-입력',
    Component: POccupationMu1P5edit,
    path: 'POccupationMu1P5edit',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 규정/지침/메뉴얼/양식-상세',
    Component: POccupationMu1P5detail,
    path: 'POccupationMu1P5detail',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 규정/지침/메뉴얼/양식-개정',
    Component: POccupationMu1P5detail2,
    path: 'POccupationMu1P5detail2',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 산업안전보건위원회-리스트',
    Component: POccupationMu1P6list,
    path: 'POccupationMu1P6list',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 산업안전보건위원회-입력',
    Component: POccupationMu1P6edit,
    path: 'POccupationMu1P6edit',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 산업안전보건위원회-상세',
    Component: POccupationMu1P6detail,
    path: 'POccupationMu1P6detail',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 무재해운동-리스트',
    Component: POccupationMu1P7list,
    path: 'POccupationMu1P7list',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 무재해운동-입력',
    Component: POccupationMu1P7edit,
    path: 'POccupationMu1P7edit',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 무재해운동-상세',
    Component: POccupationMu1P7detail,
    path: 'POccupationMu1P7detail',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 법규등록대장기준정보-리스트',
    Component: POccupationMu1P8list,
    path: 'POccupationMu1P8list',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 법규등록대장-리스트',
    Component: POccupationMu1P9list,
    path: 'POccupationMu1P9list',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 법규등록대장-등록',
    Component: POccupationMu1P9edit,
    path: 'POccupationMu1P9edit',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 안전보건협의체-현황-리스트',
    Component: POccupationMu1P10list,
    path: 'POccupationMu1P10list',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 안전보건협의체-목록-리스트',
    Component: POccupationMu1P10list1,
    path: 'POccupationMu1P10list1',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 안전보건협의체-등록',
    Component: POccupationMu1P10edit,
    path: 'POccupationMu1P10edit',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 안전보건협의체-상세',
    Component: POccupationMu1P10detail,
    path: 'POccupationMu1P10detail',
    description: '',
    success: true,
  },
  {
    title: '안전경영 > 산업안전보건관리비-현황-리스트',
    Component: POccupationMu1P11list,
    path: 'POccupationMu1P11list',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 산업안전보건관리비-목록-리스트',
    Component: POccupationMu1P11list1,
    path: 'POccupationMu1P11list1',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 산업안전보건관리비-등록',
    Component: POccupationMu1P11edit,
    path: 'POccupationMu1P11edit',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 산업안전보건관리비-상세',
    Component: POccupationMu1P11detail,
    path: 'POccupationMu1P11detail',
    description: '',
    success: false,
  },
  {
    title: '안전관리 > 중대재해대응훈련-리스트',
    Component: POccupationMu3P1list,
    path: 'POccupationMu3P1list',
    description: '',
    success: true,
  },
  {
    title: '안전관리 > 중대재해대응훈련-등록',
    Component: POccupationMu3P1edit,
    path: 'POccupationMu3P1edit',
    description: '',
    success: true,
  },
  {
    title: '안전관리 > 위험기계기구-현황',
    Component: POccupationMu3P2list,
    path: 'POccupationMu3P2list',
    description: '',
    success: false,
  },
  {
    title: '안전관리 > 위험기계기구-조회',
    Component: POccupationMu3P2list1,
    path: 'POccupationMu3P2list1',
    description: '',
    success: false,
  },
  {
    title: '안전관리 > 위험기계기구-조회-등록',
    Component: POccupationMu3P2edit,
    path: 'POccupationMu3P2edit',
    description: '',
    success: false,
  },
  {
    title: '안전관리 > 작업환경측정-리스트',
    Component: POccupationMu3P3list,
    path: 'POccupationMu3P3list',
    description: '',
    success: true,
  },
  {
    title: '안전관리 > 작업환경측정-등록',
    Component: POccupationMu3P3edit,
    path: 'POccupationMu3P3edit',
    description: '',
    success: true,
  },
  {
    title: '안전관리 > 외주작업허가-현황-리스트',
    Component: POccupationMu3P4list,
    path: 'POccupationMu3P4list',
    description: '',
    success: false,
  },
  {
    title: '안전관리 > 외주작업허가-조회-리스트',
    Component: POccupationMu3P4list1,
    path: 'POccupationMu3P4list1',
    description: '',
    success: true,
  },
  {
    title: '안전관리 > 외주작업허가-등록',
    Component: POccupationMu3P4edit,
    path: 'POccupationMu3P4edit',
    description: '',
    success: false,
  },
  {
    title: '안전관리 > 협력업체-리스트',
    Component: POccupationMu3P5list,
    path: 'POccupationMu3P5list',
    description: '',
    success: true,
  },
  {
    title: '안전관리 > 관리감독자평가-리스트',
    Component: POccupationMu3P8list,
    path: 'POccupationMu3P8list',
    description: '',
    success: true,
  },
  {
    title: '안전관리 > 관리감독자평가-등록',
    Component: POccupationMu3P8edit,
    path: 'POccupationMu3P8edit',
    description: '',
    success: true,
  },
  {
    title: '안전점검 > 점검표관리-리스트',
    Component: POccupationMu4P1list,
    path: 'POccupationMu4P1list',
    description: '',
    success: true,
  },
  {
    title: '안전점검 > 점검표관리-등록',
    Component: POccupationMu4P1edit,
    path: 'POccupationMu4P1edit',
    description: '',
    success: false,
  },
  {
    title: '안전점검 > 작업장순회점검-현황-리스트',
    Component: POccupationMu4P2list,
    path: 'POccupationMu4P2list',
    description: '',
    success: false,
  },
  {
    title: '안전점검 > 작업장순회점검-조회-리스트',
    Component: POccupationMu4P2list1,
    path: 'POccupationMu4P2list1',
    description: '',
    success: true,
  },
  {
    title: '안전점검 > 작업장순회점검-등록',
    Component: POccupationMu4P2edit,
    path: 'POccupationMu4P2edit',
    description: '',
    success: false,
  },
];
export default OccupationPageInfo;
