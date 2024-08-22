import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppRangeDatePicker from '@/components/common/AppRangeDatePicker';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppAutoComplete from '@/components/common/AppAutoComplete';

function POccupationMu2P9edit() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;

  const customButtons = [
    {
      title: '행추가',
      onClick: () => {
        alert('행추가');
      },
    },
    {
      title: '전체삭제',
      onClick: () => {
        alert('전체삭제');
      },
    },
  ];

  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전경영</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">서명지 관리</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>서명지 관리</h2>
      </div>
      {/* 입력영역 */}
      <div className="info-wrap toggle">
        <dl className="tg-item active">
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt>
            <button type="button" className="btn-tg">
              교육 정보<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="본부" required disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="부서" required disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="팀" required disabled />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="그룹" required disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="반/섹션" required disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="작성자" required disabled />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="교육유형" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppDatePicker label="교육일자" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group form-glow">
                        <div className="df">
                          <div className="date3 wid100">
                            <AppTimePicker label="교육시작시간" />
                          </div>
                          <span className="unt">~</span>
                          <div className="date3 wid100">
                            <AppTimePicker label="교육시작시간2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="교육인원" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="교육장소" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="작업내용" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <textarea
                          id="testArea1"
                          className="form-tag custom_textarea"
                          style={{ width: '100%' }}
                          name="testArea1"
                          value={inputValue}
                          onChange={(event) => {
                            setInputValue(event.target.value);
                          }}
                        />
                        <label className="f-label" htmlFor="testArea1">
                          교육내용
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
      </div>
      {/*//입력영역*/}
      {/*그리드영역 */}
      <div className="mt-30">
        <h3 className="table-tit">강사 정보</h3>
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
      </div>
      <div className="mt-30">
        <h3 className="table-tit">입과자 정보</h3>
        그리드영역
      </div>
      <div className="mt-30">
        <h3 className="table-tit">결재자 정보</h3>
        그리드영역
      </div>
      {/*//그리드영역 */}
      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          승인
        </button>
        <button type="button" name="button" className="btn_text btn-del">
          취소
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationMu2P9edit;
