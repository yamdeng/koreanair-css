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

function SafetyActionModal(props) {
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
        <h3 className="pop_title">Safety Action 관리</h3>

        <div className="pop_cont">
          <div className="tableTop">
            <table className="RiskLevelTable left">
              <colgroup>
                <col width="20%" />
                <col width="*" />
              </colgroup>
              <tbody>
                <tr>
                  <th>번호</th>
                  <td className="tl">Safety Action-1</td>
                </tr>
                <tr>
                  <th>부서</th>
                  <td className="tl">운항본부1팀</td>
                </tr>
                <tr>
                  <th>조치일자</th>
                  <td className="tl">2024-07-15</td>
                </tr>
                <tr>
                  <th>조치결과</th>
                  <td className="tl">
                    운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중
                    발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항
                    중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중
                    발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항
                    중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중
                    발생한 사항에 대
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

function PSafetyActionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        {' '}
        Safety Action 관리
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            Safety Action 관리 modal open
          </button>
        </p>
        <SafetyActionModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PSafetyActionModal;
