import PAviationPortal1 from '@/components/publish/aviation/PAviationPortal1';
import PAviationPortal2 from '@/components/publish/aviation/PAviationPortal2';

const AviationPageInfo: any = {};

AviationPageInfo.list = [
  {
    title: '항공안전 포탈1',
    Component: PAviationPortal1,
    path: 'portal1',
    description: '',
    success: false,
  },
  {
    title: '항공안전 포탈2',
    Component: PAviationPortal2,
    path: 'portal2',
    description: '',
    success: false,
  },
];

export default AviationPageInfo;
