import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { useState } from 'react';
import AppDatePicker from '@/components/common/AppDatePicker';

function AdminBasicList() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;

  return (
    <>
      <div className="conts-title">
        <h2>타이틀</h2>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
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
                <label className="f-label" htmlFor="firstInput">
                  Sbject <span className="required">*</span>
                </label>
                <button className="btnClear"></button>
                {/*<span className="errorText">error message</span>*/}
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect
                  id="select1"
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
                <label className="f-label" htmlFor="select1">
                  Sbject <span className="required">*</span>
                </label>
                {/*<span className="errorText">error message</span>*/}
              </div>
            </div>
          </div>

          <div className="form-table">
            <div className="form-cell ">
              <div className="form-group wid100">
                <AppSelect
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
                    <AppDatePicker status="" id="date1" className="label-picker" placeholder="" />{' '}
                    {/* status="error" */}
                    <label className="f-label" htmlFor="date1">
                      date1-1 <span className="required">*</span>
                    </label>
                    {/*<span className="errorText">date1 error</span>*/}
                  </div>
                  <span className="unt">~</span>
                  <div className="date2">
                    <AppDatePicker status="" id="date2" className="label-picker" placeholder="" />{' '}
                    {/* status="error" */}
                    <label className="f-label" htmlFor="date2">
                      date1-2 <span className="required">*</span>
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
                <input
                  id="firstInput2"
                  type="text"
                  className="form-tag"
                  name="title"
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                />
                <label className="f-label" htmlFor="firstInput2">
                  장비번호 <span className="required">*</span>
                </label>
                <button className="btnClear"></button>
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
                  부서명
                </label>
                <button className="sch-btnClear"></button>
                <button type="button" className="icon-sch"></button>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                <input
                  id="firstInput4"
                  type="text"
                  className="form-tag"
                  name="title"
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                />
                <label className="f-label" htmlFor="firstInput4">
                  모델명 <span className="required">*</span>
                </label>
                <button className="btnClear"></button>
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

      <AppTable rowData={rowData} columns={columns} />
    </>
  );
}

export default AdminBasicList;
