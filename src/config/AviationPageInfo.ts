import PAviationPortal1 from '@/components/publish/aviation/PAviationPortal1';
import PRiskForm1 from '@/components/publish/aviation/PRiskForm1';
import PRiskForm2 from '@/components/publish/aviation/PRiskForm2';

const AviationPageInfo: any = {};

AviationPageInfo.list = [
  {
    title: '항공안전 포탈',
    Component: PAviationPortal1,
    path: 'PAviationPortal1',
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
  {
    title: '안전위험관리>안전조사-조사보고서 신규',
    Component: PRiskForm2,
    path: 'PRiskForm2',
    description: '',
    success: false,
  },
];

export default AviationPageInfo;
