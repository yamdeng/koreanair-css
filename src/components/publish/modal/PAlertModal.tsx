import { useState } from 'react';
import Modal from 'react-modal';

function AlertModal(props) {
  const { displayModal, closeModal } = props;
  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={displayModal}
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
          <button className="btn_text btn_green" onClick={closeModal}>
            확인
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          <i className="fas fa-times"></i>
        </span>
      </div>
    </Modal>
  );
}

function PAlertModal() {
  const [displayModal, setDisplayModal] = useState(false);
  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <div>
        PAlertModal
        <p>
          <button className="button" onClick={() => setDisplayModal(true)}>
            alert modal open
          </button>
        </p>
        <AlertModal displayModal={displayModal} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PAlertModal;