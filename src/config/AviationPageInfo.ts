import PAviationPortal1 from '@/components/publish/aviation/PAviationPortal1';
import PReportForm1 from '@/components/publish/aviation/PReportForm1';

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
    title: 'PReportForm1',
    Component: PReportForm1,
    path: 'PReportForm1',
    description: '',
    success: false,
  },
];

export default AviationPageInfo;
