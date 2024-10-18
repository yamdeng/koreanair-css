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
        <h3 className="pop_title">Select Risk Level</h3>
        <div className="tag-info-wrap-end2">
          <div className="tip">
            <div>
              <a href="javascript:void(0);" className="txt">
                작성정보 참고
              </a>
            </div>
          </div>
        </div>

        <div className="pop_cont Risk">
          <table className="RiskLevelTable Risk">
            <caption></caption>
            <colgroup></colgroup>
            <thead>
              <tr>
                <th rowSpan={2}>
                  발생
                  <br />
                  가능성
                </th>
                <th colSpan={5}>심각도</th>
              </tr>
              <tr>
                <th>LevelA</th>
                <th>LevelB</th>
                <th>LevelC</th>
                <th>LevelD</th>
                <th>LevelE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>5</th>
                {/* 선택되면 selected 붙임 */}
                <td className="red selected">
                  5A
                  {/* 툴팁 */}
                  <div className="flag-tag tooltip">
                    <span className="icon-flag txt">233</span>
                    <div>
                      <span className="tooltiptext1 tooltip-right">
                        <ul>
                          <li>해당기간동안 평가된 횟수</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="IcoTags">
                    <span className="ico-tag">추천</span>
                  </div>
                </td>
                <td className="level1">
                  5B
                  <div className="flag-tag tooltip">
                    {/* <span className="icon-flag txt">23</span> */}
                    <div>
                      <span className="tooltiptext1 tooltip-right">
                        <ul>
                          <li>해당기간동안 평가된 횟수</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </td>
                <td className="level1">
                  5C
                  <div className="flag-tag tooltip">
                    {/* <span className="icon-flag txt">99</span> */}
                    <div>
                      <span className="tooltiptext1 tooltip-right">
                        <ul>
                          <li>해당기간동안 평가된 횟수</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </td>
                <td className="level2">
                  5D
                  <div className="flag-tag tooltip">
                    {/* <span className="icon-flag txt">233</span> */}
                    <div>
                      <span className="tooltiptext1 tooltip-right">
                        <ul>
                          <li>해당기간동안 평가된 횟수</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="IcoTags">
                    <span className="ico-tag">추천</span>
                  </div>
                </td>
                <td className="level3">
                  5E
                  <div className="IcoTags">
                    <span className="ico-tag">추천</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>4</th>
                <td className="level1">4A</td>
                <td className="level1">
                  4B
                  <div className="flag-tag tooltip">
                    <span className="icon-flag txt">233</span>
                    <div>
                      <span className="tooltiptext1 tooltip-right">
                        <ul>
                          <li>해당기간동안 평가된 횟수</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </td>
                <td className="level2">4C</td>
                <td className="level3">4D</td>
                <td className="level4">
                  4E
                  <div className="IcoTags">
                    <span className="ico-tag">추천</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td className="level1">3A</td>
                <td className="level2">3B</td>
                <td className="level3">3C</td>
                <td className="level3">3D</td>
                <td className="level4">
                  3E
                  <div className="flag-tag tooltip">
                    <span className="icon-flag txt">233</span>
                    <div>
                      <span className="tooltiptext1 tooltip-right">
                        <ul>
                          <li>해당기간동안 평가된 횟수</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td className="level2">2A</td>
                <td className="level3">2B</td>
                <td className="level3">2C</td>
                <td className="level4">
                  2D
                  <div className="flag-tag tooltip">
                    <span className="icon-flag txt">233</span>
                    <div>
                      <span className="tooltiptext1 tooltip-right">
                        <ul>
                          <li>해당기간동안 평가된 횟수</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </td>
                <td className="level4">2E</td>
              </tr>
              <tr>
                <th>1</th>
                <td className="level2">1A</td>
                <td className="level3">1B</td>
                <td className="level4">1C</td>
                <td className="level4">1D</td>
                <td className="level4">
                  1E
                  <div className="flag-tag tooltip">
                    {/* <span className="icon-flag txt">233</span> */}
                    <div>
                      <span className="tooltiptext1 tooltip-right">
                        <ul>
                          <li>해당기간동안 평가된 횟수</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            닫기
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

function risklevelModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>Risk Level 모달</h3>
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            Risk Level 모달 open
          </button>
        </p>
        <UserEditModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default risklevelModal;
