import POccupationPortal1 from '@/components/publish/occupation/POccupationPortal1';
import POccupationPortal2 from '@/components/publish/occupation/POccupationPortal2';
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
    title: '안전경영 > 공지사항',
    Component: POccupationPortal2,
    path: 'POccupationPortal2',
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
