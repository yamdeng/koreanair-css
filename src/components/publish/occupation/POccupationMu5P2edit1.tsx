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
function POccupationMu5P2edit1() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;

  const customButtons = [
    {
      title: '추가',
      onClick: () => {
        alert('추가');
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
            <a href="javascript:void(0);">안전관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">위험기계기구</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>작업환경측정</h2>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" data-label="사전준비">
            사전준비
          </a>
          <a href="javascript:void(0);" className="active" data-label="유해 위험요인 파악">
            유해 위험요인 파악
          </a>
          <a href="javascript:void(0);" data-label="위험성 결정">
            위험성 결정
          </a>
          <a href="javascript:void(0);" data-label="첨부문서">
            첨부문서
          </a>
        </div>
      </div>
      {/*//탭 */}
      <div className="btn-area tab-right-btn">
        <button type="button" name="button" className="btn_text btn_confirm">
          추가
        </button>
      </div>
      {/* 입력영역 */}
      <div className="info-wrap toggle">
        <dl className="tg-item active">
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt>
            <button type="button" className="btn-tg">
              청취조사<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="ck-edit-box">
                        <div className="ck-list">그리드 영역</div>
                        <div className="ck-edit">
                          <div className="boxForm">
                            <div className="form-table">
                              <div className="form-cell wid100">
                                <div className="form-group wid100">
                                  <AppTextInput label="근로자" />
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid50">
                                <div className="form-group wid100">
                                  <AppTextInput label="대상공정(작업)" />
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid100">
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
                                    유해,위험요인에 대한 의견
                                  </label>
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
                </div>
              </div>
            </div>
          </dd>
          <dt>
            <button type="button" className="btn-tg">
              현장순회<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="ck-edit-box">
                        <div className="ck-list ck-list-grid">
                          <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
                        </div>
                        <div className="ck-edit">
                          <div className="boxForm">
                            <div className="form-table">
                              <div className="form-cell wid100">
                                <div className="form-group wid100">
                                  <AppDatePicker label={'순회일자'} />
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid50">
                                <div className="form-group wid100">
                                  <AppTextInput label="대상공정(작업)" />
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid100">
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
                                    유해,위험요인에 대한 의견
                                  </label>
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
                </div>
              </div>
            </div>
          </dd>
          <dt>
            <button type="button" className="btn-tg">
              안전보건 정보<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
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
                          내용
                        </label>
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
          취소
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationMu5P2edit1;
