import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function PRiskForm1() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  return (
    <>
      <div className="conts-title">
        <h2>조사보고서</h2>
        <div className="btn-area">
          <button type="button" name="button" className="btn-sm btn_text btn-lightblue">
            조회
          </button>
          <button type="button" name="button" className="btn-sm btn_text btn-lightblue">
            신규
          </button>
          <button type="button" name="button" className="btn-sm btn_text btn-lightblue">
            초기화
          </button>
        </div>
      </div>

      {/*검색영역 */}
      <div className="TopButton-area">
        {/*아코디언 - 펴기 버튼일때 btn-fold명 옆에 open붙이기  */}
        <button type="button" name="button" className="btn-fold"></button>

        <div className="boxForm">
          <div className="form-table">
            <div className="form-cell wid50">
              <span className="form-group wid100 mr5">
                <input
                  type="text"
                  className="form-tag"
                  name="title"
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                />
                <label className="f-label">
                  Sbject <span className="required">*</span>
                </label>
              </span>
            </div>
            <div className="form-cell wid50">
              <span className="form-group wid100">
                <AntSelect
                  style={{ width: '100%' }}
                  options={[
                    {
                      value: 'jack',
                      label: 'Jack',
                    },
                    {
                      value: 'lucy',
                      label: 'Lucy',
                    },
                    {
                      value: 'Yiminghe',
                      label: 'yiminghe',
                    },
                    {
                      value: 'disabled',
                      label: 'Disabled',
                      disabled: true,
                    },
                  ]}
                />
              </span>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell ">
              <span className="form-group wid100">
                <span className="form-group wid100">
                  <AntSelect
                    style={{ width: '100%' }}
                    options={[
                      {
                        value: 'jack',
                        label: 'Jack',
                      },
                      {
                        value: 'lucy',
                        label: 'Lucy',
                      },
                      {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                      },
                      {
                        value: 'disabled',
                        label: 'Disabled',
                        disabled: true,
                      },
                    ]}
                  />
                </span>
              </span>
            </div>
            <div className="form-cell wid50">
              <span className="form-group form-glow">
                <DatePicker status="" /> {/* status="error" */}
                <span>~</span>
                <DatePicker status="" />
                {/* <TimePicker minuteStep={15} secondStep={10} hourStep={1} status="error" /> */}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className="">
        <AppTable rowData={rowData} columns={columns} />
      </div>
      {/*//그리드영역 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button className="btn_text text_color_neutral-10 btn_confirm">출력</button>
        <button className="btn_text text_color_neutral-10 btn_confirm">저장</button>
        <button className="btn_text text_color_neutral-10 btn_confirm">제출</button>
        <button className="btn_text text_color_neutral-10 btn_confirm">목록</button>
      </div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default PRiskForm1;
