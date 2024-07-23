import AdminBasicList from '@/components/publish/admin/AdminBasicList';
import AdminBasicEdit from '@/components/publish/admin/AdminBasicEdit';
import AdminBasicForm2 from '@/components/publish/admin/AdminBasicForm2';
import AdminBasicFormOther from '@/components/publish/admin/AdminBasicFormOther';

const AdminPageInfo: any = {};

AdminPageInfo.list = [
  {
    title: '레이아웃-리스트',
    Component: AdminBasicList,
    path: 'AdminBasicList',
    description: '',
    success: false,
  },
  {
    title: '레이아웃-등록',
    Component: AdminBasicEdit,
    path: 'AdminBasicEdit',
    description: '',
    success: false,
  },
  {
    title: '기본 폼',
    Component: AdminBasicForm2,
    path: 'AdminBasicForm2',
    description: '',
    success: false,
  },
  {
    title: 'AdminBasicFormOther',
    Component: AdminBasicFormOther,
    path: 'AdminBasicFormOther',
    description: '',
    success: false,
  },
];

export default AdminPageInfo;
