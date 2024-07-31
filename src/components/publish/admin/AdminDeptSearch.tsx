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

function AdminDeptSearch() {
  const [inputValue, setInputValue] = useState('');
  const { displayModal, closeModal } = props;
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);
  const rowData = getAllData();
  const columns = testColumnInfos;

  return (
    <>
      <div className="conts-title">
        <h2>부서조회</h2>
      </div>

      {/* 부서조회 */}
      <div className="conts_box">
        <div className="flex-group">
          <div className="pop_flex_group">
            <div className="tree_wrap">
              <div className="tree_form">
                <div className="pop-btn-box">버튼영역</div>
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
            </div>
          </div>
        </div>
      </div>

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button className="btn_text text_color_neutral-10 btn_confirm">저장</button>
      </div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default AdminDeptSearch;
