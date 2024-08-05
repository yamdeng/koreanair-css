import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';

function SPIInfo1() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  return (
    <>
      {/*<div className="conts-title">
        <h2>운영현황</h2>
      </div>*/}
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" className="active" data-label="안전품질평가(OYE)">
            안전품질평가(OYE)
          </a>
          <a href="javascript:void(0);" data-label="항공보안(OYA)">
            항공보안(OYA)
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
          <button type="button" className="menu-tab-nav-more">
            <span role="img" aria-label="ellipsis" className="anticon anticon-ellipsis">
              dd
            </span>
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
          <div className="checklist-col checklist-col-xs-24 checklist-col-md-8">
            <h4>
              <button type="button" name="button" className="">
                <img src="" />
              </button>
              <a href="javascript:void(0);">해외공항 안전평가 점검표 (ko)12</a>
            </h4>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="checklist-col checklist-col-xs-24 checklist-col-md-8"></div>
          <div className="checklist-col checklist-col-xs-24 checklist-col-md-8"></div>
          <div className="checklist-col checklist-col-xs-24 checklist-col-md-8"></div>
        </div>
      </div>
    </>
  );
}

export default SPIInfo1;
