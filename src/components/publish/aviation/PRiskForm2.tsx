import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';
import { useState } from 'react';

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
              <AppSearchInput label="보고서검색" />
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
                          <AppDatePicker label="발생일/시간(UTC)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생단계 */}
                        <AppSelect label="발생단계" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="Event Type" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생공항 */}
                        <AppSearchInput label="발생공항" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label={'발생단계'} />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*기상조건 */}
                        <AppTextInput label="기상조건" />
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
                        <AppTextInput label="발생위치" />
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
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell">
                      <div className="form-group">
                        <div className="date2">
                          <AppDatePicker label="출발일자(UTC)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label={'event'} />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label={'event type'} />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생공항 */}
                        <AppSearchInput label="발생공항" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생단계 */}
                        <AppSelect label={'발생단계'} />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*기상조건 */}
                        <AppTextInput label="기상조건" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
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
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생위치 */}
                        <AppSearchInput label="발생위치" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                              <AppSelect
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
                                  <AppDatePicker status="" id="date1" className="label-picker" placeholder="" />
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
                              <AppSelect
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
