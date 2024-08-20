import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function POccupationMu1P7detail() {
  const rowData = getAllData();
  const columns = testColumnInfos;

  const customButtons = [
    {
      title: '행추가',
      onClick: () => {
        alert('행추가');
      },
    },
    {
      title: '전체삭제',
      onClick: () => {
        alert('전체삭제');
      },
    },
  ];

  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">위험기계기구</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>무재해운동</h2>
      </div>
      {/*상세페이지*/}
      {/* 버튼영역 */}
      <div className="btn-area mb-10">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          무재해운동 시작
        </button>
      </div>
      {/*//버튼영역*/}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">부서</label>
                    <span className="text-desc-type1">부서</span>
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
                    <label className="t-label">달성 목표 배수</label>
                    <span className="text-desc-type1">달성 목표 배수</span>
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
                    <label className="t-label">총 목표일수</label>
                    <span className="text-desc-type1">총 목표일수</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">기준 목표일수</label>
                    <span className="text-desc-type1">기준 목표일수</span>
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
                    <label className="t-label">현 목표일수</label>
                    <span className="text-desc-type1">현 목표일수</span>
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
                    <label className="t-label">개시일</label>
                    <span className="text-desc-type1">개시일</span>
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
                    <label className="t-label">달성 목표일</label>
                    <span className="text-desc-type1">달성 목표일</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
      </div>
      {/*//상세페이지*/}

      {/*그리드영역 상단상위표출체크시 번호-아이콘으로 표시 아이콘명:pin.svg */}
      <div className="mt-30">
        <h3 className="table-tit">무재해운동 이력</h3>
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
      </div>
      {/*//그리드영역 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          수정
        </button>
        <button type="button" name="button" className="btn_text btn-del">
          삭제
        </button>
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationMu1P7detail;
