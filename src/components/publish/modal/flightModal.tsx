import { useState } from 'react';
import Modal from 'react-modal';

function AlertModal(props) {
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
        <h3 className="pop_title">비행정보 대상</h3>
        <div className="pop_cont">
          <p>
            2개 이상의 비행정보가 검색되었습니다.
            <br />
            조회할 대상 비행 정보를 선택해 주십시오.
          </p>
          <div className="flight-box mt-10">
            <ul>
              <li>
                <div className="form-cell wid50">
                  <div className="group-box-wrap wid100">
                    <div className="radio-wrap border-no">
                      <label>
                        <input type="radio" />
                        <span>CJU → ICN</span>
                      </label>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="form-cell wid50">
                  <div className="group-box-wrap wid100">
                    <div className="radio-wrap border-no">
                      <label>
                        <input type="radio" />
                        <span>ICN → GMP</span>
                      </label>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="form-cell wid50">
                  <div className="group-box-wrap wid100">
                    <div className="radio-wrap border-no">
                      <label>
                        <input type="radio" />
                        <span>CJU → ICN</span>
                      </label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pop_btns">
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            확인
          </button>
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            취소
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>
    </Modal>
  );
}

function flightModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        flightModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            alert modal open
          </button>
        </p>
        <AlertModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default flightModal;
