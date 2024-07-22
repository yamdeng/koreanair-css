import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';

function PRiskForm1() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="conts-title">
        <h2>조사보고서</h2>
        <div className="btn-area">
          <button type="button" name="button" className="btn-sm btn-darkblue">
            조회
          </button>
          <button type="button" name="button" className="btn-sm btn-darkblue">
            신규
          </button>
          <button type="button" name="button" className="btn-sm btn-darkblue">
            초기화
          </button>
        </div>
      </div>

      {/*검색영역 */}
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
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className="">그리드영역</div>
      {/*//그리드영역 */}

      <div className="pagination">
        <a className="first" href="javascript:void(0)">
          <span className="sr-only">이전</span>
        </a>
        <a className="prev" href="javascript:void(0)">
          <span className="sr-only">이전</span>
        </a>
        <span>
          <a href="javascript:void(0)">1</a>
          <a href="javascript:void(0)">2</a>
          <strong title="현재페이지">3</strong>
          <a href="javascript:void(0)">4</a>
          <a href="javascript:void(0)">5</a>
        </span>
        <a className="next" href="javascript:void(0)">
          <span className="sr-only">다음</span>
        </a>
        <a className="last" href="javascript:void(0)">
          <span className="sr-only">다음</span>
        </a>
      </div>
    </>
  );
}

export default PRiskForm1;
