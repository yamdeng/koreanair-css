import { useState } from 'react';
import Modal from 'react-modal';
import AppTextInput from '@/components/common/AppTextInput';

function ColumnUserSaveModal(props) {
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
        <h3 className="pop_title">컬럼 저장 모달</h3>
        <div className="pop_cont">
          <div className="tablebox">
            <table className="columntable">
              <colgroup>
                <col width="10%" />
                <col width="*" />
                <col width="40%" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </th>
                  <th>Display Text</th>
                  <th>Width</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="form-group wid100">
                      <AppTextInput placeholder="Dept" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group wid100">
                      <AppTextInput placeholder="150" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="pop_btns">
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            저장
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

function PColumnUserSaveModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        PColumnUserSaveModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            PColumnUserSaveModal open
          </button>
        </p>
        <ColumnUserSaveModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PColumnUserSaveModal;
