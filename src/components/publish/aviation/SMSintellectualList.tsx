import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';

function SMSintellectualList() {
  const [inputValue, setInputValue] = useState('');
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
            <a href="javascript:void(0);">안전보증</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">SMS성숙도점검</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">지적사항</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>지적사항</h2>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label="Subject" />
              </div>
            </div>
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppSelect label="부문" />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group form-glow">
                <div className="df">
                  <AppSelect label="조회기간" />
                  <div className="ml3 date1">
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
          <div className="btn-area">
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              초기화
            </button>
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              조회
            </button>
          </div>
        </div>
        {/*__control명 옆에 active  */}
        <button type="button" name="button" className="arrow button _control active">
          <span className="hide">접기</span>
        </button>
      </div>
      {/* //검색영역 */}

      {/* 프로세스 */}
      <div className="c-step-wrap">
        <ol className="c-step-list-type-5">
          {/* 선택된 class명에 active */}
          <li className="active">
            <a href="javascript:void(0);" data-label="접수">
              <p className="info-title active">
                {/* 선택된 class명에 active */}
                <span className="hide">1단계</span>
                접수
              </p>
            </a>
            <span className="after-arrow"></span>
          </li>
          <li className="">
            <a href="javascript:void(0);" data-label="1차위험평가">
              <p className="info-title ">
                <span className="hide">2단계</span>
                1차위험평가
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
            <a href="javascript:void(0);" data-label="2차위험평가">
              <p className="info-title">
                <span className="hide">4단계</span>
                2차위험평가
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

      {/*그리드영역 */}
      <div className="">
        <AppTable rowData={rowData} columns={columns} />
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default SMSintellectualList;
