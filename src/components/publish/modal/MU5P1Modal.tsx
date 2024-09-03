import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppSelect from '@/components/common/AppSelect';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { Editor } from '@toast-ui/react-editor';
import { DatePicker, TreeSelect } from 'antd';
import { useState } from 'react';
import Modal from 'react-modal';
import AppTreeSelect from '@/components/common/AppTreeSelect';
import AppTextInput from '@/components/common/AppTextInput';
import AppTable from '@/components/common/AppTable';
import { Upload } from 'antd';

const options2 = [];
for (let i = 10; i < 36; i++) {
  options2.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const options = [
  { value: 'chocolate', label: 'Chocolate Chocolate Chocolate ChocolateChocolateChocolateChocolate' },
  { value: 'strawberry', label: 'StrawberryStrawberryStrawberryStrawberryStrawberryStrawberryStrawberry' },
  { value: 'vanilla', label: 'VanillaVanillaVanillaVanillaVanillaVanillaVanilla' },
];
const { RangePicker } = DatePicker;
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf2',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf3',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf4',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf5',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf6',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf11',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf11
              </b>
            ),
          },
        ],
      },
    ],
  },
];

function UserEditModal(props) {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const { isOpen, closeModal } = props;
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };

  const customButtons = [
    {
      title: '추가',
      onClick: () => {
        alert('추가');
      },
    },
  ];

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
        <h3 className="pop_title">평가시기 안내</h3>
        <ul className="txt-guide-list">
          <li>최초: 신규 사업장이 설립되는 경우</li>
          <li>정기: 최초 평가 후 매 1년 마다 실시</li>
          <li>수시: 사업장 위험성평가에 관한 지침 제 15조 2항 5번 중대산업사고 또는 산업재해 발생</li>
        </ul>
        <span className="txt-guide">[참고] 사업장 위험성평가에 관한 지침 제 15조 위험성평가의 실시 시기</span>
        <div className="pop_cont">
          <ul className="guide-list">
            <span className="tit">제15조(위험성평가의 실시 시기)</span>
            <li>
              ① 사업주는 사업이 성립된 날(사업 개시일을 말하며, 건설업의 경우 실착공일을 말한다)로부터 1개월이 되는
              날까지 제5조의2제1항에 따라 위험성평가의 대상이 되는 유해ㆍ위험요인에 대한 최초 위험성평가의 실시에
              착수하여야 한다. 다만, 1개월 미만의 기간 동안 이루어지는 작업 또는 공사의 경우에는 특별한 사정이 없는 한
              작업 또는 공사 개시 후 지체 없이 최초 위험성평가를 실시하여야 한다.
            </li>
            <li>
              ② 사업주는 다음 각 호의 어느 하나에 해당하여 추가적인 유해ㆍ위험요인이 생기는 경우에는 해당
              유해ㆍ위험요인에 대한 수시 위험성평가를 실시하여야 한다. 다만, 제5호에 해당하는 경우에는 재해발생 작업을
              대상으로 작업을 재개하기 전에 실시하여야 한다.
              <ol>
                <li>1. 사업장 건설물의 설치ㆍ이전ㆍ변경 또는 해</li>
                <li>2. 기계ㆍ기구, 설비, 원재료 등의 신규 도입 또는 변경</li>
                <li>
                  3. 건설물, 기계ㆍ기구, 설비 등의 정비 또는 보수(주기적ㆍ반복적 작업으로서 이미 위험성평가를 실시한
                  경우에는 제외)
                </li>
                <li>4. 작업방법 또는 작업절차의 신규 도입 또는 변경</li>
                <li>5. 중대산업사고 또는 산업재해(휴업 이상의 요양을 요하는 경우에 한정한다) 발생</li>
                <li>6. 그 밖에 사업주가 필요하다고 판단한 경우</li>
              </ol>
            </li>
            <li>
              ③ 사업주는 다음 각 호의 사항을 고려하여 제1항에 따라 실시한 위험성평가의 결과에 대한 적정성을 1년마다
              정기적으로 재검토(이때, 해당 기간 내 제2항에 따라 실시한 위험성평가의 결과가 있는 경우 함께 적정성을
              재검토하여야 한다)하여야 한다. 재검토 결과 허용 가능한 위험성 수준이 아니라고 검토된 유해ㆍ위험요인에
              대해서는 제12조에 따라 위험성 감소대책을 수립하여 실행하여야 한다.
              <ol>
                <li>1. 기계ㆍ기구, 설비 등의 기간 경과에 의한 성능 저하</li>
                <li>2. 근로자의 교체 등에 수반하는 안전ㆍ보건과 관련되는 지식 또는 경험의 변화</li>
                <li>3. 안전ㆍ보건과 관련되는 새로운 지식의 습득</li>
                <li>4. 현재 수립되어 있는 위험성 감소대책의 유효성 등</li>
              </ol>
            </li>
            <li>
              ④ 사업주가 사업장의 상시적인 위험성평가를 위해 다음 각 호의 사항을 이행하는 경우 제2항과 제3항의
              수시평가와 정기평가를 실시한 것으로 본다.
              <ol>
                <li>
                  1. 매월 1회 이상 근로자 제안제도 활용, 아차사고 확인, 작업과 관련된 근로자를 포함한 사업장 순회점검
                  등을 통해 사업장 내 유해ㆍ위험요인을 발굴하여 제11조의 위험성결정 및 제12조의 위험성 감소대책
                  수립ㆍ실행을 할 것
                </li>
                <li>
                  2. 매주 안전보건관리책임자, 안전관리자, 보건관리자, 관리감독자 등(도급사업주의 경우 수급사업장의
                  안전ㆍ보건 관련 관리자 등을 포함한다)을 중심으로 제1호의 결과 등을 논의ㆍ공유하고 이행상황을 점검할 것
                </li>
                <li>
                  3. 매 작업일마다 제1호와 제2호의 실시결과에 따라 근로자가 준수하여야 할 사항 및 주의하여야 할 사항을
                  작업 전 안전점검회의 등을 통해 공유ㆍ주지할 것
                </li>
              </ol>
            </li>
          </ul>
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

function MU5P1Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>평가시기안내 모달</h3>
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            평가시기안내 모달 open
          </button>
        </p>
        <UserEditModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default MU5P1Modal;
