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
              <div className="form-group wid100 mr5">
                <input
                  type="text"
                  className="form-tag error"
                  name="title"
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                />
                {/**/}
                <label className="f-label">
                  Sbject <span className="required">*</span>
                </label>
                <span className="errorText">error message</span>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AntSelect
                  style={{ width: '100%' }}
                  status="error"
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
                <span className="errorText">auto complete error message</span>
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell ">
              <div className="form-group wid100">
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
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group form-glow">
                <div className="df">
                  <DatePicker status="" />
                  <span className="unt">~</span>
                  <DatePicker status="" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                {/*Event Class */}
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
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
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
                  발생공항 <span className="required">*</span>
                </label>
                <button type="button" className="icon-sch"></button>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100 mr5">
                {/*발생단계 */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/*보고서 조회 버튼 */}
      <div className="Report-list-wrap">
        <ol className="Report-list">
          <li className="Report-list-item">
            <a href="javascript:void(0);">
              <div className="imgbox active">
                <span className="icon -document -size48 -msize24"></span>
              </div>
            </a>
            <div className="Report-list-title">
              작성<span>(6)</span>
            </div>
          </li>
          <li className="Report-list-item">
            <div className="imgbox">
              <span className="icon -document -size48 -msize24"></span>
            </div>
            <div className="Report-list-title">
              결제<span>(6)</span>
            </div>
          </li>
          <li className="Report-list-item">
            <div className="imgbox">
              <span className="icon -document -size48 -msize24"></span>
            </div>
            <div className="Report-list-title">
              결제<span>(6)</span>
            </div>
          </li>
          <li className="Report-list-item -last">
            <div className="imgbox">
              <span className="icon -document -size48 -msize24"></span>
            </div>
            <div className="Report-list-title">
              결제<span>(6)</span>
            </div>
          </li>
        </ol>
      </div>
      {/*//보고서 조회 버튼 */}

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
