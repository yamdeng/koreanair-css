import { useState } from 'react';
import { Tree } from 'antd';
import Modal from 'react-modal';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTable from '@/components/common/AppTable';
import { DatePicker, Select as AntSelect } from 'antd';

/* treeData 가공 */
const x = 3;
const y = 2;
const z = 1;
const treeData = [];

const generateData = (_level, _preKey = null, _tns = null) => {
  const preKey = _preKey || '0';
  const tns = _tns || treeData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);
/* treeData 가공 end*/

function TreeModal(props) {
  const [inputValue, setInputValue] = useState('');
  const { displayModal, closeModal } = props;
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);
  const rowData = getAllData();
  const columns = testColumnInfos;

  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={displayModal}
      ariaHideApp={false}
      overlayClassName={'alert-modal-overlay'}
      className={'org-select-modal-content'}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <div className="popup-container">
        <h3 className="pop_title">조직 선택 모달</h3>
        <div className="pop_full_cont_box">
          <div className="pop_flex_group">
            <div className="tree_wrap">
              <Tree
                className="draggable-tree"
                defaultExpandedKeys={expandedKeys}
                draggable
                blockNode
                treeData={treeData}
              />
            </div>
            <div className="pop_cont_form">
              <div className="boxForm">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <span className="form-group wid100 mr5">
                      <input
                        type="text"
                        className="form-tag"
                        name="title"
                        value={inputValue}
                        onChange={(event) => {
                          setInputValue(event.target.value);
                        }}
                      />
                      <label className="f-label">
                        Sbject <span className="required">*</span>
                      </label>
                    </span>
                  </div>
                  <div className="form-cell wid50">
                    <span className="form-group wid100">
                      <AntSelect
                        style={{ width: '100%' }}
                        options={[
                          {
                            value: 'jack',
                            label: 'Jack',
                          },
                          {
                            value: 'lucy',
                            label: 'Lucy',
                          },
                          {
                            value: 'Yiminghe',
                            label: 'yiminghe',
                          },
                          {
                            value: 'disabled',
                            label: 'Disabled',
                            disabled: true,
                          },
                        ]}
                      />
                    </span>
                  </div>
                </div>

                <div className="form-table">
                  <div className="form-cell ">
                    <span className="form-group wid100">
                      <span className="form-group wid100">
                        <AntSelect
                          style={{ width: '100%' }}
                          options={[
                            {
                              value: 'jack',
                              label: 'Jack',
                            },
                            {
                              value: 'lucy',
                              label: 'Lucy',
                            },
                            {
                              value: 'Yiminghe',
                              label: 'yiminghe',
                            },
                            {
                              value: 'disabled',
                              label: 'Disabled',
                              disabled: true,
                            },
                          ]}
                        />
                      </span>
                    </span>
                  </div>
                  <div className="form-cell wid50">
                    <span className="form-group form-glow">
                      <DatePicker status="" /> {/* status="error" */}
                      <span>~</span>
                      <DatePicker status="" />
                      {/* <TimePicker minuteStep={15} secondStep={10} hourStep={1} status="error" /> */}
                    </span>
                  </div>
                </div>
              </div>
              <AppTable rowData={rowData} columns={columns} />
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text btn_dark_gray" onClick={closeModal}>
            취소
          </button>
          <button className="btn_text btn_green" onClick={closeModal}>
            확인
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          {/* <i className="fas fa-times"></i> */}X
        </span>
      </div>
    </Modal>
  );
}

function POrgTreeWithListModal() {
  const [displayModal, setDisplayModal] = useState(false);
  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <div>
        <h3>좌측 트리, 우측 목록 모달</h3>
        <p>
          <button className="button" onClick={() => setDisplayModal(true)}>
            조직도 목록 모달 open
          </button>
        </p>
        <TreeModal displayModal={displayModal} closeModal={closeModal} />
      </div>
    </>
  );
}

export default POrgTreeWithListModal;
