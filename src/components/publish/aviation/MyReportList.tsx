import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppAutoComplete from '@/components/common/AppAutoComplete';

function MyReportList() {
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
            <a href="javascript:void(0);">안전보고서</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">My Report</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>My Report</h2>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'보고서종류'} />
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
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'상태'} />
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label={'제목'} />
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

      {/* 마이리포트 프로세스 */}
      <div className="">
        <div className="c-step-wrap">
          <ol className="c-step-list-type-5">
            <li>
              <a href="javascript:void(0);" data-label="작성">
                <p className="info-title active">
                  <span className="hide">1단계</span>
                  작성중(<strong>1</strong>)건
                </p>
              </a>
              <span className="after-arrow"></span>
            </li>
            <li className="">
              <a href="javascript:void(0);" data-label="결제">
                <p className="info-title active">
                  <span className="hide">2단계</span>
                  제출완료(<strong>0</strong>)건
                </p>
              </a>
              <span className="after-arrow"></span>
            </li>
            <li>
              <a href="javascript:void(0);" data-label="안전권고">
                <p className="info-title active">
                  <span className="hide">3단계</span>
                  접수중(<strong>0</strong>)건
                </p>
              </a>
              <span className="after-arrow"></span>
            </li>
            <li>
              <a href="javascript:void(0);" data-label="안전권고">
                <p className="info-title active">
                  <span className="hide">4단계</span>
                  처리중(<strong>0</strong>)건
                </p>
              </a>
              <span className="after-arrow"></span>
            </li>
            <li>
              <a href="javascript:void(0);" data-label="종결">
                <p className="info-title active">
                  <span className="hide">5단계</span>
                  종결(<strong>0</strong>)건
                </p>
              </a>
            </li>
          </ol>
        </div>
        {/* <div className="c-step-wrap">
          <ol className="c-step-list-type-0">
            <li>
              <a href="javascript:void(0);" data-label="이관">
                <p className="info-title active">
                  <span className=""></span>
                  이관(<strong>0</strong>)건
                </p>
              </a>
            </li>
          </ol>
        </div> */}
      </div>

      {/*그리드영역 */}
      <div className="">
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default MyReportList;
