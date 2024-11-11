import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import iconup from '@/resources/images/up-btn.svg';

function PRiskdashboard1() {
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
        <div className="form-table">
          <div className="form-cell wid20">
            <div className="form-group wid50">
              <AppSelect label={'대시보드선택'} />
            </div>
          </div>
          {/* <div className="form-cell wid20">
            <div className="form-group wid100">
              <div className="btn-area">
                <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                  조회
                </button>
                <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                  초기화
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* //검색영역 */}

      {/*토글*/}
      <div className="info-wrap toggle">
        <dl className={firstExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setFirstExpaned(!firstExpaned)}>
            <button type="button" className="btn-tg">
              {/* toggle 열어지면 active붙임*/}
              최근 3년간 월별 추이
              <span className={firstExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
            {/* 보고서상세내용*/}
            <div className="edit-area">
              <div className="detailForm">
                {/* 보고서내용보기 상세*/}
                {/* 비행정보*/}
                <div className="editbox report">
                  <div className="form-table line">대시보드 영역</div>
                </div>

                {/* Air Safety Report 상세*/}
                <div className="editbox report">
                  <div className="header-tit">통합 대시보드</div>
                  {/*검색영역 */}
                  <div className="boxForm">
                    <div className="form-table">
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <AppSelect label={' Submit Date'} />
                        </div>
                      </div>
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <AppSelect label={' year'} />
                        </div>
                      </div>
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <div className="row1">
                            <div className="date1">
                              <AppDatePicker label="연도" required />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-cell wid20">
                        <div className="form-group wid100">
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                              조회
                            </button>
                            {/* <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                              초기화
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* //검색영역 */}

                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="DashBoardWrap">
                          <div className="DashBoard-chart height-fix">
                            <div className="DashBoard-row">
                              <div className="DashBoard-col">
                                <p className="h4">1. 이벤트 Top 10</p>
                                <div className="DashBoard-box">
                                  <AppTable rowData={rowData} columns={columns} />
                                </div>
                              </div>
                            </div>
                            <div className="DashBoard-row">
                              <div className="DashBoard-col">
                                <p className="h4">Confidential / Non-confidential</p>
                                <div className="DashBoard-box">
                                  <ul className="total-box">
                                    <li>
                                      <ul className="total-list">
                                        <li className="tit00">Total</li>
                                        <li className="tit01">405</li>
                                        <li>
                                          전년대비 <span>21.8%</span>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <ul className="total-list">
                                        <li className="tit00">Confidential</li>
                                        <li className="tit01-1">162</li>
                                        <li>
                                          전년대비 <span>12.4%</span>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <ul className="total-list">
                                        <li className="tit00">Non-Confidential</li>
                                        <li className="tit01-1">243</li>
                                        <li>
                                          전년대비
                                          <span>
                                            27.0%
                                            <span className="icon-up">
                                              <img src={iconup} />
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*(<div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">1. 이벤트 Top 10</label>
                              <span className="text-desc-type1">
                                <div className="listtable mt5">
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
                                      <td className="">12.5</td>
                                      <td className="">10</td>
                                    </tr>
                                  </table>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>*/}
                      </div>
                    </div>
                  </div>

                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">2. 위해요인 Top 10</label>
                              <span className="text-desc-type1">
                                <div className="listtable mt5">
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
                                      <td className="tl">Hail Environmental / Weather</td>
                                      <td className="">12.5</td>
                                      <td className="">17</td>
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

                  {/*대시보드*/}
                  <div className="DashBoardWrap">
                    <div className="DashBoard-chart">
                      <div className="DashBoard-row">
                        <div className="DashBoard-col">
                          <p className="h4">Fleet월 발생 이벤트 수</p>
                          <div className="DashBoard-box">
                            <AppTable rowData={rowData} columns={columns} />
                          </div>
                        </div>
                      </div>
                      <div className="DashBoard-row">
                        <div className="DashBoard-col">
                          <p className="h4">공항 별 Top10</p>
                          <div className="DashBoard-box"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*//대시보드 */}
                </div>
                {/* //Air Safety Report 상세*/}
              </div>
              {/* 버튼*/}
              {/* <div className="contents-btns">
                <button type="button" name="button" className="btn_text text_color_neutral-10 btn_conblue">
                  재작성요청
                </button>
                <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
                  Notify
                </button>
                <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
                  Void
                </button>
                <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
                  수정
                </button>
                <button type="button" name="button" className="btn_text btn-del">
                  인쇄
                </button>
                <button type="button" name="button" className="btn_text btn_list">
                  목록
                </button>
              </div> */}
              {/* //버튼*/}
            </div>
          </dd>
        </dl>
      </div>

      {/*//지표정보 */}
    </>
  );
}

export default PRiskdashboard1;
