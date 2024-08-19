import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function SafetyMeetingList() {
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
            <a href="javascript:void(0);">안전정책</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전회의체</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>안전회의체 관리</h2>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppSelect label={'부문'} />
              </div>
            </div>
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <div className="row1">
                  <div className="date1">
                    <AppDatePicker label="연도" required />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label="제목" />
              </div>
            </div>

            <div className="btn-area df">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                조회
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/* 신규버튼 */}
      <div className="info-field">
        <div className="inp-btns">
          <span className="inp-btn">
            <input type="radio" name="ph-chk" id="ph-chk01" checked />
            <label htmlFor="ph-chk01">ALL (30)</label>
          </span>
          <span className="inp-btn">
            <input type="radio" name="ph-chk" id="ph-chk02" />
            <label htmlFor="ph-chk02">LSC (5)</label>
          </span>
          <span className="inp-btn">
            <input type="radio" name="ph-chk" id="ph-chk03" />
            <label htmlFor="ph-chk03">SRC (10)</label>
          </span>
          <span className="inp-btn">
            <input type="radio" name="ph-chk" id="ph-chk04" />
            <label htmlFor="ph-chk04">SRB (10)</label>
          </span>
          <span className="inp-btn">
            <input type="radio" name="ph-chk" id="ph-chk05" />
            <label htmlFor="ph-chk05">SAG (7)</label>
          </span>
          <span className="inp-btn">
            <input type="radio" name="ph-chk" id="ph-chk06" />
            <label htmlFor="ph-chk06">MSSM (3)</label>
          </span>
        </div>
      </div>
      {/* //신규버튼 */}

      {/*그리드영역 */}
      <div className="">
        <AppTable rowData={rowData} columns={columns} />
      </div>
      {/*//그리드영역 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          신규
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default SafetyMeetingList;
