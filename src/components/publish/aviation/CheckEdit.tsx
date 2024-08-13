import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextInput from '@/components/common/AppTextInput';
import AppDatePicker from '@/components/common/AppDatePicker';

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
            <a href="javascript:void(0);">Checklist</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="CheckList-Title">
        <div className="boxForm">
          <div className="form-table">
            <div className="form-cell wid100">
              <div className="form-group wid100">
                <AppTextInput label="해외공항 안전평가 점검표 (ko)12" />
              </div>
            </div>
            <div className="form-cell wid50">Revision</div>
          </div>
        </div>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" className="active" data-label="안전보안일반12">
            안전보안일반12 (29)
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
        {/*<div className="menu-tab-nav-operations">
          <button type="button" name="button" className="menu-tab-nav-more">
            <span className="hide">더보기</span>
          </button>
          <button type="button" name="button" className="c-tab-btn-next swiper__uid_329_next swiper-button-disabled">
            <span className="hide">다음 탭메뉴</span>
          </button>
        </div>*/}

        <div className="c-tab-btn-group">
          <button type="button" name="button" className="menu-tab-nav-more">
            <span className="hide">더보기</span>
          </button>
          <button type="button" name="button" className="c-tab-btn-next swiper__uid_329_next swiper-button-disabled">
            <span className="hide">다음 탭메뉴</span>
          </button>
        </div>
      </div>

      {/*검색영역 */}
      <div className="btn-area">
        <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
          Checklist Upload
        </button>
        <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
          Add Checklist
        </button>
      </div>
      {/* //검색영역 */}

      <div className="checklist-contents">
        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>해외공항 원격 안전평가 점검표 (ko)10</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  안전보안일반12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  종합통제12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  정비관리12 <i>(50)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  여객운송12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  여객운송12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  여객운송12 <i>(29)</i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>해외공항 안전평가 점검표 (ko)12</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  안전보안일반12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  종합통제12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  정비관리12 <i>(50)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  여객운송12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  여객운송12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  램프운영12 <i>(29)</i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>해외공항 원격 안전평가 점검표 (en)5</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  안전보안일반 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  종합통제12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  정비관리12 <i>(50)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  여객운송12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  여객운송12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  여객운송12 <i>(29)</i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>해외공항 원격 안전평가 점검표 (ko)10</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  안전보안일반2 <i>(11)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  종합통제2 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  정비관리12 <i>(50)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  여객운송12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  여객운송12 <i>(29)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  여객운송12 <i>(29)</i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>객실 승무편조 안전평가 점검표</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  승무편조3-1 <i>(2)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  편조규정3 <i>(2)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  편조시스템 운용3 <i>(2)</i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>운항승무원편조 및 승무자격 안전평가 점검표 | 운항승무원편조 및 승무자격 안전평가 점검표</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  승무편조 일반 승무편조 일반 승무편조 일반 승무편조 일반 승무편조 일반 <i>(4)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  편조규정3 <i>(2)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  편조시스템 운용 <i>(2)</i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>운항승무원편조 및 승무자격 안전평가 점검표 | 운항승무원편조 및 승무자격 안전평가 점검표</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  승무편조 일반 승무편조 일반 승무편조 일반 승무편조 일반 승무편조 일반 <i>(4)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  편조규정3 <i>(2)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  편조시스템 운용 <i>(2)</i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>운항승무원편조 및 승무자격 안전평가 점검표 | 운항승무원편조 및 승무자격 안전평가 점검표</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  승무편조 일반 승무편조 일반 승무편조 일반 승무편조 일반 승무편조 일반 <i>(4)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  편조규정3 <i>(2)</i>
                </a>
              </li>
              <li className="list-space">
                <button type="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  편조시스템 운용 <i>(2)</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckEdit;
