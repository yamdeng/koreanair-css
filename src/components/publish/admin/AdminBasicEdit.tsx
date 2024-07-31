import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { useState } from 'react';
import Select from 'react-select';
import { DatePicker, TimePicker, TreeSelect, Select as AntSelect } from 'antd';
import AppAutoComplete from '@/components/common/AppAutoComplete';
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
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };
  return (
    <>
      <div className="conts-title">
        <h2>Taxonomy 등록</h2>
      </div>
      {/*등록 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AntSelect
                id="select1"
                status="error"
                style={{ width: '100%' }}
                className="label-select"
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
              <label className="f-label" htmlFor="select1">
                Level 1 <span className="required">*</span>
              </label>
              <span className="errorText">auto complete error message</span>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100 mr5">
              <input type="text" className="form-tag" placeholder="" disabled />
            </div>
          </div>
        </div>
      </div>

      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100 mr5">
              {/*기상조건 */}
              <input
                id="firstInput3"
                type="text"
                className="form-tag"
                name="title"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
              <label className="f-label" htmlFor="firstInput3">
                위해요인 내용 <span className="required">*</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="df">
                <div className="date1 ">
                  <DatePicker status="" id="date1" className="label-picker" placeholder="" /> {/* status="error" */}
                  <label className="f-label" htmlFor="date1">
                    date1-1 <span className="required"></span>
                  </label>
                  {/*<span className="errorText">date1 error</span>*/}
                </div>
                <span className="unt">~</span>
                <div className="date2 wid50">
                  <DatePicker status="" id="date2" className="label-picker" placeholder="" /> {/* status="error" */}
                  <label className="f-label" htmlFor="date2">
                    date1-1 <span className="required"></span>
                  </label>
                  {/*<span className="errorText">date2 error</span>*/}
                </div>
              </div>
              <span className="errorText">time picker(range) error message</span>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group form-glow">
              <div className="df">
                <div className="date3 wid50">
                  <TimePicker
                    className="label-picker wid50"
                    id="date3"
                    minuteStep={15}
                    secondStep={10}
                    hourStep={1}
                    status=""
                  />
                  <label className="f-label" htmlFor="date3">
                    TimePicker1개 <span className="required">*</span>
                  </label>
                  {/*<span className="errorText">date1 error</span>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group form-glow">
              <div className="df">
                <div className="date3 wid50">
                  <TimePicker.RangePicker className="label-picker wid100" status="error" />
                  <label className="f-label" htmlFor="date3">
                    TimePicker2개 <span className="required">*</span>
                  </label>
                  {/*<span className="errorText">date1 error</span>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group form-glow wid50">
              <AntSelect
                mode="multiple"
                id="select2"
                allowClear
                className="label-select wid100"
                placeholder="Please select"
                options={options2}
              />
              <label className="f-label" htmlFor="select2">
                select(multiple)1개 <span className="required">*</span>
              </label>
              <span className="errorText">auto complete error message</span>
            </div>
          </div>
        </div>
      </div>

      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group form-glow wid100">
              {/* <Select
                id="select4"
                defaultValue={[]}
                options={options}
                isMulti
                name="colors"
                className="basic-multi-select"
                classNamePrefix="select"
                classNames={{
                  control: (state) => (!state.isFocused ? 'select-in-valid' : ''),
                }}
              /> */}
              <AppAutoComplete id="select4" />
              <label className="f-label" htmlFor="select4">
                AutoComplete1개 <span className="required">*</span>
              </label>
              <span className="errorText">auto complete error message</span>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group form-glow wid100">
              <TreeSelect
                id="select51"
                showSearch
                treeCheckable
                className="label-select wid100"
                dropdownStyle={{
                  maxHeight: 400,
                  overflow: 'auto',
                }}
                allowClear
                treeDefaultExpandAll
                treeData={treeData}
                value={selectedTreeData}
                onChange={onTreeSelectChange}
                status="error"
              />
              <label className="f-label" htmlFor="select51">
                tree <span className="required">*</span>
              </label>
              <span className="errorText">auto complete error message</span>
            </div>
          </div>
        </div>
      </div>

      <div className="info-wrap toggle">
        <dl className="tg-item active">
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt>
            <button type="button" className="btn-tg">
              Level 1 <span className="required">*</span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AntSelect
                          id="select1"
                          status="error"
                          style={{ width: '100%' }}
                          className="label-select"
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
                        <label className="f-label" htmlFor="select1">
                          Event Class <span className="required">*</span>
                        </label>
                        <span className="errorText">auto complete error message</span>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100 mr5">
                        <input type="text" className="form-tag" placeholder="" disabled />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
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
