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

function MyAuditClose() {
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
                <a href="javascript:void(0);">
                  <span className="myaudit-tab-icon">아이콘</span> CAR
                </a>
              </li>
              <li>
                <a className="active" href="javascript:void(0);">
                  <span className="myaudit-tab-icon active">아이콘</span>Close
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="myaudit-contents">
          <h3 className="audit-tit">Audit 결과 공유</h3>
          <div className="editbox ">
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="group-box-wrap wid100">
                  <span className="txt">공유 범위</span>
                  <div className="radio-wrap">
                    <label>
                      <input type="checkbox" />
                      <span>Plan</span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span>Conduct</span>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
              </div>
            </div>
          </div>
          {/*그리드영역 */}
          <div>
            <h3 className="audit-tit mb-10">
              CAR 선택<span>하나 이상의 CAR을 필수로 선택해 주십시오.</span>
            </h3>
            <AppTable rowData={rowData} columns={columns} />
          </div>
          {/*//그리드영역 */}
          <div>
            <h3 className="audit-tit mb-10">공유 대상</h3>
            fdsafdsa
          </div>
          {/* 하단버튼영역 */}
          <div className="contents-btns">
            <button className="btn_text text_color_neutral-10 btn_confirm ">Audit Edit</button>
          </div>
          {/*//하단버튼영역*/}
        </div>
      </div>
    </>
  );
}

export default MyAuditClose;
