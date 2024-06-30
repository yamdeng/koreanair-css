import FormGuideBasic from '@/components/guide/form/FormGuideBasic';
import FormGuideStoreUse from '@/components/guide/form/FormGuideStoreUse';

const FormPageInfo: any = {};

FormPageInfo.list = [
  {
    title: 'form basic',
    Component: FormGuideBasic,
    path: 'FormGuideBasic',
    description: '',
    success: false,
  },
  {
    title: 'form store 연동',
    Component: FormGuideStoreUse,
    path: 'FormGuideStoreUse',
    description: '',
    success: false,
  },
];

export default FormPageInfo;
