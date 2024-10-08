import { useState } from 'react';
import Modal from 'react-modal';

function TestModal(props) {
  const { isOpen, closeModal } = props;

  /*

    overlayClassName : alert-modal-overlay, middle-modal-overlay, full-modal-overlay
     : 크기에 따라 클래스 정의

    className : {커스텀}-modal-content
     모달 마다 별도의 class를 정의해서 커스텀하게 관리

  */
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
          X
        </span>
      </div>
    </Modal>
  );
}

function ModalTemplate() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        신규파일명
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            test modal open
          </button>
        </p>
        <TestModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default ModalTemplate;
