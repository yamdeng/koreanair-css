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
        <h3 className="pop_title">가능성 안내</h3>

        <div className="pop_cont">
          <div className="guide-table-box">
            <table className="guide-table">
              <colgroup>
                <col width="10%" />
                <col width="10%" />
                <col width="5%" />
                <col width="*" />
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th colSpan={2}>가능성</th>
                  <th>내용(예시)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>최상</td>
                  <td>매우 높음</td>
                  <td>5</td>
                  <td>
                    <span className="tit">피해가 발생할 가능성이 매우 높음</span>
                    <br />
                    해당 안전대책이 되어 있지 않고, 표시ㆍ표지가 있어도 불비(不備)가 많으며, 안전수칙ㆍ작업표준 등도
                    없음
                  </td>
                </tr>
                <tr>
                  <td>상</td>
                  <td>높음</td>
                  <td>4</td>
                  <td>
                    <span className="tit"> 피해가 발생할 가능성이 높음</span>
                    <br /> 가드ㆍ방호덮개, 기타 <span className="red">안전장치가 없거나</span> 상당한 불비(不備)가 있고,
                    비상정지장치, 표시ㆍ표지는 웬만큼 설치되어 있으며, 안전수칙ㆍ작업표준 등은 있지만 지키기 어렵고 많은
                    주의를 해야 함
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>중</td>
                  <td>보통</td>
                  <td>3</td>
                  <td>
                    <span className="tit">부주의하면 피해가 발생할 가능성이 있음</span>
                    <br />
                    가드ㆍ방호덮개 등 안전장치는 설치되어 있지만, 가드가 낮거나 간격이 벌어져 있는 등 불비(不備)가 있고,
                    <span className="red">위험영역 접근, 위험원과의 접촉</span>이 있을 수 있으며, 안전수칙 등은 있지만{' '}
                    <span className="red">일부 준수하기 어려움</span>
                  </td>
                </tr>
                <tr>
                  <td>하</td>
                  <td>낮음</td>
                  <td>2</td>
                  <td>
                    <span className="tit"> 피해가 발생할 가능성이 낮음</span> <br />
                    가드ㆍ방호덮개 등으로 보호되어 있고, 안전장치가 설치되어 있으며, 위험영역에의 출입이 관란한
                    상태이고, 안전수칙ㆍ작업표준(서) 등이 정비되어 있고 준수하기 쉬우나, 피해의 가능성이 남아 있음
                  </td>
                </tr>
                <tr>
                  <td>최하</td>
                  <td>매우 낮음</td>
                  <td>1</td>
                  <td>
                    <span className="tit">피해가 발생할 가능성이 없음</span>(전반적으로 안전조치가 잘 되어 있음)
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
    </Modal>
  );
}

function MU5P2Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>가능성안내 모달</h3>
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            가능성안내 모달 open
          </button>
        </p>
        <UserEditModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default MU5P2Modal;
