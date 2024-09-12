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
          <div className="ck-list-tabel"></div>
        </div>
        <div className="RiskLevel-Right"></div>
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
