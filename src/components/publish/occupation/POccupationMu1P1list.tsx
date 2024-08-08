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

function POccupationMu1P1list() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  return (
    <>
      <div className="conts-title">
        <h2>공지사항</h2>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label={'본부'} />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group form-glow">
              <div className="df">
                <div className="date1">
                  <AppDatePicker label="등록일자" />
                </div>
                <span className="unt">~</span>
                <div className="date2">
                  <AppDatePicker label="등록일자" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label={'구분'} />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSearchInput label="검색" />
            </div>
          </div>
          <div className="btn-area">
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              조회
            </button>
          </div>
        </div>
      </div>
      {/* //검색영역 */}
      {/*그리드영역 상단상위표출체크시 번호-아이콘으로 표시 아이콘명:pin.svg */}
      <div>
        <AppTable rowData={rowData} columns={columns} />
      </div>
      {/*//그리드영역 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          신규
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationMu1P1list;
