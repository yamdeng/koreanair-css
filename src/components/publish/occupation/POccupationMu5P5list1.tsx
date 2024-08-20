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

function POccupationMu5P5list1() {
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
            <a href="javascript:void(0);">위험성평가</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">중요 위험관리</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>중요 위험관리</h2>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid-300">
              <div className="form-group wid100">
                <AppDatePicker label={'년도'} />
              </div>
            </div>
            <div className="form-cell wid-300">
              <div className="form-group wid100">
                <AppSelect label={'구분'} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/*그래프 영역 */}
      <div className="graph">그래프 영역</div>
      {/*//그래프 영역 */}

      {/*그리드영역 */}
      <div>
        <h3 className="table-tit">개선 진행 현황</h3>
        <AppTable rowData={rowData} columns={columns} />
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default POccupationMu5P5list1;
