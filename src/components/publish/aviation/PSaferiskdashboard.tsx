import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';

function PSaferiskdashboard() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [firstExpaned, setFirstExpaned] = useState(true);
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
            <a href="javascript:void(0);">대시보드</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>대시보드</h2>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppSelect label={'보고서종류'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group form-glow wid100">
                <div className="df">
                  <div className="date1">
                    <AppDatePicker label={'Event Data'} />
                  </div>
                  <span className="unt">~</span>
                  <div className="date2">
                    <AppDatePicker label={'Event Data'} />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'Event Type'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'Event Class'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="btn-area">
                <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                  조회
                </button>
                <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                  초기화
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*__control명 옆에 active  */}
        <button type="button" name="button" className="arrow button _control active">
          <span className="hide">접기</span>
        </button>
      </div>
      {/* //검색영역 */}

      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">항공기 Event별 발생 현황</label>
                    <span className="text-desc-type1">
                      <div className="listtable">
                        <table className="info-board">
                          <colgroup>
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th className="red">사고 (Accident:A)</th>
                              <th className="orange">준사고 (Serious Incident:S)</th>
                              <th className="yellow">항공안전장애 (Incident:I)</th>
                              <th className="green">기타 (Irregularity:R)</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>2</td>
                              <td>5</td>
                              <td>10</td>
                              <td>결제완료</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      최근 3년간 월별 추이
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">
                      <div className="graph">
                        <div className="graph-left">
                          <canvas width="1100" height="450"></canvas>
                        </div>
                        <div className="graph-right">
                          <div className="tit">누적건수</div>
                          <div className="box-area">
                            <ul>
                              <li>
                                <div className="year">2022</div>
                                <div className="num blue-color">537</div>
                              </li>
                              <li>
                                <div className="year">2023</div>
                                <div className="num yellow-color">169</div>
                              </li>
                              <li>
                                <div className="year">2024</div>
                                <div className="num red-color">40</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      결재 요청 메시지
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">
                      <div className="massage">메시지</div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      이벤트 Top 10
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">
                      <div className="listtable">
                        <table className="info-board">
                          <colgroup>
                            <col width="10%" />
                            <col width="50%" />
                            <col width="20%" />
                            <col width="20%" />
                          </colgroup>
                          <tr>
                            <th>순번</th>
                            <th>Event Type</th>
                            <th>%</th>
                            <th>Total</th>
                          </tr>
                          <tr>
                            <td className="">1</td>
                            <td className="tl">OverSpeed</td>
                            <td className="">
                              <span className="pr5">12.5</span>
                              <meter
                                className="main-graph-meter"
                                min={0}
                                max={100}
                                low={30}
                                high={79}
                                optimum={100}
                                value={30}
                              ></meter>
                            </td>
                            <td className="">10</td>
                          </tr>
                        </table>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      위해요인 Top 10
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">
                      <div className="listtable">
                        <table className="info-board">
                          <colgroup>
                            <col width="10%" />
                            <col width="50%" />
                            <col width="20%" />
                            <col width="20%" />
                          </colgroup>
                          <tr>
                            <th>순번</th>
                            <th>Hazard</th>
                            <th>%</th>
                            <th>Total</th>
                          </tr>
                          <tr>
                            <td className="">1</td>
                            <td className="tl">OverSpeed</td>
                            <td className="">
                              <span className="pr5">12.5</span>
                              <meter
                                className="main-graph-meter"
                                min={0}
                                max={100}
                                low={30}
                                high={79}
                                optimum={100}
                                value={100}
                              ></meter>
                            </td>
                            <td className="">10</td>
                          </tr>
                        </table>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //상세 */}
    </>
  );
}

export default PSaferiskdashboard;
