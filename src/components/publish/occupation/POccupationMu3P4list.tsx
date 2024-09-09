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

function POccupationMu3P4list() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;

  const customButtons = [
    {
      title: '공사장소 관리',
      onClick: () => {
        alert('공사장소 관리');
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
            <a href="javascript:void(0);">안전관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">외주작업허가</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>외주작업허가</h2>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" className="active" data-label="현황">
            현황
          </a>
          <a href="javascript:void(0);" data-label="조회">
            조회
          </a>
        </div>
      </div>
      {/*//탭 */}
      {/* 달력 */}
      <h3 className="table-tit">외주작업 실시현황</h3>
      <div className="calendar-box">
        <div className="calendar-wrap">
          <div className="calendar-tit">
            <button className="prevday">버튼</button>

            <h2 className="datetitle">
              <span className="month">2024년 9월</span>
            </h2>

            <button className="nextday">버튼</button>
          </div>
          <table className="calendar-table">
            <thead>
              <tr>
                <th>일</th>
                <th>월</th>
                <th>화</th>
                <th>수</th>
                <th>목</th>
                <th>금</th>
                <th>토</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cld_date">
                    <div className="cld_day s_day">1</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day active">2</div>
                    <ul className="schedule">
                      <li>
                        <a className="ing" href="javascript:void(0);">
                          작업중<span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a className="expected" href="javascript:void(0);">
                          작업예정<span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a className="wait" href="javascript:void(0);">
                          작업종료대기<span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a className="complete" href="javascript:void(0);">
                          작업완료<span>(1)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">3</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">4</div>
                    <ul className="schedule">
                      <li>
                        <a className="complete" href="javascript:void(0);">
                          작업완료<span>(1)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day active">2</div>
                    <ul className="schedule">
                      <li>
                        <a className="ing" href="javascript:void(0);">
                          작업중<span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a className="expected" href="javascript:void(0);">
                          작업예정<span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a className="wait" href="javascript:void(0);">
                          작업종료대기<span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a className="complete" href="javascript:void(0);">
                          작업완료<span>(1)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">6</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">7</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cld_date">
                    <div className="cld_day s_day">8</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">9</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">10</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">11</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">12</div>
                    <ul className="schedule">
                      <li>
                        <a className="ing" href="javascript:void(0);">
                          작업중<span>(1)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">13</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day active">2</div>
                    <ul className="schedule">
                      <li>
                        <a className="ing" href="javascript:void(0);">
                          작업중<span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a className="expected" href="javascript:void(0);">
                          작업예정<span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a className="wait" href="javascript:void(0);">
                          작업종료대기<span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a className="complete" href="javascript:void(0);">
                          작업완료<span>(1)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cld_date">
                    <div className="cld_day active">2</div>
                    <ul className="schedule">
                      <li>
                        <a className="ing" href="javascript:void(0);">
                          작업중<span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a className="expected" href="javascript:void(0);">
                          작업예정<span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a className="wait" href="javascript:void(0);">
                          작업종료대기<span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a className="complete" href="javascript:void(0);">
                          작업완료<span>(1)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">16</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">17</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">18</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">19</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">20</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">21</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cld_date">
                    <div className="cld_day active">2</div>
                    <ul className="schedule">
                      <li>
                        <a className="ing" href="javascript:void(0);">
                          작업중<span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a className="expected" href="javascript:void(0);">
                          작업예정<span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a className="wait" href="javascript:void(0);">
                          작업종료대기<span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a className="complete" href="javascript:void(0);">
                          작업완료<span>(1)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">23</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">24</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">25</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">26</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">27</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day active">2</div>
                    <ul className="schedule">
                      <li>
                        <a className="ing" href="javascript:void(0);">
                          작업중<span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a className="expected" href="javascript:void(0);">
                          작업예정<span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a className="wait" href="javascript:void(0);">
                          작업종료대기<span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a className="complete" href="javascript:void(0);">
                          작업완료<span>(1)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cld_date">
                    <div className="cld_day s_day">29</div>
                  </div>
                </td>
                <td>
                  <div className="cld_date">
                    <div className="cld_day">30</div>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="calendar-list">
          <h3 className="table-tit">2024년 9월 5일</h3>
          <ul className="schedule-guide">
            <li>
              <span className="expected"></span>작업예정
            </li>
            <li>
              <span className="ing"></span>작업중
            </li>
            <li>
              <span className="complete"></span>작업완료
            </li>
            <li>
              <span className="wait"></span>작업완료대기
            </li>
          </ul>
          <table className="list-table">
            <thead>
              <tr>
                <th>작업상태</th>
                <th>공사명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ing">작업 중</td>
                <td>도로포장</td>
              </tr>
              <tr>
                <td className="expected">작업예정</td>
                <td>외벽공사</td>
              </tr>
              <tr>
                <td className="wait">작업완료대기</td>
                <td>도로포장</td>
              </tr>
              <tr>
                <td className="complete">작업완료</td>
                <td>외벽공사</td>
              </tr>
              <tr>
                <td>작업 중</td>
                <td>도로포장</td>
              </tr>
              <tr>
                <td>작업종료대기</td>
                <td>외벽공사</td>
              </tr>
              <tr>
                <td>작업 중</td>
                <td>도로포장</td>
              </tr>
              <tr>
                <td>작업종료대기</td>
                <td>외벽공사</td>
              </tr>
              <tr>
                <td>작업 중</td>
                <td>도로포장</td>
              </tr>
              <tr>
                <td>작업종료대기</td>
                <td>외벽공사</td>
              </tr>
              <tr>
                <td>작업 중</td>
                <td>도로포장</td>
              </tr>
              <tr>
                <td>작업종료대기</td>
                <td>외벽공사</td>
              </tr>
              <tr>
                <td>작업 중</td>
                <td>도로포장</td>
              </tr>
              <tr>
                <td>작업종료대기</td>
                <td>외벽공사</td>
              </tr>
              <tr>
                <td>작업 중</td>
                <td>도로포장</td>
              </tr>
              <tr>
                <td>작업종료대기</td>
                <td>외벽공사</td>
              </tr>
              <tr>
                <td>작업 중</td>
                <td>도로포장</td>
              </tr>
              <tr>
                <td>작업종료대기</td>
                <td>외벽공사</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* //달력 */}

      {/*그리드영역 */}
      <h3 className="table-tit">외주작업 신청 현황</h3>
      <div className="">
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
      </div>
      {/*//그리드영역 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          등록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationMu3P4list;
