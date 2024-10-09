import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';
import { Editor } from '@toast-ui/react-editor';
import { DatePicker, TreeSelect } from 'antd';
import { useState } from 'react';
import Modal from 'react-modal';
import AppTextArea from '@/components/common/AppTextArea';
import AppRangeDatePicker from '@/components/common/AppRangeDatePicker';
import AppTable from '@/components/common/AppTable';

function RiskModal(props) {
  const [firstDateRangeValue, setFirstDateRangeValue] = useState(['', '']);
  const [firstTimeValue, setFirstTimeValue] = useState('22:25:50');
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const { isOpen, closeModal } = props;
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };

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
        <h3 className="pop_title">위험평가</h3>
        <div className="pop_cont notice">
          <div className="edit-area">
            <div className="editbox">
              <div className="listtable">
                <table className="info-board">
                  <colgroup>
                    <col width="23%" />
                    <col width="23%" />
                    <col width="12%" />
                    <col width="12%" />
                    <col width="18%" />
                    <col width="12%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Hazard</th>
                      <th>Potential Consequence</th>
                      <th>Risk Level 1</th>
                      <th>Team</th>
                      <th>Mitigation Result</th>
                      <th>Risk Level 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tl">Lightning strike Environmental</td>
                      <td className="tl">Aircraft Change</td>
                      <td>
                        <div className="Safety-table-cell">
                          <span className="Safety-tag riskLevel level1">3A</span>
                        </div>
                      </td>
                      <td>기술관리팀</td>
                      <td className="tl">무엇이 문제인...</td>
                      <td>
                        <a href="javascript:void(0);" className="btn-modify">
                          선택
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="form-table line">
                <div className="form-cell wid100">
                  <div className="form-group wid100">
                    <AppTextArea label="회의록" style={{ width: '100%', height: 145 }} errorMessage="" />
                  </div>
                </div>
              </div>
              <div className="form-table line">
                <div className="form-cell wid50">
                  <div className="form-group wid50">
                    <AppSelect label={'유효성평가 개월'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            닫기
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            Submit
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

function PRiskModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>위험평가팝업</h3>
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            위험평가팝업 모달 open
          </button>
        </p>
        <RiskModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PRiskModal;
