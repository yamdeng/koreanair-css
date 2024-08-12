import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { useState } from 'react';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppRangeDatePicker from '@/components/common/AppRangeDatePicker';
import AppTimePicker from '@/components/common/AppTimePicker';

/*

  TODO
   1.radio-box : 디자인 확인
    -가능하면 목록, 폼에서 동일하게 적용하는 방법이 존재해야 함
    -추가로 라벨을 검색 영역에서는 라벨이 필요없는 경우도 존재하는지 화면 기획서 확인 필요
    #.기존에서 적용한 case에서 css 선택자를 통일할 필요가 있음

   2.checkbox : 디자인 확인
    -검색에서 체크박스는 보통 하나가 하나의 그룹이므로 라벨이 필요없기는 함
    -단, 폼 영역에서 체크박스 사용시 라벨이 필요한지 화면 기획서 확인 필요

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

function PBasicTable2() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [selectValue2, setSelectValue2] = useState('');
  const [firstDateValue, setFirstDateValue] = useState('');
  const [firstDateRangeValue, setFirstDateRangeValue] = useState(['', '']);
  const [firstTimeValue, setFirstTimeValue] = useState('22:25:50');
  const rowData = getAllData();
  const columns = testColumnInfos;

  const customButtons = [
    {
      title: '행추가',
      onClick: () => {
        alert('행추가');
      },
    },
    {
      title: '전체삭제',
      onClick: () => {
        alert('전체삭제');
      },
    },
  ];

  const changeSelect = (selectValue) => {
    setSelectValue(selectValue);
  };

  return (
    <>
      <div className="conts-title">
        <h2>검색 input case 2 </h2>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          {/* 1행 start */}
          <div className="form-table">
            {/* 라벨이 없는 경우 : radio */}
            <div className="form-cell wid50">
              <div className="group-box-wrap wid100">
                <div className="radio-wrap border-no">
                  <label>
                    <input type="radio" checked />
                    <span>체크</span>
                  </label>
                  <label>
                    <input type="radio" />
                    <span>미체크</span>
                  </label>
                </div>
              </div>
            </div>
            {/* 라벨이 있는 경우 : radio */}
            <div className="form-cell wid50">
              <div className="group-box-wrap wid100">
                <span className="txt">
                  SPI 여부<span className="required">*</span>
                </span>
                <div className="radio-wrap error">
                  <label>
                    <input type="radio" checked />
                    <span>YES</span>
                  </label>
                  <label>
                    <input type="radio" />
                    <span>NO</span>
                  </label>
                </div>
                <span className="errorText">error</span>
              </div>
            </div>
          </div>
          {/* 1행 end */}

          {/* 2행 start */}
          <div className="form-table">
            {/* 라벨이 없는 경우 : checkbox */}
            <div className="form-cell wid50">
              <div className="group-box-wrap wid100">
                <div className="radio-wrap border-no">
                  <label>
                    <input type="checkbox" checked />
                    <span>체크박스</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>미체크</span>
                  </label>
                </div>
              </div>
            </div>
            {/* 라벨이 있는 경우 : checkbox */}
            <div className="form-cell wid50">
              <div className="group-box-wrap wid100">
                <span className="txt">
                  타이틀<span className="required">*</span>
                </span>
                <div className="radio-wrap error">
                  <label>
                    <input type="checkbox" checked />
                    <span>체크박스</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>미체크</span>
                  </label>
                </div>
                <span className="errorText">error</span>
              </div>
            </div>
          </div>
          {/* 2행 end */}

          {/* 3행 start */}
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                <input
                  id="firstInput3"
                  type="text"
                  className="form-tag"
                  name="title"
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                  disabled
                />
                <label className="f-label" htmlFor="firstInput3">
                  사용자
                </label>
                <button className="sch-btnClear"></button>
                <button type="button" className="icon-sch"></button>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                <input
                  id="firstInput3"
                  type="text"
                  className="form-tag"
                  name="title"
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                  disabled
                />
                <label className="f-label" htmlFor="firstInput3">
                  부서
                </label>
                <button className="sch-btnClear"></button>
                <button type="button" className="icon-sch"></button>
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
        {/*__control명 옆에 active  */}
        <button type="button" name="button" className="arrow button _control active">
          <span className="hide">접기</span>
        </button>
      </div>
      {/* //검색영역 */}

      <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />

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

export default PBasicTable2;
