import { useState } from 'react';
import Modal from 'react-modal';
import { DatePicker, TimePicker, TreeSelect, Select as AntSelect } from 'antd';
import AppTextInput from '@/components/common/AppTextInput';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTextArea from '@/components/common/AppTextArea';

const options = [
  { value: 'chocolate', label: 'Chocolate Chocolate Chocolate ChocolateChocolateChocolateChocolate' },
  { value: 'strawberry', label: 'StrawberryStrawberryStrawberryStrawberryStrawberryStrawberryStrawberry' },
  { value: 'vanilla', label: 'VanillaVanillaVanillaVanillaVanillaVanillaVanilla' },
];

function AdminSafetyDetailModal(props) {
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
        <h3 className="pop_title">안전목표 상세</h3>
        <div className="pop_lg_cont_box">
          <div className="pop_flex_group">
            <div className="pop_cont_form">
              <div className="editbox">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextInput label={'연도'} placeholder="2024" required disabled />
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextArea
                        label="정성목표"
                        errorMessage=""
                        placeholder="
인적 요인 등 핵심 리스크 집중 관리를 통한 안전화
기업 결합 등 경영환경 변화에 대비한 선제적 변화관리"
                        required
                      />
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextArea
                        label="정량목표"
                        errorMessage=""
                        placeholder="                       
운항요인 항공기 사고 및 활주로 관련 지표 발생 0건
운항요인 안전지표 발생률 5% 감 (전년 목표 대비)
* 1만 비행편당 1.53건(‘23년 가중평균) > 1.45건(‘24년 목표)"
                        required
                      />
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextInput inputType="number" label={'목표치(SPT)'} placeholder="1.45" required />
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="group-box-wrap wid100">
                      <span className="txt">
                        사용여부<span className="required">*</span>
                      </span>
                      <div className="radio-wrap ">
                        <label>
                          <input type="checkbox" checked />
                          <span>예</span>
                        </label>
                        <label>
                          <input type="checkbox" />
                          <span>아니오</span>
                        </label>
                      </div>
                      <span className="errorText"></span>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
              </div>
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            수정
          </button>
          <button disabled className="btn_text btn-disabled btn-type01">
            삭제
          </button>
        </div>
        <span className="pop_close">X</span>
      </div>
    </Modal>
  );
}

function PAdminSafetyDetailModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        AdminSafetyModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            AdminSafetyModal modal open
          </button>
        </p>
        <AdminSafetyDetailModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PAdminSafetyDetailModal;
