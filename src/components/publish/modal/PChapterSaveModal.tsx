import { useState } from 'react';
import Modal from 'react-modal';
import AppTextInput from '@/components/common/AppTextInput';

function ChapterSaveModal(props) {
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
        <h3 className="pop_title">Chapter 저장</h3>
        <div className="pop_cont">
          <div className="editbox">
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppTextInput label="안전보안일반12" />
                  {/*<span className="errorText">auto complete error message</span>*/}
                </div>

                <div className="radio-wrap border-no">
                  <label>
                    <input type="checkbox" checked />
                    <span>Revision 업데이트</span>
                  </label>
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

function PChapterSaveModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        PChapterSaveModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            ChapterSave modal open
          </button>
        </p>
        <ChapterSaveModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PChapterSaveModal;
