import { useState } from 'react';
import Modal from 'react-modal';

function EditFormModal(props) {
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

function PEditFormModal() {
  const [displayModal, setDisplayModal] = useState(false);
  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <div>
        PEditFormModal
        <p>
          <button className="button" onClick={() => setDisplayModal(true)}>
            PEditFormModal modal open
          </button>
        </p>
        <EditFormModal displayModal={displayModal} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PEditFormModal;
