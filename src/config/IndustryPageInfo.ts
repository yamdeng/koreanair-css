import PIndustryPortal1 from '@/components/publish/industry/PIndustryPortal1';
import PIndustryPortal2 from '@/components/publish/industry/PIndustryPortal2';

const IndustryPageInfo: any = {};

IndustryPageInfo.list = [
  {
    title: '산업안전 포탈1',
    Component: PIndustryPortal1,
    path: 'portal1',
    description: '',
    success: false,
  },
  {
    title: '산업안전 포탈2',
    Component: PIndustryPortal2,
    path: 'portal2',
    description: '',
    success: false,
  },
];

export default IndustryPageInfo;
