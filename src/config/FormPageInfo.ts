import FormGuideBasic from '@/components/guide/form/FormGuideBasic';
import FormGuideStoreUse from '@/components/guide/form/FormGuideStoreUse';

const FormPageInfo: any = {};

FormPageInfo.list = [
  {
    title: 'form basic',
    Component: FormGuideBasic,
    path: 'FormGuideBasic',
    moduleDirectory: 'form',
    description: '',
    success: false,
  },
  {
    title: 'form store 연동',
    Component: FormGuideStoreUse,
    path: 'FormGuideStoreUse',
    moduleDirectory: 'form',
    description: '',
    success: false,
  },
];

export default FormPageInfo;
