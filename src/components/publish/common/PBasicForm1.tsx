import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppEditor from '@/components/common/AppEditor';
import AppSelect from '@/components/common/AppSelect';
import AppTextArea from '@/components/common/AppTextArea';
import AppTextInput from '@/components/common/AppTextInput';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppTreeSelect from '@/components/common/AppTreeSelect';
import { DatePicker } from 'antd';
import { useState } from 'react';

/*

  TODO
   1.textarea
     -label, error border 미반영된 부분 반영
     -textarea 작성시 첫행이 들여쓰기가 됨

   2.에디터 라벨 및 필수 여부 어떻게 할지 고민 필요

*/
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

function PBasicForm1() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [selectValue2, setSelectValue2] = useState('');
  const [firstDateValue, setFirstDateValue] = useState('');
  const [firstDateRangeValue, setFirstDateRangeValue] = useState(['', '']);
  const [firstTimeValue, setFirstTimeValue] = useState('22:25:50');
  const [selectedOption, setSelectedOption] = useState();
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };

  const changeSelect = (selectValue) => {
    setSelectValue(selectValue);
  };
  return (
    <>
      <div className="conts-title">
        <h2>Taxonomy 등록</h2>
      </div>
      {/*등록 */}
      <div className="editbox">
        {/* 1행 */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput
                value={inputValue}
                label="일반 text-input"
                onChange={(value) => {
                  setInputValue(value);
                }}
                required
              />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/* 2행 */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput
                value={inputValue}
                label="일반 text-input"
                onChange={(value) => {
                  setInputValue(value);
                }}
                errorMessage="bbbb"
              />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput
                inputType="number"
                value={inputValue2}
                label="일반 number-input"
                onChange={(value) => {
                  setInputValue2(value);
                }}
              />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/* 3행 */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextArea
                value={inputValue}
                label="일반 textarea"
                onChange={(value) => {
                  setInputValue(value);
                }}
                errorMessage="textarea-error"
                required
              />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/* 4행 */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppEditor placeholder="입력해주세요." errorMessage="editor error" />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/* 5행 */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput
                value={inputValue}
                label="일반 text-input"
                onChange={(value) => {
                  setInputValue(value);
                }}
              />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect
                label={'select'}
                value={selectValue}
                onChange={changeSelect}
                options={options}
                errorMessage={'aaaa'}
              />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/* 6행 */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppDatePicker
                label={'date'}
                onChange={(value) => setFirstDateValue(value)}
                value={firstDateValue}
                errorMessage="errorTest"
              />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/* 7행 */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppDatePicker label={'date'} onChange={(value) => setFirstDateValue(value)} value={firstDateValue} />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTimePicker
                label={'time'}
                onChange={(value) => setFirstTimeValue(value)}
                value={firstTimeValue}
                errorMessage="time-errorTest"
              />
            </div>
          </div>
        </div>

        <hr className="line"></hr>
        {/* 8행 */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="df">
                <div className="date1 ">
                  <AppDatePicker label="start" />
                </div>
                <span className="unt">~</span>
                <div className="date2 wid50">
                  <AppDatePicker label="end" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group form-glow">
              <div className="df">
                <div className="date3 wid100">
                  <AppTimePicker label="시간" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/* 9행 */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group form-glow wid50">
              <AppSelect mode="multiple" options={options2} label="멀티select" />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group form-glow wid100">
              <AppAutoComplete label="auto검색" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group form-glow wid100">
              <AppTreeSelect
                treeData={treeData}
                value={selectedTreeData}
                onChange={onTreeSelectChange}
                treeDefaultExpandAll
                label="treeSelect"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button className="btn_text text_color_neutral-10 btn_confirm">저장</button>
        <button className="btn_text text_color_darkblue-100 btn_close">취소</button>
      </div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default PBasicForm1;
