import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';
import AppTextArea from '@/components/common/AppTextArea';

function Adminground1List() {
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
            <a href="javascript:void(0);">Admin</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">지상관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">입력항목 관리</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>입력항목 관리</h2>
      </div>

      {/*검색영역 */}

      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label={'입력항목 구분'} />
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
      <div className="equipbox">
        <div className="left-box">
          <AppTable rowData={rowData} columns={columns} />
        </div>
        <div className="right-box">
          {/*그리드영역 */}
          <div className="list-view">
            <div className="head-top">
              <h3>입력항목 정보</h3>
            </div>
            {/* 입력영역 */}
            <div className="editbox">
              <div className="form-table line">
                <div className="form-cell wid30">
                  <div className="form-group wid100">
                    <AppTextInput label="입력항목명" required />
                  </div>
                </div>
                <div className="form-cell wid30">
                  <div className="form-group wid100">
                    <AppSelect label={'사용여부'} required />
                  </div>
                </div>
              </div>
              <hr className="line dp-n"></hr>
            </div>
            {/*//입력영역*/}
          </div>
          {/*//그리드영역 */}
        </div>
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default Adminground1List;
