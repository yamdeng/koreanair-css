import { useState } from 'react';
import Modal from 'react-modal';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';

function ReportLevelModal(props) {
  const { isOpen, closeModal } = props;
  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={'alert-modal-overlay'}
      className={'risk-level-search-content'}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <div className="popup-container1">
        <h3 className="pop_title">위험레벨 조회</h3>
        <div className="pop_cont mb10">
          <div className="pop_full_cont_box type01">
            <div className="RiskLevel-searchbox">
              {/*검색영역*/}
              <div className="boxForm">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group ">
                      <div className="flag-tag1 ">
                        <span className="icon-flag1 txt btn-lightblue">기간선택</span>
                        <span className="icon-flag1 txt btn-lightblue">전체</span>
                        <span className="icon-flag1 txt btn-lightblue">최근3년</span>
                        <span className="icon-flag1 txt btn-lightblue">1년</span>
                        <span className="icon-flag1 txt btn-lightblue active">6개월</span>
                        {/* 선택되는 부분은 class명에 active 표시*/}
                      </div>
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="df">
                        <div className="date1">
                          <AppDatePicker label={'날짜선택'} />
                        </div>
                        <span className="unt">~</span>
                        <div className="date2">
                          <AppDatePicker label={'날짜선택'} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppSelect label={'선택 '} />
                    </div>
                  </div>

                  <div className="form-cell wid100">
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
              {/*//검색영역*/}
            </div>
            <div className="RiskLevel-box">
              <div className="RiskLevel-list">
                <div className="list-box-a">
                  <div className="chk-wrap">
                    <label>
                      <input type="checkbox" checked />
                      <span>
                        Event Type :{' '}
                        <span className="txt">
                          <em>866</em>건
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-table">
                    <div className="form-cell">
                      <div className="form-group wid100">
                        <AppSelect
                          id="select1"
                          style={{ width: '100%' }}
                          className="label-select"
                          options={[
                            {
                              value: 'jack',
                              label: 'Jack',
                            },
                            {
                              value: 'lucy',
                              label: 'Lucy',
                            },
                            {
                              value: 'Yiminghe',
                              label: 'yiminghe',
                            },
                            {
                              value: 'disabled',
                              label: 'Disabled',
                              disabled: true,
                            },
                          ]}
                        />
                        <label className="f-label" htmlFor="select1">
                          선택
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="box-list">
                    <ul className="list">
                      <li className="active">
                        <a href="javascript:void(0);">Aircraft Change</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Boarding Refusal</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Bomb threat</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Cabin Crew Illness</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Cabin Crew Incapacitation due to injury</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">COVID-19 Cluster Infection</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Crew/Pax Injury</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Boarding Refusal</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Bomb threat</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Cabin Crew Illness</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Cabin Crew Incapacitation due to injury</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">COVID-19 Cluster Infection</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Crew/Pax Injury</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Boarding Refusal</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Bomb threat</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Cabin Crew Illness</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Cabin Crew Incapacitation due to injury</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">COVID-19 Cluster Infection</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Crew/Pax Injury</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Bomb threat</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Cabin Crew Illness</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Cabin Crew Incapacitation due to injury</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">COVID-19 Cluster Infection</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Crew/Pax Injury</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Cabin Crew Illness</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Cabin Crew Incapacitation due to injury</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">COVID-19 Cluster Infection</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Crew/Pax Injury</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="list-box-b">
                  <div className="chk-wrap">
                    <label>
                      <input type="checkbox" checked />
                      <span>
                        Hazard Taxonomy :{' '}
                        <span className="txt">
                          <em>866</em>건
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-table">
                    <div className="form-cell">
                      <div className="form-group wid100">
                        <AppSelect
                          id="select1"
                          style={{ width: '100%' }}
                          className="label-select"
                          options={[
                            {
                              value: 'jack',
                              label: 'Jack',
                            },
                            {
                              value: 'lucy',
                              label: 'Lucy',
                            },
                            {
                              value: 'Yiminghe',
                              label: 'yiminghe',
                            },
                            {
                              value: 'disabled',
                              label: 'Disabled',
                              disabled: true,
                            },
                          ]}
                        />
                        <label className="f-label" htmlFor="select1">
                          선택
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="box-list">
                    <ul className="list">
                      <li>
                        <a href="javascript:void(0);">Hail(300)</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="active">
                          Lightning strike(200)
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Sandstorm(145)</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Heavy rain(67)</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Thunderstorm(20)</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Typhoon/Cyclone(13)</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Snow/Slush encounter(9)</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="list-box-c">
                  <div className="chk-wrap">
                    <label>
                      <input type="checkbox" checked />
                      <span>
                        Potential Consequence :{' '}
                        <span className="txt">
                          <em>866</em>건
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-table">
                    <div className="form-cell">
                      <div className="form-group wid100">
                        <AppSelect
                          id="select1"
                          style={{ width: '100%' }}
                          className="label-select"
                          options={[
                            {
                              value: 'jack',
                              label: 'Jack',
                            },
                            {
                              value: 'lucy',
                              label: 'Lucy',
                            },
                            {
                              value: 'Yiminghe',
                              label: 'yiminghe',
                            },
                            {
                              value: 'disabled',
                              label: 'Disabled',
                              disabled: true,
                            },
                          ]}
                        />
                        <label className="f-label" htmlFor="select1">
                          선택
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="box-list">
                    <ul className="list">
                      <li>
                        <a href="javascript:void(0);">Hail(300)</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="active">
                          Lightning strike(200)
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Sandstorm(145)</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Heavy rain(67)</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Thunderstorm(20)</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Typhoon/Cyclone(13)</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Snow/Slush encounter(9)</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="RiskLevel-area">
                <div className="Level-area">
                  <div className="LevelTop">
                    <div className="flex-box">
                      <div className="h5-tit">Risk</div>
                      <span className="total">* 해당기간동안 평가된 횟수</span>
                    </div>
                    <div className="">
                      <table className="RiskLevelTable Risk">
                        <caption></caption>
                        <colgroup></colgroup>
                        <thead>
                          <tr>
                            <th rowSpan={2}>
                              발생
                              <br />
                              가능성
                            </th>
                            <th colSpan={5}>심각도</th>
                          </tr>
                          <tr>
                            <th>LevelA</th>
                            <th>LevelB</th>
                            <th>LevelC</th>
                            <th>LevelD</th>
                            <th>LevelE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>5</th>
                            {/* 선택되면 selected 붙임 */}
                            <td className="red selected">
                              5A
                              {/* 툴팁 */}
                              <div className="flag-tag tooltip">
                                <span className="icon-flag txt">233</span>
                                <div>
                                  <span className="tooltiptext1 tooltip-right">
                                    <ul>
                                      <li>해당기간동안 평가된 횟수</li>
                                    </ul>
                                  </span>
                                </div>
                              </div>
                              <div className="IcoTags">
                                <span className="ico-tag">추천</span>
                              </div>
                            </td>
                            <td className="level1">
                              5B
                              <div className="flag-tag tooltip">
                                {/* <span className="icon-flag txt">23</span> */}
                                <div>
                                  <span className="tooltiptext1 tooltip-right">
                                    <ul>
                                      <li>해당기간동안 평가된 횟수</li>
                                    </ul>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="level1">
                              5C
                              <div className="flag-tag tooltip">
                                {/* <span className="icon-flag txt">99</span> */}
                                <div>
                                  <span className="tooltiptext1 tooltip-right">
                                    <ul>
                                      <li>해당기간동안 평가된 횟수</li>
                                    </ul>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="level2">
                              5D
                              <div className="flag-tag tooltip">
                                {/* <span className="icon-flag txt">233</span> */}
                                <div>
                                  <span className="tooltiptext1 tooltip-right">
                                    <ul>
                                      <li>해당기간동안 평가된 횟수</li>
                                    </ul>
                                  </span>
                                </div>
                              </div>
                              <div className="IcoTags">
                                <span className="ico-tag">추천</span>
                              </div>
                            </td>
                            <td className="level3">
                              5E
                              <div className="IcoTags">
                                <span className="ico-tag">추천</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>4</th>
                            <td className="level1">4A</td>
                            <td className="level1">
                              4B
                              <div className="flag-tag tooltip">
                                <span className="icon-flag txt">233</span>
                                <div>
                                  <span className="tooltiptext1 tooltip-right">
                                    <ul>
                                      <li>해당기간동안 평가된 횟수</li>
                                    </ul>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="level2">4C</td>
                            <td className="level3">4D</td>
                            <td className="level4">
                              4E
                              <div className="IcoTags">
                                <span className="ico-tag">추천</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td className="level1">3A</td>
                            <td className="level2">3B</td>
                            <td className="level3">3C</td>
                            <td className="level3">3D</td>
                            <td className="level4">
                              3E
                              <div className="flag-tag tooltip">
                                <span className="icon-flag txt">233</span>
                                <div>
                                  <span className="tooltiptext1 tooltip-right">
                                    <ul>
                                      <li>해당기간동안 평가된 횟수</li>
                                    </ul>
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td className="level2">2A</td>
                            <td className="level3">2B</td>
                            <td className="level3">2C</td>
                            <td className="level4">
                              2D
                              <div className="flag-tag tooltip">
                                <span className="icon-flag txt">233</span>
                                <div>
                                  <span className="tooltiptext1 tooltip-right">
                                    <ul>
                                      <li>해당기간동안 평가된 횟수</li>
                                    </ul>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="level4">2E</td>
                          </tr>
                          <tr>
                            <th>1</th>
                            <td className="level2">1A</td>
                            <td className="level3">1B</td>
                            <td className="level4">1C</td>
                            <td className="level4">1D</td>
                            <td className="level4">
                              1E
                              <div className="flag-tag tooltip">
                                {/* <span className="icon-flag txt">233</span> */}
                                <div>
                                  <span className="tooltiptext1 tooltip-right">
                                    <ul>
                                      <li>해당기간동안 평가된 횟수</li>
                                    </ul>
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="LevelInfo mt10">
                  <p className="h5-tit">발생 가능성</p>
                  <div className="tableTop">
                    <table className="RiskLevelTable left">
                      <caption></caption>
                      <colgroup></colgroup>
                      <thead>
                        <tr>
                          <th>구분</th>
                          <th>발생가능성</th>
                          <th>정성적평가</th>
                          <th>정량적평가</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>5</th>
                          <td className="">매우높음</td>
                          <td className="tl">일상적으로 발생할 것으로 예상됨</td>
                          <td className="tl">5일 단위(1년 중 65건 이상)</td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td className="">높음</td>
                          <td className="tl">일상적으로 발생할 것으로 예상됨</td>
                          <td className="tl">5일~월 단위(1년 중 65건 이상)</td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td className="">보통</td>
                          <td className="tl">일상적으로 발생할 것으로 예상됨</td>
                          <td className="tl">월~년 단위(1년 중 65건 이상)</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td className="">낮음</td>
                          <td className="tl">일상적으로 발생할 것으로 예상됨</td>
                          <td className="tl">년~10년 단위(1년 중 65건 이상)</td>
                        </tr>
                        <tr>
                          <th>1</th>
                          <td className="">매우 낮음</td>
                          <td className="tl">일상적으로 발생할 것으로 예상됨</td>
                          <td className="tl">10년 이상에 헤당하는 단위</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="Level-area-bottom">
                  <p className="h5-tit">심각도</p>
                  <div className="tableTop">
                    <table className="RiskLevelTable severity">
                      <caption></caption>
                      <colgroup></colgroup>
                      <thead>
                        <tr>
                          <th>순번</th>
                          <th>심각도구분</th>
                          <th>매우심각</th>
                          <th>위험</th>
                          <th>중요</th>
                          <th>경이</th>
                          <th>매우경미</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>4</th>
                          <td className="">인적상해</td>
                          <td className="">영구장애 또는 사망</td>
                          <td className="">1년이상의 요양</td>
                          <td className="">3개월이상~1년미만의 요양</td>
                          <td className="">2주초과~3개월미만의 요양</td>
                          <td className="">2주이하의 요양</td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td className="">안전운항</td>
                          <td className="">사고/중사고</td>
                          <td className="">
                            안전문제 발생으로 다수의 비정상절차 수행 또는 조작불능상태 등 긴급한 비상사태 초래
                          </td>
                          <td className="">
                            안전문제 발생으로 다수의 비정상절차 수행 또는 표준절차를 수앻하지 못했거나 복합적 조작실수등
                            위급..
                          </td>
                          <td className="">
                            안전문제가 발생하였으나 표준절차 또는 일반적 추가조치 수행으로 안전문제가 해결된 경우 또는
                            단순..
                          </td>
                          <td className="">추가조치필요</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td className="">감항성</td>
                          <td className="">Fall safe기능이 없는 장치의 결함으로 사고/준사고 발생</td>
                          <td className="">Fall safe기능이 없는 장치의 결함으로 긴급착륙(회항포함)</td>
                          <td className="">Fall safe기능이 있는 장치의 결함이지만 긴급착륙(회항포함)</td>
                          <td className="">결함으로 인한 결항 또는 10시간 이상 장기지연 발생</td>
                          <td className="">정비이월 후 운항가능</td>
                        </tr>
                        <tr>
                          <th>1</th>
                          <td className="">비용발생</td>
                          <td className="">$500만 이상</td>
                          <td className="">$100만 이상~$500 미만</td>
                          <td className="">$10만 이상~$100 미만</td>
                          <td className="">$1만 이상~$10 미만</td>
                          <td className="">$1만 미만</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            닫기
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            선택
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>
    </Modal>
  );
}

function PReportLevelModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        PReportLevelModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            ReportList modal open
          </button>
        </p>
        <ReportLevelModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PReportLevelModal;
