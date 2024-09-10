import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import AppSelect from '@/components/common/AppSelect';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextInput from '@/components/common/AppTextInput';
import AppTextArea from '@/components/common/AppTextArea';

function MyAuditConduct() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">AUDIT</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">MyAuditConduct</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="editbox Audit">
        <div className="form-table ">
          <div className="form-cell wid50">
            <div className="form-group wid100 Position-w">Audit No. 24-LSA-0407</div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="ux-tab -scroll ux-order-list-tab">
          <div className="ux-order-list-tab__wrap">
            <ul className="ux-tab__list">
              <li className="ux-tab__item ux-order-list-tab__item -scroll -active">
                <button type="button" className="ux-order-list-tab__button">
                  <span className="ux-order-list-tab__link-text">Plan</span>
                  <span className="icon-end">
                    <span className="icon -arrow-right -gray -size24 -msize16"></span>
                  </span>
                </button>
              </li>
              <li className="ux-order-list-tab__host hydrated">
                <button type="button" className="ux-order-list-tab__button">
                  <span className="ux-order-list-tab__link-text">Plan</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="checklist-contents edit">
        {/* 입력영역 */}
        <div className="editbox edit-detile Audit">
          <button type="button" className="tabs-tab-remove">
            <span className="btnClear">X</span>
          </button>
          <div className="form-table line">
            <div className="form-cell">
              <div className="form-group wid100">
                <div className="df">
                  <div className="type7 mt10">
                    <AppTextArea label="Contents" style={{ width: '100%', height: 145 }} errorMessage="" />
                    <div className="form-table">
                      <div className="form-cell wid100">
                        <div className="form-group wid100">
                          <AppTextInput inputType="text" label={'Reference manual'} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="type8">
                    <div className="form-table">
                      <div className="form-cell wid100">
                        <div className="form-group wid100">
                          <div className="group-box-wrap wid100">
                            <div className="editarea-box Audit">
                              <div className="form-group wid50">
                                <AppSelect label={'N/A'} />
                              </div>
                              <div className="label-box bwid50">
                                <span className="Option-tag OptionLevel normal">N/A</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-table">
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <div className="group-box-wrap wid100">
                            <div className="editarea-box Audit">
                              <div className="form-group wid50">
                                <AppSelect label={'Extremdly improbable'} />
                              </div>
                              <div className="label-box wid50">
                                <span className="Option-tag OptionLevel normal">Extremdly improbable</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-table">
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <div className="group-box-wrap wid100">
                            <span className="txt">Severity</span>
                            <div className="editarea-box Audit">
                              <div className="form-group wid50">
                                <AppSelect label={'Occasional'} />
                              </div>

                              <div className="label-box wid50">
                                <span className="Option-tag OptionLevel normal">Negigible</span>
                              </div>
                            </div>
                            <span className="errorText"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*//입력영역*/}

        {/* 입력영역 */}
        {/* 입력영역 */}
        <div className="editbox edit-detile Audit">
          <button type="button" className="tabs-tab-remove">
            <span className="btnClear">X</span>
          </button>
          <div className="form-table line">
            <div className="form-cell">
              <div className="form-group wid100">
                <div className="df">
                  <div className="type7 mt10">
                    <AppTextArea label="Contents" style={{ width: '100%', height: 145 }} errorMessage="" />
                    <div className="form-table">
                      <div className="form-cell wid100">
                        <div className="form-group wid100">
                          <AppTextInput inputType="text" label={'Reference manual'} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="type8">
                    <div className="form-table">
                      <div className="form-cell wid100">
                        <div className="form-group wid100">
                          <div className="group-box-wrap wid100">
                            <div className="editarea-box Audit">
                              <div className="form-group wid50">
                                <AppSelect label={'N/A'} />
                              </div>
                              <div className="label-box bwid50">
                                <span className="Option-tag OptionLevel orange">N/A</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-table">
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <div className="group-box-wrap wid100">
                            <div className="editarea-box Audit">
                              <div className="form-group wid50">
                                <AppSelect label={'Extremdly improbable'} />
                              </div>
                              <div className="label-box wid50">
                                <span className="Option-tag OptionLevel yellow">Extremdly improbable</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-table">
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <div className="group-box-wrap wid100">
                            <span className="txt">Severity</span>
                            <div className="editarea-box Audit">
                              <div className="form-group wid50">
                                <AppSelect label={'Occasional'} />
                              </div>

                              <div className="label-box wid50">
                                <span className="Option-tag OptionLevel normal">Negigible</span>
                              </div>
                            </div>
                            <span className="errorText"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*//입력영역*/}

        {/*추가버튼*/}
        <div className="btn-area ">
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            + Add Question
          </button>
        </div>
        {/*//추가버튼*/}
      </div>

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button className="btn_text text_color_neutral-10 btn_confirm ">인쇄</button>
        <button className="btn_text btn_list ">목록</button>
        <button disabled className="btn_text btn-disabled">
          삭제
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default MyAuditConduct;
