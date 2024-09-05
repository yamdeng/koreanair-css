import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppEditor from '@/components/common/AppEditor';
import AppSelect from '@/components/common/AppSelect';
import AppTextArea from '@/components/common/AppTextArea';
import AppTextInput from '@/components/common/AppTextInput';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppTreeSelect from '@/components/common/AppTreeSelect';
import AppSearchInput from '@/components/common/AppSearchInput';
import { DatePicker } from 'antd';
import { useState } from 'react';
import { Upload } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

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
function POccupationMu4P2edit() {
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
            <a href="javascript:void(0);">안전관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">작업장 순회 점검</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>작업장 순회 점검</h2>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" data-label="현황">
            현황
          </a>
          <a href="javascript:void(0);" className="active" data-label="조회">
            조회
          </a>
        </div>
      </div>
      {/*//탭 */}
      {/* 입력영역 */}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="부문" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="부서" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="등록자" disabled />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group form-glow">
              <div className="df">
                <div className="date1">
                  <AppDatePicker label="측정기간" required />
                </div>
                <span className="unt">~</span>
                <div className="date2">
                  <AppDatePicker label="측정기간" required />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="제목" required />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="ck-edit-box">
              <div className="ck-list">
                <h3 className="table-tit">점검대상</h3>
                <div className="ck-list-grid ">그리드영역</div>
              </div>
              <div className="ck-edit">
                <div className="boxForm">
                  <span className="stit-btn  mt-10">
                    <h3>점검내용</h3>
                    <button>점검표 검색</button>
                  </span>
                  <div className="form-table">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <AppSelect label="협력업체" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <AppSelect label="협력업체" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <AppSelect label="사용부문" disabled />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppDatePicker label="점검일자" required disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="점검자" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="비고" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <span className="stit-btn">
                          <h3>점검항목</h3>
                          <button>점검표 출력</button>
                        </span>
                        그리드영역
                      </div>
                    </div>
                  </div>

                  <div className="btn-area-type01 mg-top">
                    <button type="button" name="button" className="btn_text btn_confirm">
                      저장
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
      </div>
      {/*//입력영역*/}
    </>
  );
}

export default POccupationMu4P2edit;
