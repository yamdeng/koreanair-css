import { Editor } from '@toast-ui/react-editor';
import { useState } from 'react';
import Modal from 'react-modal';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTable from '@/components/common/AppTable';
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

function UserViewModal(props) {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const { displayModal, closeModal } = props;
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };

  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={displayModal}
      ariaHideApp={false}
      overlayClassName={'alert-modal-overlay'}
      className={'list-common-modal-content'}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <div className="popup-container">
        <h3 className="pop_title">사용자 상세 모달</h3>
        <div className="pop_full_cont_box">
          <div className="pop_flex_group">
            <div className="pop_cont_form">
              {/*상세페이지 */}
              <div className="boxForm">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              사번 <span className="required">*</span>
                            </label>
                            <span className="text-desc">123456789</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              사용자 명(한국어)
                              <span className="required">*</span>
                            </label>
                            <span className="text-desc">테스트1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              사용자 명(영어)
                              <span className="required">*</span>
                            </label>
                            <span className="text-desc">Test1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              사용자 명(중국어)
                              <span className="required">*</span>
                            </label>
                            <span className="text-desc">Test1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*//상세페이지 */}
              {/*toggle 상세페이지 */}
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
                      {/* 상세내용*/}
                      <div className="boxForm tog">
                        <div className="form-table">
                          <div className="form-cell wid50">
                            <div className="form-group wid100">
                              <div className="box-view-list">
                                <ul className="view-list">
                                  <li className="accumlate-list">
                                    <label className="t-label">
                                      사번 <span className="required">*</span>
                                    </label>
                                    <span className="text-desc">123456789</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="form-cell wid50">
                            <div className="form-group wid100">
                              <div className="box-view-list">
                                <ul className="view-list">
                                  <li className="accumlate-list">
                                    <label className="t-label">
                                      사용자 명(한국어)
                                      <span className="required">*</span>
                                    </label>
                                    <span className="text-desc">테스트1</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* //상세내용*/}
                    </div>
                  </dd>
                </dl>
              </div>
              {/*//toggle 상세페이지 */}
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            취소
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            확인
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          {/* <i className="fas fa-times"></i> */}X
        </span>
      </div>
    </Modal>
  );
}

function PUserViewModal() {
  const [displayModal, setDisplayModal] = useState(false);
  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <div>
        <h3>사용자 상세 모달</h3>
        <p>
          <button className="button" onClick={() => setDisplayModal(true)}>
            사용자 상세 모달 open
          </button>
        </p>
        <UserViewModal displayModal={displayModal} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PUserViewModal;
