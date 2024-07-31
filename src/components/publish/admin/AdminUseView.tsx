import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import { useState } from 'react';

function AdminUseView() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className="conts-title">
        <h2>사용자 상세</h2>
      </div>
      {/*상세페이지 */}
      <div className="boxForm">
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
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      사진 <span className="required">*</span>
                    </label>
                    {/*사진이미지 */}
                    <div className="imgBoxWrap">
                      <div className="imgBox">
                        <img src="/src/resources/images/img01.png" alt="" />
                      </div>
                    </div>
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
                      EMAIL
                      <span className="required">*</span>
                    </label>
                    <span className="text-desc">
                      <a href="javascript:void(0);">test@test.com</a>
                    </span>
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
                      상태
                      <span className="required">*</span>
                    </label>
                    <span className="text-desc">재직</span>
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
                      부서
                      <span className="required">*</span>
                    </label>
                    <span className="text-desc">IT기획팀</span>
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
                      사내전화
                      <span className="required">*</span>
                    </label>
                    <span className="text-desc">02-1234-5678</span>
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
                      휴대전화
                      <span className="required">*</span>
                    </label>
                    <span className="text-desc">010-1234-5678</span>
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

export default AdminUseView;
