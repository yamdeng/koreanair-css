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
function POccupationMu5P2edit() {
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
            <a href="javascript:void(0);">위험기계기구</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>
          위험성평가 등록
          <span>
            <a href="javascript:void(0);"></a>
          </span>
        </h2>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" className="active" data-label="사전준비">
            사전준비
          </a>
          <a href="javascript:void(0);" data-label="유해 위험요인 파악">
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
              기본 사항<span className="active"></span>
              {/*평가시기 - 팝업 */}
              <div className="tag-info-wrap-end">
                <div className="tip">
                  <div>
                    <a href="javascript:void(0);" className="txt">
                      평가시기
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
                        <AppTextInput label="팀" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="그룹" disabled />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="반/섹션" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="평가년도" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="평가시기" required />
                      </div>
                    </div>

                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppAutoComplete label="재해발생보고서" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppDatePicker label="평가시작일" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppDatePicker label="평가종료일" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid70">
                      <div className="form-group wid100">
                        <AppTextInput label="제목" required />
                      </div>
                    </div>
                    <div className="form-cell wid30">
                      <div className="form-group wid100">
                        <AppTextInput label="문서번호" disabled />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid100">
                      <div className="ck-edit-box">
                        <div className="ck-list mwid60 h-fix">
                          <h3 className="table-tit">추진팀 구성</h3>
                          {/* 그리드 class명 grid-fix */}
                          <div className="grid-height">
                            <AppTable className="grid-fix" rowData={rowData} columns={columns} />
                          </div>
                        </div>
                        <div className="ck-edit mwid40">
                          <div className="boxForm">
                            <div className="form-table">
                              <div className="form-cell wid100">
                                <div className="form-group wid100">
                                  <AppSelect label="구분" />
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid50">
                                <div className="form-group wid100">
                                  <AppAutoComplete label="이름" disabled />
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid50">
                                <div className="form-group wid100">
                                  <AppAutoComplete label="사번" disabled />
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid50">
                                <div className="form-group wid100">
                                  <AppAutoComplete label="부문" disabled />
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid50">
                                <div className="form-group wid100">
                                  <AppAutoComplete label="부서" disabled />
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid50">
                                <div className="form-group wid100">
                                  <AppAutoComplete label="업체" disabled />
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid50">
                                <div className="form-group wid100">
                                  <AppSelect label="직책" />
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
              안전보건 정보 수집<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="근로자수" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="근무형태" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <h3>다음 각 호의 사항을 조사하여 위험성평가에 활용한다.</h3>
                      <div>
                        <ul className="list-input-box">
                          <li>
                            <span className="list-tit">1. 산업재해 및 아차사고 발생 사례 (5개년 이상)</span>
                            <ul className="list-input">
                              <li>
                                <div className="form-group wid100">
                                  <Upload {...props}>
                                    <div className="btn-area">
                                      <button
                                        type="button"
                                        name="button"
                                        className="btn-big btn_text btn-darkblue-line ml-0"
                                      >
                                        + Upload
                                      </button>
                                    </div>
                                  </Upload>
                                </div>
                              </li>
                              <li>
                                <div className="group-box-wrap line wid100 height-auto">
                                  <span className="txt">법령상세링크{/*<span className="required">*</span>*/}</span>
                                  <button type="button" name="button" className="btn-plus">
                                    추가
                                  </button>
                                  <div className="file-link">
                                    <div className="link-box">
                                      <a href="javascript:void(0);">첨부Link첨부Link첨부Link</a>
                                      <a href="javascript:void(0);">
                                        <span className="close-btn">close</span>
                                      </a>
                                    </div>
                                    <div className="link-box">
                                      <a href="javascript:void(0);">첨부Link</a>
                                      <a href="javascript:void(0);">
                                        <span className="close-btn">close</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <AppTextInput label="" placeholder="19년 랜딩기어 손가락 협착" />
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className="list-tit">2. 설비, 기계, 기구 보유 현황</span>
                            <AppTextInput label="" />
                          </li>
                          <li>
                            <span className="list-tit">3. 작업표준서, 작업절차</span>
                            <AppTextInput label="" />
                          </li>
                          <li>
                            <span className="list-tit">4. 협력사 혼재작업 시 위험성 및 작업상황 정보</span>
                            <AppTextInput label="" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid100">
                      <div className="ck-edit-box">
                        <div className="ck-list mwid60 h-fix01">
                          <h3 className="table-tit">추진팀 구성</h3>
                          {/* 그리드 class명 grid-fix */}
                          <div className="grid-height">
                            <AppTable className="grid-fix" rowData={rowData} columns={columns} />
                          </div>
                        </div>
                        <div className="ck-edit height-fix mwid40">
                          <div className="boxForm">
                            <div className="form-table">
                              <div className="form-cell wid100">
                                <div className="form-group wid100">
                                  <AppSelect label="구분" />
                                </div>
                              </div>
                            </div>
                            <div className="form-table">
                              <div className="form-cell wid50">
                                <div className="form-group wid100">
                                  <AppAutoComplete label="이름" disabled />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <h3 className="table-tit">참여자 교육</h3>
                      <span>다음 각 호의 사항을 조사하여 위험성평가에 활용한다.</span>
                      <ul className="guide-list">
                        <li>1. 위험성평가 대상 공정 선정 및 Process에 관한 사항</li>
                        <li>2. 역할별 임무 안내(책임자, 관리감독자, 작업자, 안전보건조직 등)</li>
                        <li>3. 위험성평가 방법 안내(유해위험요인파악, 감소대책 수립 및 참여 방법 등)</li>
                        <li>4. 안전보건정보 수집 및 활용 방법</li>
                      </ul>
                    </div>
                  </div>
                  {/* 파일첨부영역 : button */}
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <h3 className="table-tit mb-10">준비관련 첨부 문서</h3>
                      <div className="form-group wid100">
                        <div className="filebox ">
                          <Upload {...props}>
                            <div className="btn-area">
                              <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                                + Upload
                              </button>
                            </div>
                          </Upload>
                          <label htmlFor="file" className="file-label">
                            파일 첨부 <span className="required">*</span>
                          </label>
                        </div>
                        {/*<span className="errorText">fileerror</span>*/}
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
    </>
  );
}

export default POccupationMu5P2edit;
