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
                        <AppDatePicker label="작성일자" disabled />
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
                        <AppAutoComplete label="성명" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="사번" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="주민번호" disabled />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="성별" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="휴대전화" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="주소" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="본부" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppAutoComplete label="부서" />
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
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="반/섹션" disabled />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="직종/직급" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppDatePicker label="입사일" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="근속기간" disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="고용형태" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="근무형태" />
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
                  {/* 라디오버튼 '예' 선택시 입력창 */}
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="팀번호" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="비행시간" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="항공기 HL" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="항공기 편명 KE" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="비행기 기종" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="기타 내용" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppDatePicker label="항공기 ITNRY" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="Duty" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="발생장소" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="발생노선" />
                      </div>
                    </div>
                  </div>
                  {/* 라디오버튼 '예' 선택시 입력창 End */}
                </div>
              </div>
            </div>
          </dd>
          <dt>
            <button type="button" className="btn-tg">
              재해경위 및 재발방지 대책 수립 계획<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="재해 유형" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppDatePicker label="발생 일시" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="발생 장소" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="발생 개요" />
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
                          발생 경위
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">발생 형태</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" />
                            <span>떨어짐</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>넘어짐</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>부딪힘</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>물체에 맞음</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>무너짐</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>끼 임</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>절단·베임·찔림</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>감 전</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>폭발·파열</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>화재</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>깔림·뒤집힘</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>이상온도 접촉</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>빠짐·익사</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>무리한 동작</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>산소 결핍</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>체육행사</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>폭력행위</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>동물상해</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>교통사고</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>업무상 질병</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>분류불능</span>
                          </label>
                          <div>
                            <label>
                              <input type="radio" />
                              <span>기타</span>
                            </label>
                            <input type="text" placeholder="기타" />
                          </div>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">상해 부위</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="checkbox" />
                            <span>두 부</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>눈</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>귀</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>안면부</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>목</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>팔</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>손·손가락</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>가슴·등</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>허 리</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>엉덩이</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>다 리</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>발·발가락</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>복합부위</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>순환기관</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>호흡기관</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>소화기관</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>비뇨·생식기관</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>신경계통</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>복 부</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>전 신</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>분류불능</span>
                          </label>
                          <div>
                            <label>
                              <input type="checkbox" />
                              <span>기타</span>
                            </label>
                            <input type="text" placeholder="기타" />
                          </div>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">상해 종류</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="checkbox" />
                            <span>골 절</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>동 상</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>부 종</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>찔 림</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>타박상(염좌)</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>절 단</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>중독 및 질식</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>찰과상</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>베 임</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>화 상</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>뇌진탕</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>추간판탈출증</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>익 사</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>피부병</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>청력장애</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>시력장애</span>
                          </label>
                          <div>
                            <label>
                              <input type="checkbox" />
                              <span>기타</span>
                            </label>
                            <input type="text" placeholder="기타" />
                          </div>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  {/*재해자가 객실본부 소속이 아닌 경우 입력항목*/}
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">작업 내용</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" />
                            <span>기계·장치 설비 작동</span>
                          </label>
                          <div>
                            <label>
                              <input type="radio" />
                              <span>기타</span>
                            </label>
                            <input type="text" placeholder="기타" />
                          </div>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <div className="txt">
                          기인물
                          <div className="tooltip">
                            <span className="tooltiptext tooltip-right">
                              <ul>
                                <li>설비·기계: 동력에 의해 작동되는 기계기구 및 특정한 공정에 사용된 장치 등의 설비</li>
                                <li>휴대용·인력용 기계: 동력 또는 인력에 의해 작동되는 휴대용 공구와 기계기구 부품</li>
                                <li>
                                  부속물 및 재료: 설비·기계기구 등의 부속물과 건축물·구조물 등의 부속물 또는 재료 등
                                </li>
                                <li>
                                  건축물·구조물: 완료되었거나 시공중인 건축물 또는 구조물과 공사를 위하여 설치된 가설
                                  구조물 등
                                </li>
                                <li>
                                  용기·용품·가구·기구: 물품의 운반 등에 사용되는 산업용·비산업용 용기, 용품, 가구 및
                                  기구 등
                                </li>
                                <li>
                                  화학물질·화학제품: 액체·가스·흄·증기 및 고체 등 다양한 상태의 화학물질과 화학제품
                                </li>
                                <li>교통수단: 육상, 수상 등 교통수단</li>
                                <li>사람, 동·식물: 사람, 동·식물과 식품 및 바이러스 등을 포함</li>
                                <li>자연현상: 난기류 및 비정상적인 고·저 기압, 자연재해 등</li>
                              </ul>
                            </span>
                          </div>
                        </div>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" />
                            <span>건축물 및 구조물</span>
                          </label>
                          <div>
                            <label>
                              <input type="radio" />
                              <span>기타</span>
                            </label>
                            <input type="text" placeholder="기타" />
                          </div>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  {/*재해자가 객실본부 소속이 아닌 경우 입력항목 End*/}
                  {/*재해자가 객실본부 소속인 경우 입력항목*/}
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">작업 내용</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" />
                            <span>재해자가 객실본부 소속인 경우</span>
                          </label>
                          <div>
                            <label>
                              <input type="radio" />
                              <span>기타</span>
                            </label>
                            <input type="text" placeholder="기타" />
                          </div>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">
                          기인물
                          <div className="tooltip">
                            <span className="tooltiptext tooltip-right">툴팁</span>
                          </div>
                        </span>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" />
                            <span>기내 구조물(Door, 계단, O/H Bin 등)</span>
                          </label>
                          <div>
                            <label>
                              <input type="radio" />
                              <span>기타</span>
                            </label>
                            <input type="text" placeholder="기타" />
                          </div>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="사고기물" />
                      </div>
                    </div>
                  </div>
                  {/*재해자가 객실본부 소속인 경우 입력항목 End*/}
                  <h3 className="ck-box-tit">관리적 원인</h3>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">기술적 원인</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" />
                            <span>구조물·기계장비 설치불량</span>
                          </label>
                          <div>
                            <label>
                              <input type="radio" />
                              <span>기타</span>
                            </label>
                            <input type="text" placeholder="기타" />
                          </div>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">교육적 원인</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" />
                            <span>안전지식의 부족</span>
                          </label>
                          <div>
                            <label>
                              <input type="radio" />
                              <span>기타</span>
                            </label>
                            <input type="text" placeholder="기타" />
                          </div>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">직업관리상의 원인</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" />
                            <span>안전관리 조직결함</span>
                          </label>
                          <div>
                            <label>
                              <input type="radio" />
                              <span>기타</span>
                            </label>
                            <input type="text" placeholder="기타" />
                          </div>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  <h3 className="ck-box-tit">직접 원인</h3>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">불안전 상태</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" />
                            <span>기물·장비 자체 결함</span>
                          </label>
                          <div>
                            <label>
                              <input type="radio" />
                              <span>기타</span>
                            </label>
                            <input type="text" placeholder="기타" />
                          </div>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">불안전 행동</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" />
                            <span>위험장소 접근</span>
                          </label>
                          <div>
                            <label>
                              <input type="radio" />
                              <span>기타</span>
                            </label>
                            <input type="text" placeholder="기타" />
                          </div>
                        </div>
                        {/*<span className="errorText">error</span>*/}
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
                          재발방지 대책
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="진단명" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid100">
                      <div className="form-group form-glow">
                        <div className="df">
                          <div className="date1">
                            <AppDatePicker label="진단기간" />
                          </div>
                          <span className="unt">~</span>
                          <div className="date2">
                            <AppDatePicker label="진단기간" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group form-glow">
                        <div className="df">
                          <div className="date1">
                            <AppDatePicker label="예상근로 손실기간" />
                          </div>
                          <span className="unt">~</span>
                          <div className="date2">
                            <AppDatePicker label="예상근로 손실기간" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label=" 예상 근로 손실 일수" disabled />
                      </div>
                    </div>
                  </div>
                  {/* 파일첨부영역 : button */}
                  <div className="form-table">
                    <div className="form-cell wid50">
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
          <dt>
            <button type="button" className="btn-tg">
              산재신청<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">신청하시겠습니까?</span>
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
                  {/*산재신청 '예'선택시*/}
                  <h3 className="input-box-tit">요양승인</h3>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label=" 요양승인 상태" />
                      </div>
                      <div className="ck-edit-box">
                        <div className="ck-list">그리드영역</div>
                        <div className="ck-edit">입력폼영역</div>
                      </div>
                    </div>
                  </div>
                  {/*산재신청 '예'선택시 End*/}
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
        <button type="button" name="button" className="btn_text btn-del">
          취소
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationMu6P2edit;
