import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';
import AppTextArea from '@/components/common/AppTextArea';
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

function AuditEdit() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const [Observation, setObservation] = useState(true);
  const [ActionTaken, setActionTaken] = useState(true);
  const [CorrectiveAction, setCorrectiveAction] = useState(true);
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: 'Add Audit',
      onClick: () => {
        alert('Add Audit');
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
            <a href="javascript:void(0);">예외 Audit 관리</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      {/* <div className="conts-title">
        <h2>예외 Audit 관리</h2>
      </div> */}
      <div className="myaudit-container">
        <div className="myaudit-header">
          <div className="ad-number">
            Audit No. <span>24-Autority-001-0407</span>
          </div>
        </div>
        <div className="myaudit-contents">
          <div className="editbox ">
            <div className="form-table">
              <div className="form-cell wid20">
                <div className="form-group wid100">
                  <AppSelect label="Autority" required />
                </div>
              </div>
              <div className="form-cell wid20">
                <div className="form-group wid100">
                  <AppTextInput label="FAA" />
                </div>
              </div>
              <div className="form-cell wid20">
                <div className="form-group wid100">
                  <AppTextInput label="Auditor name" />
                </div>
              </div>
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppTextInput label="Audit Title" required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid30">
                <div className="form-group wid100">
                  <AppTextInput label="Audit No." required />
                </div>
              </div>
              <div className="form-cell wid20">
                <div className="form-group wid100">
                  <AppTextInput label="" />
                </div>
              </div>
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <div className="df">
                    <div className="date1">
                      <AppDatePicker label={'Audit Date'} />
                    </div>
                    <span className="unt">~</span>
                    <div className="date2">
                      <AppDatePicker label={'Audit Date'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 파일첨부영역 : drag */}
            <div className="form-cell wid100 mb-20">
              <div className="form-group wid100">
                {/* 파일첨부영역 : drag */}
                <div className="filebox error">
                  <Dragger {...props}>
                    <p className="ant-upload-text ">+ 이 곳을 클릭하거나 마우스로 업로드할 파일을 끌어서 놓으세요.</p>
                  </Dragger>
                  <label htmlFor="file" className="file-label">
                    첨부파일 <span className="required">*</span>
                  </label>
                </div>
                <span className="errorText">fileerror</span>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50 ">
                <div className="form-group wid100">
                  {/*Deascription*/}
                  <AppTextArea
                    label="Deascription"
                    errorMessage=""
                    placeholder=""
                    style={{ width: '100%', height: 100 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="edit-area border-no">
            <div className="detailForm pd-no">
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
                              <div className="form-cell wid50">
                                <div className="form-group wid100">
                                  <AppTextInput label="Finding Title" required />
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid100">
                                <div className="form-group wid-300">
                                  <AppDatePicker label="Response Due" />
                                </div>
                              </div>
                              <div className="form-cell wid50">
                                <div className="group-box-wrap wid100">
                                  <span className="txt">
                                    F / O<span className="required"></span>
                                  </span>
                                  <div className="radio-wrap">
                                    <label>
                                      <input type="radio" />
                                      <span>Finding</span>
                                    </label>
                                    <label>
                                      <input type="radio" />
                                      <span>Observation</span>
                                    </label>
                                  </div>
                                  {/*<span className="errorText">error</span>*/}
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
                                  <div className="audit-rist-level">
                                    <span className="Safety-tag type01 riskLevel level1">3A</span>
                                    <p>Severity:보통(Remote), Probability:위험(Major)</p>
                                  </div>
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

                                  <div className="user-add-box">
                                    <div className="team-box">
                                      <button className="team">
                                        안전기획팀
                                        <a href="javascript:void(0);">
                                          <span className="delete">X</span>
                                        </a>
                                      </button>
                                      <button className="team">
                                        안전기획팀
                                        <a href="javascript:void(0);">
                                          <span className="delete">X</span>
                                        </a>
                                      </button>
                                      <button className="team">
                                        안전기획팀
                                        <a href="javascript:void(0);">
                                          <span className="delete">X</span>
                                        </a>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
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
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid50 ">
                                <div className="form-group wid100">
                                  {/*Deascription*/}
                                  <AppTextArea
                                    label="Deascription"
                                    errorMessage=""
                                    placeholder=""
                                    style={{ width: '100%', height: 100 }}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="btn-area">
                              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                                Delete
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
                              <li className="active">안전기획팀</li>
                              <li>안전품질평가팀</li>
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
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuditEdit;
