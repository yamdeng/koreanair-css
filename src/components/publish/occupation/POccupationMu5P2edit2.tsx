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
function POccupationMu5P2edit2() {
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
            <a href="javascript:void(0);">위험성평가 등록</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>위험성평가 등록</h2>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" data-label="사전준비">
            사전준비
          </a>
          <a href="javascript:void(0);" data-label="유해 위험요인 파악">
            유해 위험요인 파악
          </a>
          <a href="javascript:void(0);" className="active" data-label="위험성 결정">
            위험성 결정
          </a>
          <a href="javascript:void(0);" data-label="첨부문서">
            첨부문서
          </a>
        </div>
      </div>
      {/*//탭 */}
      {/* 입력영역 */}
      <div className="info-wrap toggle">
        <dl className="tg-item active">
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt>
            <button type="button" className="btn-tg">
              유해, 위험 요인 파악
              <span className="active"></span>
              <div className="tag-info-wrap">
                <div className="tooltip">
                  <div className="tooltiptext tooltip-right">
                    <h3>작성요령 예시</h3>
                    <ul>
                      <li>공정명(크리닝)</li>
                      <li>세부 작업명(분부세척, part 침전, 건조)</li>
                      <li>위험분류(드롭다운 선택)</li>
                      <li>위험발생 상황(어떤 위험요인에 의해 어떤 재해발생이 우려됨)</li>
                      <li>현재의 안전보건조치(공학적, 관리적, 개인적 대책)</li>
                      <li>위험성 결정(사고발생 가능성 및 예상 피해정도)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="공정명" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="세부 작업명" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="위험분류" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="위험요인" disabled />
                      </div>
                    </div>
                  </div>
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
                          위험발생 상황 및 결과
                        </label>
                      </div>
                    </div>
                  </div>
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
                          현재의 안전보건 조치
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
          <dt>
            <button type="button" className="btn-tg">
              위험성 결정
              <span className="active"></span>
              {/*가능성, 중대성, 위험도 - 팝업 */}
              <div className="tag-info-wrap-end">
                <div className="tip">
                  <div>
                    <a href="javascript:void(0);" className="txt">
                      가능성
                    </a>
                  </div>
                </div>
                <div className="tip">
                  <div>
                    <a href="javascript:void(0);" className="txt">
                      중대성
                    </a>
                  </div>
                </div>
                <div className="tip">
                  <div>
                    <a href="javascript:void(0);" className="txt">
                      위험도
                    </a>
                  </div>
                </div>
              </div>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput inputType="text" placeholder="" label="가능성" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="중대성" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="위험도" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="위험성 결정" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="감소대책 수립" />
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
      </div>
      {/*//하단버튼영역*/}
      {/*그리드영역 */}
      <div>
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default POccupationMu5P2edit2;
