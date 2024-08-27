import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import { useState } from 'react';

function PRiskEdit() {
  const [inputValue, setInputValue] = useState('');
  const [firstExpaned, setFirstExpaned] = useState(true);
  const [secondExpaned, setSecondExpaned] = useState(true);
  const [thirdExpaned, setThirdExpaned] = useState(true);
  const [fourExpaned, setFourExpaned] = useState(true);
  const [fiveExpaned, setFiveExpaned] = useState(true);
  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전위험관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전조사</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">조사보고서</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2 className="reportview">
          보고서 번호
          <span>
            <a href="javascript:void(0);">ASR-100308</a>
          </span>
        </h2>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppTextInput label="subject" required />
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}
      <div className="info-wrap toggle">
        <dl className="{firstExpaned ? 'tg-item active' : 'tg-item'}">
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt onClick={() => setFirstExpaned(!firstExpaned)}>
            <button type="button" className="btn-tg">
              발생정보<span className={firstExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell">
                      <div className="form-group wid20">
                        <div className="date1">
                          <AppDatePicker label="발생일/시간(UTC)" required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생단계 */}
                        <AppSelect label="Event Class" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="Event Type" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생공항 */}
                        <AppAutoComplete label="발생공항" required disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label={'발생단계'} required />
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
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50 ">
                      <div className="form-group wid100">
                        {/*발생위치 */}
                        <AppTextInput
                          inputType="text"
                          placeholder=""
                          label="발생위치"
                          toolTipMessage="자유형식으로 입력가능
                          예)Waypoint, 이륙 후3시간 경과 시점 등"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid50">
                        <span className="txt">참고문서번호</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" checked />
                            <span>YES</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
        <dl className={secondExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setSecondExpaned(!secondExpaned)}>
            <button type="button" className="btn-tg">
              비행정보<span className={secondExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: secondExpaned ? '' : 'none' }}>
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
                      <div className="group-box-wrap wid100">
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

      {/* 하단버튼영역 */}
      <div className="">하단버튼영역</div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default PRiskEdit;
