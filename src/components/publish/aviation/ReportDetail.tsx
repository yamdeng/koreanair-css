import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppTextArea from '@/components/common/AppTextArea';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import InfoImage from '@/resources/images/img01.png';
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

function SafetyDetail() {
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
            <a href="javascript:void(0);">안전위험관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">보고서보기</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>
          보고서 보기
          <span>
            <a href="javascript:void(0);">ASR-100308</a>
          </span>
        </h2>
      </div>
      <div className="Report-step-area">
        <div className="c-step-wrap">
          <ol className="c-step-list-type-5">
            <li className="active">
              {/* 선택된 class명에 active */}
              <a href="javascript:void(0);" data-label="접수">
                {/* 선택된 class명에 active */}
                <p className="info-title active">
                  <span className="hide">1단계</span>
                  접수
                </p>
              </a>
              <span className="after-arrow"></span>
            </li>
            <li>
              <a href="javascript:void(0);" data-label="1차 위험평가">
                <p className="info-title">
                  <span className="hide">2단계</span>
                  1차 위험평가
                </p>
              </a>
              <span className="after-arrow"></span>
            </li>
            <li>
              <a href="javascript:void(0);" data-label="경감조치">
                <p className="info-title">
                  <span className="hide">3단계</span>
                  경감조치
                </p>
              </a>
              <span className="after-arrow"></span>
            </li>
            <li>
              <a href="javascript:void(0);" data-label="2차 위험평가">
                <p className="info-title">
                  <span className="hide">4단계</span>
                  2차 위험평가
                </p>
              </a>
              <span className="after-arrow"></span>
            </li>
            <li>
              <a href="javascript:void(0);" data-label="종결">
                <p className="info-title">
                  <span className="hide">5단계</span>
                  종결
                </p>
              </a>
            </li>
          </ol>
          {/*접수단계 step*/}
          <div className="c-step-wrap -mb-8n-3">
            <ol className="c-step-list default">
              {/*선택되는 부분에 class명 active붙이기*/}
              <li className="active">
                <p className="info-title">
                  <span className="hide">1단계</span> 보고서접수
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">2단계</span> 위험평가
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">3단계</span> SRC리뷰
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">4단계</span> 조회
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">5단계</span> 조회
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">6단계</span> 조회
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">7단계</span> 조회
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">8단계</span> 조회
                  <span className="hide">현재 </span>
                </p>
              </li>
              <li className="">
                <p className="info-title">
                  <span className="hide">9단계</span> 조회
                  <span className="hide">현재 </span>
                </p>
              </li>
            </ol>
          </div>
          {/*//접수단계 step*/}
        </div>
      </div>
      {/* 보고서 상세 toggle*/}
      <div className="info-wrap toggle">
        <dl className="tg-item active">
          <dt>
            <button type="button" className="btn-tg">
              {/* toggle 열어지면 active붙임*/}
              보고서 내용보기<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detailForm">
                {/* 보고서내용보기 상세*/}
                {/* 비행정보*/}
                <div className="editbox report">
                  <div className="header-tit">[비행정보]</div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">출발일자</label>
                              <span className="text-desc-type1"> 2024-08-02 / UTC</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">비행편명</label>
                              <span className="text-desc-type1">KE0787</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="line dp-n"></hr>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">등록 부호</label>
                              <span className="text-desc-type1">HL7783</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">항공기 형식</label>
                              <span className="text-desc-type1">77W</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="line dp-n"></hr>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">출발/도착 공항</label>
                              <span className="text-desc-type1">ICN / FUK</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">Divert</label>
                              <span className="text-desc-type1">
                                INC
                                <div className="ant-row">
                                  <div role="label" className="ant-col ant-col-md-2">
                                    STD
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    09:45
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    STA
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    19:50
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    ATD
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    09:45
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    ATA
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    19:50
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    Delay
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    0
                                  </div>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="line dp-n"></hr>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">Supply (F/C/Y)</label>
                              <span className="text-desc-type1">0/24/254</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">CHECK_IN (F/C/Y)</label>
                              <span className="text-desc-type1">0/2/0</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="line dp-n"></hr>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">Flight Crew</label>
                              <span className="text-desc-type1">
                                <div role="data" className="ant-col ant-col-xs-24 MemberClass ">
                                  <ul>
                                    <li>
                                      <span className="ant-tag">PF</span>
                                      <span className="InfoBox">홍길동</span>
                                      <div className="Info">
                                        <div className="Name">김민준 (170****)</div>
                                        <div className="Dept">3급 / 정책지원팀</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="line dp-n"></hr>
                </div>

                {/* 이벤트*/}
                <div className="editbox report">
                  <div className="header-tit">[이벤트]</div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">이벤트 카테고리</label>
                              <span className="text-desc-type1">점검</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">발생 공항</label>
                              <span className="text-desc-type1">조금</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">검사 유형</label>
                              <span className="text-desc-type1">안전</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="line dp-n"></hr>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">권한의 기반</label>
                              <span className="text-desc-type1">외국의</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">발견</label>
                              <span className="text-desc-type1">77W</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="line dp-n"></hr>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">출발/도착 공항</label>
                              <span className="text-desc-type1">ICN / FUK</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">Divert</label>
                              <span className="text-desc-type1">
                                INC
                                <div className="ant-row">
                                  <div role="label" className="ant-col ant-col-md-2">
                                    STD
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    09:45
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    STA
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    19:50
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    ATD
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    09:45
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    ATA
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    19:50
                                  </div>
                                  <div role="label" className="ant-col ant-col-md-2">
                                    Delay
                                  </div>
                                  <div role="data" className="ant-col ant-col-md-2">
                                    0
                                  </div>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="line dp-n"></hr>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">Supply (F/C/Y)</label>
                              <span className="text-desc-type1">0/24/254</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">CHECK_IN (F/C/Y)</label>
                              <span className="text-desc-type1">0/2/0</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="line dp-n"></hr>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">Flight Crew</label>
                              <span className="text-desc-type1">
                                <div role="data" className="ant-col ant-col-xs-24 MemberClass ">
                                  <ul>
                                    <li>
                                      <span className="ant-tag">PF</span>
                                      <span className="InfoBox">홍길동</span>
                                      <div className="Info">
                                        <div className="Name">김민준 (170****)</div>
                                        <div className="Dept">3급 / 정책지원팀</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="line dp-n"></hr>
                </div>
                {/* //보고서내용보기 상세*/}
              </div>
              {/* 버튼*/}
              <div className="contents-btns">
                <button type="button" name="button" className="btn_text text_color_neutral-10 btn_conblue">
                  재작성요청
                </button>
                <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
                  Notify
                </button>
                <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
                  Void
                </button>
                <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
                  수정
                </button>
                <button type="button" name="button" className="btn_text btn-del">
                  인쇄
                </button>
                <button type="button" name="button" className="btn_text btn_list">
                  목록
                </button>
              </div>
              {/* //버튼*/}
            </div>
          </dd>
        </dl>
        <dl className="tg-item">
          <dt>
            <button type="button" className="btn-tg">
              보고서 분석<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detailForm">
                <div className="detailForm-detail list-group">
                  <div className="detailForm-detail list-group">
                    <div className="list bx-toggle">
                      <dl className="tg-item rbox01 ">
                        <dt>
                          <button type="button" className="tg-btn">
                            접수<span className=""></span>
                          </button>
                        </dt>
                        <dd className="tg-conts">
                          <div className="edit-area">
                            {/*상세-보고서접수*/}
                            <div>
                              <div className="detailForm-detail list-group">
                                <div className="list bx-toggle">
                                  <dl className="tg-item rbox01 ">
                                    <dt>
                                      <button type="button" className="tg-btn">
                                        보고서접수<span className=""></span>
                                      </button>
                                    </dt>
                                    <dd className="tg-conts" style={{ display: 'none' }}>
                                      <div className="edit-area">dfddfd</div>
                                    </dd>
                                  </dl>
                                </div>
                              </div>
                            </div>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>

                {/*탭 */}
                <div className="menu-tab-nav">
                  <div className="menu-tab">
                    <a href="javascript:void(0);" id="1" className="active" data-label="접수">
                      접수
                    </a>
                    <a href="javascript:void(0);" id="2" className="" data-label="1차 위험도 평가">
                      1차 위험도 평가
                    </a>
                    <a href="javascript:void(0);" id="3" className="" data-label="경감조치">
                      경감조치
                    </a>
                    <a href="javascript:void(0);" id="4" className="" data-label="2차 위험도 평가">
                      2차 위험도 평가
                    </a>
                    <a href="javascript:void(0);" id="5" className="" data-label="종결">
                      종결
                    </a>
                  </div>
                </div>
                {/*//탭 */}
                {/*탭상세-접수처리*/}
                <div id="1" className="detailForm-detail list-group" style={{ display: 'none' }}>
                  <div className="detailForm-detail list-group">
                    <div className="list bx-toggle">
                      <dl className="tg-item rbox01 ">
                        <dt>
                          <button type="button" className="tg-btn">
                            보고서접수<span className=""></span>
                          </button>
                        </dt>
                        <dd className="tg-conts" style={{ display: 'none' }}>
                          <div className="edit-area">dfddfd</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                {/*//탭상세*/}

                {/*탭상세-1차 위험도 평가*/}
                <div id="2" style={{ display: 'none' }}>
                  <div className="detailForm-detail list-group">
                    <div className="list bx-toggle">
                      <dl className="tg-item rbox01 ">
                        <dt>
                          <button type="button" className="tg-btn">
                            위험평가<span className=""></span>
                          </button>
                        </dt>
                        <dd className="tg-conts" style={{ display: 'none' }}>
                          <div className="edit-area">dfddfd</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="detailForm-detail list-group">
                    <div className="list bx-toggle">
                      <dl className="tg-item rbox01">
                        <dt>
                          <button type="button" className="tg-btn">
                            SRC리뷰<span className="active"></span>
                          </button>
                        </dt>
                        <dd className="tg-conts">
                          <div className="edit-area">dfddfd</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                {/*//탭상세*/}
                {/*탭상세-경감조치*/}
                <div id="3">
                  <div className="detailForm-detail list-group">
                    <div className="list bx-toggle">
                      <dl className="tg-item rbox01 ">
                        <dt>
                          <button type="button" className="tg-btn">
                            경감지정<span className=""></span>
                          </button>
                        </dt>
                        <dd className="tg-conts" style={{ display: 'none' }}>
                          <div className="edit-area">dfddfd</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="detailForm-detail list-group">
                    <div className="list bx-toggle">
                      <dl className="tg-item rbox01">
                        <dt>
                          <button type="button" className="tg-btn">
                            경감계획<span className="active"></span>
                          </button>
                        </dt>
                        <dd className="tg-conts" style={{ display: 'none' }}>
                          <div className="edit-area">dfddfd</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="detailForm-detail list-group">
                    <div className="list bx-toggle">
                      <dl className="tg-item rbox01">
                        <dt>
                          <button type="button" className="tg-btn">
                            경감실행
                            <span className="active"></span>
                          </button>
                        </dt>
                        <dd className="tg-conts" style={{ display: 'none' }}>
                          <div className="edit-area">dfddfd</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                {/*//탭상세*/}

                {/*탭상세-2차 위험도 평가*/}
                <div id="4" style={{ display: 'none' }}>
                  <div className="detailForm-detail list-group">
                    <div className="list bx-toggle">
                      <dl className="tg-item rbox01 ">
                        <dt>
                          <button type="button" className="tg-btn">
                            위험평가<span className=""></span>
                          </button>
                        </dt>
                        <dd className="tg-conts" style={{ display: 'none' }}>
                          <div className="edit-area">dfddfd</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="detailForm-detail list-group">
                    <div className="list bx-toggle">
                      <dl className="tg-item rbox01">
                        <dt>
                          <button type="button" className="tg-btn">
                            SRC리뷰<span className="active"></span>
                          </button>
                        </dt>
                        <dd className="tg-conts">
                          <div className="edit-area">dfddfd</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                {/*//탭상세*/}

                {/*탭상세-종결*/}
                <div id="5" className="detailForm-detail list-group" style={{ display: 'none' }}>
                  <div className="detailForm-detail list-group">
                    <div className="list bx-toggle">
                      <dl className="tg-item rbox01 ">
                        <dt>
                          <button type="button" className="tg-btn">
                            종결처리<span className=""></span>
                          </button>
                        </dt>
                        <dd className="tg-conts" style={{ display: 'none' }}>
                          <div className="edit-area">dfddfd</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                {/*//탭상세*/}
              </div>
            </div>
          </dd>
        </dl>
      </div>
      {/* //보고서 상세 toggle*/}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          수정
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

export default SafetyDetail;
