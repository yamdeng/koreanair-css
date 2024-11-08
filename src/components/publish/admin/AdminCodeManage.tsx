import { useState } from 'react';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function AdminCodeManage() {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };
  const rowData = getAllData();
  const columns = testColumnInfos;

  return (
    <>
      <div className="conts-title">
        <h2>코드관리</h2>
      </div>

      {/*상세페이지*/}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">코드그룹ID</label>
                    <span className="text-desc-type1">CODE_GRP_001</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      업무구분<span className="required">*</span>
                    </label>
                    <span className="text-desc-type1">항공안전</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      코드그룹명(한국어)<span className="required">*</span>
                    </label>
                    <span className="text-desc-type1">PIC</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      코드그룹명(영어)<span className="required">*</span>
                    </label>
                    <span className="text-desc-type1">PIC</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      사용여부<span className="required">*</span>
                    </label>
                    <span className="text-desc-type1">Y</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      비고<span className="required">*</span>
                    </label>
                    <span className="text-desc-type1">Test1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
      </div>
      <div className="boxForm mt15">
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
            <div className="form-group wid100">
              <AppTable rowData={rowData} columns={columns} />
            </div>
          </div>
        </div>
      </div>
      {/*//상세페이지*/}

      <div className="btns-box">
        <button name="button" className="btn_text btn_confirm text_color_neutral-10">
          수정
        </button>
        <button name="button" className="btn_text text_color_neutral-90 btn_close">
          목록
        </button>
      </div>
    </>
  );
}

export default AdminCodeManage;
