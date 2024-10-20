import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';

function Auditcarsearch() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: '일괄업로드',
      onClick: () => {
        alert('일괄업로드');
      },
    },
    {
      title: '+ Add Plan',
      onClick: () => {
        alert('+ Add Plan');
      },
    },
    {
      title: 'Fields',
      onClick: () => {
        alert('Fields');
      },
      iconClass: 'icon-fields',
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
            <a href="javascript:void(0);">AUDIT</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">개선 조치 (CAR) 조회</a>
          </li>
        </ol>
      </div>
      {/*경로 */}

      {/*조회 */}
      <div className="user-wrap">
        <div className="user-box wid40">
          <div className="user-box-cons">
            <div className="form-table">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="cons-wrap">
                    {/*Year */}
                    <div className="cons-box">
                      <div className="txt">Year</div>
                      <div className="cons-list">
                        <ul className="list">
                          <li>
                            <div className="list-area">
                              <button type="button" className="btn-wrap">
                                2020
                              </button>
                              <button type="button" className="btn-wrap">
                                2021
                              </button>
                            </div>
                          </li>
                          <li>
                            <div className="list-area">
                              <button type="button" className="btn-wrap">
                                2022
                              </button>
                              <button type="button" className="btn-wrap">
                                2023
                              </button>
                            </div>
                          </li>
                          <li>
                            <div className="list-area">
                              <button type="button" className="btn-wrap">
                                2024
                              </button>
                              <button type="button" className="btn-wrap">
                                2025
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*Airline */}
                    <div className="cons-box">
                      <div className="txt">Airline</div>
                      <div className="cons-list">
                        <ul className="list">
                          <li>
                            <div className="list-area">
                              <button type="button" className="btn-wrap">
                                KE
                              </button>
                              <button type="button" className="btn-wrap">
                                OZ
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*CAR */}
                    <div className="cons-box">
                      <div className="txt">CAR</div>
                      <div className="cons-list">
                        <ul className="list">
                          <li>
                            <div className="list-area">
                              <button type="button" className="btn-wrap">
                                Finding
                              </button>
                            </div>
                          </li>
                          <li>
                            <div className="list-area">
                              <button type="button" className="btn-wrap">
                                Observation
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*Auditor */}
                    <div className="cons-box">
                      <div className="txt">Auditor</div>
                      <div className="cons-list">
                        <ul className="list">
                          <li>
                            <div className="list-area">
                              <button type="button" className="btn-wrap">
                                2020
                              </button>
                              <button type="button" className="btn-wrap">
                                2021
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*CAR */}
                    <div className="cons-box">
                      <div className="txt">CAR</div>
                      <div className="cons-list">
                        <ul className="list">
                          <li>
                            <div className="list-area">
                              <button type="button" className="btn-wrap">
                                2020
                              </button>
                              <button type="button" className="btn-wrap">
                                2021
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*CAR */}
                    <div className="cons-box">
                      <div className="txt">CAR</div>
                      <div className="cons-list">
                        <ul className="list">
                          <li>
                            <div className="list-area">
                              <button type="button" className="btn-wrap">
                                2020
                              </button>
                              <button type="button" className="btn-wrap">
                                2021
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*CAR */}
                    <div className="cons-box">
                      <div className="txt">CAR</div>
                      <div className="cons-list">
                        <ul className="list">
                          <li>
                            <div className="list-area">
                              <button type="button" className="btn-wrap">
                                2020
                              </button>
                              <button type="button" className="btn-wrap">
                                2021
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* <div className="cons-right">
                      <div className="cons-box">
                        <div className="cons-box">
                          <div className="txt">Auditor</div>
                          <div className="cons-list">
                            <ul className="list">
                              <li>
                                <div className="list-area">
                                  <button type="button" className="btn-wrap">
                                    2020
                                  </button>
                                  <button type="button" className="btn-wrap">
                                    2021
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="user-box wid30">
          <div className="user-box-cons">
            <div className="form-table user-head">
              <div className="form-cell wid100">
                <div className="form-group wid70">
                  <div className="h4">Div. Audit</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="user-box wid30">
          <div className="user-box-cons">
            <div className="form-table user-head">
              <div className="form-cell wid100">
                <div className="form-group wid70">
                  <div className="h4">Div. Audit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//조회*/}

      {/*검색영역 */}
      {/* <div className="boxForm">
        <div id="" className="area-detail myaudit active">
          <div className="form-table">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppSelect label={'Audited Div'} />
              </div>
            </div>
            <div className="form-cell wid30">
              <div className="form-group form-glow wid30">
                <div className="df">
                  <div className="date1">
                    <AppDatePicker label={'Audit Date'} />
                  </div>
                  <span className="unt">~</span>
                  <div className="date2">
                    <AppDatePicker label={'Audit Data'} />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label="Title or CAR Title or AuditorNm" />
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppSelect label={'Status'} />
              </div>
            </div>
            <div className="form-cell wid30">
              <div className="form-group form-glow wid30">
                <div className="df">
                  <div className="date1">
                    <AppDatePicker label={'Due Date'} />
                  </div>
                  <span className="unt">~</span>
                  <div className="date2">
                    <AppDatePicker label={'Due Data'} />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="group-box-wrap flex-between wid100">
                <div className="radio-wrap border-no">
                  <label>
                    <input type="checkbox" checked />
                    <span>Audiror 펼치기</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>CAR 펼치기</span>
                  </label>
                </div>
                <div className="btn-wrap">
                  <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                    조회
                  </button>
                  <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                    Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="button" name="button" className="arrow button _control active">
          <span className="hide">접기</span>
        </button>
      </div> */}
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className=""></div>
      {/*//그리드영역 */}
    </>
  );
}

export default Auditcarsearch;
