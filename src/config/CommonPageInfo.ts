import PFileAttachList from '@/components/publish/common/PFileAttachList';
import PHomePortal1 from '@/components/publish/common/PHomePortal1';
import PTableCustomColumn from '@/components/publish/common/PTableCustomColumn';
import PTree from '@/components/publish/common/PTree';

const CommonPageInfo: any = {};

CommonPageInfo.list = [
  {
    title: '홈포탈',
    Component: PHomePortal1,
    path: 'PHomePortal1',
    description: '',
    success: false,
  },
  {
    title: '파일첨부',
    Component: PFileAttachList,
    path: 'PFileAttachList',
    description: '',
    success: false,
  },
  {
    title: '트리',
    Component: PTree,
    path: 'PTree',
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
