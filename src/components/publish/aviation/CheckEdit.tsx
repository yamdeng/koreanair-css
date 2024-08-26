import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import AppSelect from '@/components/common/AppSelect';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextInput from '@/components/common/AppTextInput';
import AppTextArea from '@/components/common/AppTextArea';

function CheckEdit() {
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
            <a href="javascript:void(0);">CheckList</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100 Position-w">
              <AppTextInput label="해외공항 안전평가 점검표 (ko)12" />
            </div>
          </div>
          <div className="form-cell  Position-w">
            <div className="Position-end">
              <div className="number-r ">
                <div className="title">Revision</div>
                <div className="form-group wid100">
                  <AppSelect label={'14'} placeholder="14" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="swiper-container">
          <div className="menu-tab">
            <a href="javascript:void(0);" className="active" data-label="안전보안일반12">
              안전보안일반12 (29)
              <button type="button" name="button" className="tabs-tab-remove">
                <span className="btn-list"></span>
              </button>
              <button type="button" className="tabs-tab-remove">
                <span className="delete">X</span>
              </button>
            </a>
            <a href="javascript:void(0);" data-label="항공보안(OYA)">
              항공보안(OYA)
              <button type="button" className="tabs-tab-remove">
                <span className="delete">X</span>
              </button>
            </a>
            <a href="javascript:void(0);" data-label="운항품질(OQA)">
              운항품질(OQA)
              <button type="button" className="tabs-tab-remove">
                <span className="delete">X</span>
              </button>
            </a>
            <a href="javascript:void(0);" data-label="정비품질보증(M&E)">
              정비품질보증(M&E)
              <button type="button" className="tabs-tab-remove">
                <span className="delete">X</span>
              </button>
            </a>
            <a href="javascript:void(0);" data-label="종합통제(OC)">
              종합통제(OC)
              <button type="button" className="tabs-tab-remove">
                <span className="delete">X</span>
              </button>
            </a>
            <a href="javascript:void(0);" data-label="객실품질심사(UFQA)">
              객실품질심사(UFQA)
              <button type="button" className="tabs-tab-remove">
                <span className="delete">X</span>
              </button>
            </a>
            <a href="javascript:void(0);" data-label="여객안전보안보건(CTPN)">
              여객안전보안보건(CTPN)
              <button type="button" className="tabs-tab-remove">
                <span className="delete">X</span>
              </button>
            </a>
            <a href="javascript:void(0);" data-label="운송서비스(FT)">
              운송서비스(FT)
              <button type="button" className="tabs-tab-remove">
                <span className="delete">X</span>
              </button>
            </a>
          </div>

          <div className="menu-tab-nav-operations">
            <button type="button" name="button" className="menu-tab-nav-more">
              <span className="hide">더보기</span>
            </button>

            <button type="button" name="button" className="menu-tab-btn-next">
              <span className="hide">다음 탭메뉴</span>
            </button>
          </div>
        </div>
      </div>

      <div className="checklist-contents edit">
        {/*추가버튼*/}
        <div className="btn-area">
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            + Add Question
          </button>
        </div>
        {/*//추가버튼*/}
        {/* 입력영역 */}
        <div className="editbox edit-detile">
          <button type="button" className="tabs-tab-remove">
            <span className="delete">X</span>
          </button>
          <div className="form-table line">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppTextArea label="Contents" errorMessage="" />
              </div>
            </div>
          </div>
          <hr className="line dp-n"></hr>
          <div className="form-table line">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppTextInput inputType="text" label={'Reference manual'} />
              </div>
            </div>
          </div>
          <hr className="line dp-n"></hr>
          <div className="form-table">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <div className="group-box-wrap wid100">
                  <span className="txt">Priority</span>
                  <div className="editarea-box error">
                    <div className="form-group wid50">
                      <AppSelect label={'N/A'} />
                    </div>
                    <div className="label-box bwid50">
                      <span className="Option-tag OptionLevel normal">N/A</span>
                    </div>
                  </div>
                  <span className="errorText">errorText</span>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <div className="group-box-wrap wid100">
                  <span className="txt">Probability</span>
                  <div className="editarea-box error">
                    <div className="form-group wid50">
                      <AppSelect label={'Extremdly improbable'} />
                    </div>
                    <div className="label-box wid50">
                      <span className="Option-tag OptionLevel normal">Extremdly improbable</span>
                    </div>
                  </div>
                  <span className="errorText">ddd</span>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <div className="group-box-wrap wid100">
                  <span className="txt">Severity</span>
                  <div className="editarea-box">
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
          <hr className="line"></hr>
        </div>
        {/*//입력영역*/}
        {/*추가버튼*/}
        <div className="btn-area">
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            + Add Question
          </button>
        </div>
        {/*//추가버튼*/}

        {/* 입력영역 */}
        <div className="editbox edit-detile">
          <button type="button" className="tabs-tab-remove">
            <span className="delete">X</span>
          </button>
          <div className="form-table line">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppTextArea
                  label="Contents"
                  errorMessage=""
                  placeholder="                       
1-1 지점장은 공항업무(운송/운항관리/정비/안전보안) 수행에 필요한 인원 및 업무 분장을 지정, 파악 관리한다.
(GM - Guidance Material)
지점 조직도, Safety Coordinator, 위임/대행 체계"
                />
              </div>
            </div>
          </div>
          <hr className="line dp-n"></hr>
          <div className="form-table line">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppTextInput inputType="text" label={'SMS Manual 3.2.1,Safety Coordinator 운영지침'} />
              </div>
            </div>
          </div>
          <hr className="line dp-n"></hr>
          <div className="form-table">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <div className="group-box-wrap wid100">
                  <span className="txt">Priority</span>
                  <div className="editarea-box ">
                    <div className="form-group wid50">
                      <AppSelect label={'High'} />
                    </div>
                    <div className="label-box bwid50">
                      <span className="Option-tag OptionLevel red">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <div className="group-box-wrap wid100">
                  <span className="txt">Probability</span>
                  <div className="editarea-box ">
                    <div className="form-group wid50">
                      <AppSelect label={'Extremdly improbable'} />
                    </div>
                    <div className="label-box wid50">
                      <span className="Option-tag OptionLevel green">Extremdly improbable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <div className="group-box-wrap wid100">
                  <span className="txt">Severity</span>
                  <div className="editarea-box">
                    <div className="form-group wid50">
                      <AppSelect label={'Occasional'} />
                    </div>

                    <div className="label-box wid50">
                      <span className="Option-tag OptionLevel orange">Negigible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="line"></hr>
        </div>

        <div className="editbox edit-detile">
          <button type="button" className="tabs-tab-remove">
            <span className="delete">X</span>
          </button>
          <div className="form-table line">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppTextArea
                  label="Contents"
                  errorMessage=""
                  placeholder="                       
1-1 지점장은 공항업무(운송/운항관리/정비/안전보안) 수행에 필요한 인원 및 업무 분장을 지정, 파악 관리한다.
(GM - Guidance Material)
지점 조직도, Safety Coordinator, 위임/대행 체계"
                />
              </div>
            </div>
          </div>
          <hr className="line dp-n"></hr>
          <div className="form-table line">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppTextInput inputType="text" label={'SMS Manual 3.2.1,Safety Coordinator 운영지침'} />
              </div>
            </div>
          </div>
          <hr className="line dp-n"></hr>
          <div className="form-table">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <div className="group-box-wrap wid100">
                  <span className="txt">Priority</span>
                  <div className="editarea-box ">
                    <div className="form-group wid50">
                      <AppSelect label={'High'} />
                    </div>
                    <div className="label-box bwid50">
                      <span className="Option-tag OptionLevel orange">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <div className="group-box-wrap wid100">
                  <span className="txt">Probability</span>
                  <div className="editarea-box ">
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
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <div className="group-box-wrap wid100">
                  <span className="txt">Severity</span>
                  <div className="editarea-box">
                    <div className="form-group wid50">
                      <AppSelect label={'Occasional'} />
                    </div>

                    <div className="label-box wid50">
                      <span className="Option-tag OptionLevel orange">Negigible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="line"></hr>
        </div>
        {/*//입력영역*/}
        {/*추가버튼*/}
        <div className="btn-area">
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

export default CheckEdit;
