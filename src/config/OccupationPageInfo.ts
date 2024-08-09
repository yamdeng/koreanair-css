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
import POccupationTraining from '@/components/publish/occupation/POccupationTraining';

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
    success: false,
  },
  {
    title: '안전경영 > 공지사항-입력',
    Component: POccupationMu1P1edit,
    path: 'POccupationMu1P1edit',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 공지사항-상세',
    Component: POccupationMu1P1detail,
    path: 'POccupationMu1P1detail',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 규정/지침/메뉴얼/양식-리스트',
    Component: POccupationMu1P5list,
    path: 'POccupationMu1P5list',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 규정/지침/메뉴얼/양식-입력',
    Component: POccupationMu1P5edit,
    path: 'POccupationMu1P5edit',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 규정/지침/메뉴얼/양식-상세',
    Component: POccupationMu1P5detail,
    path: 'POccupationMu1P5detail',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 규정/지침/메뉴얼/양식-개정',
    Component: POccupationMu1P5detail2,
    path: 'POccupationMu1P5detail2',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 산업안전보건위원회-리스트',
    Component: POccupationMu1P6list,
    path: 'POccupationMu1P6list',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 산업안전보건위원회-입력',
    Component: POccupationMu1P6edit,
    path: 'POccupationMu1P6edit',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 산업안전보건위원회-상세',
    Component: POccupationMu1P6detail,
    path: 'POccupationMu1P6detail',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 무재해운동-리스트',
    Component: POccupationMu1P7list,
    path: 'POccupationMu1P7list',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 무재해운동-입력',
    Component: POccupationMu1P7edit,
    path: 'POccupationMu1P7edit',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 무재해운동-상세',
    Component: POccupationMu1P7detail,
    path: 'POccupationMu1P7detail',
    description: '',
    success: false,
  },
  {
    title: '안전관리 > 중대재해대응훈련',
    Component: POccupationTraining,
    path: 'POccupationTraining',
    description: '',
    success: false,
  },
];
export default OccupationPageInfo;
