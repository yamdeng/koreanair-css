import AppSelect from '@/components/common/AppSelect';
import CommonUtil from '@/utils/CommonUtil';
import { useState, useEffect } from 'react';
import ApiService from '@/services/ApiService';
import { getOptions, convertOptionsByCurrentLocale } from '@/services/CodeService';

/*

   #.공통 속성
    -id(string) : 에러발생시 포커스 이동시키기 위한 id
    -name(string) : yup에 등록되는 키값과 동일시키는 것을 추천
    -label(string)  : 라벨(input 상단에 표시되는 라벨)
    -value : 각 컴포넌트 타입에 따라 value 타입이 달라질 수 있음 
    -onChange : 각 컴포넌트 타입에 따라 함수 spec이 달라질 수 있음
    -placeholder : label 속성외의 placeholder를 보여주고 싶을때 사용
    -required : 필수 여부(라벨에 '*' 표시)
    -errorMessage(string) : 에러메시지가 존재시 border가 red로 바뀌고 input 하단에 에러메시지가 표기됨. 메시지 키값을 전달시 해당 키값이 반영됨
    -disabled(boolean)
    -style({}) : react의 style object({}) 형식으로 전달

   #.<AppSelect /> 전용 속성
    -value(string || string[])
    -onChange(string || string[], event)
    -options(object[]) : {[{ label: '라벨', value: '값' }]}
    -isMultiple(boolean) : false(다중선택 여부)
    -applyAllSelect(boolean) : false
    -allValue(string) : 전체 선택시 value 값(applyAllSelect 값이 true인 경우만 반영)
    -allLabel(string)
    -codeGrpId(string) : 코드그룹id

*/
function AppCodeSelect(props) {
  const {
    id = CommonUtil.getUUID(),
    name = '',
    label,
    value,
    onChange,
    placeholder = '',
    required = false,
    errorMessage,
    disabled = false,
    style = { width: '100%' },
    isMultiple = false,
    applyAllSelect = false,
    allValue = '',
    allLabel = 'ALL',
    isRemote = false,
    codeGrpId = '',
    labelOnlyTop = false,
    ...rest
  } = props;

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (codeGrpId) {
      if (isRemote) {
        ApiService.get(`com/code-groups/${codeGrpId}/codes`).then((apiResult) => {
          const data = apiResult.data;
          const result = convertOptionsByCurrentLocale(data);
          setOptions(result);
        });
      } else {
        setOptions(getOptions(codeGrpId));
      }
    }
  }, [isRemote, codeGrpId]);

  return (
    <>
      <AppSelect
        {...rest}
        style={style}
        id={id}
        options={options}
        name={name}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        errorMessage={errorMessage}
        disabled={disabled}
        labelOnlyTop={labelOnlyTop}
        applyAllSelect={applyAllSelect}
        allValue={allValue}
        allLabel={allLabel}
        isMultiple={isMultiple}
      />
    </>
  );
}

export default AppCodeSelect;
