import { useState } from 'react';
import Modal from 'react-modal';
import { Tree } from 'antd';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';

function TestModal(props) {
  const { displayModal, closeModal } = props;
  const [inputValue, setInputValue] = useState('');
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);

  /*

    overlayClassName : alert-modal-overlay, middle-modal-overlay, full-modal-overlay
     : 크기에 따라 클래스 정의

    className : {커스텀}-modal-content
     모달 마다 별도의 class를 정의해서 커스텀하게 관리

  */
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
  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={displayModal}
      ariaHideApp={false}
      overlayClassName={'alert-modal-overlay'}
      className={'list-common-modal-content'}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <div className="popup-container">
        <h3 className="pop_title">제목</h3>
        <div className="user-checkbox">
          <div className="checklist01">
            <div className="listbox">
              <span className="title">부서</span>
              <div className="tree_wrap tree-right-space">
                <div className="tree_form">
                  <div className="form-cell">
                    <div className="form-group wid100 mt30 pd-10">
                      <AntSelect
                        id="select1"
                        style={{ width: '100%' }}
                        className="label-select"
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
                      <label className="f-label" htmlFor="select1">
                        Sbject <span className="required">*</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="tree_box">
                  <Tree
                    className="draggable-tree"
                    defaultExpandedKeys={expandedKeys}
                    draggable
                    blockNode
                    treeData={treeData}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="checklist02">
            <div className="form-cell">
              <div className="form-group wid100 mr5">
                <input
                  type="text"
                  className="form-tag"
                  name="title"
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                />
                <label className="f-label">검색</label>
                <button type="button" className="icon-sch"></button>
              </div>
            </div>
          </div>
          <div className="checklist03">fds111111</div>
        </div>
        <div className="pop_btns">
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
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

function PUserDeptSelectModal() {
  const [displayModal, setDisplayModal] = useState(false);
  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <div>
        사용자와 부서 선택하는 모달
        <p>
          <button className="button" onClick={() => setDisplayModal(true)}>
            userDeptSelect modal open
          </button>
        </p>
        <TestModal displayModal={displayModal} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PUserDeptSelectModal;
