import AdminBasicList from '@/components/publish/admin/AdminBasicList';
import AdminBasicEdit from '@/components/publish/admin/AdminBasicEdit';
import AdminBasicView from '@/components/publish/admin/AdminBasicView';
import AdminUseView from '@/components/publish/admin/AdminUseView';
import AdminBasicForm2 from '@/components/publish/admin/AdminBasicForm2';
import AdminBasicFormOther from '@/components/publish/admin/AdminBasicFormOther';
import AdminDeptSearch from '@/components/publish/admin/AdminDeptSearch';
import Adminpage01 from '@/components/publish/admin/Adminpage01';
import AdminCodeManage from '@/components/publish/admin/AdminCodeManage';
Adminpage01;

const AdminPageInfo: any = {};

AdminPageInfo.list = [
  {
    title: '레이아웃-리스트',
    Component: AdminBasicList,
    path: 'AdminBasicList',
    description: '',
    success: true,
  },
  {
    title: '레이아웃-등록',
    Component: AdminBasicEdit,
    path: 'AdminBasicEdit',
    description: '',
    success: true,
  },
  {
    title: '레이아웃-상세',
    Component: AdminBasicView,
    path: 'AdminBasicView',
    description: '',
    success: true,
  },
  {
    title: '사용자상세',
    Component: AdminUseView,
    path: 'AdminUseView',
    description: '',
    success: true,
  },
  {
    title: '기본 폼',
    Component: AdminBasicForm2,
    path: 'AdminBasicForm2',
    description: '',
    success: true,
  },
  {
    title: 'AdminBasicFormOther',
    Component: AdminBasicFormOther,
    path: 'AdminBasicFormOther',
    description: '',
    success: false,
  },
  {
    title: '가상그룹권한관리',
    Component: AdminDeptSearch,
    path: 'AdminDeptSearch',
    description: '',
    success: true,
  },
  {
    title: '부서관리',
    Component: Adminpage01,
    path: 'Adminpage01',
    description: '',
    success: true,
  },
  {
    title: '코드관리',
    Component: AdminCodeManage,
    path: 'AdminCodeManage',
    description: '',
    success: true,
  },
];

export default AdminPageInfo;
