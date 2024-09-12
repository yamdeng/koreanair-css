import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';
import { useState } from 'react';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppTextArea from '@/components/common/AppTextArea';
import { Upload } from 'antd';
const { Dragger } = Upload;
const props: any = {
  name: 'file',
  multiple: true,
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      // status: 'uploading',
      url: 'http://www.baidu.com/xxx.png',
      percent: 33,
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',

  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      alert(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      alert(`${info.file.name} file upload failed.`);
    }
  },

  onRemove(file) {
    return false;
  },

  onPreview(file) {
    return false;
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

function SafetyDetail() {
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
            <a href="javascript:void(0);">보고서보기</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2 className="reportview">
          보고서 보기
          <span>
            <a href="javascript:void(0);">ASR-100308</a>
          </span>
          <ul className="section-button">
            {/*tooltip */}
            <li className="icon_report tooltip">
              <div className="sub_info">
                <ul className="info-box">
                  <li>
                    <a href="javascript:void(0);">ASR-100308</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">ASR-100314</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">ASR-100309</a>
                  </li>
                </ul>
              </div>
            </li>
            <em>(3)</em>
          </ul>
        </h2>
      </div>
      <div className="Report-step-area">
        <div className="c-step-wrap">
          <ol className="c-step-list-type-5">
            <li className="active">
              {/* 선택된 class명에 active */}
              <a href="javascript:void(0);" data-label="접수">
                {/* 선택된 class명에 active */}
                <p className="info-title active">
                  <span className="hide">1단계</span>
                  접수
                </p>
              </a>
              <span className="after-arrow"></span>
            </li>
            <li>
              <a href="javascript:void(0);" data-label="1차 위험평가">
                <p className="info-title">
                  <span className="hide">2단계</span>
                  1차 위험평가
                </p>
              </a>
              <span className="after-arrow"></span>
            </li>
            <li>
              <a href="javascript:void(0);" data-label="경감조치">
                <p className="info-title">
                  <span className="hide">3단계</span>
                  경감조치
                </p>
              </a>
              <span className="after-arrow"></span>
            </li>
            <li>
              <a href="javascript:void(0);" data-label="2차 위험평가">
                <p className="info-title">
                  <span className="hide">4단계</span>
                  2차 위험평가
                </p>
              </a>
              <span className="after-arrow"></span>
            </li>
            <li>
              <a href="javascript:void(0);" data-label="종결">
                <p className="info-title">
                  <span className="hide">5단계</span>
                  종결
                </p>
              </a>
            </li>
          </ol>
          {/*접수단계 step*/}
          <div className="c-step-wrap -mb-8n-3">
            <ol className="c-step-list default">
              {/*선택되는 부분에 class명 active붙이기*/}
              <li className="active">
                <p className="info-title">
                  <span className="hide">1단계</span> 보고서접수
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">2단계</span> 위험평가
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">3단계</span> SRC리뷰
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">4단계</span> 조회
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">5단계</span> 조회
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">6단계</span> 조회
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">7단계</span> 조회
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">8단계</span> 조회
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">9단계</span> 조회
                  <span className="hide">현재 </span>
                </p>
              </li>
            </ol>
          </div>
          {/*//접수단계 step*/}
        </div>
      </div>
      {/* 보고서 상세 toggle*/}
      <div className="info-wrap toggle">
        <dl className={firstExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setFirstExpaned(!firstExpaned)}>
            <button type="button" className="btn-tg">
              {/* toggle 열어지면 active붙임*/}
              보고서 내용보기<span className={firstExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
            {/* 보고서상세내용*/}
            <div className="edit-area">
              <div className="detailForm">
                {/* 보고서내용보기 상세*/}
                {/* 비행정보*/}
                <div className="editbox report">
                  <div className="header-tit">비행정보</div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">출발일자</label>
                              <span className="text-desc-type1"> 2024-08-02 / UTC</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">비행편명</label>
                              <span className="text-desc-type1">KE0787</span>
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
                              <label className="t-label">등록 부호</label>
                              <span className="text-desc-type1">HL7783</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">항공기 형식</label>
                              <span className="text-desc-type1">77W</span>
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
                              <label className="t-label">출발/도착 공항</label>
                              <span className="text-desc-type1">ICN / FUK</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">Divert</label>
                              <span className="text-desc-type1">
                                INC
                                <div className="ant-row">
                                  <div role="label" className="ant-col ant-col-md-2">
                                    STD
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    09:45
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    STA
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    19:50
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    ATD
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    09:45
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    ATA
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    19:50
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    Delay
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    0
                                  </div>
                                </div>
                              </span>
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
                              <label className="t-label">Supply (F/C/Y)</label>
                              <span className="text-desc-type1">0/24/254</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">CHECK_IN (F/C/Y)</label>
                              <span className="text-desc-type1">0/2/0</span>
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
                              <label className="t-label">Flight Crew</label>
                              <span className="text-desc-type1">
                                <div className="MemberClass">
                                  <div className="flex-e">
                                    <span className="ant-tag">PF</span>
                                    <span className="InfoBox"></span>
                                    <div className="Info">
                                      <div className="Name">홍길동 (170****)</div>
                                      <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                    </div>
                                  </div>
                                  <div className="flex-e">
                                    <span className="ant-tag">PF</span>
                                    <span className="InfoBox"></span>
                                    <div className="Info">
                                      <div className="Name">홍길동 (170****)</div>
                                      <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
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
                </div>

                {/* 이벤트*/}
                <div className="editbox report">
                  <div className="header-tit">이벤트</div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">이벤트 카테고리</label>
                              <span className="text-desc-type1">점검</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">발생 공항</label>
                              <span className="text-desc-type1">조금</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">검사 유형</label>
                              <span className="text-desc-type1">안전</span>
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
                              <label className="t-label">권한의 기반</label>
                              <span className="text-desc-type1">외국의</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">발견</label>
                              <span className="text-desc-type1">77W</span>
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
                              <label className="t-label">출발/도착 공항</label>
                              <span className="text-desc-type1">ICN / FUK</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">Divert</label>
                              <span className="text-desc-type1">
                                INC
                                <div className="ant-row">
                                  <div role="label" className="ant-col ant-col-md-2">
                                    STD
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    09:45
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    STA
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    19:50
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    ATD
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    09:45
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    ATA
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    19:50
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    Delay
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    0
                                  </div>
                                </div>
                              </span>
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
                              <label className="t-label">Supply (F/C/Y)</label>
                              <span className="text-desc-type1">0/24/254</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">CHECK_IN (F/C/Y)</label>
                              <span className="text-desc-type1">0/2/0</span>
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
                              <label className="t-label">Flight Crew</label>
                              <span className="text-desc-type1">
                                <div className="MemberClass">
                                  <div className="flex-e">
                                    <span className="ant-tag">PF</span>
                                    <span className="InfoBox"></span>
                                    <div className="Info">
                                      <div className="Name">홍길동 (170****)</div>
                                      <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                    </div>
                                  </div>
                                  <div className="flex-e">
                                    <span className="ant-tag">PF</span>
                                    <span className="InfoBox"></span>
                                    <div className="Info">
                                      <div className="Name">홍길동 (170****)</div>
                                      <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
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
                </div>

                {/* 관련자 세부 정보*/}
                <div className="editbox report">
                  <div className="header-tit">Person Involved Detail</div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">탑승객</label>
                              <span className="text-desc-type1">
                                <div className="info-box mt5">
                                  {/*<p className="h4">탑승객</p>*/}
                                  <table className="notice-board">
                                    <colgroup>
                                      <col width="*" />
                                      <col width="10%" />
                                      <col width="10%" />
                                      <col width="15%" />
                                      <col width="15%" />
                                      <col width="20%" />
                                    </colgroup>
                                    <tr>
                                      <th>관련자</th>
                                      <th>이름</th>
                                      <th>성별</th>
                                      <th>나이</th>
                                      <th>국적</th>
                                      <th>좌석번호</th>
                                    </tr>
                                    <tr>
                                      <td className="">가해자</td>
                                      <td className="">홍길동</td>
                                      <td className="">남성</td>
                                      <td className="">10</td>
                                      <td className="">한국</td>
                                      <td className="">872</td>
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
                  <div className="form-table">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">승무원</label>
                              <span className="text-desc-type1">
                                <div className="info-box mt5">
                                  {/*<p className="h4">승무원</p>*/}
                                  <table className="notice-board">
                                    <colgroup>
                                      <col width="*" />
                                      <col width="20%" />
                                      <col width="10%" />
                                      <col width="30%" />
                                      <col width="10%" />
                                    </colgroup>
                                    <tr>
                                      <th>구분</th>
                                      <th>사번</th>
                                      <th>이름</th>
                                      <th>부서</th>
                                      <th>직위</th>
                                    </tr>
                                    <tr>
                                      <td className="">가해자</td>
                                      <td className="">900****</td>
                                      <td className="">홍홍홍</td>
                                      <td className="left">정석비행장운영팀 / 운항훈련원</td>
                                      <td className="">SVC매니저</td>
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
                {/* //보고서내용보기 상세*/}
              </div>
              {/* FOQA*/}
              <div className="detailForm">
                <div className="editbox report">
                  <div className="header-tit">FOQA-X Status</div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="work-group1">
                          <table className="work-table1">
                            <thead>
                              <tr>
                                <th>APPROVED BY</th>
                                <th>DECISION</th>
                                <th>ADDITIONAL COMMENTS</th>
                                <th>INPUT DATE</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>SELOYOYI</td>
                                <td>
                                  <div className="form-group wid100">
                                    <AppSelect label={'INDIVIDUAL'} />
                                  </div>
                                </td>
                                <td>
                                  <AppTextArea
                                    label=""
                                    style={{ width: '100%', height: 50 }}
                                    errorMessage=""
                                    placeholder=""
                                  />
                                </td>
                                <td className="">
                                  <span>2024-08-01 10:42:02</span>
                                </td>
                                <td>Save버튼 </td>
                              </tr>
                              <tr>
                                <td>EOY</td>
                                <td>
                                  <div className="form-group wid100">
                                    <AppSelect label={'INDIVIDUAL'} disabled />
                                  </div>
                                </td>
                                <td>
                                  {' '}
                                  <AppTextArea
                                    label=""
                                    style={{ width: '100%', height: 50 }}
                                    errorMessage=""
                                    placeholder="Agree with EOY"
                                    disabled
                                  />
                                </td>
                                <td>
                                  <span>2024-08-01 10:42:02</span>
                                </td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>EOO</td>
                                <td>
                                  <div className="form-group wid100">
                                    <AppSelect label={'INDIVIDUAL'} disabled />
                                  </div>
                                </td>
                                <td>
                                  {' '}
                                  <AppTextArea
                                    label=""
                                    style={{ width: '100%', height: 50 }}
                                    errorMessage=""
                                    placeholder=""
                                    disabled
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //FOQA*/}
              {/* 버튼*/}
              <div className="contents-btns">
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
              </div>
              {/* //버튼*/}
            </div>
          </dd>
        </dl>
        <dl className={secondExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setSecondExpaned(!secondExpaned)}>
            <button type="button" className="btn-tg">
              보고서 분석<span className={secondExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: secondExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detailForm">
                <div className="detailForm-detail-box list-group">
                  <div className="detailForm-detail-2deps rbox list-group">
                    <div className="list bx-toggle">
                      <dl className="tg-item rbox01 ">
                        <dt onClick={() => setThirdExpaned(!thirdExpaned)}>
                          <button type="button" className="tg-btn">
                            2-1 접수<span className={thirdExpaned ? 'active' : ''}></span>
                          </button>
                        </dt>
                        <dd className="tg-conts" style={{ display: thirdExpaned ? '' : 'none' }}>
                          <div className="edit-area">
                            {/*보고서접수 상세*/}
                            <div className="detailForm-detail-3deps list-group">
                              <div className="list bx-toggle">
                                <dl className="tg-item rbox01 ">
                                  <dt onClick={() => setFourExpaned(!fourExpaned)}>
                                    <button type="button" className="tg-btn">
                                      보고서접수<span className={fourExpaned ? 'active' : ''}></span>
                                    </button>
                                  </dt>
                                  <dd className="tg-conts" style={{ display: fourExpaned ? '' : 'none' }}>
                                    <div className="edit-area">
                                      {/*보고서접수-ASR*/}
                                      <div className="editbox">
                                        <div className="form-table line">
                                          <div className="form-cell wid50">
                                            <div className="form-group wid100">
                                              <AppSelect label={'이벤트타입'} />
                                            </div>
                                          </div>
                                          <div className="form-cell wid100">
                                            <div className="chk-wrap">
                                              <label>
                                                <input type="checkbox" />
                                                <span>SPI 지표포함</span>
                                              </label>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-table line">
                                          <div className="form-cell wid50">
                                            <div className="form-group wid100">
                                              <AppSelect label={'ATA Chapter'} />
                                            </div>
                                          </div>
                                          <div className="form-cell wid50">
                                            <div className="form-group wid100">
                                              <AppSelect label={'규제기관 보고'} />
                                            </div>
                                          </div>
                                          <div className="form-cell wid50">
                                            <div className="form-group wid100">
                                              <AppSelect label={'보고항목 구분'} />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-table line">
                                          <div className="form-cell wid50">
                                            <div className="form-group wid100">
                                              <AppTextArea
                                                label={'Event Summary'}
                                                style={{ width: '100%', height: 100 }}
                                              />
                                            </div>
                                          </div>
                                          <div className="form-cell wid50">
                                            <div className="form-group wid100">
                                              <AppTextArea
                                                label={'Event Follow up'}
                                                style={{ width: '100%', height: 100 }}
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-table">
                                          <div className="form-cell wid50">
                                            <div className="group-box-wrap wid50">
                                              <span className="txt">Report Links</span>
                                              <div className="round-wrap error">
                                                <span className="icon_report"></span>{' '}
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-table line">
                                          <div className="form-cell wid50">
                                            <div className="form-group wid100">
                                              {/* 파일첨부영역 : drag */}
                                              <div className="filebox error">
                                                <Dragger {...props}>
                                                  <p className="ant-upload-text ">
                                                    + 이 곳을 클릭하거나 마우스로 업로드할 파일을 끌어서 놓으세요.
                                                  </p>
                                                </Dragger>
                                                <label htmlFor="file" className="file-label">
                                                  Attachment <span className="required"></span>
                                                </label>
                                              </div>
                                              <span className="errorText">fileerror</span>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-table">
                                          <div className="form-cell wid50">
                                            <div className="form-group wid20">
                                              <div className="row1">
                                                <div className="date1">
                                                  <AppDatePicker label="Due Date" required />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/*<div className="form-cell wid50">
                                            <div className="btn-area">
                                              <button
                                                type="button"
                                                name="button"
                                                className="btn-sm btn_text btn-darkblue-line"
                                              >
                                                Report Links
                                              </button>
                                            </div>
                                          </div>*/}
                                        </div>

                                        <div className="form-table">
                                          <div className="form-cell wid50">
                                            <div className="form-group wid50">
                                              <div className="UserChicebox error">
                                                <div className="form-group wid100">
                                                  <AppSelect label={'LSC Member'} />
                                                  <label htmlFor="file" className="file-label">
                                                    LSC Member <span className="required"></span>
                                                  </label>
                                                </div>
                                                <div className="form-group wid100 mt10">
                                                  <AppAutoComplete label="d" />
                                                  <div className="SelectedList memberClass mt10">
                                                    <ul>
                                                      <li>
                                                        <span className="InfoBox"></span>
                                                        <div className="Info">
                                                          <div className="Name">홍길동 (170****)</div>
                                                          <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                                        </div>
                                                        <span className="class leader">Leader</span>
                                                        <a href="javascript:void(0);">
                                                          <span className="delete">X</span>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <span className="InfoBox"></span>
                                                        <div className="Info">
                                                          <div className="Name">홍길동 (170****)</div>
                                                          <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                                        </div>
                                                        <span className="class ">Leader</span>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/*보고서접수-ASR*/}
                                      <div className="btn-area">
                                        <button
                                          type="button"
                                          name="button"
                                          className="btn-sm btn_text btn-darkblue-line"
                                        >
                                          LSC Group 설정
                                        </button>
                                      </div>
                                      <hr className="line"></hr>
                                      <div className="form-table ">
                                        <div className="form-cell wid100">
                                          <div className="form-group wid100">
                                            <div className="info-list">
                                              <div className="btn-area inbtn mb5">
                                                <button
                                                  name="button"
                                                  className="btn_text btn_confirm text_color_neutral-10"
                                                >
                                                  대표보고서 지정
                                                </button>
                                                <button
                                                  name="button"
                                                  className="btn_text btn_confirm text_color_neutral-10"
                                                >
                                                  보고서 추가
                                                </button>
                                              </div>
                                              <table className="notice-board">
                                                <colgroup>
                                                  <col width="5%" />
                                                  <col width="8%" />
                                                  <col width="10%" />
                                                  <col width="34%" />
                                                  <col width="10%" />
                                                  <col width="10%" />
                                                  <col width="10%" />
                                                  <col width="10%" />
                                                </colgroup>
                                                <tr className="fix-bg">
                                                  <th>선택</th>
                                                  <th>대표보고서</th>
                                                  <th>Doc No.</th>
                                                  <th className="left">Subject</th>
                                                  <th>Fleet</th>
                                                  <th>Reg No.</th>
                                                  <th>FLT No.</th>
                                                  <th>Action</th>
                                                </tr>
                                                <tr>
                                                  <td className="fix vm">
                                                    <div className="radio-wrap center">
                                                      <label className="text-no">
                                                        <input type="radio" />
                                                        <span className="text-no"></span>
                                                      </label>
                                                    </div>
                                                  </td>
                                                  <td className="bot-left">Y</td>
                                                  <td className="">
                                                    <a href="javascript:void(0);">ASR-100308</a>
                                                  </td>
                                                  <td className="left">1운항 중 발생한 사항에 대..</td>
                                                  <td className="">777</td>
                                                  <td className="">7205</td>
                                                  <td className="">KE0024</td>
                                                  <td>
                                                    <a href="javascript:void(0);">
                                                      <span className="delete">X</span>
                                                    </a>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="fix vm">
                                                    <div className="radio-wrap center">
                                                      <label className="text-no">
                                                        <input type="radio" />
                                                        <span className="text-no"></span>
                                                      </label>
                                                    </div>
                                                  </td>
                                                  <td className="bot-left">Y</td>
                                                  <td className="">
                                                    <a href="javascript:void(0);">ASR-100308</a>
                                                  </td>
                                                  <td className="left">1운항 중 발생한 사항에 대..</td>
                                                  <td className="">777</td>
                                                  <td className="">7205</td>
                                                  <td className="">KE0024</td>
                                                  <td>
                                                    <a href="javascript:void(0);">
                                                      <span className="delete">X</span>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </table>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/*보고서 상세*/}
                                      <div className="detailForm-detail-4deps info-wrap list-group mt10">
                                        <div className="list bx-toggle">
                                          <dl className="tg-item rbox01">
                                            <dt>
                                              <button type="button" className="tg-btn">
                                                - Doc No. ASR-100308
                                                <span className="active"></span>
                                                {/* 상세 페이지 펼처졌을 시 active*/}
                                              </button>
                                            </dt>
                                            <dd className="tg-conts">
                                              {/* 상세*/}
                                              <div className="edit-area">
                                                <div className="detailForm">
                                                  {/* 비행정보*/}
                                                  <div className="editbox report">
                                                    <div className="header-tit">비행정보</div>
                                                    <div className="form-table line">
                                                      <div className="form-cell wid100">
                                                        <div className="form-group wid100">
                                                          <div className="box-view-list">
                                                            <ul className="view-list">
                                                              <li className="accumlate-list">
                                                                <label className="t-label">출발일자</label>
                                                                <span className="text-desc-type1">
                                                                  {' '}
                                                                  2024-08-02 / UTC
                                                                </span>
                                                              </li>
                                                            </ul>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="form-cell wid100">
                                                        <div className="form-group wid100">
                                                          <div className="box-view-list">
                                                            <ul className="view-list">
                                                              <li className="accumlate-list">
                                                                <label className="t-label">비행편명</label>
                                                                <span className="text-desc-type1">KE0787</span>
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
                                                                <label className="t-label">등록 부호</label>
                                                                <span className="text-desc-type1">HL7783</span>
                                                              </li>
                                                            </ul>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="form-cell wid100">
                                                        <div className="form-group wid100">
                                                          <div className="box-view-list">
                                                            <ul className="view-list">
                                                              <li className="accumlate-list">
                                                                <label className="t-label">항공기 형식</label>
                                                                <span className="text-desc-type1">77W</span>
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
                                                                <label className="t-label">출발/도착 공항</label>
                                                                <span className="text-desc-type1">ICN / FUK</span>
                                                              </li>
                                                            </ul>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="form-cell wid100">
                                                        <div className="form-group wid100">
                                                          <div className="box-view-list">
                                                            <ul className="view-list">
                                                              <li className="accumlate-list">
                                                                <label className="t-label">Divert</label>
                                                                <span className="text-desc-type1">
                                                                  INC
                                                                  <div className="ant-row">
                                                                    <div role="label" className="ant-col ant-col-md-2">
                                                                      STD
                                                                    </div>
                                                                    <div role="data" className="ant-col ant-col-md-2">
                                                                      09:45
                                                                    </div>
                                                                    <div role="label" className="ant-col ant-col-md-2">
                                                                      STA
                                                                    </div>
                                                                    <div role="data" className="ant-col ant-col-md-2">
                                                                      19:50
                                                                    </div>
                                                                    <div role="label" className="ant-col ant-col-md-2">
                                                                      ATD
                                                                    </div>
                                                                    <div role="data" className="ant-col ant-col-md-2">
                                                                      09:45
                                                                    </div>
                                                                    <div role="label" className="ant-col ant-col-md-2">
                                                                      ATA
                                                                    </div>
                                                                    <div role="data" className="ant-col ant-col-md-2">
                                                                      19:50
                                                                    </div>
                                                                    <div role="label" className="ant-col ant-col-md-2">
                                                                      Delay
                                                                    </div>
                                                                    <div role="data" className="ant-col ant-col-md-2">
                                                                      0
                                                                    </div>
                                                                  </div>
                                                                </span>
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
                                                                <label className="t-label">Supply (F/C/Y)</label>
                                                                <span className="text-desc-type1">0/24/254</span>
                                                              </li>
                                                            </ul>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="form-cell wid100">
                                                        <div className="form-group wid100">
                                                          <div className="box-view-list">
                                                            <ul className="view-list">
                                                              <li className="accumlate-list">
                                                                <label className="t-label">CHECK_IN (F/C/Y)</label>
                                                                <span className="text-desc-type1">0/2/0</span>
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
                                                                <label className="t-label">Flight Crew</label>
                                                                <span className="text-desc-type1">
                                                                  <div className="MemberClass">
                                                                    <div className="flex-e">
                                                                      <span className="ant-tag">PF</span>
                                                                      <span className="InfoBox"></span>
                                                                      <div className="Info">
                                                                        <div className="Name">홍길동 (170****)</div>
                                                                        <div className="Dept">
                                                                          상무대우수석사무장 / (주)대한항공
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div className="flex-e">
                                                                      <span className="ant-tag">PF</span>
                                                                      <span className="InfoBox"></span>
                                                                      <div className="Info">
                                                                        <div className="Name">홍길동 (170****)</div>
                                                                        <div className="Dept">
                                                                          상무대우수석사무장 / (주)대한항공
                                                                        </div>
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
                                                  </div>
                                                  {/* //보고서내용보기 상세*/}
                                                  {/* 버튼*/}
                                                  <div className="contents-btns">
                                                    <button
                                                      type="button"
                                                      name="button"
                                                      className="btn_text text_color_neutral-10 btn_confirm"
                                                    >
                                                      수정
                                                    </button>
                                                  </div>
                                                  {/* //버튼*/}
                                                </div>
                                              </div>
                                              {/* //상세*/}
                                            </dd>
                                          </dl>
                                          <dl className="tg-item rbox01 ">
                                            <dt>
                                              <button type="button" className="tg-btn">
                                                - Doc No. ASR-100308
                                                <span className=""></span>
                                              </button>
                                            </dt>
                                            <dd className="tg-conts">
                                              <div className="edit-area">
                                                <div className="detailForm">상세내용</div>
                                              </div>
                                            </dd>
                                          </dl>
                                        </div>
                                      </div>
                                      {/* //보고서 상세*/}
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                            {/*//보고서접수 상세*/}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>

                <div className="detailForm-detail-box  list-group">
                  <div className="detailForm-detail-2deps rbox list-group">
                    <div className="list bx-toggle">
                      <dl className="tg-item rbox01 ">
                        <dt onClick={() => setFiveExpaned(!fiveExpaned)}>
                          <button type="button" className="tg-btn">
                            2-2 1차위험도평가<span className={fiveExpaned ? 'active' : ''}></span>
                          </button>
                        </dt>
                        <dd className="tg-conts" style={{ display: fiveExpaned ? '' : 'none' }}>
                          <div className="edit-area">
                            {/*위험평가 상세*/}
                            <div className="detailForm-detail-3deps list-group">
                              <div className="list bx-toggle">
                                <dl className="tg-item rbox01 ">
                                  <dt>
                                    <button type="button" className="tg-btn">
                                      위험평가<span className=""></span>
                                    </button>
                                  </dt>
                                  <dd className="tg-conts">
                                    <div className="edit-area">ddd</div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                            {/*SRC리뷰 상세*/}
                            <div className="detailForm-detail-3deps list-group">
                              <div className="list bx-toggle">
                                <dl className="tg-item rbox01 ">
                                  <dt>
                                    <button type="button" className="tg-btn">
                                      - SRC리뷰<span className=""></span>
                                    </button>
                                  </dt>
                                  <dd className="tg-conts" style={{ display: 'none' }}>
                                    <div className="edit-area"></div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
      </div>
      {/* //보고서 상세 toggle*/}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text btn-del">
          인쇄
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          Submit
        </button>
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default SafetyDetail;
