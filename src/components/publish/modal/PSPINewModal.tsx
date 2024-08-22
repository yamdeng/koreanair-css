import { Tree } from 'antd';
import { useState } from 'react';
import Modal from 'react-modal';
import AppSelect from '@/components/common/AppSelect';

function TestModal(props) {
  const { isOpen, closeModal } = props;
  const [inputValue, setInputValue] = useState('');
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);

  /*

    overlayClassName : alert-modal-overlay, middle-modal-overlay, full-modal-overlay
     : 크기에 따라 클래스 정의

    className : {커스텀}-modal-content
     모달 마다 별도의 class를 정의해서 커스텀하게 관리

  */
  /* treeData 가공 */
  const x = 3;
  const y = 2;
  const z = 1;
  const treeData = [];

  const generateData = (_level, _preKey = null, _tns = null) => {
    const preKey = _preKey || '0';
    const tns = _tns || treeData;

    const children = [];
    for (let i = 0; i < x; i++) {
      const key = `${preKey}-${i}`;
      tns.push({ title: key, key });
      if (i < y) {
        children.push(key);
      }
    }
    if (_level < 0) {
      return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
      tns[index].children = [];
      return generateData(level, key, tns[index].children);
    });
  };
  generateData(z);
  /* treeData 가공 end*/
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
        <h3 className="pop_title">SPI 지표 추가</h3>
        <div className="pop_full_cont_box">
          <div className="pop_flex_group">
            <div className="pop_cont_form">
              <div className="editbox">
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              Doc No <span className="required">*</span>
                            </label>
                            <span className="text-desc-type1"> ASR-100305 </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              Departure Date <span className="required">*</span>
                            </label>
                            <span className="text-desc-type1"> 2024-08-05</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              Aircraft Type <span className="required">*</span>
                            </label>
                            <span className="text-desc-type1"> 773</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              Fleet <span className="required">*</span>
                            </label>
                            <span className="text-desc-type1"> A330</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              Registration No <span className="required">*</span>
                            </label>
                            <span className="text-desc-type1"> HL7530</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              Flight No <span className="required">*</span>
                            </label>
                            <span className="text-desc-type1"> KE071</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              From <span className="required">*</span>
                            </label>
                            <span className="text-desc-type1"> LAX</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              To <span className="required">*</span>
                            </label>
                            <span className="text-desc-type1"> GMP</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              Airport <span className="required">*</span>
                            </label>
                            <span className="text-desc-type1"> LAX</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              Subject <span className="required">*</span>
                            </label>
                            <span className="text-desc-type1"> 지연운항 보고</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              Event Type <span className="required">*</span>
                            </label>
                            <span className="text-desc-type1"> ACP Reset</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <AppSelect label={'지표구분'} required />
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <AppSelect label={'지표명'} required />
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">
                              SPI 위험도 <span className="required">*</span>
                            </label>
                            <span className="text-desc-type1">
                              <span className="Safety-tag riskLevel level4">2E</span>
                              <button type="button" className="btn-class choice">
                                위험도 선택
                              </button>
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
          </div>
        </div>
        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            닫기
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            저장
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>
    </Modal>
  );
}

function PSPINewModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        지표 신규 모달
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            지표 신규 modal open
          </button>
        </p>
        <TestModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PSPINewModal;
