import PBasicTable1 from '@/components/publish/common/PBasicTable1';
import PBasicTable2 from '@/components/publish/common/PBasicTable2';
import PBasicForm1 from '@/components/publish/common/PBasicForm1';

const CommonPageInfo: any = {};

CommonPageInfo.list = [
  {
    title: '검색-table 패턴1',
    Component: PBasicTable1,
    path: 'PBasicTable1',
    description: '',
    success: false,
  },
  {
    title: '검색-table 패턴2',
    Component: PBasicTable2,
    path: 'PBasicTable2',
    description: '',
    success: false,
  },
  {
    title: 'form 패턴1',
    Component: PBasicForm1,
    path: 'PBasicForm1',
    description: '',
    success: false,
  },
];

export default CommonPageInfo;
