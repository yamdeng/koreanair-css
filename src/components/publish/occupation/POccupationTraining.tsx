import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function POccupationTraining() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  return (
    <>
      <div className="conts-title">
        <h2>중대재해대응훈련 </h2>
      </div>
      {/*검색영역 */}
      <div className="TopButton-area">
        <div className="boxForm">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AntSelect
                  id="select1"
                  style={{ width: '100%' }}
                  className="label-select"
                  status=""
                  options={[
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
                  ]}
                />
                <label className="f-label" htmlFor="select1">
                  부문 {/*<span className="required">*</span>*/}
                </label>
                {/*<span className="errorText">auto complete error message</span>*/}
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                <input
                  id="firstInput1"
                  type="text"
                  className="form-tag"
                  name="title"
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                />
                <label className="f-label" htmlFor="firstInput1">
                  부서 {/*<span className="required">*</span>*/}
                </label>
                <button className="sch-btnClear"></button>
                <button type="button" className="icon-sch"></button>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AntSelect
                  id="select1"
                  style={{ width: '100%' }}
                  className="label-select"
                  status=""
                  options={[
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
                  ]}
                />
                <label className="f-label" htmlFor="select1">
                  재난유형
                  {/*<span className="required">*</span>*/}
                </label>
                {/*<span className="errorText">auto complete error message</span>*/}
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group form-glow">
                <div className="df">
                  <div className="date1">
                    <DatePicker status="" id="date1" className="label-picker" placeholder="" /> {/* status="error" */}
                    <label className="f-label" htmlFor="date1">
                      훈련실시기간 <span className="required"></span>
                    </label>
                    {/*<span className="errorText">date1 error</span>*/}
                  </div>
                  <span className="unt">~</span>
                  <div className="date2">
                    <DatePicker status="" id="date2" className="label-picker" placeholder="" /> {/* status="error" */}
                    <label className="f-label" htmlFor="date2">
                      date1-2 <span className="required"></span>
                    </label>
                    {/*<span className="errorText">date2 error</span>*/}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid100">
              <div className="form-group wid100">
                <input
                  id="firstInput3"
                  type="text"
                  className="form-tag"
                  name="title"
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                />
                <label className="f-label" htmlFor="firstInput3">
                  훈련명 {/*<span className="errorText">date2 error</span>*/}
                </label>
                <button className="btnClear"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className=""></div>
      {/*//그리드영역 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          등록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationTraining;
