import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextArea from '@/components/common/AppTextArea';
import { useState } from 'react';
import AppAutoComplete from '@/components/common/AppAutoComplete';

function PayDetail() {
  const [inputValue, setInputValue] = useState('');
  const [firstExpaned, setFirstExpaned] = useState(true);
  const [secondExpaned, setSecondExpaned] = useState(true);
  const [thirdExpaned, setThirdExpaned] = useState(true);
  const [fourExpaned, setFourExpaned] = useState(true);
  const [fiveExpaned, setFiveExpaned] = useState(true);
  const [sixExpaned, setSixExpaned] = useState(true);
  const [sevenExpaned, setSevenExpaned] = useState(true);
  const [eightExpaned, setEightExpaned] = useState(true);
  const [nineExpaned, setNineExpaned] = useState(true);
  const [tenExpaned, setTenExpaned] = useState(true);
  const [elevenExpaned, setElevenExpaned] = useState(true);
  const [twelveExpaned, setTwelveExpaned] = useState(true);
  const [thirteenExpaned, setThirteenExpaned] = useState(true);
  const [fourteenExpaned, setFourteenExpaned] = useState(true);
  const [fifteenExpaned, setFifteenExpaned] = useState(true);
  const [sixteenExpaned, setSixteenExpaned] = useState(true);
  const toggleTr = () => {
    setSixteenExpaned(!sixteenExpaned);
  };
  const rowData = getAllData();
  const columns = testColumnInfos;
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
            <a href="javascript:void(0);">결제상세정보</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>결제 상세 정보</h2>
      </div>
      {/*상세 */}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      내무 결재 번호 <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">
                      <a href="javascript:void(0);">APR-20240925001</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      요청일시
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1"> 2024-09-07 13:43:08</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      요청자사번
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">2499843</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      요청자 성명
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">홍길동</span>
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
                      결재 요청 요약 정보 조회
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">
                      <div className="opinion">
                        <div className="edit-area">
                          <div className="detailForm">
                            {/* 보고서내용보기 상세*/}
                            <div className="editbox report">
                              {/* <div className="header-tit">보고서내용</div> */}
                              <div className="form-table line">
                                <div className="form-cell wid100">
                                  <div className="form-group wid100">
                                    <div className="box-view-list">
                                      <ul className="view-list">
                                        <li className="accumlate-list">
                                          <label className="t-label">Subject</label>
                                          <span className="text-desc-type1">GPS SIGNAL INTERFERENCE IN ANKARA FIR</span>
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
                                            ANKARA FIR 진입 후 "ADS-B OUT" 시현. 관련 CHECK LIST 및 POM 절차수행후
                                            FLIGHT MAINTENANCE LOG 기입.{' '}
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="editbox report">
                              {/* <div className="header-tit">Risk Assesment</div> */}
                              <div className="form-table line">
                                <div className="form-cell wid100">
                                  <div className="form-group wid100">
                                    <div className="box-view-list">
                                      <ul className="view-list">
                                        <li className="accumlate-list">
                                          <label className="t-label">Risk Assesment</label>
                                          <span className="text-desc-type1">
                                            <div className="listtable">
                                              <table className="info-board">
                                                <colgroup>
                                                  <col width="25%" />
                                                  <col width="18%" />
                                                  <col width="12%" />
                                                  <col width="8%" />
                                                  <col width="18%" />
                                                  <col width="10%" />
                                                  <col width="9%" />
                                                </colgroup>
                                                <thead>
                                                  <tr>
                                                    <th>Hazard</th>
                                                    <th>Potential Consequence</th>
                                                    <th>Risk Level 1</th>
                                                    <th>Mitigation</th>
                                                    <th>Register</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td className="tl">Lightning strike Environmental/Weather</td>
                                                    <td className="tl">Aircraft Change</td>
                                                    <td>
                                                      <div className="Safety-table-cell">
                                                        <span className="Safety-tag riskLevel level1">3A</span>
                                                      </div>
                                                    </td>
                                                    <td className="fix vm">
                                                      <div className="radio-wrap center">
                                                        <label className="text-no">
                                                          <input type="checkbox" />
                                                          <span className="text-no"></span>
                                                        </label>
                                                      </div>
                                                    </td>
                                                    <td className="tl">LSC김리더(LeaderKim)</td>
                                                    <td>평가중</td>
                                                    <td>
                                                      <a href="javascript:void(0);" className="btn-modify">
                                                        delete
                                                      </a>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="tl">Sandstorm Environmental/Weather</td>
                                                    <td className="tl">Escape slide deployment</td>
                                                    <td>
                                                      <div className="Safety-table-cell">
                                                        <span className="Safety-tag riskLevel level3">2B</span>
                                                      </div>
                                                    </td>
                                                    <td className="fix vm">
                                                      <div className="radio-wrap center">
                                                        <label className="text-no">
                                                          <input type="checkbox" />
                                                          <span className="text-no"></span>
                                                        </label>
                                                      </div>
                                                    </td>
                                                    <td className="tl">LSC김리더(LeaderKim)</td>
                                                    <td>평가중</td>
                                                    <td>
                                                      <a href="javascript:void(0);" className="btn-modify">
                                                        delete
                                                      </a>
                                                    </td>
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
                              <div className="form-table line">
                                <div className="form-cell wid100">
                                  <div className="form-group wid100">
                                    <div className="box-view-list">
                                      <ul className="view-list">
                                        <li className="accumlate-list">
                                          <label className="t-label">수행지정정보</label>
                                          <span className="text-desc-type1">
                                            <div className="info-box">
                                              <ul>
                                                <li>
                                                  <span className="tt">부서</span> 운항본부
                                                </li>
                                                <li>
                                                  <span className="tt">리더</span> 홍길동
                                                </li>
                                                <li>
                                                  <span className="tt">팀원</span> 이씨, 김씨, 홍씨
                                                </li>
                                              </ul>
                                            </div>
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="editbox report">
                              {/* <div className="header-tit">Risk Assesment</div> */}
                              <div className="form-table line">
                                <div className="form-cell wid100">
                                  <div className="form-group wid100">
                                    <div className="box-view-list">
                                      <ul className="view-list">
                                        <li className="accumlate-list">
                                          <label className="t-label">Risk Assesment</label>
                                          <span className="text-desc-type1">
                                            <div className="listtable">
                                              <table className="info-board">
                                                <colgroup>
                                                  <col width="25%" />
                                                  <col width="18%" />
                                                  <col width="8%" />
                                                  <col width="8%" />
                                                  <col width="14%" />
                                                  <col width="10%" />
                                                  <col width="8%" />
                                                  <col width="9%" />
                                                </colgroup>
                                                <thead>
                                                  <tr>
                                                    <th>Hazard</th>
                                                    <th>Potential Consequence</th>
                                                    <th>Risk Level 1</th>
                                                    <th>Team</th>
                                                    <th>Mitigation Result</th>
                                                    <th>Risk Level 2</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr onClick={() => toggleTr()}>
                                                    <td className="tl">Lightning strike Environmental/Weather</td>
                                                    <td className="tl">Aircraft Change</td>
                                                    <td>
                                                      <div className="Safety-table-cell">
                                                        <span className="Safety-tag riskLevel level1">3A</span>
                                                      </div>
                                                    </td>
                                                    <td className="fix vm">운항지원팀</td>
                                                    <td className="tl"></td>
                                                    <td>
                                                      <div className="Safety-table-cell">
                                                        <span className="Safety-tag riskLevel level4">1B</span>
                                                      </div>
                                                    </td>
                                                    <td>대기</td>
                                                    <td></td>
                                                  </tr>
                                                  <tr style={{ display: sixteenExpaned ? '' : 'none' }}>
                                                    <td colSpan={8} className="tl">
                                                      {/*상세조회 */}
                                                      <div className="edit-area report">
                                                        <div className="detail-form">
                                                          <div className="detail-list">
                                                            <div className="form-table">
                                                              <div className="form-cell wid50">
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
                                                                                <div className="Name">
                                                                                  홍길동 (170****)
                                                                                </div>
                                                                                <div className="Dept">
                                                                                  상무대우수석사무장 / (주)대한항공
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div className="flex-e">
                                                                              <span className="ant-tag">PF</span>
                                                                              <span className="InfoBox"></span>
                                                                              <div className="Info">
                                                                                <div className="Name">
                                                                                  홍길동 (170****)
                                                                                </div>
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
                                                            <div className="form-table">
                                                              <div className="form-cell wid50">
                                                                <div className="form-group wid100">
                                                                  <div className="box-view-list">
                                                                    <ul className="view-list">
                                                                      <li className="accumlate-list">
                                                                        <label className="t-label">Plan Due Date</label>
                                                                        <span className="text-desc-type1">
                                                                          2024-10-30
                                                                        </span>
                                                                      </li>
                                                                    </ul>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div className="form-cell wid50">
                                                                <div className="form-group wid100">
                                                                  <div className="box-view-list">
                                                                    <ul className="view-list">
                                                                      <li className="accumlate-list">
                                                                        <label className="t-label">Plan</label>
                                                                        <span className="text-desc-type1">
                                                                          PlanPlanPlanPlanPlanPlan
                                                                        </span>
                                                                      </li>
                                                                    </ul>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="form-table">
                                                              <div className="form-cell wid50">
                                                                <div className="form-group wid100">
                                                                  <div className="box-view-list">
                                                                    <ul className="view-list">
                                                                      <li className="accumlate-list">
                                                                        <label className="t-label">Plan Due Date</label>
                                                                        <span className="text-desc-type1">
                                                                          2024-10-30
                                                                        </span>
                                                                      </li>
                                                                    </ul>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div className="form-cell wid50">
                                                                <div className="form-group wid100">
                                                                  <div className="box-view-list">
                                                                    <ul className="view-list">
                                                                      <li className="accumlate-list">
                                                                        <label className="t-label">Result</label>
                                                                        <span className="text-desc-type1">
                                                                          ResultResultResultResult
                                                                        </span>
                                                                      </li>
                                                                    </ul>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="form-table">
                                                              <div className="form-cell wid50">
                                                                <div className="form-group wid100">
                                                                  <div className="box-view-list">
                                                                    <ul className="view-list">
                                                                      <li className="accumlate-list">
                                                                        <label className="t-label">
                                                                          Result Input Data{' '}
                                                                        </label>
                                                                        <span className="text-desc-type1">
                                                                          2024-10-30
                                                                        </span>
                                                                      </li>
                                                                    </ul>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div className="form-cell wid50">
                                                                <div className="form-group wid100">
                                                                  <div className="box-view-list">
                                                                    <ul className="view-list">
                                                                      <li className="accumlate-list">
                                                                        <label className="t-label">첨부파일</label>
                                                                        <span className="text-desc-type1">
                                                                          <div className="desc-file">
                                                                            <a href="javascript:void(0);">
                                                                              <span className="download"></span>
                                                                              <span>첨부파일.zip</span>
                                                                            </a>
                                                                          </div>
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
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="tl">Sandstorm Environmental/Weather</td>
                                                    <td className="tl">Escape slide deployment</td>
                                                    <td>
                                                      <div className="Safety-table-cell">
                                                        <span className="Safety-tag riskLevel level3">2B</span>
                                                      </div>
                                                    </td>
                                                    <td className="fix vm">정비안전보건팀</td>
                                                    <td className="tl"></td>
                                                    <td>
                                                      <div className="Safety-table-cell">
                                                        <span className="Safety-tag riskLevel level4">1B</span>
                                                      </div>
                                                    </td>
                                                    <td>대기</td>
                                                    <td></td>
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
                              <div className="form-table line">
                                <div className="form-cell wid100">
                                  <div className="form-group wid100">
                                    <div className="box-view-list">
                                      <ul className="view-list">
                                        <li className="accumlate-list">
                                          <label className="t-label">Mitigation</label>
                                          <span className="text-desc-type1">
                                            ANKARA FIR 진입 후 "ADS-B OUT" 시현. 관련 CHECK LIST 및 POM 절차수행후
                                            FLIGHT MAINTENANCE LOG 기입.{' '}
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
        {/* 파일첨부영역 : drag */}
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">의견 </label>
                    <span className="text-desc-type1">
                      <AppTextArea label="" style={{ width: '100%', height: 150 }} errorMessage="" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //상세 */}
      <div className="listtable">
        <table className="info-board">
          <colgroup>
            <col width="8%" />
            <col width="10%" />
            <col width="20%" />
            <col width="47%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th>순번</th>
              <th>승인자</th>
              <th>승인일시</th>
              <th>의견</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>홍길동</td>
              <td>2024-07-20 12:34</td>
              <td className="tl">
                <a href="javascript:void(0);">하드랜딩 오류 정보 확인 승인</a>
              </td>
              <td>결제완료</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          수정
        </button>
        <button type="button" name="button" className="btn_text btn-del">
          반려
        </button>
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default PayDetail;
