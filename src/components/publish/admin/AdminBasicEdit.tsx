import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';

function AdminBasicEdit() {
  const rowData = getAllData();
  const columns = testColumnInfos;

  return (
    <>
      <div className="conts-title">
        <h2>Taxonomy 등록</h2>
        <div className="btn-area">
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            조회
          </button>
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            신규
          </button>
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            초기화
          </button>
        </div>
      </div>
      {/*등록 */}
      <div className="detail-form">
        <ul className="detail-list">
          <li className="list">
            <label className="f-label">
              Level 1 <span className="required">*</span>
            </label>
            <div className="cont">
              <div className="form-table">
                <div className="form-cell wid50">
                  <span className="form-group wid100">
                    <AntSelect
                      style={{ width: '100%' }}
                      options={[
                        {
                          value: 'jack',
                          label: 'Jack',
                        },
                        {
                          value: 'lucy',
                          label: 'Lucy',
                        },
                        {
                          value: 'Yiminghe',
                          label: 'yiminghe',
                        },
                        {
                          value: 'disabled',
                          label: 'Disabled',
                          disabled: true,
                        },
                      ]}
                    />
                  </span>
                </div>
                <div className="form-cell wid50">
                  <span className="form-group wid100 mr5">
                    <input type="text" className="form-tag" placeholder="" disabled />
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="list">
            <label className="f-label">
              Level 2 <span className="required">*</span>
            </label>
            <div className="cont">
              <div className="form-table">
                <div className="form-cell wid50">
                  <span className="form-group wid100">
                    <AntSelect
                      style={{ width: '100%' }}
                      options={[
                        {
                          value: 'jack',
                          label: 'Jack',
                        },
                        {
                          value: 'lucy',
                          label: 'Lucy',
                        },
                        {
                          value: 'Yiminghe',
                          label: 'yiminghe',
                        },
                        {
                          value: 'disabled',
                          label: 'Disabled',
                          disabled: true,
                        },
                      ]}
                    />
                  </span>
                </div>
                <div className="form-cell wid50">
                  <span className="form-group wid100 mr5">
                    <input type="text" className="form-tag" placeholder="" disabled />
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="list">
            <label className="f-label">
              Level 3 <span className="required">*</span>
            </label>
            <div className="cont">
              <div className="form-table">
                <div className="form-cell wid100">
                  <span className="form-group wid100 mr5">
                    <input type="text" className="form-tag" name="" placeholder="" />
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/*//등록 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button className="btn_text text_color_neutral-10 btn_confirm">저장</button>
        <button className="btn_text text_color_neutral-10 btn_confirm">취소</button>
      </div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default AdminBasicEdit;
