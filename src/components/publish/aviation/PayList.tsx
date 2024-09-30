import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppAutoComplete from '@/components/common/AppAutoComplete';

function PayList() {
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
            <a href="javascript:void(0);">안전위험관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">결제관리</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>결제관리</h2>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'요청일자'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group form-glow">
                <div className="df">
                  <div className="date1">
                    <AppDatePicker label={'date1'} />
                  </div>
                  <span className="unt">~</span>
                  <div className="date2">
                    <AppDatePicker label={'date2'} />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'종류'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppAutoComplete label="요청부서" />
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'상태'} />
              </div>
            </div>
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppTextInput label="사번" />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppAutoComplete label="" />
              </div>
            </div>
            <div className="form-cell wid100">
              <div className="form-group wid100">
                {' '}
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
        </div>
        {/*__control명 옆에 active  */}
        <button type="button" name="button" className="arrow button _control active">
          <span className="hide">접기</span>
        </button>
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

export default PayList;
