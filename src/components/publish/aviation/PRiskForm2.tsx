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
            <div className="form-group wid100">
              <input
                id="firstInput"
                type="text"
                className="form-tag"
                name="title"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
              <label className="f-label" htmlFor="firstInput">
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
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell">
                      <div className="form-group">
                        <div className="date1">
                          <DatePicker status="" id="date1" className="label-picker" placeholder="" />{' '}
                          {/* status="error" */}
                          <label className="f-label" htmlFor="date1">
                            발생일/시간(UTC) <span className="required">*</span>
                          </label>
                          {/*<span className="errorText">date1 error</span>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생단계 */}
                        <AntSelect
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
                          Event Class <span className="required">*</span>
                        </label>
                        {/*<span className="errorText">auto complete error message</span>*/}
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생단계 */}
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
                          Event Type <span className="required">*</span>
                        </label>
                        {/*<span className="errorText">auto complete error message</span>*/}
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생공항 */}
                        <input
                          id="firstInput4"
                          type="text"
                          className="form-tag"
                          name="title"
                          value={inputValue}
                          onChange={(event) => {
                            setInputValue(event.target.value);
                          }}
                          disabled
                        />
                        <label className="f-label" htmlFor="firstInput4">
                          발생공항 <span className="required">*</span>
                        </label>
                        <button type="button" className="icon-sch"></button>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생단계 */}
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
                          발생단계 <span className="required">*</span>
                        </label>
                        {/*<span className="errorText">auto complete error message</span>*/}
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*기상조건 */}
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
                          기상조건 <span className="required">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="group-box-wrap wid50">
                      <span className="txt">
                        SPI 여부<span className="required">*</span>
                      </span>
                      <div className="radio-wrap">
                        <label>
                          <input type="radio" checked />
                          <span>YES</span>
                        </label>
                        <label>
                          <input type="radio" />
                          <span>NO</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생위치 */}
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
                          발생위치 <span className="required">*</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
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

      {/* toggle 선택되면  열어지면 active붙임
      <div className="info-wrap toggle">
        <dl className="tg-item active">
          
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
                    <div className="list-row">
                      <div className="form-cell wid50">
                        <div className="form-table">
                          <div className="form-cell">
                            <div className="form-group form-glow">
                              <div className="df">
                                <div className="date1">
                                  <DatePicker status="" id="date1" className="label-picker" placeholder="" />
                                  <label className="f-label" htmlFor="date1">
                                    발생일/시간(UTC) <span className="required">*</span>
                                  </label>
                                </div>
                              </div>
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
      </div>*/}

      {/* 하단버튼영역 */}
      <div className="">하단버튼영역</div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default PRiskForm2;
