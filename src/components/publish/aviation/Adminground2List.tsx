import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';
import AppTextArea from '@/components/common/AppTextArea';

function Adminground2List() {
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
            <a href="javascript:void(0);">대시보드 관리</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>대시보드 관리</h2>
      </div>

      {/*검색영역 */}

      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label={'IATA코드'} />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label={'IATA명'} />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label={'Country Code'} />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label={'Continent'} required />
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

export default Adminground2List;
