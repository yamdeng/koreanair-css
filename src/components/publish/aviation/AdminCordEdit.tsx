import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';
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

function AdminCordEdit() {
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
            <a href="javascript:void(0);">Admin</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">장비코드관리 신규</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>장비코드관리 신규</h2>
      </div>

      {/* 입력영역 */}
      <div className="editbox">
        <div className="form-table ">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label="장비코드" required />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label="장비명" required />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label="모델명" />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table ">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label="자사구분 " required />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label="부서 " />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label="업체명" />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="row1">
                <div className="date1">
                  <AppDatePicker label="연도" required />
                </div>
              </div>
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label="사용여부 " required />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
      </div>
      {/*//입력영역*/}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
        <button className="btn_text btn-del btn-type01">취소</button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default AdminCordEdit;
