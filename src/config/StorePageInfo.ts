import PAviationPortal1 from '@/components/publish/aviation/PAviationPortal1';
import PAviationPortal2 from '@/components/publish/aviation/PAviationPortal2';

const StorePageInfo: any = {};

StorePageInfo.list = [
  {
    title: 'store1',
    Component: PAviationPortal1,
    path: 'PAviationPortal1',
    description: '',
    success: false,
  },
  {
    title: 'store2',
    Component: PAviationPortal2,
    path: 'PAviationPortal2',
    description: '',
    success: false,
  },
];

export default StorePageInfo;
