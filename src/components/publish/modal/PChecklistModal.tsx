import { useState } from 'react';
import Modal from 'react-modal';
import { DatePicker, TimePicker, TreeSelect, Select as AntSelect } from 'antd';

const options = [
  { value: 'chocolate', label: 'Chocolate Chocolate Chocolate ChocolateChocolateChocolateChocolate' },
  { value: 'strawberry', label: 'StrawberryStrawberryStrawberryStrawberryStrawberryStrawberryStrawberry' },
  { value: 'vanilla', label: 'VanillaVanillaVanillaVanillaVanillaVanillaVanilla' },
];

function ChecklistModal(props) {
  const { isOpen, closeModal } = props;
  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={'alert-modal-overlay'}
      className={'confirm-modal-content'}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <div className="popup-container">
        <h3 className="pop_title">Checklist 추가</h3>
        <div className="pop_cont">
          <div className="boxForm">
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AntSelect
                    id="select1"
                    status=""
                    style={{ width: '100%' }}
                    className="label-select"
                    options={[
                      {
                        value: 'jack',
                        label: 'Jack',
                      },
                      {
                        value: 'lucy',
                        label: 'Lucy',
                      },
                      {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                      },
                      {
                        value: 'disabled',
                        label: 'Disabled',
                        disabled: true,
                      },
                    ]}
                  />
                  <label className="f-label" htmlFor="select1">
                    Audit Type <span className="required">*</span>
                  </label>
                  {/*<span className="errorText">auto complete error message</span>*/}
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AntSelect
                    id="select2"
                    status=""
                    style={{ width: '100%' }}
                    className="label-select"
                    options={[
                      {
                        value: 'jack',
                        label: 'Jack',
                      },
                      {
                        value: 'lucy',
                        label: 'Lucy',
                      },
                      {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                      },
                      {
                        value: 'disabled',
                        label: 'Disabled',
                        disabled: true,
                      },
                    ]}
                  />
                  <label className="f-label" htmlFor="select2">
                    Checklist Type <span className="required">*</span>
                  </label>
                  {/*<span className="errorText">auto complete error message</span>*/}
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
        <span className="pop_close">{/* <i className="fas fa-times"></i> */}X</span>
      </div>
    </Modal>
  );
}

function PChecklistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        PChecklistModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            Checklist modal open
          </button>
        </p>
        <ChecklistModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PChecklistModal;
