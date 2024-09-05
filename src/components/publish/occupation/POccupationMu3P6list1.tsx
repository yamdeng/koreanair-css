import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppRangeDatePicker from '@/components/common/AppRangeDatePicker';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppAutoComplete from '@/components/common/AppAutoComplete';

function POccupationMu3P6list1() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;

  const customButtons = [
    {
      title: '등록',
      onClick: () => {
        alert('등록');
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
            <a href="javascript:void(0);">적격수급업체 관리</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>적격수급업체 관리</h2>
      </div>
      <div className="division">
        <div className="check">
          {/*검색영역 */}
          <div className="boxForm">
            {/*area-detail명 옆에 active  */}
            <div className="area-detail active">
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppSelect label="부문" disabled />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="업체명" />
                  </div>
                </div>
              </div>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group form-glow">
                    <div className="df">
                      <div className="date1">
                        <AppDatePicker label="계약기간" />
                      </div>
                      <span className="unt">~</span>
                      <div className="date2">
                        <AppDatePicker label="계약기간" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppSelect label="최종 평가 분류" />
                  </div>
                </div>
              </div>
              <div className="btn-area mb-10">
                <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                  검색
                </button>
              </div>
            </div>
          </div>
          {/* //검색영역 */}
          {/*그리드영역 */}
          <div>
            <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
          </div>
          {/*//그리드영역 */}
        </div>
        <div className="center-btn">
          <button>버튼</button>
        </div>
        <div className="list ml-0">
          <h3>평가대상 선정</h3>
          {/*검색영역 */}
          <div className="boxForm">
            {/*area-detail명 옆에 active  */}
            <div className="area-detail active">
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppDatePicker label="평가년도" />
                  </div>
                </div>
                <div className="btn-area mb-10">
                  <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                    검색
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <AppTable rowData={rowData} columns={columns} />
          </div>
          <div className="btn-area-listpg mg-top">
            <button type="button" name="button" className="btn_text btn_confirm">
              저장
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default POccupationMu3P6list1;
