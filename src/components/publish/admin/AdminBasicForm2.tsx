import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';

function AdminBasicForm2() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="conts-title">
        <h2>Title Form list</h2>
      </div>
      {/*검색영역 상단일경우 */}
      <p>검색영역일경우</p>
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100 mr5">
              {/*error일 경우 error 클래스명 추가*/}
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
                2개일경우 <span className="required">*</span>
              </label>
              <span className="errorText">error message</span>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AntSelect
                className="wid100"
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
            </div>
          </div>
        </div>
        <div className="form-table">
          <div className="form-cell ">
            <div className="form-group wid100">
              <AntSelect
                className="wid100"
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
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group form-glow">
              <div className="df">
                <div>
                  <DatePicker status="" /> {/* status="error" */}
                </div>
                <span className="unt">~</span>
                <div>
                  <DatePicker status="" />
                  {/* <TimePicker minuteStep={15} secondStep={10} hourStep={1} status="error" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100 mr5">
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
            </div>
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

      <p>toggle</p>
      <div className="info-wrap toggle">
        <dl className="tg-item active">
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt>
            <button type="button" className="btn-tg">
              발생정보
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">내용</div>
          </dd>
        </dl>
        <dl className="tg-item">
          <dt>
            <button type="button" className="btn-tg">
              비행정보
            </button>
          </dt>
        </dl>
      </div>
    </>
  );
}

export default AdminBasicForm2;
