import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';

function AdminBasicList() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;

  return (
    <>
      <div className="conts-title">
        <h2>타이틀</h2>
        <div className="btn-area">
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            조회
          </button>
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            신규
          </button>
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            초기화
          </button>
        </div>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <span className="form-group wid100 mr5 ">
              <input
                type="text"
                className="form-tag error"
                name="title"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
              <label className="f-label">
                Sbject <span className="required">*</span>
              </label>
              <span className="errorText">error message</span>
            </span>
          </div>
          <div className="form-cell wid50">
            <span className="form-group wid100">
              <AntSelect
                style={{ width: '100%' }}
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
            </span>
          </div>
        </div>

        <div className="form-table">
          <div className="form-cell ">
            <span className="form-group wid100">
              <span className="form-group wid100">
                <AntSelect
                  style={{ width: '100%' }}
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
              </span>
            </span>
          </div>
          <div className="form-cell wid50">
            <span className="form-group form-glow">
              <div className="df">
                <div>
                  <DatePicker status="" /> {/* status="error" */}
                </div>
                <span className="util">~</span>
                <div>
                  <DatePicker status="" />
                  {/* <TimePicker minuteStep={15} secondStep={10} hourStep={1} status="error" /> */}
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className="form-table">
          <div className="form-cell wid50">
            <span className="form-group wid100 mr5">
              <input
                type="text"
                className="form-tag"
                name="title"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
              <label className="f-label">
                장비번호 <span className="required">*</span>
              </label>
            </span>
          </div>
          <div className="form-cell wid50">
            <span className="form-group wid100 mr5">
              <input
                type="text"
                className="form-tag"
                name="title"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
              <label className="f-label">
                장비명 <span className="required">*</span>
              </label>
            </span>
          </div>
          <div className="form-cell wid50">
            <span className="form-group wid100 mr5">
              <input
                type="text"
                className="form-tag"
                name="title"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
              <label className="f-label">
                모델명 <span className="required">*</span>
              </label>
            </span>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      <AppTable rowData={rowData} columns={columns} />
    </>
  );
}

export default AdminBasicList;
