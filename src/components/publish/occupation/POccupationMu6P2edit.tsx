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
function POccupationMu6P2edit() {
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
            <a href="javascript:void(0);">안전신고</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">재해발생보고</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>재해발생보고</h2>
      </div>
      {/* 입력영역 */}
      <div className="info-wrap toggle">
        <dl className="tg-item active">
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt>
            <button type="button" className="btn-tg">
              기본 정보<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="작성자" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="작성일자" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="문서번호" disabled />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
          <dt>
            <button type="button" className="btn-tg">
              인적 사항<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="성명" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="사번" required disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="주민번호" required disabled />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="성별" required disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="휴대전화" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="주소" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="본부" required disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="부서" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="팀" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="그룹" required disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="반/섹션" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="직종/직급" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="입사일" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="근속기간" required disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="고용형태" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="근무형태" required />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
          <dt>
            <button type="button" className="btn-tg">
              객실본부 입력사항<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">운항 및 객실 관련 사항을 입력하시겠습니까?</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" checked />
                            <span>예</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>아니오</span>
                          </label>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
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
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationMu6P2edit;
