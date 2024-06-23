import PReactSelect from '@/components/publish/common/PReactSelect';
import PTestSample from '@/components/publish/common/PTestSample';

const CommonPageInfo: any = {};

CommonPageInfo.list = [
  {
    title: 'test 샘플',
    component: PTestSample,
    url: '/sample',
    description:
      '1.이 페이지는 PSideBar, PTopHeader 포함하고 있지 않은 레이아웃 테스트용 페이지로 가운데 내용은 무관한 페이지입니다.\n2.최상단, 좌측 메뉴를 반응형으로 확인하기 위한 페이지입니다.\n3.캡쳐된 화면은 최상단 좌측 메뉴(=) 아이콘을 클릭해서 접히는 방식으로 구성되어있는데 모바일 화면일 경우에는 왼쪽 메뉴는 사라지고 최상단 좌측에 메뉴 아이콘를 누르면 메뉴가 아래로 펼쳐지는 구조로 가는게 어떨까 합니다.이건 우선 순위가 낮습니다. 작업하실때 같이 고민하는게 좋을 것 같아서 설명으로 남겨요\n4.메뉴는 3단을 max라고 가정할게요(이것도 당장 고민이 너무 많이 들어가면 2단계로 해주시고 차후에 좀 봐주세요. 스크립트는 필요없고 현재 메뉴가 펼쳐져 있는 않펼쳐져 있는지를 구분하기 위한 아이콘이 필요해 보여요.\n5.캡쳐화면에는 존재하는데 기획서에는 표기가 않되어있어서 현재 페이지를 식별할 수 있는 라벨 영역이 필요함(캡쳐화면에는 최상단 text가 바뀌는 구조로 되어있음)\n6.기본 레이아웃 페이지라는 가정하에 로고 이미지, 다크모드 on/off 아이콘(화이트/블랙 테마 변경), 로그아웃 메뉴(=), 사이드 각 메뉴가 펼쳐졌는지 접혔는지 여부 : 5개의 아이콘 필요',
    success: false,
  },
  {
    title: 'autocomplete 샘플',
    component: PReactSelect,
    url: '/sample-react-select',
    description: '',
    success: true,
  },
];

export default CommonPageInfo;
