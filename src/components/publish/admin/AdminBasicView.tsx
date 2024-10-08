import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import { useState } from 'react';

function AdminBasicView() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className="conts-title">
        <h2>Taxonomy 상세</h2>
      </div>
      {/*상세페이지 */}
      <div className="editbox">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      사번 <span className="required">*</span>
                    </label>
                    <span className="text-desc">123456789</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      사용자 명(한국어)
                      <span className="required">*</span>
                    </label>
                    <span className="text-desc">테스트1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      사용자 명(영어)
                      <span className="required">*</span>
                    </label>
                    <span className="text-desc">Test1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      사용자 명(중국어)
                      <span className="required">*</span>
                    </label>
                    <span className="text-desc">Test1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-wrap toggle">
        <dl className="tg-item active">
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt>
            <button type="button" className="btn-tg">
              Level 1 <span className="required">*</span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              {/* 상세내용*/}
              <div className="boxForm tog">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              사번 <span className="required">*</span>
                            </label>
                            <span className="text-desc">123456789</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              사용자 명(한국어)
                              <span className="required">*</span>
                            </label>
                            <span className="text-desc">테스트1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //상세내용*/}
            </div>
          </dd>
        </dl>
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

export default AdminBasicView;
