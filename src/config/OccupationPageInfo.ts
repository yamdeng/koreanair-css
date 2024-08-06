import POccupationPortal1 from '@/components/publish/occupation/POccupationPortal1';
import POccupationPortal2 from '@/components/publish/occupation/POccupationPortal2';
import POccupationPortal2edit from '@/components/publish/occupation/POccupationPortal2edit';
import POccupationPortal2detail from '@/components/publish/occupation/POccupationPortal2detail';
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
    Component: POccupationPortal2,
    path: 'POccupationPortal2',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 공지사항-입력',
    Component: POccupationPortal2edit,
    path: 'POccupationPortal2edit',
    description: '',
    success: false,
  },
  {
    title: '안전경영 > 공지사항-상세',
    Component: POccupationPortal2detail,
    path: 'POccupationPortal2detail',
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
