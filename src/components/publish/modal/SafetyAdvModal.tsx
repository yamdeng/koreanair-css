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
          <div className="tableTop">
            <table className="RiskLevelTable left">
              <colgroup>
                <col width="15%" />
                <col width="35%" />
                <col width="15%" />
                <col width="35%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>번호</th>
                  <td className="tl">Safety Action-1</td>
                  <th>부서</th>
                  <td className="tl">운항본부1팀</td>
                </tr>
                <tr>
                  <th>발행일자</th>
                  <td className="tl">2024-07-15</td>
                  <th>회신일자</th>
                  <td className="tl">2024-07-15</td>
                </tr>
                <tr>
                  <th>안전권고</th>
                  <td className="tl">
                    운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중
                    발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항
                    중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중
                    발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항
                    중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중
                    발생한 사항에 대
                  </td>
                  <th>조치사항</th>
                  <td className="tl">
                    운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중
                    발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항
                    중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중
                    발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항
                    중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중
                    발생한 사항에 대
                  </td>
                </tr>
                <tr>
                  <th>첨부파일</th>
                  <td colSpan={3} className="tl">
                    ㅇㄹㅇㄹㅇ
                  </td>
                </tr>
              </tbody>
            </table>
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
