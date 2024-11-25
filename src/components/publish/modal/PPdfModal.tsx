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
      <div className="popup-container">
        <h3 className="pop_title">
          <h3 className="pop_title">{'Manual'}</h3>
        </h3>
        <div className="pop_cont pb_0">
          <div className="editbox">
            <div className="form-table wid100">
              <div className="form-cell wid100">
                <iframe style={{ width: '100%', height: '100vh' }} src={pdfDownloadUrl}></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="pop_btns mt-20">
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            확인
          </button>
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
