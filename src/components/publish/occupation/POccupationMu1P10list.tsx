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

function POccupationMu1P10list() {
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
            <a href="javascript:void(0);">안전관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">위험기계기구</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>안전보건협의체</h2>
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
                <AppDatePicker label={'해당연도'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label="본부" />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppAutoComplete label={'해당부서'} />
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
      <div className="grid-height-box-type01">
        <AppTable className="grid-height" rowData={rowData} columns={columns} />
      </div>
      {/*//그리드영역 */}
      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          등록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationMu1P10list;
