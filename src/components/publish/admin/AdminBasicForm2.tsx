import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';

function AdminBasicForm2() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="conts-title">
        <h2>Title Form list</h2>
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
      {/*검색영역 상단일경우 */}
      <p>검색영역일경우</p>
      <div className="boxForm">
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
                2개일경우 <span className="required">*</span>
              </label>
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
          <div className="form-cell wid100">
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
                한개일경우 <span className="required">*</span>
              </label>
            </span>
          </div>
        </div>
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="radio-wrap">
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
      </div>
      {/* //검색영역 상단일경우 */}
    </>
  );
}

export default AdminBasicForm2;
