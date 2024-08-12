import PBasicTable1 from '@/components/publish/common/PBasicTable1';
import PBasicTable2 from '@/components/publish/common/PBasicTable2';
import PBasicForm1 from '@/components/publish/common/PBasicForm1';
import PBasicForm2 from '@/components/publish/common/PBasicForm2';
import PFileForm from '@/components/publish/common/PFileForm';
import Table from '@/components/publish/common/Table';
import PTableCustomColumn from '@/components/publish/common/PTableCustomColumn';

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
  {
    title: 'form 패턴2',
    Component: PBasicForm2,
    path: 'PBasicForm2',
    description: '',
    success: false,
  },
  {
    title: '파일폼',
    Component: PFileForm,
    path: 'PFileForm',
    description: '',
    success: false,
  },
  {
    title: '테이블&버튼',
    Component: Table,
    path: 'Table',
    description: '',
    success: false,
  },
  {
    title: '테이블 cell custom column',
    Component: PTableCustomColumn,
    path: 'PTableCustomColumn',
    description: '',
    success: false,
  },
];

export default CommonPageInfo;
