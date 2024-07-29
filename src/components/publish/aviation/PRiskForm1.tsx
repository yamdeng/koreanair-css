import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function PRiskForm1() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  return (
    <>
      <div className="conts-title">
        <h2>조사보고서</h2>
        <div className="btn-area">
          <button type="button" name="button" className="btn-sm btn_text btn-lightblue">
            조회
          </button>
          <button type="button" name="button" className="btn-sm btn_text btn-lightblue">
            신규
          </button>
          <button type="button" name="button" className="btn-sm btn_text btn-lightblue">
            초기화
          </button>
        </div>
      </div>

      {/*검색영역 */}
      <div className="TopButton-area">
        {/*아코디언 - 펴기 버튼일때 btn-fold명 옆에 open붙이기  */}
        <button type="button" name="button" className="btn-fold"></button>

        <div className="boxForm">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                <input
                  id="firstInput"
                  type="text"
                  className="form-tag error"
                  name="title"
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                />
                {/**/}
                <label className="f-label" htmlFor="firstInput">
                  Sbject <span className="required">*</span>
                </label>
                {/*<span className="errorText">error message</span>*/}
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
                  Status <span className="required">*</span>
                </label>
                {/*<span className="errorText">auto complete error message</span>*/}
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell ">
              <div className="form-group wid100">
                <AntSelect
                  id="select2"
                  style={{ width: '100%' }}
                  className="label-select"
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
                <label className="f-label" htmlFor="select2">
                  Event Date <span className="required"></span>
                </label>
                {/*<span className="errorText">auto complete error message</span>*/}
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group form-glow">
                <div className="df">
                  <div className="date1">
                    <DatePicker status="" id="date1" className="label-picker" placeholder="" /> {/* status="error" */}
                    <label className="f-label" htmlFor="date1">
                      date1-1 <span className="required"></span>
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
          </div>
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                {/*Event Class */}
                <AntSelect
                  id="select3"
                  style={{ width: '100%' }}
                  className="label-select"
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
                <label className="f-label" htmlFor="select3">
                  Event Class <span className="required"></span>
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
                  발생공항 <span className="required">*</span>
                </label>
                <button type="button" className="icon-sch"></button>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                {/*발생단계 */}
                <AntSelect
                  id="select4"
                  style={{ width: '100%' }}
                  className="label-select"
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
                <label className="f-label" htmlFor="select4">
                  발생단계 <span className="required"></span>
                </label>
                {/*<span className="errorText">auto complete error message</span>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      <div className="Report-process">
        <ol className="Report-process-list">
          <li className="Report-process-item">작성</li>
          <li className="Report-process-item">작성</li>
        </ol>
      </div>

      {/*그리드영역 */}
      <div className="">
        <AppTable rowData={rowData} columns={columns} />
      </div>
      {/*//그리드영역 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button className="btn_text text_color_neutral-10 btn_confirm">출력</button>
        <button className="btn_text text_color_neutral-10 btn_confirm">저장</button>
        <button className="btn_text text_color_neutral-10 btn_confirm">제출</button>
        <button className="btn_text text_color_neutral-10 btn_confirm">목록</button>
      </div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default PRiskForm1;
