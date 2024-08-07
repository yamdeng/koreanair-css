import POccupationPortal1 from '@/components/publish/occupation/POccupationPortal1';
import POccupationMu1P1list from '@/components/publish/occupation/POccupationMu1P1list';
import POccupationMu1P1edit from '@/components/publish/occupation/POccupationMu1P1edit';
import POccupationMu1P1detail from '@/components/publish/occupation/POccupationMu1P1detail';
import POccupationMu1P5 from '@/components/publish/occupation/POccupationMu1P5';
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
    title: '안전경영 > 규정/지침/메뉴얼/양식',
    Component: POccupationMu1P5,
    path: 'POccupationMu1P5',
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
