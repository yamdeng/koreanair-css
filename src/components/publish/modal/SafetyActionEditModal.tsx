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

function SafetyActionEditModal(props) {
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
        <h3 className="pop_title">Safety Action 관리</h3>

        <div className="pop_cont">
          {/*등록 */}
          <div className="editbox">
            <div className="form-table">
              <div className="form-table line">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="번호" disabled />
                  </div>
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table line">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppTextInput label="부서" />
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table line">
              <div className="form-cell wid50">
                <div className="form-group wid50">
                  <AppDatePicker label={'조치일자'} />
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table line">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppTextArea label="조치결과" style={{ width: '100%', height: 145 }} errorMessage="" placeholder="" />
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
          </div>
          {/*//등록 */}
        </div>
        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            삭제
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            임시저장
          </button>
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            닫기
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>

      {/*style="z-index: 1002; display: block; opacity: 0.5;"*/}
    </Modal>
  );
}

function PSafetyActionEditModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        {' '}
        Safety Action 관리(등록)
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            Safety Action 관리(등록) modal open
          </button>
        </p>
        <SafetyActionEditModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PSafetyActionEditModal;
