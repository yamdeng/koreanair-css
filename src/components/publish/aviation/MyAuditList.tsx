import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';

function MyAuditList() {
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
            <a href="javascript:void(0);">My Audit</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="swiper-container">
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

          <div className="menu-tab-nav-operations">
            <button type="button" name="button" className="menu-tab-nav-more">
              <span className="hide">더보기</span>
            </button>
          </div>
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

      <div className="checklist-contents"></div>
    </>
  );
}

export default MyAuditList;
