import { useState } from 'react';
import Modal from 'react-modal';
import AppTextArea from '@/components/common/AppTextArea';

function ReportListModal(props) {
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
        <h3 className="pop_title">반려사유 입력</h3>
        <div className="pop_cont">
          <div className="tc mt10">
            <div className="form-table line">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <AppTextArea label={'반려사유'} style={{ width: '100%', height: 100 }} />
                </div>
              </div>
            </div>
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

function PReportListModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        PReportListModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            ReportList modal open
          </button>
        </p>
        <ReportListModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PReportListModal;
