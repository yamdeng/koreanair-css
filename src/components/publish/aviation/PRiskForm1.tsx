import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function PRiskForm1() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  return (
    <>
      <div className="conts-title">
        <h2>조사보고서</h2>
      </div>
      {/*검색영역 */}
      <div className="TopButton-area">
        {/*아코디언 - 펴기 버튼일때 btn-fold명 옆에 open붙이기  */}
        <button type="button" name="button" className="btn-fold">
          <span className="hide">펴기</span>
        </button>

        <div className="boxForm">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                <AppSearchInput label="검색 input(엔터키)" />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'select'} />
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell ">
              <div className="form-group wid100">
                <AppSelect label={'select'} />
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
          </div>
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                {/*Event Class */}
                <AppSelect label={'Event Class'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                <AppTextInput label="발생공항" />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                {/*발생단계 */}
                <AppSelect label={'발생단계'} />
              </div>
            </div>
          </div>
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
      {/* //검색영역 */}

      <div>
        <ul className="Report-process">
          <li>
            <span>작성(6)</span>
          </li>
          <li>
            <span>결제(4)</span>
          </li>
          <li>
            <span>안전권고(7)</span>
          </li>
          <li className="last">
            <span>종결(10)</span>
          </li>
        </ul>
      </div>

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

export default PRiskForm1;
