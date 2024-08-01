import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { useState } from 'react';
import Select from 'react-select';
import { DatePicker, TimePicker, TreeSelect, Select as AntSelect } from 'antd';
import AppAutoComplete from '@/components/common/AppAutoComplete';

function AdminCodeManage() {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };

  return (
    <>
      <div className="conts-title">
        <h2>공통코드 등록</h2>
      </div>
      {/*공통코드 등록*/}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="formGroup-box">
                <div className="wid100">
                  <input
                    id="firstInput"
                    type="text"
                    className="form-tag error"
                    name="title"
                    value={inputValue}
                    onChange={(event) => {
                      setInputValue(event.target.value);
                    }}
                  />
                  <label className="f-label" htmlFor="firstInput">
                    코드그룹ID <span className="required">*</span>
                  </label>
                  <span className="errorText">사용가능한 그룹코드ID 입니다.</span>
                </div>
                <button type="button" name="button" className="btnInp-sm btn_text btn-darkblue-line">
                  중복체크
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>

        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              {/*코드그룹명 */}
              <input
                id="firstInput3"
                type="text"
                className="form-tag"
                name="title"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
              <label className="f-label" htmlFor="firstInput3">
                코드그룹명(한국어) <span className="required">*</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="btns-area">
        <button name="button" className="btn_text btn_confirm text_color_neutral-10">
          저장
        </button>
      </div>

      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              {/*검색영역 */}
              <input
                id="firstInput3"
                type="text"
                className="form-tag"
                name="title"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
              <label className="f-label" htmlFor="firstInput3">
                검색
              </label>
              <button type="button" className="icon-sch"></button>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/*입력폼영역 */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">입력폼영역</div>
          </div>
        </div>
      </div>
      <div className="btns-area">
        <button name="button" className="btn_text text_color_neutral-90 btn_close">
          삭제
        </button>
        <button name="button" className="btn_text btn_confirm text_color_neutral-10">
          상세코드저장
        </button>
      </div>
    </>
  );
}

export default AdminCodeManage;
