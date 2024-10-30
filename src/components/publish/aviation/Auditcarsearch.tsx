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
      title: '검색',
      onClick: () => {
        alert('검색');
      },
    },
    {
      title: '다운로드',
      onClick: () => {
        alert('다운로드');
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
        <div className="user-box wid45">
          <div className="user-box-cons">
            <div className="cons-wrap">
              {/*Year */}
              <div className="cons-box">
                <div className="txt">Year</div>
                <div className="cons-list">
                  <ul className="list">
                    <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt ">
                          2020
                        </button>
                      </div>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt ">
                          2020
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue btn-txt active">
                          2022
                        </button>
                      </div>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue btn-txt">
                          2023
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          2024
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          2024
                        </button>
                      </div>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          2024
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
                        <button type="button" className="btn-wrap blue active btn-txt">
                          KE
                        </button>
                      </div>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
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
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          Finding
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap blue active btn-txt">
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
                        <button type="button" className="btn-wrap blue active btn-txt">
                          홍길동1
                        </button>
                      </div>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          홍길동2
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          홍길동2
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          홍길동1
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          홍길동1
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          홍길동2
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Month */}
              <div className="cons-box">
                <div className="txt">Month</div>
                <div className="cons-list">
                  <ul className="list">
                    <li>
                      <div className="list-area3">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          1월
                        </button>
                      </div>
                      <div className="list-area3">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          2월
                        </button>
                      </div>
                      <div className="list-area3">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          3월
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area3">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          4월
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area3">
                        <button type="button" className="btn-wrap blue btn-txt">
                          10월
                        </button>
                      </div>
                      <div className="list-area3">
                        <button type="button" className="btn-wrap blue btn-txt">
                          11월
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Division*/}
              <div className="cons-box">
                <div className="txt">Division</div>
                <div className="cons-list">
                  <ul className="list">
                    <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue btn-txt">
                          SELOC
                        </button>
                      </div>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          SELOQA
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Status */}
              <div className="cons-box">
                <div className="txt">Status</div>
                <div className="cons-list">
                  <ul className="list">
                    <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          Plan
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          Plan
                        </button>
                      </div>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue btn-txt">
                          Conduct
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Other */}
              <div className="cons-box">
                <div className="txt">Other</div>
                <div className="cons-list">
                  <ul className="list">
                    <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue active btn-txt">
                          DIV
                        </button>
                      </div>
                      <div className="list-area">
                        <button type="button" className="btn-wrap blue btn-txt">
                          OSR
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="user-box wid35">
          <div className="user-box-cons">
            <div className="cons-wrap2">
              {/*Region */}
              <div className="cons-box gr">
                <div className="txt">Region</div>
                <div className="cons-list scroll">
                  <ul className="list">
                    <li>
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap gr active btn-txt active">
                          국내공항
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap gr btn-txt">
                          대양주
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap gr btn-txt">
                          동남아
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap gr active btn-txt">
                          유럽
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap gr active btn-txt">
                          일본
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/*Airport*/}
              <div className="cons-box gr">
                <div className="txt">Airport</div>
                <div className="cons-list scroll">
                  <ul className="list">
                    <li>
                      <div className="list-area0">
                        <button type="button" className="btn-wrap gr btn-txt">
                          국내공항
                        </button>
                      </div>
                      <div className="list-area0">
                        <ul>
                          <li>
                            <div className="list-box">
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                김포
                              </button>
                            </div>
                            <div className="list-box">
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                인천
                              </button>
                            </div>
                            <div className="list-box">
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                서울
                              </button>
                            </div>
                            <div className="list-box">
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                부산
                              </button>
                            </div>
                          </li>
                          <li>
                            <div className="list-box">
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                울산
                              </button>
                            </div>
                          </li>
                        </ul>
                        {/* <div className="list-box">
                          ㅊ
                            <li>
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                김포
                              </button>
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                인천
                              </button>
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                서울
                              </button>
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                부산
                              </button>
                            </li>
                            <li>
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                울산
                              </button>
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                제주
                              </button>
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                인천
                              </button>
                              <button type="button" className="btn-wrap gr w-min active btn-txt">
                                창원
                              </button>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </li>
                    <li>
                      <div className="list-area0">
                        <button type="button" className="btn-wrap gr btn-txt">
                          미주
                        </button>
                      </div>
                      <div className="list-area0">
                        <ul>
                          <li>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              ABC
                            </button>
                            <button type="button" className="btn-wrap gr w-min btn-txt">
                              AKL
                            </button>
                            <button type="button" className="btn-wrap gr w-min btn-txt">
                              AWS
                            </button>
                            <button type="button" className="btn-wrap gr w-min btn-txt">
                              AWS
                            </button>
                          </li>
                          <li>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              AWS
                            </button>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              AWS
                            </button>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              AWS
                            </button>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              AWS
                            </button>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* <li>
                      <div className="list-area">
                        <button type="button" className="btn-wrap gr btn-txt">
                          일본
                        </button>
                      </div>
                      <div className="list-area">
                        <ul>
                          <li>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              ABC
                            </button>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              AKL
                            </button>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              AWS
                            </button>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              AWS
                            </button>
                          </li>
                          <li>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              AWS
                            </button>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              AWS
                            </button>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              AWS
                            </button>
                            <button type="button" className="btn-wrap gr w-min active btn-txt">
                              AWS
                            </button>
                          </li>
                        </ul>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="user-box wid20">
          <div className="user-box-cons">
            {/*Risk Level */}
            <div className="cons-box yell">
              <div className="txt">Risk Level</div>
              <div className="cons-list scroll">
                <ul className="list">
                  <li>
                    <div className="list-area5">
                      <button type="button" className="btn-wrap redcor active btn-txt">
                        1A
                      </button>
                    </div>
                    <div className="list-area5">
                      <button type="button" className="btn-wrap redcor btn-txt">
                        1B
                      </button>
                    </div>
                    <div className="list-area5">
                      <button type="button" className="btn-wrap yell active btn-txt">
                        1C
                      </button>
                    </div>
                    <div className="list-area5">
                      <button type="button" className="btn-wrap yell btn-txt">
                        1D
                      </button>
                    </div>
                    <div className="list-area5">
                      <button type="button" className="btn-wrap yell btn-txt">
                        1E
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="list-area5">
                      <button type="button" className="btn-wrap orangcor active btn-txt">
                        1A
                      </button>
                    </div>
                    <div className="list-area5">
                      <button type="button" className="btn-wrap orangcor btn-txt">
                        1A
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="list-area5">
                      <button type="button" className="btn-wrap greencor active btn-txt">
                        1A
                      </button>
                    </div>
                    <div className="list-area5">
                      <button type="button" className="btn-wrap greencor btn-txt">
                        1A
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//조회*/}
      <div className="form-table wid100">
        <div className="form-cell">
          <div className="btn-area audit">
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              조회
            </button>
          </div>
        </div>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
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
                {/* <div className="btn-wrap blue active">
                  <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                    조회
                  </button>
                  <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                    Guide
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <button type="button" name="button" className="arrow button _control active">
          <span className="hide">접기</span>
        </button>
      </div>
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className="table-area">
        <h3 className="table-tit"> 운항부분(KE)</h3>
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} style={{ height: '100px' }} />
      </div>
      <div className="table-area">
        <h3 className="table-tit">운항부분(KE) - LSA</h3>
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} style={{ height: '100px' }} />
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default Auditcarsearch;
