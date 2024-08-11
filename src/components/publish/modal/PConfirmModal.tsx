import { useState } from 'react';
import Modal from 'react-modal';

function ConfirmModal(props) {
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
        <h3 className="pop_title">제목</h3>
        <p
          className="pop_cont"
          dangerouslySetInnerHTML={{
            __html: 'asdasdasdas dasd asd asd asd asd asd asd asd asd sd sd asd asd asd asd as d',
          }}
        />
        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            취소
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            확인
          </button>
        </div>
        <span className="pop_close">{/* <i className="fas fa-times"></i> */}X</span>
      </div>
    </Modal>
  );
}

function PConfirmModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        PConfirmModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            confirm modal open
          </button>
        </p>
        <ConfirmModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PConfirmModal;
