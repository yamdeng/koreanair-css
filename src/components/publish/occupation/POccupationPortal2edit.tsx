import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppEditor from '@/components/common/AppEditor';
import AppSelect from '@/components/common/AppSelect';
import AppTextArea from '@/components/common/AppTextArea';
import AppTextInput from '@/components/common/AppTextInput';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppTreeSelect from '@/components/common/AppTreeSelect';
import { DatePicker } from 'antd';
import { useState } from 'react';
import { Upload } from 'antd';

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

function POccupationPortal2edit() {
  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">위험기계기구</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>공지사항</h2>
      </div>
      {/* 입력영역 */}
      <div className="editbox">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="본부" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="등록자" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput disabled label="등록일자" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label={'KSMS 사이렌 여부'} />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label={'상위 표출 여부'} />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppTextInput label="제목" />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppEditor placeholder="입력해주세요." />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/* 파일첨부영역 : button */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <Upload {...props}>
                <div className="btn-area">
                  <button type="button" name="button" className="btn-big btn_text btn-darkblue-line">
                    + Upload
                  </button>
                </div>
              </Upload>
            </div>
          </div>
        </div>
        {/*<div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="filebox">
                <input className="upload-name" value="첨부파일" placeholder="첨부파일" />
                <input type="file" id="file" />
                <label htmlFor="file" className="f-label">
                  파일찾기(작업중)
                </label>

                <button>추가</button>
                <button>삭제</button>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
      {/*//입력영역*/}
      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
        <button type="button" name="button" className="btn_text btn-del">
          삭제
        </button>
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationPortal2edit;
