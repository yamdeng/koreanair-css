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

function POccupationMu3P5list() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;

  const customButtons = [
    {
      title: '행추가',
      onClick: () => {
        alert('행추가');
      },
    },
    {
      title: '전체삭제',
      onClick: () => {
        alert('전체삭제');
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
            <a href="javascript:void(0);">협력업체</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>협력업체</h2>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail active">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label={'업체명'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                <AppSelect label={'사업장 분류'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'사용부문'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppAutoComplete label={'관리부서'} />
              </div>
            </div>
            <div className="btn-area">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                검색
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className="">
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
      </div>
      {/*//그리드영역 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          등록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationMu3P5list;
