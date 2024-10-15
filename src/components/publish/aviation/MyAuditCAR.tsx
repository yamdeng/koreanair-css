import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import AppSelect from '@/components/common/AppSelect';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextInput from '@/components/common/AppTextInput';
import AppTextArea from '@/components/common/AppTextArea';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import { Upload } from 'antd';
const { Dragger } = Upload;
const props: any = {
  name: 'file',
  multiple: true,
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      // status: 'uploading',
      url: 'http://www.baidu.com/xxx.png',
      percent: 33,
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',

  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      alert(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      alert(`${info.file.name} file upload failed.`);
    }
  },

  onRemove(file) {
    return false;
  },

  onPreview(file) {
    return false;
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

function MyAuditCAR() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [Finding, setFinding] = useState(true);
  const [Observation, setObservation] = useState(true);
  const [ActionTaken, setActionTaken] = useState(true);
  const [CorrectiveAction, setCorrectiveAction] = useState(true);

  const customButtons = [
    {
      title: 'ApprReq',
      onClick: () => {
        alert('ApprReq');
      },
    },
    {
      title: 'Approval',
      onClick: () => {
        alert('Approval');
      },
    },
    {
      title: 'Reject',
      onClick: () => {
        alert('Reject');
      },
    },
    {
      title: 'Rollback',
      onClick: () => {
        alert('Rollback');
      },
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
                <a href="javascript:void(0);">
                  <span className="myaudit-tab-icon">아이콘</span> Plan
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <span className="myaudit-tab-icon">아이콘</span>Conduct
                </a>
              </li>
              <li>
                <a className="active" href="javascript:void(0);">
                  <span className="myaudit-tab-icon active">아이콘</span> CAR
                </a>
              </li>
              <li>
                <a className="disabled" href="javascript:void(0);">
                  <span className="myaudit-tab-icon">아이콘</span>Close
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="myaudit-contents">
          <h3 className="audit-tit">CAR</h3>
          {/*그리드영역 */}
          <div className="mt-10 mb-20">
            <AppTable rowData={rowData} columns={columns} customButtons={customButtons} hiddenPagination />
          </div>
          {/*//그리드영역 */}
          <div className="info-wrap toggle">
            <dl className="{firstExpaned ? 'tg-item active' : 'tg-item'}">
              {/* 비행정보 */}
              {/* toggle 선택되면  열어지면 active붙임*/}
              <dt>
                <button className="btn-tg">Finding</button>
              </dt>
              <dd className="tg-conts">
                {/* 상세페이지 */}
                <div className="editbox bg-gray">
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="df">
                          <div className="type9 mt10">
                            <h3 className="audit-car-tit">
                              해외공항 원격 안전평가 점검표 (ko)10 <span>CAR No. 24-LSA-0407-BE01</span>
                            </h3>
                            <div className="text-desc-type1">
                              7-1 공항 지점은 자체보안계획과 현지 관련규정에 부합하는 지점 표준 업무 절차를 수립하여
                              항상 최신판으로 유지하여야 한다. 상기 평가항목 내용에 대해 입증할 수 있는 자료(관련 교육
                              또는 회람 실시 내용, 소속 전 직원의 Read & Sign 결과지 등) 및 사진을 첨부하여 주시기
                              바랍니다.
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid100">
                                <div className="form-group wid100">
                                  <span className="text-desc-type1">ASP 5.2.7 1</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="type10">
                            <div className="form-table">
                              <div className="form-cell">
                                <div className="form-group wid100">
                                  <div className="group-box-wrap wid100">
                                    <span className="txt01">Priority</span>
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
                                    <span className="txt01">Probability</span>
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
                              <div className="form-cell wid50">
                                <div className="form-group wid100">
                                  <div className="group-box-wrap wid100">
                                    <span className="txt01">Severity</span>
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table ta-r">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <div className="radio-wrap border-no">
                          <label>
                            <input type="radio" />
                            <span>Finding</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>Observation</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>N/A</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>Yes</span>
                          </label>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  <hr className="line"></hr>
                </div>
                {/*//상세페이지*/}

                <div className="edit-area border-no">
                  <div className="detailForm">
                    <div className="detailForm-detail-box list-group">
                      <div className="detailForm-detail-2deps rbox list-group">
                        <div className="list bx-toggle">
                          <dl className="tg-item rbox01 ">
                            <dt onClick={() => setCorrectiveAction(!CorrectiveAction)}>
                              <button type="button" className="tg-btn">
                                Corrective Action
                                <span className={CorrectiveAction ? 'active' : ''}></span>
                              </button>
                            </dt>
                            <dd className="tg-conts" style={{ display: CorrectiveAction ? '' : 'none' }}>
                              <div className="edit-toggle">
                                <div className="editbox b-t-0">
                                  <div className="form-table">
                                    <div className="form-cell wid100">
                                      <div className="form-group wid-300">
                                        <AppDatePicker label="Response Due" required />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-table">
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100">
                                        <AppSelect label={'Audited By'} required />
                                      </div>
                                    </div>
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100">
                                        <AppSelect label={'Flight Phase'} required />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-table">
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100">
                                        <AppTextInput label="Finding Title" required />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-table">
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100">
                                        <div className="btn-tit">
                                          <h3>
                                            Risk Level <span className="required">*</span>
                                          </h3>
                                        </div>
                                        <button className="btn-select">Select</button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-table">
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100">
                                        <div className="btn-tit">
                                          <h3>
                                            Finding Category <span className="required">*</span>
                                          </h3>
                                        </div>
                                        <button className="btn-select">Select</button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-table">
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100">
                                        <div className="btn-tit">
                                          <h3>Hazard LVL3</h3>
                                        </div>
                                        <button className="btn-select">Select</button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-table">
                                    <div className="form-cell wid50">
                                      <div className="group-box-wrap wid100">
                                        <span className="txt">Risk Register</span>
                                        <div className="radio-wrap">
                                          <label>
                                            <input type="radio" />
                                            <span>Yes</span>
                                          </label>
                                          <label>
                                            <input type="radio" />
                                            <span>No</span>
                                          </label>
                                        </div>
                                        {/*<span className="errorText">error</span>*/}
                                      </div>
                                    </div>
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100">
                                        <AppTextInput label="Potential Consequence" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-table">
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100">
                                        <div className="btn-tit">
                                          <h3>
                                            Assign to <span className="required">*</span>
                                          </h3>
                                        </div>
                                        <button className="btn-select">Select</button>
                                      </div>
                                    </div>
                                  </div>
                                  <h3 className="audit-title mt-10">
                                    Root Cause <span className="required">*</span>
                                  </h3>
                                  <div className="form-table">
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100">
                                        <AppTextInput label="Step 1" />
                                      </div>
                                    </div>
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100">
                                        <AppTextInput label="Step 2" />
                                      </div>
                                    </div>
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100">
                                        <AppTextInput label="Step 3" />
                                      </div>
                                    </div>
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100">
                                        <AppTextInput label="Step 4" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-table">
                                    <div className="form-cell wid50">
                                      <div className="form-group wid100 mr5">
                                        <textarea
                                          id="testArea1"
                                          className="form-tag"
                                          style={{ width: '100%' }}
                                          name="testArea1"
                                          value={inputValue}
                                          onChange={(event) => {
                                            setInputValue(event.target.value);
                                          }}
                                        />
                                        <label className="f-label" htmlFor="testArea1">
                                          Description <span className="required">*</span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="btn-area">
                                    <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                                      Confirm
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>

                    <div className="detailForm-detail-box list-group">
                      <div className="detailForm-detail-2deps rbox list-group">
                        <div className="list bx-toggle">
                          <dl className="tg-item rbox01 ">
                            <dt onClick={() => setActionTaken(!ActionTaken)}>
                              <button type="button" className="tg-btn">
                                Action Taken
                                <span className={ActionTaken ? 'active' : ''}></span>
                              </button>
                            </dt>
                            <dd className="tg-conts" style={{ display: ActionTaken ? '' : 'none' }}>
                              <div className="edit-toggle">
                                <div className="edit-tab">
                                  <ul className="tab-list">
                                    <li className="active">Assign to 1</li>
                                    <li>Assign to 2</li>
                                  </ul>
                                </div>
                                <div className="editbox b-t-0">
                                  <div className="form-table">
                                    <div className="form-cell wid100">
                                      <div className="form-group wid-300">
                                        <AppTextInput label="Reporter" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-table">
                                    <div className="form-cell wid100">
                                      <div className="form-group wid100">
                                        <textarea
                                          id="testArea1"
                                          className="form-tag"
                                          style={{ width: '100%' }}
                                          name="testArea1"
                                          value={inputValue}
                                          onChange={(event) => {
                                            setInputValue(event.target.value);
                                          }}
                                        />
                                        <label className="f-label" htmlFor="testArea1">
                                          Plan & Result
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  {/* 파일첨부영역 : drag */}
                                  <div className="form-cell wid100  mt-15">
                                    <div className="form-group wid100">
                                      {/* 파일첨부영역 : drag */}
                                      <div className="filebox error">
                                        <Dragger {...props}>
                                          <p className="ant-upload-text ">
                                            + 이 곳을 클릭하거나 마우스로 업로드할 파일을 끌어서 놓으세요.
                                          </p>
                                        </Dragger>
                                        <label htmlFor="file" className="file-label">
                                          첨부파일 <span className="required">*</span>
                                        </label>
                                      </div>
                                      <span className="errorText">fileerror</span>
                                    </div>
                                  </div>
                                  <div className="form-table">
                                    <div className="form-cell wid100">
                                      <div className="form-group wid100">
                                        <textarea
                                          id="testArea1"
                                          className="form-tag"
                                          style={{ width: '100%' }}
                                          name="testArea1"
                                          value={inputValue}
                                          onChange={(event) => {
                                            setInputValue(event.target.value);
                                          }}
                                        />
                                        <label className="f-label" htmlFor="testArea1">
                                          Plan & Result
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  {/* 파일첨부영역 : drag */}
                                  <div className="form-cell wid100 mt-15">
                                    <div className="form-group wid100">
                                      {/* 파일첨부영역 : drag */}
                                      <div className="filebox error">
                                        <Dragger {...props}>
                                          <p className="ant-upload-text ">
                                            + 이 곳을 클릭하거나 마우스로 업로드할 파일을 끌어서 놓으세요.
                                          </p>
                                        </Dragger>
                                        <label htmlFor="file" className="file-label">
                                          첨부파일 <span className="required">*</span>
                                        </label>
                                      </div>
                                      <span className="errorText">fileerror</span>
                                    </div>
                                  </div>
                                  <div className="btn-area">
                                    <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                                      Accept
                                    </button>
                                    <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                                      Reject
                                    </button>
                                    <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                                      Edit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*//입력영역*/}
              </dd>
            </dl>

            <dl className="{firstExpaned ? 'tg-item active' : 'tg-item'}">
              {/* 비행정보 */}
              {/* toggle 선택되면  열어지면 active붙임*/}
              <dt onClick={() => setObservation(!Observation)}>
                <button type="button" className="btn-tg">
                  Observation<span className={Observation ? 'active' : ''}></span>
                </button>
              </dt>
              <dd className="tg-conts" style={{ display: Observation ? '' : 'none' }}></dd>
            </dl>
            {/*추가버튼*/}
            <div className="btn-area mt-15 mb-10 ta-c">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                + Add Questionnaire
              </button>
            </div>
            {/*//추가버튼*/}
            <div className="editbox edit-audit-bg mt-15">
              <h3 className="audit-car-tit">Additional Audit Checklist</h3>
              <div className="edit-toggle">
                <div className="editbox b-t-0">
                  <h4 className="s-tit mt-15">Additional Chapter</h4>
                  <div className="form-table">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <textarea
                          id="testArea1"
                          className="form-tag"
                          style={{ width: '100%' }}
                          name="testArea1"
                          value={inputValue}
                          onChange={(event) => {
                            setInputValue(event.target.value);
                          }}
                        />
                        <label className="f-label" htmlFor="testArea1">
                          Content
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="Reference Manual" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="Input Comment" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <div className="radio-wrap border-no">
                          <label>
                            <input type="radio" />
                            <span>Finding</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>Observation</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>N/A</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>Yes</span>
                          </label>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                      Cancel
                    </button>
                    <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="editbox edit-audit-bg mt-15">
              <h3 className="audit-car-tit">
                Additional Audit Checklist <span>CAR No. 24-LSA-0407-BE03</span>
              </h3>
              <ul className="audit-carconts">
                <li>Additional Chapter</li>
                <li>
                  체크리스트에 존재하지 않는 잠재적인 위험을 감지했습니다. CAR 발행 후 개선조치 부탁드립니다. reference
                  manual 입니다.
                </li>
                <li>
                  <div className="group-box-wrap wid100">
                    <div className="radio-wrap border-no ta-r">
                      <label>
                        <input type="radio" checked />
                        <span>Finding</span>
                      </label>
                      <label>
                        <input type="radio" />
                        <span>Observation</span>
                      </label>
                      <label>
                        <input type="radio" />
                        <span>N/A</span>
                      </label>
                      <label>
                        <input type="radio" />
                        <span>Yes</span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <textarea
                        id="testArea1"
                        className="form-tag"
                        style={{ width: '100%' }}
                        name="testArea1"
                        value={inputValue}
                        onChange={(event) => {
                          setInputValue(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <div className="btn-area">
                <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                  Delete
                </button>
                <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                  Edit
                </button>
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
              수정
            </button>
          </div>
          {/*//하단버튼영역*/}
        </div>
      </div>
    </>
  );
}

export default MyAuditCAR;
