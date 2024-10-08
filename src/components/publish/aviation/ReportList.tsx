import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function ReportList() {
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
            <a href="javascript:void(0);">보고서분석</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>보고서분석</h2>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label="subject" />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label="Received By" />
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell wid50">
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
            <div className="form-cell wid50">
              <div className="chk-wrap">
                <label>
                  <input type="checkbox" checked />
                  <span>My Turn</span>
                </label>
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label="Fleet" />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label="Reg No." />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'부문'} />
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
        {/*__control명 옆에 active  */}
        <button type="button" name="button" className="arrow button _control active">
          <span className="hide">접기</span>
        </button>
      </div>
      {/* //검색영역 */}

      {/* 리포트 프로세스 */}
      <div className="c-step-wrap">
        <ol className="c-step-list-type-5">
          <li className="">
            {/* 선택된 class명에 active */}
            <a href="javascript:void(0);" data-label="접수">
              <p className="info-title ">
                {/* 선택된 class명에 active */}
                <span className="hide">1단계</span>
                접수
              </p>
            </a>
            <span className="after-arrow"></span>
          </li>
          <li className="active">
            <a href="javascript:void(0);" data-label="1차 위험평가">
              <p className="info-title active">
                <span className="hide">2단계</span>
                1차 위험평가
              </p>
            </a>
            <span className="after-arrow"></span>
          </li>
          <li>
            <a href="javascript:void(0);" data-label="경감조치">
              <p className="info-title">
                <span className="hide">3단계</span>
                경감조치
              </p>
            </a>
            <span className="after-arrow"></span>
          </li>
          <li>
            <a href="javascript:void(0);" data-label="2차 위험평가">
              <p className="info-title">
                <span className="hide">4단계</span>
                2차 위험평가
              </p>
            </a>
            <span className="after-arrow"></span>
          </li>
          <li>
            <a href="javascript:void(0);" data-label="종결">
              <p className="info-title">
                <span className="hide">5단계</span>
                종결
              </p>
            </a>
          </li>
        </ol>
      </div>
      {/* 업무관련 버튼 */}
      <div className="process-btns">
        <button type="button" className="btn-sm btn_text btn-blue">
          보고서 묶기 처리
        </button>
        <button type="button" className="btn-sm btn_text btn-blue">
          SRC Approval
        </button>
        <button type="button" className="btn-sm btn_text btn-blue">
          SRC Reject
        </button>
      </div>
      {/* //  업무관련 버튼 */}

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

export default ReportList;
