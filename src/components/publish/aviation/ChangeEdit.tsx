import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';
import chartasr from '@/resources/images/ASR-box.svg';
import chartmsr from '@/resources/images/MSR-box.svg';

function ChangeEdit() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: '추가',
      onClick: () => {
        alert('추가');
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
            <a href="javascript:void(0);">안전보증</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">변화관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">변화관리 등록</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>변화관리 등록</h2>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="row1">
                <div className="date1">
                  <AppDatePicker label="기준연도" required />
                </div>
              </div>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="변하관리주제명" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="df">
                <div className="date1">
                  <AppDatePicker label={'게시기간'} />
                </div>
                <span className="unt">~</span>
                <div className="date2">
                  <AppDatePicker label={'게시기간'} />
                </div>
              </div>
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label={'부문'} required />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="btn-area">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                초기화
              </button>
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                조회
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className="">
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default ChangeEdit;
