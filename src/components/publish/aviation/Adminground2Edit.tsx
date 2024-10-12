import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';
import AppTextArea from '@/components/common/AppTextArea';

function Adminground2Edit() {
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
            <a href="javascript:void(0);">대시보드 신규</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>대시보드 신규</h2>
      </div>

      {/* 입력영역 */}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label="IATA코드" required />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label={'IATA명 '} required />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label={'Country Code '} required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="Continent " required />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="지역  " required />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
      </div>
      {/*//입력영역*/}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
        <button className="btn_text btn-del btn-type01">취소</button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default Adminground2Edit;
