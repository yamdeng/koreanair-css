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
                  <span className="myaudit-tab-icon active">아이콘</span> Plan
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <span className="myaudit-tab-icon">아이콘</span>Conduct
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <span className="myaudit-tab-icon">아이콘</span> CAR
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <span className="myaudit-tab-icon">아이콘</span>Close
                </a>
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
                    <span className="txt">
                      Remote/On-site<span className="required">*</span>
                    </span>
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
                <div className="form-cell wid50">
                  <div className="number-r ">
                    <div className="title">Airline</div>
                    <div className="form-group wid100">
                      <AppSelect label={'Korean Air / Airline'} placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="Audit Title" required />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppSelect label="Division" required />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppSelect label="Audit Type" required />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="Checklist" required />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppDatePicker label="Date" showTime />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppSelect label={'KST'} disabled />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="Checklist" required />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <h3 className="av-table-tit mt-10">계획보고</h3>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="전재 결재 문서 링크" />
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
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppSelect label={'Auditor'} required />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppAutoComplete label="" />
                  </div>
                </div>
              </div>
              <div className="form-cell wid100 mb-15">
                <div className="form-group wid100">
                  <div className="SelectedList memberClass">
                    <ul>
                      <li>
                        <span className="InfoBox"></span>
                        <div className="Info">
                          <div className="Name">홍길동 (170****)</div>
                          <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                        </div>
                        <span className="class leader">Leader</span>
                        <a href="javascript:void(0);">
                          <span className="delete">X</span>
                        </a>
                      </li>
                      <li>
                        <span className="InfoBox"></span>
                        <div className="Info">
                          <div className="Name">홍길동 (170****)</div>
                          <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                        </div>
                        <span className="class ">Leader</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                {/* 파일첨부영역 : drag */}
                <div className="form-cell wid100">
                  <div className="form-group wid100">
                    {/* 파일첨부영역 : drag */}
                    <div className="filebox error">
                      <Dragger {...props}>
                        <p className="ant-upload-text ">
                          + 이 곳을 클릭하거나 마우스로 업로드할 파일을 끌어서 놓으세요.
                        </p>
                      </Dragger>
                      <label htmlFor="file" className="file-label">
                        Pre-meeting <span className="required">*</span>
                      </label>
                    </div>
                    <span className="errorText">fileerror</span>
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <textarea
                      id="testArea1"
                      className="form-tag custom_textarea"
                      style={{ width: '100%' }}
                      name="testArea1"
                      value={inputValue}
                      onChange={(event) => {
                        setInputValue(event.target.value);
                      }}
                    />
                    <label className="f-label" htmlFor="testArea1">
                      비고
                    </label>
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
                  <div className="group-box-wrap wid100">
                    <div className="radio-wrap border-no">
                      <label>
                        <input type="radio" />
                        <span>Airport</span>
                      </label>
                    </div>
                    {/*<span className="errorText">error</span>*/}
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppAutoComplete label="Airport" required />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="Region" required />
                  </div>
                </div>
              </div>

              <hr className="line dp-n"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="group-box-wrap wid100">
                    <div className="radio-wrap border-no">
                      <label>
                        <input type="radio" />
                        <span>KE</span>
                      </label>
                    </div>
                    {/*<span className="errorText">error</span>*/}
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="Division" />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="group-box-wrap wid100">
                    <div className="radio-wrap border-no">
                      <label>
                        <input type="radio" />
                        <span>External Service Provider</span>
                      </label>
                    </div>
                    {/*<span className="errorText">error</span>*/}
                  </div>
                </div>

                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="Company Name" required />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="group-box-wrap wid100">
                    <span className="txt">
                      Line Safety Audit
                      <span className="required">*</span>
                    </span>
                    <div className="radio-wrap">
                      <label>
                        <input type="checkbox" />
                        <span>Remote</span>
                      </label>
                    </div>
                    {/*<span className="errorText">error</span>*/}
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <div className="UserChicebox error">
                      <div className="form-group wid100">
                        <div className="flex-between">
                          <div className="form-group wid100">
                            <div className="flex-start">
                              <div className="wid100">
                                <AppAutoComplete inputType={'number'} label={''} />
                              </div>
                              <span className="unt">/</span>
                              <div className="wid100">
                                <AppAutoComplete inputType={'number'} label={''} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <label htmlFor="file" className="file-label">
                          Leg(From / To)<span className="required"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="boxForm mt-15">
                <h3>Departure Date</h3>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppDatePicker label="Date" />
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppSelect label={'UTC'} disabled />
                    </div>
                  </div>
                </div>
                <h3>Flight No.</h3>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group va-t ant-input wid100">
                      <span className="ant-input-group-addon1">KE</span>
                      <div className="ant-input-group-addon1-input wid50">
                        <AppTextInput label="Digit only" required />
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <div className="UserChicebox error">
                      <div className="form-group wid100">
                        <div className="flex-between">
                          <div className="form-group wid100">
                            <div className="flex-start">
                              <div className="wid50">
                                <AppAutoComplete inputType={'number'} label={''} />
                              </div>
                              <span className="unt">/</span>
                              <div className="wid50">
                                <AppAutoComplete inputType={'number'} label={''} />
                              </div>
                              <div className="form-group wid50 ml-10">
                                <AppSelect label={''} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <label htmlFor="file" className="file-label">
                          From / To<span className="required"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <h3 className="av-table-tit mt-10">Fleet</h3>
              <div className="form-table">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="HL" />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="7621" />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="B747-8" />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="74HI" />
                  </div>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="form-table line">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppAutoComplete label="Duty Purser" />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="Qualification" />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="Rank" />
                  </div>
                </div>
              </div>
              <hr className="line dp-n"></hr>
              <div className="form-table line">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="좌석수(F/C/Y)" />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="탑승자 (F/C/Y)" />
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
