import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';

function SMSmaturitylevelDashBoard() {
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
            <a href="javascript:void(0);">SMS성숙도점검</a>
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
            <div className="form-group wid20">
              <div className="row1">
                <div className="date1">
                  <AppDatePicker label={'연도'} />
                </div>
              </div>
            </div>
          </div>
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
      {/* //검색영역 */}

      {/*대시보드*/}
      <div className="DashBoardHeader">
        <div className="h4">전사 SMS 이행성숙도 등급</div>
        <span className="TotalScore">3.53</span>
      </div>
      <div className="DashBoardWrap">
        <div className="DashBoard-chart">
          <div className="DashBoard-row">
            <div className="DashBoard-col">
              <div className="DashBoard-box">
                <canvas>대시보드</canvas>
              </div>
            </div>
          </div>
          <div className="DashBoard-row">
            <div className="DashBoard-col">
              <div className="DashBoard-box">
                <canvas>dfdfdf</canvas>
              </div>
            </div>
          </div>
          <div className="DashBoard-row">
            <div className="DashBoard-col">
              <div className="DashBoard-box">
                <canvas>대시보드</canvas>
              </div>
            </div>
          </div>
          <div className="DashBoard-row">
            <div className="DashBoard-col">
              <div className="DashBoard-box">
                <canvas>대시보드</canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="DashBoard-chart">
          <div className="DashBoard-1row">
            <div className="DashBoard-col">
              <div className="DashBoard-box">
                <canvas>그래프</canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//대시보드 */}
    </>
  );
}

export default SMSmaturitylevelDashBoard;
