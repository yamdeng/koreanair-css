import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';

function SPIBoardList() {
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
            <a href="javascript:void(0);">게시판</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>게시판</h2>
      </div>

      {/*검색영역 */}

      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid20">
            <div className="form-group wid100">
              <AppSelect label={'게시판구분'} />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group form-glow">
              <div className="df">
                <div className="date1">
                  <AppDatePicker label={'작성일'} />
                </div>
                <span className="unt">~</span>
                <div className="date2">
                  <AppDatePicker label={'작성일'} />
                </div>
              </div>
            </div>
          </div>

          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="제목" />
            </div>
          </div>
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
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className="">
        <AppTable rowData={rowData} columns={columns} />
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default SPIBoardList;
