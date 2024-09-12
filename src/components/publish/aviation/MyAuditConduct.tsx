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
      {/*//경로 */}

      <div className="myaudit-container">
        <div className="myaudit-header">
          <div className="ad-number">
            Audit No. <span>24-LSA-0407</span>
          </div>
          <div className="myaudit-tab">
            <ul>
              <li>
                <a className="active" href="javascript:void(0);">
                  Plan
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">Conduct</a>
              </li>
              <li>
                <a href="javascript:void(0);">CAR</a>
              </li>
              <li>
                <a href="javascript:void(0);">Close</a>
              </li>
            </ul>
          </div>
          {/* <div className="editbox Audit">
            <div className="form-group wid100 Position-w">Audit No. 24-LSA-0407</div>
          </div>
          {/*탭 */}
          {/* <div className="menu-tab-nav">
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
                      <span className="ux-order-list-tab__link-text">Conduct</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>*/}
          {/*//탭 */}
        </div>
        <div className="myaudit-contents">
          <div className="audit-left-box">
            <h2>Plan</h2>
            <div className="editbox">
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="group-box-wrap wid100">
                    <span className="txt">Remote/On-site</span>
                    <div className="radio-wrap">
                      <label>
                        <input type="radio" />
                        <span>Remote</span>
                      </label>
                      <label>
                        <input type="radio" />
                        <span>On-site</span>
                      </label>
                    </div>
                    {/*<span className="errorText">error</span>*/}
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
            </div>
          </div>
          <div className="audit-right-box">
            <h2>Auditee</h2>
            <div className="editbox">
              <div className="form-table line">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="부문" required disabled />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="부서" required disabled />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="작성자" required disabled />
                  </div>
                </div>
              </div>
              <hr className="line dp-n"></hr>
            </div>
          </div>
        </div>
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
