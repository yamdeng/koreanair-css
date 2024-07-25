import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';

function PRiskForm2() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="conts-title">
        <h2>
          보고서 번호 : <span>20240715(Aa)</span>
        </h2>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
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
                Sbject <span className="required">*</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      <div className="info-wrap toggle">
        <dl className="tg-item active">
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt>
            <button type="button" className="btn-tg">
              발생정보
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <ul className="detail-list">
                  <li className="list">
                    <div className="list-row wid50">
                      <label className="f-label">
                        발생일/시간(UTC) <span className="required">*</span>
                      </label>
                      <div className="cont">
                        <div className="form-table">
                          <div className="form-cell wid50">
                            <div className="form-group wid100">
                              <AntSelect
                                style={{ width: '100%' }}
                                status="error"
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
                              <span className="errorText">data picker error message</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-row wid50">
                      <label className="f-label">
                        Level 1 <span className="required">*</span>
                      </label>
                      <div className="cont">
                        <div className="form-table">
                          <div className="form-cell wid50">
                            <div className="form-group wid100">
                              <AntSelect
                                style={{ width: '100%' }}
                                status="error"
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
                              <span className="errorText">data picker error message</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list">
                    <div className="list-row wid100">
                      <label className="f-label">
                        발생일/시간(UTC) <span className="required">*</span>
                      </label>
                      <div className="cont">
                        <div className="form-table">
                          <div className="form-cell wid50">
                            <div className="form-group wid100">
                              <AntSelect
                                style={{ width: '100%' }}
                                status="error"
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
                              <span className="errorText">data picker error message</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </dd>
        </dl>
        <dl className="tg-item">
          <dt>
            <button type="button" className="btn-tg">
              비행정보
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">dfdfdfdf</div>
          </dd>
        </dl>
      </div>

      {/* 하단버튼영역 */}
      <div className="">하단버튼영역</div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default PRiskForm2;
