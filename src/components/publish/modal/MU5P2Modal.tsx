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
          <div className="guide-table">
            <table>
              <colgroup>
                <col width="10%" />
                <col width="40%" />
                <col width="10%" />
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
                  <td>피해가 발생할 가능성이 매우 높음</td>
                </tr>
                <tr>
                  <td>최상</td>
                  <td>매우 높음</td>
                  <td>5</td>
                  <td>피해가 발생할 가능성이 매우 높음</td>
                </tr>
                <tr>
                  <td>최상</td>
                  <td>매우 높음</td>
                  <td>5</td>
                  <td>피해가 발생할 가능성이 매우 높음</td>
                </tr>
                <tr>
                  <td>하</td>
                  <td>낮음</td>
                  <td>2</td>
                  <td>
                    피해가 발생할 가능성이 낮음 <br />
                    가드ㆍ방호덮개 등으로 보호되어 있고, 안전장치가 설치되어 있으며, 위험영역에의 출입이 관란한
                    상태이고, 안전수칙ㆍ작업표준(서) 등이 정비되어 있고 준수하기 쉬우나, 피해의 가능성이 남아 있음
                  </td>
                </tr>
                <tr>
                  <td>최하</td>
                  <td>매우 낮음</td>
                  <td>1</td>
                  <td>피해가 발생할 가능성이 없음(전반적으로 안전조치가 잘 되어 있음)</td>
                </tr>
              </tbody>
            </table>
          </div>
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
