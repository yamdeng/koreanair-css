import { useState } from 'react';
import Modal from 'react-modal';
import AppTextInput from '@/components/common/AppTextInput';

function ChecklistDeleteModal(props) {
  const { isOpen, closeModal } = props;
  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={'alert-modal-overlay'}
      className={'confirm-modal-content'}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <div className="popup-container">
        <h3 className="pop_title">Checklist 삭제</h3>
        <div className="pop_cont">
          <p className="pop_cont">
            체크리스트를 삭제하면 모든 챕터와 문항이 삭제됩니다. 삭제하시겠습니까?
            <br />
            체크리스트명을 아래에 입력하세요.
          </p>
          <div className="editbox">
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppTextInput label="안전보해외공항 안전평가 점검표 (ko)12" />
                  {/*<span className="errorText">auto complete error message</span>*/}
                </div>
              </div>
            </div>
            <hr className="line"></hr>
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
        <span className="pop_close">X</span>
      </div>
    </Modal>
  );
}

function PChecklistDeleteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        PChecklistDeleteModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            ChapterDelete modal open
          </button>
        </p>
        <ChecklistDeleteModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PChecklistDeleteModal;
