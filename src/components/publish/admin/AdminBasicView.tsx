import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import { useState } from 'react';

function AdminBasicEdit() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className="conts-title">
        <h2>Taxonomy 상세</h2>
      </div>
      {/*상세페이지에선 className="boxForm AD" */}
      <div className="boxForm AD">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    {/*<span>Level 1 *</span>*/}
                    <label className="t-label">
                      Level 1 <span className="required">*</span>
                    </label>
                    <span className="text-desc">
                      내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용 내용내용내용내용내용내용내용
                      내용내용내용내용내용 내용내용내용내용내용 내용내용내용내용내용내용 내용내용내용내용내용내용
                      내용내용내용내용내용 내용내용내용내용
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="boxForm AD">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100 mr5">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    {/*<span>Level 1 *</span>*/}
                    <label className="t-label">
                      Level 1 <span className="required">*</span>
                    </label>
                    <span className="text-desc">
                      내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용 내용내용내용내용내용내용내용
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100 mr5">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    {/*<span>Level 1 *</span>*/}
                    <label className="t-label">
                      Level 1 <span className="required">*</span>
                    </label>
                    <span className="text-desc">
                      내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용 내용내용내용내용내용내용내
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*//상세 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button className="btn_text text_color_darkblue-100 btn_correct">수정</button>
        <button className="btn_text text_color_neutral-10 btn_confirm">목록</button>
      </div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default AdminBasicEdit;
