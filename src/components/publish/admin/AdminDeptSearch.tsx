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
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);
  const rowData = getAllData();
  const columns = testColumnInfos;

  return (
    <>
      <div className="conts-title">
        <h2>부서조회</h2>
      </div>

      {/* 부서조회 */}
      <div className="conts-box">
        <div className="flex-group">
          <div className="tree_wrap Dept">
            <div className="tree_form">
              <div className="btns-area">
                <button name="button" className="btn_text btn_confirm text_color_neutral-10">
                  신규
                </button>
                <button name="button" className="btn_text text_color_neutral-90 btn_close">
                  삭제
                </button>
                <button name="button" className="btn_text btn_confirm text_color_neutral-10">
                  저장
                </button>
              </div>
              <div className="form-group wid100">
                {/*업무구분 */}
                <AntSelect
                  id="select1"
                  className="label-select"
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
                <label className="f-label" htmlFor="select1">
                  업무구분 <span className="required">*</span>
                </label>
                {/*<span className="errorText">auto complete error message</span>*/}
              </div>
              <div className="form-group wid100">
                {/*검색 */}
                <input
                  id="firstInput4"
                  type="text"
                  className="form-tag"
                  name="title"
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                />
                <label className="f-label" htmlFor="firstInput4">
                  검색 <span className="required">*</span>
                </label>
                <button type="button" className="icon-sch"></button>
              </div>
            </div>
            <Tree
              className="draggable-tree bg"
              defaultExpandedKeys={expandedKeys}
              draggable
              blockNode
              treeData={treeData}
            />
          </div>
          <div className="cont_form">
            {/*그룹상세 */}
            <div className="info-wrap">
              <dl className="tg-item">
                <dt>
                  <button type="button" className="btn-tg">
                    그룹상세 <span className="required">*</span>
                  </button>
                </dt>
                <dd className="tg-conts">
                  <div className="edit-area">
                    <div className="boxForm tog">
                      <div className="form-table">
                        <div className="form-cell wid50">
                          <div className="form-group wid100">
                            <AntSelect
                              id="select1"
                              status=""
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
                              상위그룹 <span className="required">*</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <hr className="line"></hr>
                      <div className="form-table">
                        <div className="form-cell wid50">
                          <div className="form-group wid100 mr5">
                            {/*그룹 명(KOR) */}
                            <input
                              id="firstInput3"
                              type="text"
                              className="form-tag"
                              name="title"
                              value={inputValue}
                              onChange={(event) => {
                                setInputValue(event.target.value);
                              }}
                            />
                            <label className="f-label" htmlFor="firstInput3">
                              그룹 명(KOR) <span className="required">*</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <hr className="line"></hr>
                      <div className="form-table">
                        <div className="form-cell wid50">
                          <div className="form-group wid100 mr5">
                            {/*그룹 명(KOR) */}
                            <input
                              id="firstInput3"
                              type="text"
                              className="form-tag"
                              name="title"
                              value={inputValue}
                              onChange={(event) => {
                                setInputValue(event.target.value);
                              }}
                            />
                            <label className="f-label" htmlFor="firstInput3">
                              그룹 명(ENG) <span className="required">*</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <hr className="line"></hr>
                    </div>
                  </div>
                </dd>
              </dl>

              {/*버튼*/}
              <div className="btns-area">
                <button name="button" className="btn_text btn_confirm text_color_neutral-10">
                  신규
                </button>
                <button name="button" className="btn_text text_color_neutral-90 btn_close">
                  삭제
                </button>
                <button name="button" className="btn_text btn_confirm text_color_neutral-10">
                  저장
                </button>
              </div>
            </div>

            {/*그룹관리자 */}
            <div className="info-wrap">
              <dl className="tg-item">
                <dt>
                  <button type="button" className="btn-tg">
                    그룹관리자 <span className="required">*</span>
                  </button>
                </dt>
                <dd className="tg-conts">
                  <div className="edit-area">
                    <div className="boxForm tog">
                      <div className="form-table">
                        <div className="form-cell wid50">
                          <div className="form-group wid100">
                            <ul className="list">
                              <li>
                                관리자(ADMIN) / 상무대우수석사무장 / ㈜대한항공
                                <a href="javascript:void(0);">
                                  <span className="delete">X</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <hr className="line"></hr>
                      <div className="form-table">
                        <div className="form-cell wid50">
                          <div className="form-group wid100">
                            <ul className="list">
                              <li>
                                사외이사실(BOD)
                                <a href="javascript:void(0);">
                                  <span className="delete">X</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </dd>
              </dl>
              {/*버튼*/}
              <div className="btns-area">
                <button name="button" className="btn_text btn_confirm text_color_neutral-10">
                  신규
                </button>
                <button name="button" className="btn_text text_color_neutral-90 btn_close">
                  전체삭제
                </button>
              </div>
            </div>

            {/*그룹 멤버 */}
            <div className="info-wrap">
              <dl className="tg-item">
                <dt>
                  <button type="button" className="btn-tg">
                    그룹멤버
                    <span className="required">*</span>
                  </button>
                </dt>
                <dd className="tg-conts">
                  <div className="edit-area">
                    <div className="boxForm tog">
                      <div className="form-table">
                        <div className="form-cell wid50">
                          <div className="form-group wid100">
                            <ul className="list">
                              <li>
                                관리자(ADMIN) / 상무대우수석사무장 / ㈜대한항공
                                <a href="javascript:void(0);">
                                  <span className="delete">X</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <hr className="line"></hr>
                      <div className="form-table">
                        <div className="form-cell wid50">
                          <div className="form-group wid100">
                            <ul className="list">
                              <li>
                                사외이사실(BOD)
                                <a href="javascript:void(0);">
                                  <span className="delete">X</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </dd>
              </dl>
              {/*버튼*/}
              <div className="btns-area">
                <button name="button" className="btn_text btn_confirm text_color_neutral-10">
                  신규
                </button>
                <button name="button" className="btn_text text_color_neutral-90 btn_close">
                  전체삭제
                </button>
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
