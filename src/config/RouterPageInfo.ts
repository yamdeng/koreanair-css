import RouterGuideBasic from '@/components/guide/router/RouterGuideBasic';
import RouterGuideQueryString from '@/components/guide/router/RouterGuideQueryString';
import RouterGuidePathParam from '@/components/guide/router/RouterGuidePathParam';

const RouterPageInfo: any = {};

RouterPageInfo.list = [
  {
    title: 'router basic',
    Component: RouterGuideBasic,
    path: 'RouterGuideBasic',
    description: '',
    success: false,
  },
  {
    title: 'router 쿼리스트링 사용',
    Component: RouterGuideQueryString,
    path: 'RouterGuideQueryString',
    description: '',
    success: false,
  },
  {
    title: 'router {id} path 사용법',
    Component: RouterGuidePathParam,
    path: 'RouterGuidePathParam',
    description: '',
    success: false,
  },
];

export default RouterPageInfo;
