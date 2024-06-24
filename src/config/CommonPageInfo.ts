import PReactSelect from '@/components/publish/common/PReactSelect';
import PTestSample from '@/components/publish/common/PTestSample';
import PBasicLayout from '@/components/publish/common/PBasicLayout';
import PHomePortal1 from '@/components/publish/common/PHomePortal1';
import PHomePortal2 from '@/components/publish/common/PHomePortal2';

const CommonPageInfo: any = {};

CommonPageInfo.list = [
  {
    title: 'test 샘플',
    Component: PTestSample,
    path: 'sample',
    description: 'sample',
    success: false,
  },
  {
    title: '기본레이아웃',
    Component: PBasicLayout,
    path: 'basic-layout',
    description: '',
    success: false,
  },
  {
    title: '홈포탈 시안1',
    Component: PHomePortal1,
    path: 'home-portal1',
    description: 'asdasdasd',
    success: false,
  },
  {
    title: '홈포탈 시안2',
    Component: PHomePortal2,
    path: 'home-portal2',
    description: '',
    success: false,
  },
  {
    title: 'react-select (autocomplete)',
    Component: PReactSelect,
    path: 'react-select',
    description: '',
    success: false,
  },
];

export default CommonPageInfo;
