import { useState } from 'react';
import Modal from 'react-modal';
import { DatePicker, TimePicker, TreeSelect, Select as AntSelect } from 'antd';
import AppTextInput from '@/components/common/AppTextInput';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

const options = [
  { value: 'chocolate', label: 'Chocolate Chocolate Chocolate ChocolateChocolateChocolateChocolate' },
  { value: 'strawberry', label: 'StrawberryStrawberryStrawberryStrawberryStrawberryStrawberryStrawberry' },
  { value: 'vanilla', label: 'VanillaVanillaVanillaVanillaVanillaVanillaVanilla' },
];

function ChecklistModal(props) {
  const { isOpen, closeModal } = props;
  const rowData = getAllData();
  const columns = testColumnInfos;
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
        <h3 className="pop_title">법령</h3>
        <div className="pop_full_cont_box">
          <div className="pop_flex_group">
            <div className="pop_cont_form">
              <div className="boxForm">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextInput label="법규명" />
                    </div>
                  </div>
                  <div className="btn-area">
                    <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                      조회
                    </button>
                  </div>
                </div>
              </div>
              {/*그리드영역 */}
              <div className="table-box">
                <AppTable rowData={rowData} columns={columns} />
              </div>
              {/*//그리드영역 */}
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            닫기
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            선택
          </button>
        </div>
        <span className="pop_close">X</span>
      </div>
    </Modal>
  );
}

function MU1P8Modal2() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        MU1P8Modal2
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            Checklist modal open
          </button>
        </p>
        <ChecklistModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default MU1P8Modal2;
