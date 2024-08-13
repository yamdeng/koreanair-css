import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';

function SPIBoardList() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  return (
    <>
      <div className="conts-title">
        <h2>게시판</h2>
      </div>

      {/*검색영역 */}

      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid20">
            <div className="form-group wid100">
              <div className="date1">
                <AppDatePicker label="date1" required />
              </div>
            </div>
          </div>
          <div className="form-cell wid20">
            <div className="form-group wid100">
              <AppSelect label={'지표구분'} />
            </div>
          </div>
          <div className="form-cell wid20">
            <div className="form-group wid100">
              <AppSelect label={'지표명'} />
            </div>
          </div>
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
      {/* //검색영역 */}

      {/*지표정보*/}
      <div className="Status-area">
        <div className="Status-chart">
          <div className="Status-col">
            <p className="h4">
              Navigation Errors - In flight (SPT : <span>0.160</span>)
            </p>
            <div className="Chart-box">
              <canvas></canvas>
            </div>
          </div>
          <div className="Status-col">
            <p className="h4">
              Low speed RTO (SPT : <span>0.53</span>)
            </p>
            <div className="Chart-box">
              <canvas></canvas>
            </div>
          </div>
        </div>
        <div className="Status-chart">
          <div className="Status-col">
            <p className="h4">
              Diversion due to SCF (SPT : <span>0.114</span>)
            </p>
            <div className="Chart-box">
              <canvas></canvas>
            </div>
          </div>
          <div className="Status-col">
            <p className="h4">
              Navigation Error - Taxiway (SPT : <span>0.034</span>)
            </p>
            <div className="Chart-box">
              <canvas></canvas>
            </div>
          </div>
        </div>
      </div>

      {/*//지표정보 */}
    </>
  );
}

export default SPIBoardList;
