import { useState } from 'react';
import Modal from 'react-modal';

function PdfModal(props) {
  const { isOpen, closeModal } = props;
  const pdfDownloadUrl = '/pdf/tree_capture.pdf';
  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={'alert-modal-overlay'}
      className={'pdf-download-modal-content'}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <div className="loading-bar bg"></div>
      <div className="popup-container">
        <h3 className="pop_title">
          <h3 className="pop_title">{'Manual'}</h3>
        </h3>
        <div className="pdf_document">
          <iframe style={{ width: '100%', height: '100vh' }} src={pdfDownloadUrl}></iframe>
        </div>

        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>
    </Modal>
  );
}

function PPdfModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        PPdfModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            pdf modal open
          </button>
        </p>
        <PdfModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PPdfModal;
