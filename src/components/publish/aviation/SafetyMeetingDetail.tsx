import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextArea from '@/components/common/AppTextArea';
import { Upload } from 'antd';
import { useState } from 'react';
import { DatePicker } from 'antd';
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

function SafetyMeetingDetail() {
  const rowData = getAllData();
  const [inputValue, setInputValue] = useState('');
  const columns = testColumnInfos;
  const [firstDateValue, setFirstDateValue] = useState('');
  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전정책</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전회의체 상세</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>안전회의체 상세</h2>
      </div>
      {/* 상세페이지 */}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      부문 <span className="required">*</span>
                    </label>
                    <span className="text-desc-type1"> 화물</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      회의체구분
                      <span className="required">*</span>
                    </label>
                    <span className="text-desc-type1"> LCS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      회의일자
                      <span className="required">*</span>
                    </label>
                    <span className="text-desc-type1">2024-08-06</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      제목 <span className="required">*</span>
                    </label>
                    <span className="text-desc-type1">[KOR] 2024년 제1차 안전운항 관리자 회의.pdf</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/* 파일첨부영역 : drag */}
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">첨부파일 </label>
                    <span className="text-desc-type1">
                      <div className="desc-file">
                        <a href="javascript:void(0);">
                          <span className="download"></span>
                          <span>첨부파일.zip</span>
                        </a>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
      </div>
      {/*//상세페이지*/}

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

export default SafetyMeetingDetail;
