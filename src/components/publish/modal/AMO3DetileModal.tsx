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

function AMO3Modal(props) {
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
              <a href="javascript:void(0);" className="" data-label="TOP EVENT 현황">
                TOP EVENT현황
              </a>
              <a href="javascript:void(0);" className="active" data-label="게시판">
                게시판
              </a>
            </div>
          </div>
          <div className="pop_flex_group">
            <div className="pop_cont_form">
              {/*상세 */}
              <div className="editbox">
                <div className="form-table line">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">제목</label>
                            <span className="text-desc-type1">게시글 이용 지침서</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form-cell wid20">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">조회수</label>
                            <span className="text-desc-type1">123</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line dp-n"></hr>
                <div className="form-table line">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">내용</label>
                            <span className="text-desc-type1">
                              운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중
                              발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항
                              중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한
                              사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에
                              대운항 중 발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대운항 중
                              발생한 사항 중 발생한 사항에 대운항 중 발생한 사항 중 발생한 사항에 대
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line dp-n"></hr>
                <div className="form-table line">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">링크</label>
                            <span className="text-desc-type2">
                              <a href="javascript:void(0);">http://www.ksmstestdomain.com</a>
                            </span>
                            <span className="text-desc-type2">
                              <a href="javascript:void(0);">http://www.ksmstestdomain.com</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="box-view-list">
                        <ul className="view-list">
                          <li className="accumlate-list">
                            <label className="t-label">첨부파일</label>
                            <span className="text-desc-type1">
                              {' '}
                              <div className="desc-file">
                                <a href="javascript:void(0);">
                                  <span className="download"></span>
                                  <span>첨부파일.zip</span>
                                </a>
                              </div>
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

function AMO3DetileModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>AMO게시판상세 모달</h3>
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            AMO게시판상세 모달 open
          </button>
        </p>
        <AMO3Modal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default AMO3DetileModal;
