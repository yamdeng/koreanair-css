import { useState } from 'react';
import { DatePicker, TimePicker, TreeSelect } from 'antd';
import Select from 'react-select';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';

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

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function AdminBasicFormOther() {
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };
  return (
    <>
      <h3>폼에서 사용하는 라이브러리 컴포넌트</h3>

      <h3>DatePicker</h3>
      <div style={{ width: '50%' }}>
        <DatePicker onChange={onChange} style={{ width: '100%' }} status="error" />
        <span>data picker error message</span>
      </div>

      <h3>TimePicker</h3>
      <div style={{ width: '50%' }}>
        <TimePicker minuteStep={15} secondStep={10} hourStep={1} style={{ width: '100%' }} status="error" />
        <span>time picker error message</span>
      </div>

      <h3>DatePicker : Range</h3>
      <div style={{ width: '50%' }}>
        <RangePicker style={{ width: '100%' }} status="error" />
        <span>date picker(range) error message</span>
      </div>

      <h3>TimePicker : Range</h3>
      <div style={{ width: '50%' }}>
        <TimePicker.RangePicker style={{ width: '100%' }} status="error" />
        <span>time picker(range) error message</span>
      </div>

      <h3>AutoComplete</h3>
      <div style={{ width: '50%' }}>
        <Select
          defaultValue={[]}
          onChange={setSelectedOption}
          options={options}
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          classNames={{
            control: (state) => (!state.isFocused ? 'select-in-valid' : ''),
          }}
        />
        <span>auto complete error message</span>
      </div>

      <h3>TreeSelect</h3>
      <div style={{ width: '50%' }}>
        <TreeSelect
          showSearch
          treeCheckable
          style={{
            width: '100%',
          }}
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
        <span>tree-select error message</span>
      </div>

      <h3>Editor</h3>
      <div style={{ width: '50%' }}>
        <div className="editor-in-valid">
          <Editor
            hideModeSwitch={true}
            initialEditType="wysiwyg"
            previewStyle="vertical"
            // initialValue={initValue}
            height={'500px'}
            // onChange={() => {}}
            usageStatistics={false}
            plugins={[colorSyntax, tableMergedCell]}
            customHTMLSanitizer={(html) => {
              return html;
            }}
            viewer={true}
            autofocus={false}
            customHTMLRenderer={{
              htmlBlock: {
                table(node) {
                  return [
                    { type: 'openTag', tagName: 'table', outerNewLine: true, attributes: node.attrs },
                    { type: 'html', content: node.childrenHTML },
                    { type: 'closeTag', tagName: 'table', outerNewLine: true },
                  ];
                },
              },
            }}
          />
        </div>
        <span>editor error message</span>
      </div>

      <h3>전체 나열</h3>
      <div>
        <DatePicker onChange={onChange} status="error" />
        <TimePicker minuteStep={15} secondStep={10} hourStep={1} status="error" />
        <RangePicker status="error" />
        <TimePicker.RangePicker status="error" />
        <Select
          defaultValue={[]}
          onChange={setSelectedOption}
          options={options}
          isMulti
          name="colors"
          classNames={{
            control: (state) => (!state.isFocused ? 'select-in-valid' : ''),
          }}
        />
        <TreeSelect
          showSearch
          treeCheckable
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
        <Editor
          hideModeSwitch={true}
          initialEditType="wysiwyg"
          previewStyle="vertical"
          // initialValue={initValue}
          height={'500px'}
          // onChange={() => {}}
          usageStatistics={false}
          plugins={[colorSyntax, tableMergedCell]}
          customHTMLSanitizer={(html) => {
            return html;
          }}
          viewer={true}
          autofocus={false}
          customHTMLRenderer={{
            htmlBlock: {
              table(node) {
                return [
                  { type: 'openTag', tagName: 'table', outerNewLine: true, attributes: node.attrs },
                  { type: 'html', content: node.childrenHTML },
                  { type: 'closeTag', tagName: 'table', outerNewLine: true },
                ];
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default AdminBasicFormOther;
