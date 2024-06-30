import TableGuideBasic from '@/components/guide/table/TableGuideBasic';
import TableGuidePagination from '@/components/guide/table/TableGuidePagination';

const TablePageInfo: any = {};

TablePageInfo.list = [
  {
    title: 'table basic',
    Component: TableGuideBasic,
    path: 'TableGuideBasic',
    moduleDirectory: 'table',
    description: '',
    success: false,
  },
  {
    title: 'table pagination(client)',
    Component: TableGuidePagination,
    path: 'TableGuidePagination',
    moduleDirectory: 'table',
    description: '',
    success: false,
  },
];

export default TablePageInfo;
