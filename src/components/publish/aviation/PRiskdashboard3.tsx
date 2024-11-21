import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';

function PRiskdashboard3() {
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
            <a href="javascript:void(0);">지상조사</a>
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
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppSelect label={'Event Date'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group form-glow wid100">
                <div className="df">
                  <div className="date1">
                    <AppDatePicker label={'Event Data'} />
                  </div>
                  <span className="unt">~</span>
                  <div className="date2">
                    <AppDatePicker label={'Event Data'} />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'Event Type'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'Event Class'} />
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell wid50">
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
        {/*__control명 옆에 active  */}
        <button type="button" name="button" className="arrow button _control active">
          <span className="hide">접기</span>
        </button>
      </div>
      {/* //대시보드 */}

      <div className="DashBoardWrap">
        <div className="DashBoard-chart">
          <div className="DashBoard-row">
            <div className="DashBoard-col">
              <h4>Event 수준 현황</h4>
              <div className="DashBoard-box">
                <canvas>대시보드</canvas>
              </div>
            </div>
          </div>
          <div className="DashBoard-row">
            <div className="DashBoard-col">
              <h4>Event 수준 현황</h4>
              <div className="DashBoard-box">
                <canvas>대시보드</canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="DashBoard-chart">
          <div className="DashBoard-2row">
            <div className="DashBoard-col">
              <h4>Event 수준 현황</h4>
              <div className="DashBoard-box">
                <canvas>대시보드</canvas>
              </div>
            </div>
          </div>
          <div className="DashBoard-2row">
            <div className="DashBoard-col">
              <h4>Event 수준 현황</h4>
              <div className="DashBoard-box">
                <canvas>대시보드</canvas>
              </div>
            </div>
          </div>
          <div className="DashBoard-2row">
            <div className="DashBoard-col">
              <h4>Event 수준 현황</h4>
              <div className="DashBoard-box">
                <canvas>대시보드</canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //대시보드 */}
    </>
  );
}

export default PRiskdashboard3;
