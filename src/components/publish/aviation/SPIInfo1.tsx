import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';

function SPIInfo1() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  return (
    <>
      <div className="conts-title">
        <h2>운영현황</h2>
      </div>
      {/*탭 */}
      <div className="menu-tab">
        <a href="javascript:void(0);" className="active" data-label="운항정보">
          운항정보
        </a>
        <a href="javascript:void(0);" data-label="SPI지표별 현황">
          SPI지표별 현황
        </a>
      </div>
      {/*검색영역 */}

      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid30">
              <div className="row1">
                <div className="date1">
                  <AppDatePicker label="date1" required />
                </div>
              </div>
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
      <div className="">
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

export default SPIInfo1;
