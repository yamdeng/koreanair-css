import { useState } from 'react';
import Modal from 'react-modal';

function DetailFormModal(props) {
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
        <h3 className="pop_title">제목</h3>
        <p className="pop_cont" dangerouslySetInnerHTML={{ __html: '' }} />
        <div className="pop_btns">
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

function PDetailFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        PDetailFormModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            PDetailFormModal modal open
          </button>
        </p>
        <DetailFormModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PDetailFormModal;
