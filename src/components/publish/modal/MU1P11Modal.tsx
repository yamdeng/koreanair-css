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
        <h3 className="pop_title">실적 등록</h3>
        <div className="pop_lg_cont_box">
          <div className="pop_flex_group">
            <div className="pop_cont_form">
              {/*등록 */}
              <div className="editbox">
                <div className="form-table">
                  <div className="form-table line">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppDatePicker label={'년도'} />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="구분" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="Department" />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line dp-n"></hr>
                <div className="form-table line">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppSelect label="Cost Center" />
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppSelect label="Account Name" />
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextInput label="Account" />
                    </div>
                  </div>
                </div>
                <hr className="line dp-n"></hr>
                <div className="form-table line">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppDatePicker label={'Invoice date'} />
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextInput label="Invoice Number" />
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextInput label="Amount" />
                    </div>
                  </div>
                </div>
                <hr className="line dp-n"></hr>
                <div className="form-table line">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextInput label="Supplier" />
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppDatePicker label={'GL date'} />
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextInput label="Description" />
                    </div>
                  </div>
                </div>
                <hr className="line dp-n"></hr>
                <div className="form-table line">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextInput label="등록자" />
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppDatePicker label={'등록일자'} />
                    </div>
                  </div>
                </div>
                <hr className="line dp-n"></hr>
              </div>
              {/*//등록 */}
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            저장
          </button>
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            닫기
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>
    </Modal>
  );
}

function MU1P11Modal() {
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

export default MU1P11Modal;
