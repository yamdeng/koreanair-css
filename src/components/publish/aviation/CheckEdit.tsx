import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import AppSelect from '@/components/common/AppSelect';
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
        {/*<!--추가버튼-->*/}
        <div className="btn-area">
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            + Add Question
          </button>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default CheckEdit;
