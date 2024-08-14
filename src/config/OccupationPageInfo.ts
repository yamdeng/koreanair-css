import POccupationPortal1 from '@/components/publish/occupation/POccupationPortal1';
import POccupationMu1P1list from '@/components/publish/occupation/POccupationMu1P1list';
import POccupationMu1P1edit from '@/components/publish/occupation/POccupationMu1P1edit';
import POccupationMu1P1detail from '@/components/publish/occupation/POccupationMu1P1detail';
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
import POccupationMu3P1list from '@/components/publish/occupation/POccupationMu3P1list';
import POccupationMu3P1edit from '@/components/publish/occupation/POccupationMu3P1edit';
import POccupationMu3P2list from '@/components/publish/occupation/POccupationMu3P2list';
import POccupationMu3P2list1 from '@/components/publish/occupation/POccupationMu3P2list1';
import POccupationMu3P2edit from '@/components/publish/occupation/POccupationMu3P2edit';
import POccupationMu3P3list from '@/components/publish/occupation/POccupationMu3P3list';
import POccupationMu3P3edit from '@/components/publish/occupation/POccupationMu3P3edit';

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
    success: true,
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
    title: '안전관리 > 중대재해대응훈련-리스트',
    Component: POccupationMu3P1list,
    path: 'POccupationMu3P1list',
    description: '',
    success: false,
  },
  {
    title: '안전관리 > 중대재해대응훈련-등록',
    Component: POccupationMu3P1edit,
    path: 'POccupationMu3P1edit',
    description: '',
    success: false,
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
    success: false,
  },
  {
    title: '안전관리 > 작업환경측정-등록',
    Component: POccupationMu3P3edit,
    path: 'POccupationMu3P3edit',
    description: '',
    success: false,
  },
];
export default OccupationPageInfo;
