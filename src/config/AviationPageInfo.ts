import PAviationPortal1 from '@/components/publish/aviation/PAviationPortal1';
import PRiskForm1 from '@/components/publish/aviation/PRiskForm1';
import PRiskForm2 from '@/components/publish/aviation/PRiskForm2';
import SPIInfo1 from '@/components/publish/aviation/SPIInfo1';
import Checklist1 from '@/components/publish/aviation/Checklist1';
import Taxonomy1 from '@/components/publish/aviation/Taxonomy1';

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
    title: '[03.안전위험관리] 안전조사 > 조사보고서 리스트',
    Component: PRiskForm1,
    path: 'PRiskForm1',
    description: '',
    success: false,
  },
  {
    title: '[03.안전위험관리] 안전조사 > 조사보고서 뷰',
    Component: PRiskForm2,
    path: 'PRiskForm2',
    description: '',
    success: false,
  },
  {
    title: '[04.안전보증] SPI/SPT > 운영 현황> 운항 정보',
    Component: SPIInfo1,
    path: 'SPIInfo1',
    description: '',
    success: false,
  },
  {
    title: '[06.AUDIT] Checklist',
    Component: Checklist1,
    path: 'Checklist1',
    description: '',
    success: true,
  },
  {
    title: '[07.관리자] HAZARD > Taxonomy',
    Component: Taxonomy1,
    path: 'Taxonomy1',
    description: '',
    success: false,
  },
];

export default AviationPageInfo;
