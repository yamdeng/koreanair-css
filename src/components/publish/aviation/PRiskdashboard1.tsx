import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';

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

                {/* 관련자 세부 정보*/}
                <div className="editbox report">
                  <div className="header-tit">통합 대시보드</div>
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
      </div>

      {/*//지표정보 */}
    </>
  );
}

export default PRiskdashboard1;
