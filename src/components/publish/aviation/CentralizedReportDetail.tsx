import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { useState } from 'react';

function CentralizedReportDetail() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [firstExpaned, setFirstExpaned] = useState(true);
  const [secondExpaned, setSecondExpaned] = useState(true);
  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전보고서</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">Centralized Report</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>Centralized Report</h2>
      </div>
      <div className="editbox">
        <div className="listtable">
          <table className="info-board">
            <colgroup>
              <col width="16%" />
              <col width="15%" />
              <col width="16%" />
              <col width="15%" />
              <col width="16%" />
              <col width="15%" />
            </colgroup>
            <tbody>
              <tr>
                <th>Departure Date</th>
                <td className="tl">2024-08-05 UTC</td>
                <th>Flight No.</th>
                <td className="tl">KE0787</td>
                <th>Registration No.</th>
                <td className="tl">HL7783</td>
              </tr>
              <tr>
                <th>
                  Subject <span className="required">*</span>
                </th>
                <td className="tl" colSpan={5}>
                  20240802-KE0787-HL7751
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*상세*/}
        <div className="info-wrap toggle mt20">
          <dl className={firstExpaned ? 'tg-item active' : 'tg-item'}>
            <dt onClick={() => setFirstExpaned(!firstExpaned)}>
              <button type="button" className="btn-tg">
                {/* toggle 열어지면 active붙임*/}
                ASR-100301 <span className={firstExpaned ? 'active' : ''}></span>
              </button>
            </dt>
            <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
              {/* 상세*/}
              <div className="edit-area">
                <div className="detailForm">
                  <div className="editbox report">
                    <div className="form-table line">
                      <div className="form-cell wid100">
                        <div className="form-group wid100">
                          <div className="box-view-list">
                            <ul className="view-list">
                              <li className="accumlate-list">
                                <label className="t-label">Subject</label>
                                <span className="text-desc-type1"> Hydraulic System Fail로 인한 Heavy Delay</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-table line">
                      <div className="form-cell wid100">
                        <div className="form-group wid100">
                          <div className="box-view-list">
                            <ul className="view-list">
                              <li className="accumlate-list">
                                <label className="t-label">Description</label>
                                <span className="text-desc-type1">
                                  HL7783 KE0787(HAN/ICN) 편 Inbound중 CRZ Altitude FL371(11300m)에서 F/O석 CRS Indicator
                                  Light 가 Out되는 현상 발생.(지상 및 CLB시에는 정상 작동하였음) 문제점 확인을 위해
                                  Light Test를 수행하자 Test는 정상이나 Test가 끝난 후에 다시 Light가 Out됨. PFD에서
                                  Course의 움직임을 확인한 결과 정상 작동하므로 단순한 MCP의 Course Indicator의 Fault로
                                  판단됨.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
        </div>

        <div className="listtable">
          <table className="info-board">
            <colgroup>
              <col width="16%" />
              <col width="22%" />
              <col width="16%" />
              <col width="15%" />
              <col width="16%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th>Event Type</th>
                <th>Hazard</th>
                <th>Potential Consequence</th>
                <th>진행상태</th>
                <th>1차 위험평가</th>
                <th>2차 위험평가</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={3}>aircraft Defect</td>
                <td className="tl">Bomb threat</td>
                <td className="tl">Sandstorm</td>
                <td className="fix vm">접수</td>
                <td>
                  {/*위험도 컬러CSS level1: 레드, level2: 오렌지 , level3:노랑 , level4:그린*/}
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level2">3B</span>
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td className="tl">Cabin Crew Illness</td>
                <td className="tl">Sandstorm</td>
                <td className="fix vm">2차위험평가</td>
                <td>
                  {/*위험도 컬러CSS level1: 레드, level2: 오렌지 , level3:노랑 , level4:그린*/}
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level2">3B</span>
                  </div>
                </td>
                <td>
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level4">1C</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="tl">Cabin Crew Incapacitation due to injury</td>
                <td className="tl">Thunderstorm</td>
                <td className="fix vm">경감조치</td>
                <td>
                  {/*위험도 컬러CSS level1: 레드, level2: 오렌지 , level3:노랑 , level4:그린*/}
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level3">5C</span>
                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*상세*/}
        <div className="info-wrap toggle mt20">
          <dl className={secondExpaned ? 'tg-item active' : 'tg-item'}>
            <dt onClick={() => setSecondExpaned(!secondExpaned)}>
              <button type="button" className="btn-tg">
                {/* toggle 열어지면 active붙임*/}
                MSR-100302 <span className={secondExpaned ? 'active' : ''}></span>
              </button>
            </dt>
            <dd className="tg-conts" style={{ display: secondExpaned ? '' : 'none' }}>
              {/* 상세*/}
              <div className="edit-area">
                <div className="detailForm">
                  <div className="editbox report">
                    <div className="form-table line">
                      <div className="form-cell wid100">
                        <div className="form-group wid100">
                          <div className="box-view-list">
                            <ul className="view-list">
                              <li className="accumlate-list">
                                <label className="t-label">Subject</label>
                                <span className="text-desc-type1"> Hydraulic System Fail로 인한 Heavy Delay</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-table line">
                      <div className="form-cell wid100">
                        <div className="form-group wid100">
                          <div className="box-view-list">
                            <ul className="view-list">
                              <li className="accumlate-list">
                                <label className="t-label">Description</label>
                                <span className="text-desc-type1">
                                  HL7783 KE0787(HAN/ICN) 편 Inbound중 CRZ Altitude FL371(11300m)에서 F/O석 CRS Indicator
                                  Light 가 Out되는 현상 발생.(지상 및 CLB시에는 정상 작동하였음) 문제점 확인을 위해
                                  Light Test를 수행하자 Test는 정상이나 Test가 끝난 후에 다시 Light가 Out됨. PFD에서
                                  Course의 움직임을 확인한 결과 정상 작동하므로 단순한 MCP의 Course Indicator의 Fault로
                                  판단됨.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}

export default CentralizedReportDetail;
