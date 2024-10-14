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

function PayGroupModal(props) {
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
        <h3 className="pop_title">결제그룹정보 설정</h3>
        <div className="pop_cont">
          <div className="pop_flex_group">
            <div className="editbox">
              <div className="form-table line">
                <div className="form-cell wid100">
                  <div className="form-group wid100">
                    <div className="box-view-list">
                      <ul className="view-list">
                        <li className="accumlate-list">
                          <label className="t-label">
                            결재요청 제목 <span className="required">*</span>
                          </label>
                          <span className="text-desc-type1">파라미터로 넘겨받음.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table line">
                <div className="form-cell wid100">
                  <div className="form-group wid100">
                    <div className="box-view-list">
                      <ul className="view-list">
                        <li className="accumlate-list">
                          <label className="t-label">
                            결재구분 <span className="required">*</span>
                          </label>
                          <span className="text-desc-type1">파라미터로 넘겨받음.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="line"></hr>

              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="결재요청 메시지" />
                  </div>
                </div>
              </div>

              <hr className="line"></hr>

              <div className="form-table">
                <div className="form-cell">
                  <div className="form-group wid100">
                    <div className="UserChicebox error">
                      <div className="form-group wid100">
                        <AppSelect label={'결재 Group을 선택해 주세요.'} />
                        <AppAutoComplete label="" className="mt5" />
                        <label htmlFor="file" className="file-label">
                          결재선
                          <span className="required">*</span>
                        </label>
                      </div>
                      <div className="form-group wid100 mt10">
                        <div className="SelectedList memberClass">
                          <ul>
                            <li>
                              <span className="num">1</span>
                              <div className="Info">
                                <div className="Name">홍길동 (170****)</div>
                                <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                              </div>
                              <div className="column-box">
                                <span className="column-btn">
                                  <a href="javascript:void(0);">
                                    <span className="up">up</span>
                                  </a>
                                  <a href="javascript:void(0);">
                                    <span className="down">down</span>
                                  </a>
                                </span>
                              </div>
                              <a href="javascript:void(0);">
                                <span className="delete">X</span>
                              </a>
                            </li>
                            <li>
                              <span className="num">2</span>
                              <div className="Info">
                                <div className="Name">홍길동 (170****)</div>
                                <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                              </div>
                              <div className="column-box">
                                <span className="column-btn">
                                  <a href="javascript:void(0);">
                                    <span className="up">up</span>
                                  </a>
                                  <a href="javascript:void(0);">
                                    <span className="down">down</span>
                                  </a>
                                </span>
                              </div>
                              <a href="javascript:void(0);">
                                <span className="delete">X</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="line"></hr>
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            결제Group설정
          </button>
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            닫기
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            확인
          </button>
        </div>
        <span className="pop_close">X</span>

        {/*레이어팝업 */}
        <div className="modal-overlay"></div>
        <div className="modal">
          <div className="pop_lg_cont_box deps">
            <h3 className="pop_title">결제그룹정보 설정</h3>
            <div className="pop_flex_group">
              <div className="editbox">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppSelect label={'결재Group 명'} />
                    </div>
                    <div className="btn-area inbtn">
                      <button type="button" name="button" className="btn-x-sm btn_text btn-darkblue-line">
                        신규
                      </button>
                      <button type="button" name="button" className="btn-x-sm ml3 btn_text btn-darkgray-line">
                        삭제
                      </button>
                    </div>
                  </div>
                </div>

                <hr className="line"></hr>

                <div className="form-table">
                  <div className="form-cell">
                    <div className="form-group wid100">
                      <div className="UserChicebox error">
                        <div className="form-group wid100">
                          <AppAutoComplete label="d" />
                          <label htmlFor="file" className="file-label">
                            결재Group Member
                            <span className="required"></span>
                          </label>
                        </div>
                        <div className="form-group wid100 mt10">
                          <div className="SelectedList memberClass">
                            <ul>
                              <li>
                                <span className="num">1</span>
                                <div className="Info">
                                  <div className="Name">홍길동 (170****)</div>
                                  <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                </div>
                                <div className="column-box">
                                  <span className="column-btn">
                                    <a href="javascript:void(0);">
                                      <span className="up">up</span>
                                    </a>
                                    <a href="javascript:void(0);">
                                      <span className="down">down</span>
                                    </a>
                                  </span>
                                </div>
                                <a href="javascript:void(0);">
                                  <span className="delete">X</span>
                                </a>
                              </li>
                              <li>
                                <span className="num">2</span>
                                <div className="Info">
                                  <div className="Name">홍길동 (170****)</div>
                                  <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                </div>
                                <div className="column-box">
                                  <span className="column-btn">
                                    <a href="javascript:void(0);">
                                      <span className="up">up</span>
                                    </a>
                                    <a href="javascript:void(0);">
                                      <span className="down">down</span>
                                    </a>
                                  </span>
                                </div>
                                <a href="javascript:void(0);">
                                  <span className="delete">X</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-area">
                      <button type="button" name="button" className="btn-x-sm btn_text btn-darkblue-line">
                        초기화
                      </button>
                    </div>
                  </div>
                </div>

                <hr className="line"></hr>
              </div>
            </div>
          </div>
          <div className="pop_btns">
            <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
              저장
            </button>
            <button disabled className="btn_text text_color_neutral-90 btn_close">
              닫기
            </button>
          </div>
        </div>
        {/*//레이어팝업 */}

        {/*레이어팝업 */}
        {/* <div className="modal-overlay"></div>
        <div className="modal">
          <div className="pop_lg_cont_box">
            <div className="pop_flex_group">
              <div className="editbox">
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <AppSelect label={'결재Group 명'} required />
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
              </div>
            </div>
          </div>
          <div className="pop_btns">
            <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
              저장
            </button>
            <button disabled className="btn_text text_color_neutral-90 btn_close">
              취소
            </button>
          </div>
        </div> */}
        {/*//레이어팝업 */}
      </div>

      {/*style="z-index: 1002; display: block; opacity: 0.5;"*/}
    </Modal>
  );
}

function PPayGroupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        PayGroupModal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            PayGroupModal modal open
          </button>
        </p>
        <PayGroupModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PPayGroupModal;
