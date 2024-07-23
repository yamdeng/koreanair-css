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
            <div className="cont">Supervision</div>
          </li>
          <li className="list">
            <label className="f-label">
              Level 2 <span className="required">*</span>
            </label>
            <div className="cont">Inadequate supervision of training</div>
          </li>
          <li className="list">
            <label className="f-label">
              Level 3 <span className="required">*</span>
            </label>
            <div className="cont">Training records incorrect</div>
          </li>
        </ul>
      </div>
      {/*//등록 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button className="btn_text text_color_neutral-10 btn_confirm">수정</button>
        <button className="btn_text text_color_neutral-10 btn_confirm">목록</button>
      </div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default AdminBasicEdit;
