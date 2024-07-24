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
        <h2>Taxonomy 상세</h2>
        <div className="btn-area">
          <button type="button" name="button" className="btn-sm btn_text btn-lightblue">
            조회
          </button>
          <button type="button" name="button" className="btn-sm btn_text btn-lightblue">
            신규
          </button>
          <button type="button" name="button" className="btn-sm btn_text btn-lightblue">
            초기화
          </button>
        </div>
      </div>
      {/*등록 */}
      <p>테이블이 cell이 한개의 row 되어있는 상세페이지 일경우</p>
      <div className="detail-form">
        <ul className="detail-list">
          <li className="list">
            <div className="list-row wid50">
              <label className="f-label">
                Level 1 <span className="required">*</span>
              </label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid100">
                    <span className="form-group wid100">한 row로 사용시에 class명 form-cell에 wid100을 넣어주세요</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <p>테이블이 cell이 두개의 row 되어있는 상세페이지 일경우</p>
      <div className="detail-form">
        <ul className="detail-list">
          <li className="list">
            <div className="list-row wid50">
              <label className="f-label">
                Level 1 <span className="required">*</span>
              </label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <span className="form-group wid100">내용</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-row wid50">
              <label className="f-label">
                Level 1 <span className="required">*</span>
              </label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <span className="form-group wid100">내용</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/*//등록 */}

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
