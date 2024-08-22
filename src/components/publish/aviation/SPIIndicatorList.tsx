import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';

function SPIIndicatorList() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: '불러오기',
      onClick: () => {
        alert('불러오기');
      },
    },
    {
      title: '편집',
      onClick: () => {
        alert('편집');
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
            <a href="javascript:void(0);">SPI/SPT</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">지표관리</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>지표관리</h2>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid20">
            <div className="form-group form-glow">
              <div className="row1">
                <div className="date1">
                  <AppDatePicker label="연도" required />
                </div>
              </div>
            </div>
          </div>
          <div className="form-cell wid20">
            <div className="form-group wid100">
              <AppSelect label={'지표구분'} required />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label="지표명" />
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

      {/*그리드영역 */}
      <div>
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default SPIIndicatorList;
