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
      <div className="RiskLevel-bottom">
        <p className="h4-tit">심각도</p>
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
                <td className="">안전문제 발생으로 다수의 비정상절차 수행 또는 조작불능상태 등 긴급한 비상사태 초래</td>
                <td className="">
                  안전문제 발생으로 다수의 비정상절차 수행 또는 표준절차를 수앻하지 못했거나 복합적 조작실수등 위급..
                </td>
                <td className="">
                  안전문제가 발생하였으나 표준절차 또는 일반적 추가조치 수행으로 안전문제가 해결된 경우 또는 단순..
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
      {/*//그리드영역 */}
    </>
  );
}

export default AdminRiskMATRIX;
