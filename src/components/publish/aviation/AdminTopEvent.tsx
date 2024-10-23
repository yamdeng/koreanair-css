import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';

function AdminTopEvent() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: '내보내기',
      onClick: () => {
        alert('내보내기');
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
            <a href="javascript:void(0);">관리자</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">Top 10 Event 관리</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>Top 10 RISK 관리</h2>
      </div>
      {/*탭 */}
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" className="active" data-label="이벤트">
            이벤트
          </a>
          <a href="javascript:void(0);" className="" data-label="Hazard">
            Hazard
          </a>
        </div>
      </div>

      {/*검색영역 */}
      <div className="boxForm top10">
        <div className="form-table">
          <div className="form-cell Risk">
            {' '}
            <div className="flag-tag1">
              <span className="icon-flag1 txt btn-lightblue">기간선택</span>
              <span className="icon-flag1 txt btn-lightblue">전체</span>
              <span className="icon-flag1 txt btn-lightblue">1년</span>
              <span className="icon-flag1 txt btn-lightblue active">3개월</span>
              {/* 선택되는 부분은 class명에 active 표시*/}
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="df">
                <div className="date1">
                  <AppDatePicker label={'작성일'} />
                </div>
                <span className="unt">~</span>
                <div className="date2">
                  <AppDatePicker label={'작성일'} />
                </div>
              </div>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="btn-area">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                재계산
              </button>
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                조회
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/*컨텐츠영역 */}
      <div className="checkbox-wrap">
        <div className="btns-area">
          <button type="button" name="button" className="btn_text btn_confirm text_color_neutral-10">
            저장
          </button>
        </div>
        <div className="checkbox-area">
          <div className="checklist">
            <div className="h3">Top Event List by Risk Level Score</div>
            <div className="listbox">
              <div>
                <table className="toplisk-table">
                  <thead>
                    <tr>
                      <th>
                        <div className="chk-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </th>
                      <th>event명</th>
                      <th>건수</th>
                      <th>낮은심각도</th>
                      <th>높은심각도</th>
                      <th>계산값</th>
                      <th>순서</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="radio-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </td>
                      <td>Gps signal interference</td>
                      <td>1</td>
                      <td>D</td>
                      <td>D</td>
                      <td className="tr">2,048</td>
                      <td>
                        <div className="form-group wid100">
                          <AppTextInput inputType="number" label="" placeholder="1" className="tc" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </td>
                      <td>Gps signal interference</td>
                      <td>211</td>
                      <td>D</td>
                      <td>D</td>
                      <td className="tr">2,048</td>
                      <td>
                        <div className="form-group wid100">
                          <AppTextInput type="number" label="" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </td>
                      <td>Gps signal interference</td>
                      <td>211</td>
                      <td>D</td>
                      <td>D</td>
                      <td className="tr">2,048</td>
                      <td>
                        <div className="form-group wid100">
                          <AppTextInput type="number" label="" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </td>
                      <td>Gps signal interference</td>
                      <td>211</td>
                      <td>D</td>
                      <td>D</td>
                      <td className="tr">2,048</td>
                      <td>
                        <div className="form-group wid100">
                          <AppTextInput type="number" label="" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </td>
                      <td>Gps signal interference</td>
                      <td>211</td>
                      <td>D</td>
                      <td>D</td>
                      <td className="tr">2,048</td>
                      <td>
                        <div className="form-group wid100">
                          <AppTextInput type="number" label="" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="form-cell">
                <div className="chk-wrap">
                  <label>
                    <input type="checkbox" checked />
                    <span className="ck-list">사용</span>
                  </label>
                </div>
              </div>
            </div>
            {/* <div className="listbox">
              <div className="search-list">
                <ul className="list">
                  <li>
                    <div className="form-cell">
                      <div className="chk-wrap">
                        <label>
                          <input type="checkbox" checked />
                          <span className="ck-list">Crew schedule</span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="form-cell">
                      <div className="chk-wrap">
                        <label>
                          <input type="checkbox" />
                          <span className="ck-list">Flap placard speed over</span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="form-cell">
                      <div className="chk-wrap">
                        <label>
                          <input type="checkbox" />
                          <span className="ck-list">Securify irregularity(General)Uh-schedule engine removal</span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="form-cell">
                      <div className="chk-wrap">
                        <label>
                          <input type="checkbox" />
                          <span className="ck-list">Securify irregularity(General)Uh-schedule engine removal</span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="form-cell">
                      <div className="chk-wrap">
                        <label>
                          <input type="checkbox" />
                          <span className="ck-list">Securify irregularity(General)Uh-schedule engine removal</span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="form-cell">
                      <div className="chk-wrap">
                        <label>
                          <input type="checkbox" />
                          <span className="ck-list">Securify irregularity(General)Uh-schedule engine removal</span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="form-cell">
                      <div className="chk-wrap">
                        <label>
                          <input type="checkbox" />
                          <span className="ck-list">Securify irregularity(General)Uh-schedule engine removal</span>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="form-cell">
                <div className="chk-wrap">
                  <label>
                    <input type="checkbox" checked />
                    <span className="ck-list">사용</span>
                  </label>
                </div>
              </div>
            </div> */}
          </div>
          <div className="checklist">
            <div className="h3">Top Event List by Risk Level Score(이상값제거)</div>
            <div className="listbox">
              <div>
                <table className="toplisk-table">
                  <thead>
                    <tr>
                      <th>
                        <div className="chk-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </th>
                      <th>event명</th>
                      <th>건수</th>
                      <th>낮은심각도</th>
                      <th>높은심각도</th>
                      <th>계산값</th>
                      <th>순서</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="radio-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </td>
                      <td>Gps signal interference</td>
                      <td>1</td>
                      <td>D</td>
                      <td>D</td>
                      <td className="tr">2,048</td>
                      <td>
                        <div className="form-group wid100">
                          <AppTextInput inputType="number" label="" placeholder="1" className="tc" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </td>
                      <td>Gps signal interference</td>
                      <td>211</td>
                      <td>D</td>
                      <td>D</td>
                      <td className="tr">2,048</td>
                      <td>
                        <div className="form-group wid100">
                          <AppTextInput type="number" label="" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </td>
                      <td>Gps signal interference</td>
                      <td>211</td>
                      <td>D</td>
                      <td>D</td>
                      <td className="tr">2,048</td>
                      <td>
                        <div className="form-group wid100">
                          <AppTextInput type="number" label="" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </td>
                      <td>Gps signal interference</td>
                      <td>211</td>
                      <td>D</td>
                      <td>D</td>
                      <td className="tr">2,048</td>
                      <td>
                        <div className="form-group wid100">
                          <AppTextInput type="number" label="" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </td>
                      <td>Gps signal interference</td>
                      <td>211</td>
                      <td>D</td>
                      <td>D</td>
                      <td className="tr">2,048</td>
                      <td>
                        <div className="form-group wid100">
                          <AppTextInput type="number" label="" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="form-cell">
                <div className="chk-wrap">
                  <label>
                    <input type="checkbox" checked />
                    <span className="ck-list">사용</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info-text">
          * 주) Top Event List 중 사용을 원하는 항목에 check해 주십시오. Check된 항목이 항공안전 Home의 Top 10 Event로
          표출됩니다.
        </div>
        <div className="checkbox-area mt20">
          <div className="checklist wid100">
            <div className="h3">이상값 검출 Event List</div>
            <div className="listbox">
              <div>
                <table className="toplisk1-table">
                  <thead>
                    <tr>
                      <th>
                        <div className="chk-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </th>
                      <th>event명</th>
                      <th>Report Type</th>
                      <th>Doc.No.</th>
                      <th>Subject</th>
                      <th>이상값</th>
                      <th>조정값</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="radio-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </td>
                      <td>Gps signal interference</td>
                      <td>ASR</td>
                      <td>ASR-104031</td>
                      <td className="tl">예측불가운항상황으로 인한 최대승무시간 및 비행근무시간초과</td>
                      <td>D</td>
                      <td>E</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-wrap center">
                          <label className="text-no">
                            <input type="checkbox" checked />
                            <span className="text-no"></span>
                          </label>
                        </div>
                      </td>
                      <td>Gps signal interference</td>
                      <td>ASR</td>
                      <td>ASR-104031</td>
                      <td className="tl">예측불가운항상황으로 인한 최대승무시간 및 비행근무시간초과</td>
                      <td>D</td>
                      <td>E</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="form-cell">
                <div className="chk-wrap">
                  <label>
                    <input type="checkbox" checked />
                    <span className="ck-list">사용</span>
                  </label>
                </div>
              </div>
            </div>
            {/* <div className="listbox">
              <div className="search-list">
                <ul className="list">
                  <div>그리드자리</div>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <div className="info-text">* 주) 분석포함을 선택하면 원래 평가값을 적용하여 재 계산 됩니다.</div>
      </div>
      {/*//컨텐츠영역 */}
    </>
  );
}

export default AdminTopEvent;
