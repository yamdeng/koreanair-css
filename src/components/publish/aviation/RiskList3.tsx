import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';

function RiskList3() {
  const [inputValue, setInputValue] = useState('');
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
            <a href="javascript:void(0);">안전보증</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">EPS 현황</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>EPS 현황</h2>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" className="" data-label="운영 현황">
            운영 현황
          </a>
          <a href="javascript:void(0);" className="" data-label="Risk 분석">
            Risk 분석
          </a>
          <a href="javascript:void(0);" className="" data-label="진행현황">
            진행현황
          </a>
          <a href="javascript:void(0);" className="active" data-label="HZR 참여실적">
            HZR 참여실적
          </a>
        </div>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid20">
            <div className="form-group wid100">
              <AppSelect label={'계약부서'} />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="btn-area">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                초기화
              </button>
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                조회
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/*조합 */}
      <div className="contract-wrap">
        <div className="contract-box">
          <div className="item-box">
            <dl>
              <dt>전사실적</dt>
              <dd>1,453</dd>
            </dl>
          </div>
        </div>
        <div className="contract-box">
          <div className="item-box">
            <dl>
              <dt>협력업체실적</dt>
              <dd>130</dd>
            </dl>
          </div>
        </div>
      </div>
      {/*//조합 */}

      {/*대시보드*/}
      <div className="DashBoardWrap">
        <div className="DashBoard-chart">
          <div className="DashBoard-1row">
            <div className="DashBoard-col">
              <p className="h4">1.조업연관 EVENT발생 추이</p>
              <div className="DashBoard-box">
                <AppTable rowData={rowData} columns={columns} />
              </div>
            </div>
          </div>
          <div className="DashBoard-row">
            <div className="DashBoard-col">
              {/* <p className="h4"></p> */}
              <div className="DashBoard-box">
                <AppTable rowData={rowData} columns={columns} />
              </div>
            </div>
          </div>
          <div className="DashBoard-row">
            <div className="DashBoard-col">
              {/* <p className="h4"></p> */}
              <div className="DashBoard-box">대시보드</div>
            </div>
          </div>
        </div>
      </div>
      {/*//대시보드 */}
    </>
  );
}

export default RiskList3;
