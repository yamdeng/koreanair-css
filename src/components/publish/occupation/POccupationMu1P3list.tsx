import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect, Tree } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppRangeDatePicker from '@/components/common/AppRangeDatePicker';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppAutoComplete from '@/components/common/AppAutoComplete';

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

function POccupationMu1P3list() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);

  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">위험기계기구</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>산업안전보건 조직도</h2>
      </div>
      <div className="left-box">
        <div className="tree-box">
          <Tree
            className="draggable-tree bg"
            defaultExpandedKeys={expandedKeys}
            draggable
            blockNode
            treeData={treeData}
          />
          {/*조직도 .active시 리스트표출*/}
          <div className="list active">리스트</div>
        </div>
      </div>
      <div className="right-box">
        {/*검색영역 */}

        <div className="boxForm">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppAutoComplete label={'본부'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppAutoComplete label={'부서'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppAutoComplete label={'팀'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppAutoComplete label={'그룹'} />
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppAutoComplete label={'반'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppAutoComplete label={'직책'} />
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label={'성명'} />
              </div>
            </div>
          </div>
          <div className="btn-area mb-10">
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              조회
            </button>
          </div>
        </div>
        {/* //검색영역 */}

        {/*그리드영역 상단상위표출체크시 번호-아이콘으로 표시 아이콘명:pin.svg */}
        <div>
          <AppTable rowData={rowData} columns={columns} />
        </div>
        {/*//그리드영역 */}
      </div>
    </>
  );
}

export default POccupationMu1P3list;
