import { useState } from 'react';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { Select as AntSelect, Tree } from 'antd';

/* treeData 가공 */
const x = 5;
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

function Adminpage01() {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);

  return (
    <>
      <div className="conts-title">
        <h2>부서관리</h2>
      </div>
      <div className="groupbox">
        <div className="group-left">
          <div className="group-tree">
            <Tree
              className="draggable-tree bg"
              defaultExpandedKeys={expandedKeys}
              draggable
              blockNode
              treeData={treeData}
            />
          </div>
        </div>
        <div className="group-right">
          {/*상세페이지*/}
          <div className="editbox">
            <div className="form-table line">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">부서ID</label>
                        <span className="text-desc-type1">900</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">
                          명칭(한국어)<span className="required">*</span>
                        </label>
                        <span className="text-desc-type1">(주)대한항공</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">
                          부서코드<span className="required">*</span>
                        </label>
                        <span className="text-desc-type1">KAL</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">
                          명칭(영어)<span className="required">*</span>
                        </label>
                        <span className="text-desc-type1">Korean Air Lines Co.,Ltd.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">
                          명칭(중국어)<span className="required">*</span>
                        </label>
                        <span className="text-desc-type1">Korean Air Lines Co.,Ltd.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">
                          명칭(일본어)<span className="required">*</span>
                        </label>
                        <span className="text-desc-type1">Korean Air Lines Co.,Ltd.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="box-view-list">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <label className="t-label">
                          명칭(기타)<span className="required">*</span>
                        </label>
                        <span className="text-desc-type1">Korean Air Lines Co.,Ltd.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
          </div>
          {/*//상세페이지*/}
        </div>
      </div>
    </>
  );
}

export default Adminpage01;
