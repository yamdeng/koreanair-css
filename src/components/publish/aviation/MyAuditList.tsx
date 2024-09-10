import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';

function MyAuditList() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: '일괄업로드',
      onClick: () => {
        alert('일괄업로드');
      },
    },
    {
      title: '+ Add Plan',
      onClick: () => {
        alert('+ Add Plan');
      },
    },
    {
      title: 'Fields',
      onClick: () => {
        alert('Fields');
      },
      iconClass: 'icon-fields',
    },
  ];

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

      {/*사용자기준 조회범위영역 */}
      <div className="user-wrap">
        <div className="user-box wid60">
          <div className="user-box-top">
            <div className="form-table user-head">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="df wid30">
                    <AppSelect label={'2024'} />
                  </div>
                  <div className="h4">Div. Audit</div>
                </div>
              </div>
            </div>
            <div className="user-box-bottom">
              <div className="ant-col ant-col-11">
                <dl>
                  <dt className="tot">Total</dt>
                  <dd className="tot-result text-color-blue">126</dd>
                </dl>
              </div>
              <div className="ant-col">
                <dl className="sub-count">
                  <dt>Finding</dt>
                  <dd>
                    <span className="text-color-blue">40/50</span>(80%)
                  </dd>
                </dl>
                <dl className="sub-count">
                  <dt>Observation</dt>
                  <dd>
                    <span className="text-color-blue">18/20</span>(80%)
                  </dd>
                </dl>
                <dl className="sub-count">
                  <dt>Overdue</dt>
                  <dd>
                    <span className="text-color-red">18/20</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="user-box-top">
            <div className="form-table user-head">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="df wid30">
                    <AppSelect label={'2024'} />
                  </div>
                  <div className="h4">Div. Audit</div>
                </div>
              </div>
            </div>
            <div className="user-box-bottom">
              <div className="ant-col ant-col-11">
                <dl>
                  <dt className="tot">Total</dt>
                  <dd className="tot-result text-color-blue">19</dd>
                </dl>
              </div>
              <div className="ant-col">
                <dl className="sub-count">
                  <dt>Finding</dt>
                  <dd>
                    <span className="text-color-blue">40/50</span>(75%)
                  </dd>
                </dl>
                <dl className="sub-count">
                  <dt>Observation</dt>
                  <dd>
                    <span className="text-color-blue">1/20</span>(33%)
                  </dd>
                </dl>
                <dl className="sub-count">
                  <dt>Overdue</dt>
                  <dd>
                    <span className="text-color-red">2</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="user-box wid40">
          <div className="user-box-top">
            <div className="form-table user-head">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <div className="h4 tit">My Processing All</div>
                </div>
              </div>
            </div>
            <div className="user-box-bottom">
              <div className="wid100">
                <ul className="pro-list">
                  <dl>
                    <dt className="tot">Total</dt>
                    <dd className="tot-result text-color-yellow">10</dd>
                  </dl>
                  <dl>
                    <dt className="tot">Plan</dt>
                    <dd className="tot-result text-color-blue">0</dd>
                  </dl>
                  <dl>
                    <dt className="tot">Conduct</dt>
                    <dd className="tot-result text-color-blue">2</dd>
                  </dl>
                  <dl>
                    <dt className="tot">CAR</dt>
                    <dd className="tot-result text-color-blue">8</dd>
                  </dl>
                  <dl>
                    <dt className="tot">Overdue</dt>
                    <dd className="tot-result text-color-red">2</dd>
                  </dl>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//사용자기준 조회범위영역 */}

      {/*검색영역 */}
      <div className="boxForm">
        {/*area-detail명 옆에 active  */}
        <div id="" className="area-detail myaudit active">
          <div className="form-table">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppSelect label={'Audited Div'} />
              </div>
            </div>
            <div className="form-cell wid30">
              <div className="form-group form-glow wid30">
                <div className="df">
                  <div className="date1">
                    <AppDatePicker label={'Audit Date'} />
                  </div>
                  <span className="unt">~</span>
                  <div className="date2">
                    <AppDatePicker label={'Audit Data'} />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppTextInput label="Title or CAR Title or AuditorNm" />
              </div>
            </div>
          </div>
          <div className="form-table">
            <div className="form-cell wid30">
              <div className="form-group wid100">
                <AppSelect label={'Status'} />
              </div>
            </div>
            <div className="form-cell wid30">
              <div className="form-group form-glow wid30">
                <div className="df">
                  <div className="date1">
                    <AppDatePicker label={'Due Date'} />
                  </div>
                  <span className="unt">~</span>
                  <div className="date2">
                    <AppDatePicker label={'Due Data'} />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="group-box-wrap flex-between wid100">
                <div className="radio-wrap border-no">
                  <label>
                    <input type="checkbox" checked />
                    <span>Audiror 펼치기</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>CAR 펼치기</span>
                  </label>
                </div>
                <div className="btn-area">
                  <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                    조회
                  </button>
                  <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                    Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*__control명 옆에 active  */}
        <button type="button" name="button" className="arrow button _control active">
          <span className="hide">접기</span>
        </button>
      </div>
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className="">
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default MyAuditList;
