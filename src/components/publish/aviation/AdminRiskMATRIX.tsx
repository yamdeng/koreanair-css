import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function AdminRiskMATRIX() {
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
            <a href="javascript:void(0);">안전보고서</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">Risk MATRIX</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>Risk Matrix 관리</h2>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table RiskMatrix">
          <div className="form-cell wid50">
            <div className="form-group form-glow">
              <span className="info-txt">마지막 업데이트 일시 : 2024-07-01 12:34:11</span>
            </div>
          </div>
          <div className="btn-area">
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              수정
            </button>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className="RiskLevel-Wrap">
        <div className="RiskLevel-Left">
          <div className="h4-tit">발생가능성</div>
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
                  <td>
                    5일 단위
                    <br />
                    (1년 중 65건 이상)
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td className="">높음</td>
                  <td className="tl">일상적으로 발생할 것으로 예상됨</td>
                  <td>
                    5일~월 단위
                    <br />
                    (1년 중 65건 이상)
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td className="">보통</td>
                  <td className="tl">일상적으로 발생할 것으로 예상됨</td>
                  <td>
                    월~년 단위
                    <br />
                    (1년 중 65건 이상)
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td className="">낮음</td>
                  <td className="tl">일상적으로 발생할 것으로 예상됨</td>
                  <td>
                    년~10년 단위
                    <br />
                    (1년 중 65건 이상)
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td className="">매우 낮음</td>
                  <td className="tl">일상적으로 발생할 것으로 예상됨</td>
                  <td>10년 이상에 헤당하는 단위</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="RiskLevel-Right">
          <div className="h4-tit">RISK</div>
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
                  <td className="level1">
                    5A{' '}
                    <div className="flag-tag ">
                      <span className="icon-flag txt">(25)</span>
                    </div>
                  </td>
                  <td className="level1">
                    5B
                    <div className="flag-tag ">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level1">
                    5C
                    <div className="flag-tag ">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level2">
                    5D
                    <div className="flag-tag ">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level3">
                    5E
                    <div className="flag-tag ">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td className="level1">4A</td>
                  <td className="level1">
                    4B
                    <div className="flag-tag ">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level2">
                    4C{' '}
                    <div className="flag-tag ">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level3">
                    4D{' '}
                    <div className="flag-tag ">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level4">
                    4E
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td className="level1">
                    3A{' '}
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level2">
                    3B{' '}
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level3">
                    3C{' '}
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level3">
                    3D{' '}
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level4">
                    3E
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td className="level2">
                    2A{' '}
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level3">
                    2B{' '}
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level3">
                    2C{' '}
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level4">
                    2D
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level4">
                    2E{' '}
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td className="level2">
                    1A{' '}
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level3">
                    1B{' '}
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level4">
                    1C{' '}
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level4">
                    1D{' '}
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                  <td className="level4">
                    1E
                    <div className="flag-tag">
                      <span className="icon-flag txt">(23)</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/*//그리드영역 */}
      <div>
        <div className="table-header">
          <div className="btns-area">
            <button name="button" className="btn_text btn_confirm text_color_neutral-10">
              보고서 추가
            </button>
            <button name="button" className="btn_text btn_confirm text_color_neutral-10">
              보고서 해제
            </button>
          </div>
        </div>
        <div className="tableTop">
          {/* <table className="RiskLevelTable left">
            <caption></caption>
            <colgroup>
              <col width="10%" />
              <col width="25%" />
              <col width="10%" />
              <col width="20%" />
              <col width="15%" />
              <col width="10%" />
              <col width="5%" />
              <col width="5%" />
            </colgroup>
            <thead>
              <tr>
                <th>Doc No.</th>
                <th>Subject</th>
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
                <td rowSpan="2">
                  <a href="javascript:void(0);">ASR-100301</a>
                </td>
                <td rowSpan="2" className="tl">
                  Hydraulic System Fail로 인한 Heavy Delay
                </td>
                <td rowSpan="2" className="tl">
                  Delay
                </td>
                <td className="tl">Aircraft Change</td>
                <td className="tl">Hail</td>
                <td className="">접수</td>
                <td className=""></td>
                <td className=""></td>
              </tr>
              <tr>
                <td className="tl">Boarding Refusal</td>
                <td className="tl">Lightning strike</td>
                <td className="">1차위험평가</td>
                <td className="">
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level2">3B</span>
                  </div>
                </td>
                <td className="">
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level4">1C</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td rowSpan="3">
                  <a href="javascript:void(0);">MSR-100302</a>
                </td>
                <td rowSpan="3" className="tl">
                  Hydraulic System Fail로 인한 Ramp Return
                </td>
                <td rowSpan="3" className="tl">
                  aircraft Defect
                </td>
                <td className="tl">Bomb threat</td>
                <td className="tl">Sandstorm</td>
                <td className="">경감조치</td>
                <td className="">
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level3">3C</span>
                  </div>
                </td>
                <td className=""></td>
              </tr>
              <tr>
                <td className="tl">Cabin Crew Illness</td>
                <td className="tl">Heavy rain</td>
                <td className="">2차위험평가</td>
                <td className="">
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level1">5B</span>
                  </div>
                </td>
                <td className="">
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level4">1D</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="tl">Cabin Crew Incapacitation due to injury</td>
                <td className="tl">Thunderstorm</td>
                <td className="">경감조치</td>
                <td className="">
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level2">2A</span>
                  </div>
                </td>
                <td className=""></td>
              </tr>
              <tr>
                <td rowSpan="2">
                  <a href="javascript:void(0);">CSR-100303</a>
                </td>
                <td rowSpan="2" className="tl">
                  자발적 하기 승객 발생
                </td>
                <td rowSpan="2" className="tl">
                  Deplane (Voluntary)
                </td>
                <td className="tl">COVID-19 Cluster Infection</td>
                <td className="tl">Typhoon/Cyclone</td>
                <td className="">경감조치</td>
                <td className="">
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level1">3A</span>
                  </div>
                </td>
                <td className=""></td>
              </tr>
              <tr>
                <td className="tl">Crew/Pax Injury</td>
                <td className="tl">Snow/Slush encounter</td>
                <td className="">종결</td>
                <td className="">
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level3">5E</span>
                  </div>
                </td>
                <td className="">
                  <div className="Safety-table-cell">
                    <span className="Safety-tag riskLevel level4">1E</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
      {/* <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />*/}
    </>
  );
}

export default AdminRiskMATRIX;
