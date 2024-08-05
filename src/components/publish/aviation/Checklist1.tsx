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

      <div className="cont-row checklist-contents">
        <div className="checklist-row list ">
          <div className="checklist-col  ">
            <h4>
              <label>
                <button type="button" name="button" className="">
                  <img src="" />
                </button>
                <a href="javascript:void(0);">해외공항 원격 안전평가 점검표 (ko)10</a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    안전보안일반12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    종합통제12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    정비관리12 <i>(50)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="checklist-col  "></div>
          <div className="checklist-col  "></div>
          <div className="checklist-col  "></div>
        </div>

        <div className="checklist-row list ">
          <div className="checklist-col  ">
            <h4>
              <label>
                <button type="button" name="button" className="">
                  <img src="" />
                </button>
                <a href="javascript:void(0);">해외공항 원격 안전평가 점검표 (ko)10</a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    안전보안일반12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    종합통제12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    정비관리12 <i>(50)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="checklist-col  "></div>
          <div className="checklist-col  "></div>
          <div className="checklist-col  "></div>
        </div>

        <div className="checklist-row list ">
          <div className="checklist-col  ">
            <h4>
              <label>
                <button type="button" name="button" className="">
                  <img src="" />
                </button>
                <a href="javascript:void(0);">해외공항 원격 안전평가 점검표 (ko)10</a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    안전보안일반12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    종합통제12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    정비관리12 <i>(50)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="checklist-col  "></div>
          <div className="checklist-col  "></div>
          <div className="checklist-col  "></div>
        </div>

        <div className="checklist-row list ">
          <div className="checklist-col  ">
            <h4>
              <label>
                <button type="button" name="button" className="">
                  <img src="" />
                </button>
                <a href="javascript:void(0);">해외공항 원격 안전평가 점검표 (en)3</a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    안전보안일반12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    종합통제12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    정비관리12 <i>(50)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="checklist-col  "></div>
          <div className="checklist-col  "></div>
          <div className="checklist-col  "></div>
        </div>

        <div className="checklist-row list ">
          <div className="checklist-col  ">
            <h4>
              <label>
                <button type="button" name="button" className="">
                  <img src="" />
                </button>
                <a href="javascript:void(0);">해외공항 원격 안전평가 점검표 (en)3</a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    안전보안일반12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    종합통제12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    정비관리12 <i>(50)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
              <li className="list-space">
                <button type="button" className="list-btn editChapter"></button>
                <div className="">
                  <a href="javascript:void(0);">
                    여객운송12 <i>(29)</i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="checklist-col  "></div>
          <div className="checklist-col  "></div>
          <div className="checklist-col  "></div>
        </div>
      </div>
    </>
  );
}

export default SPIInfo1;
