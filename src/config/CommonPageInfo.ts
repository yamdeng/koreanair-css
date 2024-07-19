import PBasicLayout from '@/components/publish/common/PBasicLayout';
import PHomePortal1 from '@/components/publish/common/PHomePortal1';
import PFileAttachList from '@/components/publish/common/PFileAttachList';
import PTree from '@/components/publish/common/PTree';
import PTableCustomColumn from '@/components/publish/common/PTableCustomColumn';

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
    description: '',
    success: false,
  },
  {
    title: '파일첨부',
    Component: PFileAttachList,
    path: 'file',
    description: '',
    success: false,
  },
  {
    title: '트리',
    Component: PTree,
    path: 'tree',
    description: '',
    success: false,
  },
  {
    title: '테이블 커스텀 컬럼',
    Component: PTableCustomColumn,
    path: 'PTableCustomColumn',
    description: '',
    success: false,
  },
];

export default CommonPageInfo;
