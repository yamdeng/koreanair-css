import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { useState, useEffect } from 'react';
import CommonUtil from '@/utils/CommonUtil';
import AppDatePicker from '@/components/common/AppDatePicker';
import { DATE_PICKER_TYPE_MONTH } from '@/config/CommonConstant';
import classNames from 'classnames';

function POccupationMu3P4list() {
  // const [open, setOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(0);
  const [calendarDateList, setcalendarDateList] = useState([]);

  const [searchMonth, setSearchMonth] = useState(CommonUtil.getNowMonthString());
  const rowData = getAllData();
  const columns = testColumnInfos;

  const nextMonth = () => {
    onMonthChange(CommonUtil.calculateDate(searchMonth, 'YYYY-MM', DATE_PICKER_TYPE_MONTH, 1));
  };

  const prevMonth = () => {
    onMonthChange(CommonUtil.calculateDate(searchMonth, 'YYYY-MM', DATE_PICKER_TYPE_MONTH, -1));
  };

  const onMonthChange = (value) => {
    setSearchMonth(value);
    setOpen(false);
    const calendarDateList = CommonUtil.convertWeekDayList(CommonUtil.getDateListByMonth(value));
    setcalendarDateList(calendarDateList);
    setSelectedDate(0);
    // TODO : 스케줄러 데이터 셋팅
  };

  const selectCalendarDate = (dateInfo) => {
    const { date } = dateInfo;
    setSelectedDate(date);
  };

  const customButtons = [
    {
      title: '공사장소 관리',
      onClick: () => {
        alert('공사장소 관리');
      },
    },
  ];

  const init = async () => {
    onMonthChange(CommonUtil.getNowMonthString());
  };

  useEffect(() => {
    init();
  }, []);

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
      <h3 className="table-tit">외주작업 실시현황(개발)</h3>
      <div className="calendar-box">
        <div className="calendar-wrap">
          <div className="calendar-tit">
            <button className="prevday" onClick={prevMonth}>
              버튼
            </button>

            <h2 className="datetitle">
              <AppDatePicker
                style={{ visibility: 'hidden', width: 0 }}
                onOpenChange={(status) => {
                  setOpen(status);
                }}
                open={open}
                hidden
                pickerType={DATE_PICKER_TYPE_MONTH}
                getPopupContainer={(trigger) => {
                  return trigger.parentNode;
                }}
                onChange={(value) => {
                  onMonthChange(value);
                }}
                showNow={false}
              />
              <span className="month" onClick={() => setOpen(true)}>
                {CommonUtil.convertDate(searchMonth, 'YYYY-MM', 'YYYY.MM')}
              </span>
            </h2>

            <button className="nextday" onClick={nextMonth}>
              버튼
            </button>
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
              {calendarDateList.map((weetList, index) => {
                return (
                  <tr key={index}>
                    {weetList.map((dateInfo) => {
                      let dateComponent = <td></td>;
                      if (dateInfo) {
                        const { date, isHoliday } = dateInfo;
                        // active가 우선
                        const applyClassName = classNames('cld_day', {
                          s_day: date !== selectedDate && isHoliday,
                          active: date === selectedDate,
                        });
                        dateComponent = (
                          <td key={date} onClick={() => selectCalendarDate(dateInfo)}>
                            <div className="cld_date">
                              <div className={applyClassName}>{date}</div>
                              <ul className="schedule" style={{ display: 'none' }}>
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
                        );
                      }
                      return dateComponent;
                    })}
                  </tr>
                );
              })}
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
            {/*<thead>
              <tr>
                <th>작업상태</th>
                <th>공사명</th>
              </tr>
            </thead>*/}
            <tbody>
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
