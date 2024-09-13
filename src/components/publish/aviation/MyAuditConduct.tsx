import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import AppSelect from '@/components/common/AppSelect';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextInput from '@/components/common/AppTextInput';
import AppTextArea from '@/components/common/AppTextArea';
import AppDatePicker from '@/components/common/AppDatePicker';
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
                  = Plan
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">= Conduct</a>
              </li>
              <li>
                <a href="javascript:void(0);">= CAR</a>
              </li>
              <li>
                <a href="javascript:void(0);">= Close</a>
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
                <div className="form-cell wid-300">
                  <div className="number-r ">
                    <div className="title">Airline</div>
                    <div className="form-group wid100">
                      <AppSelect label={'Korean Air / Airline'} placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="line "></hr>
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

              <div className="form-cell wid100">
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
