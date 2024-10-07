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
import AppTextInput from '@/components/common/AppTextInput';
import AppTable from '@/components/common/AppTable';

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

  const customButtons = [
    {
      title: '추가',
      onClick: () => {
        alert('추가');
      },
    },
  ];

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
        <h3 className="pop_title">공사장소 관리</h3>
        <div className="pop_full_cont_box">
          <div className="pop_flex_group">
            <div className="pop_cont_form pb_0">
              {/*검색영역 */}
              <div className="boxForm">
                {/*area-detail명 옆에 active  */}
                <div id="" className="area-detail active">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppAutoComplete label={'공사장소명'} />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label={'사용여부'} />
                      </div>
                    </div>
                    <div className="btn-area wid50 mb-10">
                      <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                        조회
                      </button>
                      <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                        초기화
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* //검색영역 */}
              <div className="modal-group-box">
                {/*그리드영역 */}
                <div className="left-group">
                  <h3 className="table-tit">공사장소 조회</h3>
                  <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
                </div>
                {/*//그리드영역 */}
                <div className="right-group">
                  <div className="group-box mb-20">
                    <div className="ck-edit-box">
                      <div className="ck-edit">
                        <div className="boxForm">
                          <h3 className="table-tit mt-10">공사장소 등록</h3>
                          <div className="form-table">
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppTextInput label="공사장소명" />
                              </div>
                            </div>
                          </div>
                          <div className="form-table">
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppSelect label="사용여부" />
                              </div>
                            </div>
                          </div>
                          <div className="btn-area mb-10">
                            <button type="button" name="button" className="btn_confirm text_color_neutral-10">
                              등록
                            </button>
                            <button type="button" name="button" className="btn_close">
                              취소
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>
    </Modal>
  );
}

function MU3P4Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>공사장소관리 모달</h3>
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            공사장소관리 모달 open
          </button>
        </p>
        <UserEditModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default MU3P4Modal;
