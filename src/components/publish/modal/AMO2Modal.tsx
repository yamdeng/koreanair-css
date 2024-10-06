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
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import SafetyImage from '@/resources/images/img-SafetyPolicy.jpg';

import AppTreeSelect from '@/components/common/AppTreeSelect';
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

function AMO2Modal(props) {
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
        <h3 className="pop_title">AMO</h3>

        <div className="pop_full_cont_box">
          {/*탭 */}
          <div className="menu-tab-nav">
            <div className="menu-tab">
              <a href="javascript:void(0);" className="" data-label="안정정책">
                안정정책
              </a>
              <a href="javascript:void(0);" className="" data-label="HZR TOP RISK분석현황">
                HZR TOP RISK분석현황
              </a>
              <a href="javascript:void(0);" className="active" data-label="TOP EVENT 현황">
                TOP EVENT현황
              </a>
              <a href="javascript:void(0);" className="" data-label="게시판">
                게시판
              </a>
            </div>
          </div>
          <div className="pop_flex_group">
            <div className="pop_cont_form">
              {/*검색 */}
              <div className="editbox">
                <div className="boxForm">
                  <div id="" className="area-detail active">
                    <div className="form-table">
                      <div className="form-cell wid30">
                        <span className="form-group wid100">
                          <AppSelect label={'부분'} />
                        </span>
                      </div>
                      <div className="form-cell wid50">
                        <div className="form-group form-glow wid100">
                          <div className="df">
                            <div className="date1">
                              <AppDatePicker label={'기간'} />
                            </div>
                            <span className="unt">~</span>
                            <div className="date2">
                              <AppDatePicker label={'기간'} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-cell wid50">
                        <div className="btn-area">
                          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                            조회
                          </button>
                          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                            초기화
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*대시보드*/}
                <div className="DashBoardWrap">
                  <div className="DashBoard-chart">
                    <div className="DashBoard-row">
                      <div className="DashBoard-col">
                        <p className="h4">1. 안전데이터 비율</p>
                        <div className="DashBoard-box">챠트영역</div>
                      </div>
                    </div>
                    <div className="DashBoard-row">
                      <div className="DashBoard-col">
                        <p className="h4">2. Event 발생 건 별 Risk 값 합계</p>
                        <div className="DashBoard-box"></div>
                      </div>
                    </div>
                    <div className="DashBoard-row">
                      <div className="DashBoard-col">
                        <p className="h4">3. TOP Risk AREAS</p>
                        <div className="DashBoard-box">
                          <AppTable rowData={rowData} columns={columns} />
                        </div>
                      </div>
                    </div>
                    <div className="DashBoard-row">
                      <div className="DashBoard-col">
                        <p className="h4">4. 부문Event별 Risk 값</p>
                        <div className="DashBoard-box">
                          <AppTable rowData={rowData} columns={columns} />
                        </div>
                      </div>
                    </div>
                    <div className="DashBoard-row">
                      <div className="DashBoard-col">
                        <p className="h4">5. Event Risk 값 평균</p>
                        <div className="DashBoard-box">
                          <AppTable rowData={rowData} columns={columns} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*//대시보드 */}
              </div>
              {/*//검색 */}
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            취소
          </button>
          <button disabled className="btn_text text_color_neutral-90 btn-disabled" onClick={closeModal}>
            취소
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

function PAMO2Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>AMO 모달</h3>
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            AMO 모달 open
          </button>
        </p>
        <AMO2Modal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PAMO2Modal;
