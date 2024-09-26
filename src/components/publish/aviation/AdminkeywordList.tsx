import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function AdminkeywordList() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: '신규',
      onClick: () => {
        alert('신규');
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
            <a href="javascript:void(0);">보고서 키워드 관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">키워드</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>보고서 키워드 관리</h2>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" className="active" data-label="키워드">
            키워드
          </a>
          <a href="javascript:void(0);" className="" data-label="이벤트">
            이벤트
          </a>
        </div>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label={'부분'} />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label={'키워드'} />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label={'사용여부'} />
            </div>
          </div>

          <div className="btn-area df">
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              조회
            </button>
            {/* <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              초기화
            </button> */}
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className="">
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default AdminkeywordList;
