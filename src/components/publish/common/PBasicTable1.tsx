import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { useState } from 'react';
import AppSearchnput from '@/components/common/AppSearchnput';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppRangeDatePicker from '@/components/common/AppRangeDatePicker';
import AppTimePicker from '@/components/common/AppTimePicker';

/*

  TODO
   1.반응형이 잘되는지 확인 필요
   2.접기 펼치기를 여기에 반영 : 공통 부분 이라
    -기존에 해놓은 버튼이 너무큼
   3.label background color case를 조사해서 반영할 필요가 있음
    -바탕이 하얀색일 경우 : 바탕이 white인 경우와 gray인 경우 같이 고려
    -바탕이 회색일 경우 : disabled일 경우 스타일과 같이 고려해야 함
   4.<AppTable/>의 pageSize <Select/> 반영했던 스타일이 맞는지 확인
   5.component.scss 않쓰는거면 삭제

*/

const options = [
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'Yiminghe',
    label: 'yiminghe',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
];

function PBasicTable1() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [selectValue2, setSelectValue2] = useState('');
  const [firstDateValue, setFirstDateValue] = useState('');
  const [firstDateRangeValue, setFirstDateRangeValue] = useState(['', '']);
  const [firstTimeValue, setFirstTimeValue] = useState('22:25:50');
  const rowData = getAllData();
  const columns = testColumnInfos;

  const changeSelect = (selectValue) => {
    setSelectValue(selectValue);
  };

  return (
    <>
      <div className="conts-title">
        <h2>검색 input case 1</h2>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
        {/* 1행 start */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSearchnput
                value={inputValue}
                label="검색 input(엔터키)"
                onChange={(value) => {
                  setInputValue(value);
                }}
                search={() => {
                  // TODO : 검색 핸들러를 지정해주세요.
                  alert('검색 핸들러');
                }}
              />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect
                label={'select(전체적용)'}
                applyAllSelect
                value={selectValue}
                onChange={changeSelect}
                options={options}
              />
            </div>
          </div>
        </div>
        {/* 1행 end */}

        {/* 2행 start */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput
                value={inputValue2}
                label="일반 text-input"
                onChange={(value) => {
                  setInputValue2(value);
                }}
              />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect
                label={'일반 select'}
                value={selectValue2}
                onChange={(value) => setSelectValue2(value)}
                options={options}
              />
            </div>
          </div>
        </div>
        {/* 2행 end */}

        {/* 3행 start */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppDatePicker label={'date'} onChange={(value) => setFirstDateValue(value)} value={firstDateValue} />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppRangeDatePicker
                label={'range-date'}
                onChange={(value) => setFirstDateRangeValue(value)}
                value={firstDateRangeValue}
                showNow={false}
              />
            </div>
          </div>
        </div>
        {/* 3행 end */}

        {/* 4행 start */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTimePicker
                label={'time'}
                onChange={(value) => setFirstTimeValue(value)}
                value={firstTimeValue}
                showNow={true}
                needConfirm={true}
              />
            </div>
          </div>
          <div className="form-cell wid50">
            {/* start-date ~ end-date */}
            <div className="form-group form-glow">
              <div className="df">
                <div className="date1">
                  <AppDatePicker
                    label={'start-date'}
                    onChange={(value) => setFirstDateValue(value)}
                    value={firstDateValue}
                  />
                </div>
                <span className="unt">~</span>
                <div className="date2">
                  <AppDatePicker
                    label={'end-date'}
                    onChange={(value) => setFirstDateValue(value)}
                    value={firstDateValue}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-area">
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            조회
          </button>
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            초기화
          </button>
        </div>
      </div>
      {/* //검색영역 */}

      <AppTable rowData={rowData} columns={columns} />

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          신규
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default PBasicTable1;
