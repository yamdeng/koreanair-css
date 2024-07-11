import PBasicLayout from '@/components/publish/common/PBasicLayout';
import PHomePortal1 from '@/components/publish/common/PHomePortal1';

const CommonPageInfo: any = {};

CommonPageInfo.list = [
  {
    title: '기본레이아웃',
    Component: PBasicLayout,
    path: 'basic-layout',
    description: '',
    success: false,
  },
  {
    title: '홈포탈',
    Component: PHomePortal1,
    path: 'home-portal1',
    description: 'asdasdasd',
    success: false,
  },
];

export default CommonPageInfo;
