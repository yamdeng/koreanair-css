import { useState } from 'react';
import Modal from 'react-modal';
import { DatePicker, TimePicker, TreeSelect, Select as AntSelect } from 'antd';
import AppTextInput from '@/components/common/AppTextInput';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTextArea from '@/components/common/AppTextArea';

function SafetyAdvModal(props) {
  const { isOpen, closeModal } = props;
  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={'alert-modal-overlay'}
      className={'list-common-modal-content'}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <div className="popup-container">
        <h3 className="pop_title">안전권고 관리</h3>

        <div className="pop_cont">
          {/*상세 */}
          <div className="editbox">
            <div className="form-table line">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">번호</label>
                        <span className="text-desc-type1">Safety Action-1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">부서</label>
                        <span className="text-desc-type1">운항본부1팀</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table line">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">발행일자</label>
                        <span className="text-desc-type1">2024-07-15</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">회신일자</label>
                        <span className="text-desc-type1">2024-07-15</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table line">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">안전권고</label>
                        <span className="text-desc-type1">
                          운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한
                          사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한
                          사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중
                          발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중
                          발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에
                          대운항 중 발생한 사항 중 발생한 사항에 대
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">조치사항</label>
                        <span className="text-desc-type1">
                          운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한
                          사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한
                          사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중
                          발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중
                          발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에
                          대운항 중 발생한 사항 중 발생한 사항에 대
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table line">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">첨부파일</label>
                        <span className="text-desc-type1">
                          {' '}
                          <div className="desc-file">
                            <a href="javascript:void(0);">
                              <span className="download"></span>
                              <span>첨부파일.zip</span>
                            </a>
                          </div>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
          </div>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>

      {/*style="z-index: 1002; display: block; opacity: 0.5;"*/}
    </Modal>
  );
}

function PSafetyAdvModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        {' '}
        안전권고 관리
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            안전권고 modal open
          </button>
        </p>
        <SafetyAdvModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PSafetyAdvModal;
