import { useState } from 'react';
import Modal from 'react-modal';

function ReportLevelModal(props) {
  const { isOpen, closeModal } = props;
  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={'alert-modal-overlay'}
      className={'risk-level-search-content'}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <div className="popup-container">
        <h3 className="pop_title">위험레벨 조회</h3>
        <div className="pop_full_cont_box">
          <div className="pop_flex_group">
            <div className="tree_wrap"></div>
            <div></div>
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
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>
    </Modal>
  );
}

function PReportLevelModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        PReportLevelModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            ReportList modal open
          </button>
        </p>
        <ReportLevelModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PReportLevelModal;
