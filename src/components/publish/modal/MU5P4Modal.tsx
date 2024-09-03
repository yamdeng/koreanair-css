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
        <h3 className="pop_title">위험도 안내</h3>

        <div className="pop_cont">
          <div className="guide-table-box">
            <table className="guidetable-type01">
              <colgroup>
                <col width="12%" />
                <col width="10%" />
                <col width="17%" />
                <col width="17%" />
                <col width="17%" />
                <col width="17%" />
              </colgroup>
              <thead>
                <tr>
                  <th colSpan={6}>중대성(강도)</th>
                </tr>
                <tr>
                  <th colSpan={2}></th>
                  <th>최대(4)</th>
                  <th>대(3)</th>
                  <th>중(2)</th>
                  <th>소(1)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan={6}>가능성(빈도)</th>
                  <th>최상(5)</th>
                  <td className="veryhigh">매우높음(20)</td>
                  <td className="high">높음(15)</td>
                  <td className="borderlinehigh">약간높음(10)</td>
                  <td className="low">낮음(5)</td>
                </tr>
                <tr>
                  <th>상(4)</th>
                  <td className="veryhigh">매우높음(16)</td>
                  <td className="borderlinehigh">약간높음(10)</td>
                  <td className="middle">보통(8)</td>
                  <td className="low">낮음(4)</td>
                </tr>
                <tr>
                  <th>중(3)</th>
                  <td className="borderlinehigh">약간높음(12)</td>
                  <td className="borderlinehigh">약간높음(9)</td>
                  <td className="low">낮음(6)</td>
                  <td className="verylow">매우낮음(3)</td>
                </tr>
                <tr>
                  <th>하(2)</th>
                  <td className="middle">보통(8)</td>
                  <td className="low">낮음(6)</td>
                  <td className="low">낮음(4)</td>
                  <td className="verylow">매우낮음(2)</td>
                </tr>
                <tr>
                  <th>최하(1)</th>
                  <td className="low">낮음(4)</td>
                  <td className="verylow">매우낮음(3)</td>
                  <td className="verylow">매우낮음(2)</td>
                  <td className="verylow">매우낮음(1)</td>
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

function MU5P4Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>위험도안내 모달</h3>
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            위험도안내 모달 open
          </button>
        </p>
        <UserEditModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default MU5P4Modal;
