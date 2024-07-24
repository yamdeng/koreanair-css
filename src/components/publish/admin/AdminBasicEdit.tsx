import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { useState } from 'react';
import Select from 'react-select';
import { DatePicker, TimePicker, TreeSelect, Select as AntSelect } from 'antd';
const options2 = [];
for (let i = 10; i < 36; i++) {
  options2.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const options = [
  { value: 'chocolate', label: 'Chocolate Chocolate Chocolate ChocolateChocolateChocolateChocolate' },
  { value: 'strawberry', label: 'StrawberryStrawberryStrawberryStrawberryStrawberryStrawberryStrawberry' },
  { value: 'vanilla', label: 'VanillaVanillaVanillaVanillaVanillaVanillaVanilla' },
];

const { RangePicker } = DatePicker;
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf2',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf3',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf4',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf5',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf6',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf11',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf11
              </b>
            ),
          },
        ],
      },
    ],
  },
];

function AdminBasicEdit() {
  const [selectedOption, setSelectedOption] = useState();
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };
  return (
    <>
      <div className="conts-title">
        <h2>Taxonomy 등록</h2>
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
      {/*등록 */}
      <div className="detail-form">
        <ul className="detail-list">
          <li className="list">
            <div className="list-row wid50">
              <label className="f-label">
                Level 1 <span className="required">*</span>
              </label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <span className="form-group wid100">
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
                      <span className="errorText">data picker error message</span>
                    </span>
                  </div>
                  <div className="form-cell wid50">
                    <span className="form-group wid100 mr5">
                      <input type="text" className="form-tag" placeholder="" disabled />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list">
            <div className="list-row wid50">
              <label className="f-label">data picker</label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <span className="form-group form-glow">
                      <div className="df">
                        <div className="wid100">
                          <DatePicker className="wid100" />
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list">
            <div className="list-row wid50">
              <label className="f-label">data picker</label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <span className="form-group form-glow">
                      <div className="df">
                        <div className="wid100">
                          <DatePicker className="wid100" status="" /> {/* status="error" */}
                        </div>
                        <span className="until">~</span>
                        <div className="wid100">
                          <DatePicker className="wid100" status="" />
                        </div>
                      </div>
                      <span className="errorText">time picker(range) error message</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list">
            <div className="list-row wid50">
              <label className="f-label">TimePicker1개</label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <span className="form-group form-glow">
                      <div className="df">
                        <div className="wid100">
                          <TimePicker className="wid100" minuteStep={15} secondStep={10} hourStep={1} status="" />
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list">
            <div className="list-row wid50">
              <label className="f-label">TimePicker2개</label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <span className="form-group form-glow">
                      <div className="df">
                        <div className="wid100">
                          <TimePicker.RangePicker className="wid100" status="error" />
                          <span className="errorText">time picker(range) error message</span>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list">
            <div className="list-row wid50">
              <label className="f-label">
                input1개 <span className="required">*</span>
              </label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid100">
                    <span className="form-group wid100 mr5">
                      <input type="text" className="form-tag" name="" placeholder="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-row wid50">
              <label className="f-label">
                input1개 <span className="required">*</span>
              </label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid100">
                    <span className="form-group wid100 mr5">
                      <input type="text" className="form-tag" name="" placeholder="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list">
            <div className="list-row wid50">
              <label className="f-label">
                select(multiple)1개 <span className="required">*</span>
              </label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid100">
                    <span className="form-group wid100 mr5">
                      <AntSelect
                        mode="multiple"
                        allowClear
                        className="wid100"
                        placeholder="Please select"
                        options={options2}
                      />
                      <span className="errorText">select(multiple) error message</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list">
            <div className="list-row wid50">
              <label className="f-label">
                AutoComplete1개 <span className="required">*</span>
              </label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid100">
                    <span className="form-group wid100 mr5">
                      <Select
                        defaultValue={[]}
                        options={options}
                        isMulti
                        name="colors"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        classNames={{
                          control: (state) => (!state.isFocused ? 'select-in-valid' : ''),
                        }}
                      />
                      <span className="errorText">auto complete error message</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list">
            <div className="list-row wid50">
              <label className="f-label">
                TreeSelect1개 <span className="required">*</span>
              </label>
              <div className="cont">
                <div className="form-table">
                  <div className="form-cell wid100">
                    <span className="form-group wid100 mr5">
                      <TreeSelect
                        showSearch
                        treeCheckable
                        className="wid100"
                        dropdownStyle={{
                          maxHeight: 400,
                          overflow: 'auto',
                        }}
                        placeholder="Please select"
                        allowClear
                        treeDefaultExpandAll
                        treeData={treeData}
                        value={selectedTreeData}
                        onChange={onTreeSelectChange}
                        status="error"
                      />
                      <span className="errorText">tree-select error message</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/*//등록 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button className="btn_text text_color_neutral-10 btn_confirm">저장</button>
        <button className="btn_text text_color_darkblue-100 btn_close">취소</button>
      </div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default AdminBasicEdit;
