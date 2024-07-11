import AdminBasicList from '@/components/publish/admin/AdminBasicList';
import AdminBasicForm from '@/components/publish/admin/AdminBasicForm';

const AdminPageInfo: any = {};

AdminPageInfo.list = [
  {
    title: '기본 테이블',
    Component: AdminBasicList,
    path: 'basic-list',
    description: '',
    success: false,
  },
  {
    title: '기본 폼',
    Component: AdminBasicForm,
    path: 'basic-form',
    description: '',
    success: false,
  },
];

export default AdminPageInfo;
