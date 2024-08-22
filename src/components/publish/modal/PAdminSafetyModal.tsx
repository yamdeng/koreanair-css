import { useState } from 'react';
import Modal from 'react-modal';
import { DatePicker, TimePicker, TreeSelect, Select as AntSelect } from 'antd';
import AppTextInput from '@/components/common/AppTextInput';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTextArea from '@/components/common/AppTextArea';

const options = [
  { value: 'chocolate', label: 'Chocolate Chocolate Chocolate ChocolateChocolateChocolateChocolate' },
  { value: 'strawberry', label: 'StrawberryStrawberryStrawberryStrawberryStrawberryStrawberryStrawberry' },
  { value: 'vanilla', label: 'VanillaVanillaVanillaVanillaVanillaVanillaVanilla' },
];

function AdminSafetyModal(props) {
  const { isOpen, closeModal } = props;
  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={'alert-modal-overlay'}
      className={'alert-modal-content'}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <div className="popup-container">
        <h3 className="pop_title">안전목표 신규</h3>
        <div className="pop_lg_cont_box">
          <div className="pop_flex_group">
            <div className="editbox">
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppDatePicker label={'연도 '} required />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextArea label="정성목표" errorMessage="" required />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextArea label="정량목표" errorMessage="" required />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput inputType="number" label={'목표치(SPT)'} required />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button type="button" name="button" className="btn_text text_color_neutral-10 btn_conblue">
            임시저장
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            저장
          </button>
          <button disabled className="btn_text btn-disabled btn-type01">
            삭제
          </button>
        </div>
        <span className="pop_close">X</span>
      </div>
    </Modal>
  );
}

function PAdminSafetyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        AdminSafetyModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            AdminSafetyModal modal open
          </button>
        </p>
        <AdminSafetyModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PAdminSafetyModal;
