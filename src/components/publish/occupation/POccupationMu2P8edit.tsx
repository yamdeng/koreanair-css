import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppRangeDatePicker from '@/components/common/AppRangeDatePicker';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppAutoComplete from '@/components/common/AppAutoComplete';

function POccupationMu2P8edit() {
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
            <a href="javascript:void(0);">안전경영</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">산업안전보건관리비</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>산업안전보건관리비</h2>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" className="active" data-label="현황">
            현황
          </a>
          <a href="javascript:void(0);" data-label="목록">
            목록
          </a>
        </div>
      </div>
      {/*//탭 */}
      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppDatePicker label={'년도'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label="Department" />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label="Cost Center" />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label="Account Name" />
              </div>
            </div>
            <div className="btn-area">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                조회
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}
      {/*그리드영역 */}
      <div>
        <AppTable rowData={rowData} columns={columns} />
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default POccupationMu2P8edit;
