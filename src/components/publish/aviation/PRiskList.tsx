import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppAutoComplete from '@/components/common/AppAutoComplete';

function PRiskList() {
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
            <a href="javascript:void(0);">안전조사</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">조사보고서</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>조사보고서</h2>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label={'select'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group form-glow wid30">
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
          </div>
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'Event Class'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppAutoComplete label={'발생공항'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'발생단계'} />
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
          {/* <div className="btn-area">
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              조회
            </button>
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              초기화
            </button>
          </div> */}
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
          {/* 선택된 class명에 active */}
          <li className="active">
            <a href="javascript:void(0);" data-label="작성">
              <p className="info-title active">
                {/* 선택된 class명에 active */}
                <span className="hide">1단계</span>
                작성
              </p>
            </a>
            <span className="after-arrow"></span>
          </li>
          <li className="">
            <a href="javascript:void(0);" data-label="결제">
              <p className="info-title ">
                <span className="hide">2단계</span>
                결제
              </p>
            </a>
            <span className="after-arrow"></span>
          </li>
          <li>
            <a href="javascript:void(0);" data-label="안전권고">
              <p className="info-title">
                <span className="hide">3단계</span>
                안전권고
              </p>
            </a>
            <span className="after-arrow"></span>
          </li>
          <li>
            <a href="javascript:void(0);" data-label="종결">
              <p className="info-title">
                <span className="hide">4단계</span>
                종결
              </p>
            </a>
          </li>
        </ol>
      </div>

      {/*그리드영역 */}
      <div className="">
        <AppTable rowData={rowData} columns={columns} useColumnDynamicSetting />
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

export default PRiskList;
