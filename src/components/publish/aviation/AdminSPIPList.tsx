import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function AdminSPIPList() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: '글쓰기',
      onClick: () => {
        alert('글쓰기');
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
            <a href="javascript:void(0);">Admin</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">게시판관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">SPIP(안전장려금제도 관리)</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>SPIP(안전장려금제도 관리)</h2>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group form-glow">
              <div className="df">
                <div className="date1">
                  <AppDatePicker label={'작성일'} />
                </div>
                <span className="unt">~</span>
                <div className="date2">
                  <AppDatePicker label={'종료일'} />
                </div>
              </div>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="제목(KOR)" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="제목(ENG)" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="btn-area">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                조회
              </button>
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                초기화
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

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

export default AdminSPIPList;