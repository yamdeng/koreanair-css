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
import { table } from 'console';

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
      <div className="searchbox">
        <div className="left-box">
          <div className="tree-box">
            <div className="form-group wid100 mb-20">
              <AppAutoComplete label={'검색'} />
            </div>
            <div className="tree-list">
              <div className="tree">
                <Tree
                  className="draggable-tree bg"
                  defaultExpandedKeys={expandedKeys}
                  draggable
                  blockNode
                  treeData={treeData}
                />
              </div>
              {/*조직도 .active시 리스트표출*/}
              <div className="list active">
                <table className="list-table">
                  <thead>
                    <tr>
                      <th>안전보건인력</th>
                      <th>인원</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>안전보건관리 책임자</td>
                      <td>17명</td>
                    </tr>
                    <tr>
                      <td>안전보건총괄 책임자</td>
                      <td>49명</td>
                    </tr>
                    <tr>
                      <td>안전/보건 관리자</td>
                      <td>29명</td>
                    </tr>
                    <tr>
                      <td>안전담당</td>
                      <td>552명</td>
                    </tr>
                    <tr>
                      <td>관리감독자</td>
                      <td>20명</td>
                    </tr>
                    <tr>
                      <td>관리감독자</td>
                      <td>20명</td>
                    </tr>
                    <tr>
                      <td>관리감독자</td>
                      <td>20명</td>
                    </tr>
                    <tr>
                      <td>관리감독자</td>
                      <td>20명</td>
                    </tr>
                    <tr>
                      <td>관리감독자</td>
                      <td>20명</td>
                    </tr>
                    <tr>
                      <td>관리감독자</td>
                      <td>20명</td>
                    </tr>
                    <tr>
                      <td>관리감독자</td>
                      <td>20명</td>
                    </tr>
                    <tr>
                      <td>관리감독자</td>
                      <td>20명</td>
                    </tr>
                    <tr>
                      <td>관리감독자</td>
                      <td>20명</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>총원</td>
                      <td>684명</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="right-box">
          {/*검색영역 */}

          <div className="boxForm">
            <div className="form-table">
              <div className="form-cell wid-300">
                <div className="form-group wid100">
                  <AppAutoComplete label={'사용자 정보검색'} />
                </div>
              </div>
              <div className="btn-area">
                <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                  조회
                </button>
              </div>
            </div>
          </div>
          {/* //검색영역 */}

          {/*그리드영역 */}
          <div className="searchlist">
            <div className="list">
              <h3>임직원 리스트</h3>
              <div>
                <table className="list-table">
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>본부</th>
                      <th>부서</th>
                      <th>팀</th>
                      <th>그룹</th>
                      <th>반</th>
                      <th>직책</th>
                      <th>사번</th>
                      <th>성명</th>
                      <th>발령일자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>100</td>
                      <td>안전보건관리 책임자</td>
                      <td>안전보건관리 책임자</td>
                      <td>안전보건관리 책임자</td>
                      <td>안전보건관리 책임자</td>
                      <td>안전보건관리 책임자</td>
                      <td>안전보건관리 책임자</td>
                      <td>12345678</td>
                      <td>홍길동</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                    </tr>
                    <tr>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                    </tr>
                    <tr>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                    </tr>
                    <tr>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                      <td>번호</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="list-dtail">
              <h3>검색결과상세정보영역</h3>
              <div className="list-table">
                {/*상세*/}
                <div className="editbox">
                  <div className="form-table line">
                    <div className="form-cell pd-style01 wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">본부</label>
                              <span className="text-desc-type1">본부내용</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell pd-style01 wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">부서</label>
                              <span className="text-desc-type1">부서내용</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell pd-style01 wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">팀</label>
                              <span className="text-desc-type1">팀내용</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell pd-style01 wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">그룹</label>
                              <span className="text-desc-type1">그룹내용</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell pd-style01 wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">반</label>
                              <span className="text-desc-type1">반내용</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell pd-style01 wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">직책</label>
                              <span className="text-desc-type1">직책내용</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="line dp-n"></hr>
                  <div className="form-table line">
                    <div className="form-cell pd-style01 wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">사번</label>
                              <span className="text-desc-type1">사번내용</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell pd-style01 wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">성명</label>
                              <span className="text-desc-type1">성명내용</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell pd-style01 wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">발령일자</label>
                              <span className="text-desc-type1">발령일자내용</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="line dp-n"></hr>
                </div>
                <table className="list-table">
                  <thead>
                    <tr>
                      <th className="border-no"></th>
                      <th>일자</th>
                      <th>임명/임면</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th rowSpan={2}>변동내역</th>
                      <td>2024.08.29</td>
                      <td>임명</td>
                    </tr>
                    <tr>
                      <td>2024.08.29</td>
                      <td>임면</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/*//그리드영역 */}
        </div>
      </div>
    </>
  );
}

export default POccupationMu1P3list;
