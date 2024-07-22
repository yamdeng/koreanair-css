import PAviationPortal1 from '@/components/publish/aviation/PAviationPortal1';
import PRiskForm1 from '@/components/publish/aviation/PRiskForm1';

const AviationPageInfo: any = {};

AviationPageInfo.list = [
  {
    title: '항공안전 포탈',
    Component: PAviationPortal1,
    path: 'portal1',
    description: '',
    success: false,
  },
  {
    title: '안전위험관리>안전조사-조사보고서',
    Component: PRiskForm1,
    path: 'PRiskForm1',
    description: '',
    success: false,
  },
];

export default AviationPageInfo;
