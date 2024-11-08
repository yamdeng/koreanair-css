import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { Select as AntSelect, Tree } from 'antd';
import { useState } from 'react';
import AppSelect from '@/components/common/AppSelect';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppTextInput from '@/components/common/AppTextInput';

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

function AdminDeptSearch() {
  const [inputValue, setInputValue] = useState('');
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);
  const rowData = getAllData();
  const columns = testColumnInfos;

  return (
    <>
      <div className="conts-title">
        <h2>가상그룹권한관리</h2>
      </div>

      <div className="groupbox height-fix">
        <div className="group-left fix">
          <div className="tree-box">
            <div className="btns-area">
              <button name="button" className="btn_text btn_confirm text_color_neutral-10">
                추가
              </button>
            </div>
            <div className="form-group wid100">
              <AppAutoComplete label={'검색'} />
            </div>
          </div>
          <div className="group-tree mt-10">
            <Tree
              className="draggable-tree bg"
              defaultExpandedKeys={expandedKeys}
              draggable
              blockNode
              treeData={treeData}
            />
          </div>
        </div>
        <div className="group-right fix">
          {/*상세페이지*/}
          <h3 className="table-tit">그룹상세</h3>
          <div className="editbox">
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'그룹코드'} required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'그룹코드'} required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'업무구분'} required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'명칭(한국어)'} required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'명칭(영어)'} required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'명칭(중국어)'} required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'명칭(일본어)'} required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'명칭(기타)'} required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'비고'} required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'그룹 용도'} required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'Audit(Y/N)'} required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'리포트유형'} />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
          </div>
          {/*//상세페이지*/}
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
