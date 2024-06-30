import StoreGuideBasic from '@/components/guide/store/StoreGuideBasic';
import StoreGuideMultipleStoreUse from '@/components/guide/store/StoreGuideMultipleStoreUse';

const StorePageInfo: any = {};

StorePageInfo.list = [
  {
    title: 'store basic',
    Component: StoreGuideBasic,
    path: 'StoreGuideBasic',
    moduleDirectory: 'store',
    description: '',
    success: false,
  },
  {
    title: '2개 이상의 store 사용',
    Component: StoreGuideMultipleStoreUse,
    path: 'StoreGuideMultipleStoreUse',
    moduleDirectory: 'store',
    description: '',
    success: false,
  },
];

export default StorePageInfo;
