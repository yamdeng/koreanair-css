import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppSelect from '@/components/common/AppSelect';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { Editor } from '@toast-ui/react-editor';
import { DatePicker, TreeSelect } from 'antd';
import { useState } from 'react';
import Modal from 'react-modal';
import AppTreeSelect from '@/components/common/AppTreeSelect';
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

function UserEditModal(props) {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const { isOpen, closeModal } = props;
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };

  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={'alert-modal-overlay'}
      className={'list-common-modal-content'}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <div className="popup-container">
        <h3 className="pop_title">사용자 등록 모달</h3>
        <div className="pop_full_cont_box">
          <div className="pop_flex_group">
            <div className="pop_cont_form">
              {/*등록 */}
              <div className="editbox">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppSelect
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
                      {/*<span className="errorText">auto complete error message</span>*/}
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100 mr5">
                      <input type="text" className="form-tag" placeholder="" disabled />
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
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
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100 mr5">
                      {/*기상조건 */}
                      <textarea
                        id="testArea1"
                        className="form-tag"
                        style={{ width: '100%' }}
                        name="testArea1"
                        value={inputValue}
                        onChange={(event) => {
                          setInputValue(event.target.value);
                        }}
                      />
                      <label className="f-label" htmlFor="testArea1">
                        텍스트 area <span className="required">*</span>
                      </label>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100 mr5">
                      {/*기상조건 */}
                      <Editor
                        hideModeSwitch={true}
                        initialEditType="wysiwyg"
                        previewStyle="vertical"
                        // initialValue={initValue}
                        height={'500px'}
                        // onChange={() => {}}
                        usageStatistics={false}
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
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="df">
                        <div className="date1 ">
                          <AppDatePicker status="" id="date1" className="label-picker" placeholder="" />{' '}
                          {/* status="error" */}
                          <label className="f-label" htmlFor="date1">
                            date1-1 <span className="required"></span>
                          </label>
                          {/*<span className="errorText">date1 error</span>*/}
                        </div>
                        <span className="unt">~</span>
                        <div className="date2 wid50">
                          <AppDatePicker status="" id="date2" className="label-picker" placeholder="" />{' '}
                          {/* status="error" */}
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
                        <div className="date3 wid100">
                          <AppTimePicker
                            className="label-picker wid100"
                            id="date3"
                            minuteStep={15}
                            secondStep={10}
                            hourStep={1}
                            status=""
                          />
                          <label className="f-label" htmlFor="date3">
                            TimePicker1 <span className="required">*</span>
                          </label>
                          {/*<span className="errorText">date1 error</span>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group form-glow wid50">
                      <AppSelect
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
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group form-glow wid100">
                      <AppAutoComplete id="select4" />
                      <label className="f-label" htmlFor="select4">
                        AutoComplete1개 <span className="required">*</span>
                      </label>
                      <span className="errorText">auto complete error message</span>
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group form-glow wid100">
                      <AppTreeSelect
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
              {/*//등록 */}
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            취소
          </button>
          <button disabled className="btn_text text_color_neutral-90 btn-disabled" onClick={closeModal}>
            취소
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            확인
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>
    </Modal>
  );
}

function PUserEditModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>사용자 등록 모달</h3>
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            사용자 등록 모달 open
          </button>
        </p>
        <UserEditModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PUserEditModal;
