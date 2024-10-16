import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import AppSelect from '@/components/common/AppSelect';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextInput from '@/components/common/AppTextInput';
import AppTextArea from '@/components/common/AppTextArea';

function CheckDetail() {
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
            <a href="javascript:void(0);">CheckList 상세보기</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="editbox Audit">
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100 Position-w h40">
              <span className="tit-head">해외공항 안전평가 점검표 (ko)12</span>
            </div>
          </div>
          <div className="form-cell  Position-w">
            <div className="Position-end">
              <div className="number-r ">
                <div className="title">Revision</div>
                <div className="form-group wid100">
                  <AppSelect label={'14'} placeholder="" />
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
          <div className="menu-tab Audit">
            <a href="javascript:void(0);" className="active" data-label="안전보안일반12">
              안전보안일반12 <em>(29)</em>
            </a>
            <a href="javascript:void(0);" data-label="항공보안(OYA)">
              종합통제<em>(29)</em>
            </a>
            <a href="javascript:void(0);" data-label="운항품질(OQA)">
              운항품질(OQA)
            </a>
            <a href="javascript:void(0);" data-label="정비품질보증(M&E)">
              정비품질보증(M&E)
            </a>
            <a href="javascript:void(0);" data-label="종합통제(OC)">
              종합통제(OC)
            </a>
            <a href="javascript:void(0);" data-label="객실품질심사(UFQA)">
              객실품질심사(UFQA)
            </a>
            <a href="javascript:void(0);" data-label="여객안전보안보건(CTPN)">
              여객안전보안보건(CTPN)
            </a>
            <a href="javascript:void(0);" data-label="운송서비스(FT)">
              운송서비스(FT)
            </a>
          </div>

          <div className="menu-tab-nav-operations">
            <button type="button" name="button" className="menu-tab-nav-more">
              <span className="hide">더보기</span>
            </button>

            {/*<button type="button" name="button" className="menu-tab-btn-next">
              <span className="hide">다음 탭메뉴</span>
            </button>*/}
          </div>
        </div>
      </div>

      <div className="checklist-contents edit Audit">
        {/* 상세페이지 */}
        <div className="editbox">
          <div className="form-table line">
            <div className="form-cell wid100">
              <div className="form-group wid100">
                <div className="df">
                  <div className="type9 mt10">
                    <div className="text-desc-type1">
                      1-1 지점장은 공항업무(운송/운항관리/정비/안전보안) 수행에 필요한 인원 및 업무 분장을 지정, 파악
                      관리한다. (GM - Guidance Material) 지점 조직도, Safety Coordinator, 위임/대행 체계 인원현황(해분야
                      적정 경력 인력 보임 여부) <br />
                      업무분장(업무의 범위, 책임, 권한 포함) 1-1 지점장은 공항업무(운송/운항관리/정비/안전보안) 수행에
                      필요한 인원 및 업무 분장을 지정, 파악 관리한다. (GM - Guidance Material) 지점 조직도, Safety
                      Coordinator, 위임/대행 체계 인원현황(해분야 적정 경력 인력 보임 여부) <br />
                      업무분장(업무의 범위, 책임, 권한 포함)
                    </div>
                    <div className="form-table">
                      <div className="form-cell wid100">
                        <div className="form-group wid100">
                          <span className="text-desc-type1">SMS Manual 3.2.1,Safety Coordinator 운영지침</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="type10">
                    <div className="form-table">
                      <div className="form-cell">
                        <div className="form-group wid100">
                          <div className="group-box-wrap wid100">
                            <span className="txt">Priority</span>
                            <div className="editarea-box view">
                              <div className="label-box bwid50">
                                <span className="Option-tag OptionLevel red">High</span>
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
                            <span className="txt">Probability</span>
                            <div className="editarea-box view">
                              <div className="label-box wid50">
                                <span className="Option-tag OptionLevel green">Extremdly improbable</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-table">
                      {' '}
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <div className="group-box-wrap wid100">
                            <span className="txt">Severity</span>
                            <div className="editarea-box view">
                              <div className="label-box wid50">
                                <span className="Option-tag OptionLevel green">Negigible</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<div className="box-view-list Audit">
                    <ul className="view-list">
                      <li className="accumlate-list">
                        <span className="text-desc-type1">
                          1-1 지점장은 공항업무(운송/운항관리/정비/안전보안) 수행에 필요한 인원 및 업무 분장을 지정,
                          파악 관리한다. (GM - Guidance Material) 지점 조직도, Safety Coordinator, 위임/대행 체계
                          인원현황(해분야 적정 경력 인력 보임 여부) <br />
                          업무분장(업무의 범위, 책임, 권한 포함)
                        </span>
                      </li>
                    </ul>
                  </div>*/}
                </div>
              </div>
            </div>
          </div>

          <hr className="line dp-n"></hr>
        </div>
        {/*//상세페이지*/}
      </div>

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button className="btn_text text_color_neutral-10 btn_confirm ">인쇄</button>
        <button className="btn_text btn_list ">목록</button>
        <button disabled className="btn_text btn-disabled">
          삭제
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          수정
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default CheckDetail;
