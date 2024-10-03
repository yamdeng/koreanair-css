import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppAutoComplete from '@/components/common/AppAutoComplete';

function RiskRegisterList() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: '엑셀다운로드',
      onClick: () => {
        alert('엑셀다운로드');
      },
    },
    {
      title: '동적필드적용',
      onClick: () => {
        alert('동적필드적용');
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
            <a href="javascript:void(0);">안전위험관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">Risk Register</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>Risk Register</h2>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppSelect label={'select'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group form-glow wid50">
                <div className="df">
                  <div className="date1">
                    <AppDatePicker label={'Event Data'} />
                  </div>
                  <span className="unt">~</span>
                  <div className="date2">
                    <AppDatePicker label={'Event Data'} />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'보고서구분'} />
              </div>
            </div>
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppSelect label={'Risk Level'} />
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
          {/* <div className="form-table">
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
          </div> */}
        </div>
        {/*__control명 옆에 active  */}
        <button type="button" name="button" className="arrow button _control active">
          <span className="hide">접기</span>
        </button>
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

export default RiskRegisterList;
