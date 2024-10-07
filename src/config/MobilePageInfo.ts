import PMobileReportForm1 from '@/components/publish/mobile/PMobileReportForm1';
import HomePortal1 from '@/components/publish/mobile/HomePortal1';
import HomePortal2 from '@/components/publish/mobile/HomePortal2';

const MobilePageInfo: any = {};

MobilePageInfo.list = [
  {
    title: '홈포탈1',
    Component: HomePortal1,
    path: 'HomePortal1',
    description: '',
    success: false,
  },
  {
    title: '홈포탈2',
    Component: HomePortal2,
    path: 'HomePortal2',
    description: '',
    success: false,
  },
  {
    title: '모바일 보고서 폼1',
    Component: PMobileReportForm1,
    path: 'PMobileReportForm1',
    description: '',
    success: false,
  },
];

export default MobilePageInfo;
