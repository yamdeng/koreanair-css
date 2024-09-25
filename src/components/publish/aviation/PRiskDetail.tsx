import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';
import { useState } from 'react';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppTextArea from '@/components/common/AppTextArea';
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

function PRiskDetail() {
  const [inputValue, setInputValue] = useState('');
  const [firstExpaned, setFirstExpaned] = useState(true);
  const [secondExpaned, setSecondExpaned] = useState(true);
  const [thirdExpaned, setThirdExpaned] = useState(true);
  const [fourExpaned, setFourExpaned] = useState(true);
  const [fiveExpaned, setFiveExpaned] = useState(true);
  const [sixExpaned, setSixExpaned] = useState(true);
  const [sevenExpaned, setSevenExpaned] = useState(true);

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
            <a href="javascript:void(0);">안전조사</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">조사보고서</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2 className="reportview">
          보고서 번호
          <span>
            <a href="javascript:void(0);">ASR-100308</a>
          </span>
        </h2>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">Subject</label>
                    <span className="text-desc-type1">운항 중 발생한 사항에 대해서 안전 조사를 실시하였음….</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/* 보고서 상세 toggle*/}
      <div className="info-wrap toggle">
        <dl className={firstExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setFirstExpaned(!firstExpaned)}>
            <button type="button" className="btn-tg">
              {/* toggle 열어지면 active붙임*/}
              발생정보<span className={firstExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
            {/* 보고서상세내용*/}
            <div className="edit-area">
              <div className="detailForm">
                {/* 보고서내용보기 상세*/}
                <div className="editbox report">
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">발생일/시간(UTC)</label>
                              <span className="text-desc-type1"> 2024-07-15 15:30</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">Event Class</label>
                              <span className="text-desc-type1">사고</span>
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
                              <label className="t-label">Event Type</label>
                              <span className="text-desc-type1">Bird strike</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">발생 공항</label>
                              <span className="text-desc-type1">ICN </span>
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
                              <label className="t-label">발생 단계</label>
                              <span className="text-desc-type1">Flight crew</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">기상조건</label>
                              <span className="text-desc-type1">악천 후.. 앞이 보이질 않음.</span>
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
                              <label className="t-label">SPI 여부</label>
                              <span className="text-desc-type1">YES</span>
                            </li>
                            <li className="detail">
                              {/* 파일첨부영역 : drag */}
                              <div className="filebox ">
                                <Dragger {...props}>
                                  <p className="ant-upload-text ">
                                    + 이 곳을 클릭하거나 마우스로 업로드할 파일을 끌어서 놓으세요.
                                  </p>
                                </Dragger>
                                {/* <label htmlFor="file" className="file-label">
                                  Attachment <span className="required"></span>
                                </label> */}
                              </div>
                              {/* <span className="errorText">fileerror</span> */}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">발생 위치</label>
                              <span className="text-desc-type1">이륙 후 3시간 경과 시점</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">참고문서번호</label>
                              <span className="text-desc-type1">CSR-100070</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //보고서내용보기 상세*/}
              </div>
            </div>
          </dd>
        </dl>
        <dl className={secondExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setSecondExpaned(!secondExpaned)}>
            <button type="button" className="btn-tg">
              비행정보<span className={secondExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: secondExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detailForm">
                {/* 보고서내용보기 상세*/}
                <div className="editbox report">
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">출발일자(UTC)</label>
                              <span className="text-desc-type1"> 2024-07-15</span>
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
                              <span className="text-desc-type1"> KE0787</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">등록 기호</label>
                              <span className="text-desc-type1">HL7766</span>
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
                              <span className="text-desc-type1">e</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
                              <label className="t-label">회항 공항</label>
                              <span className="text-desc-type1">F</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">좌석수(F/C/Y)</label>
                              <span className="text-desc-type1">0/34/224</span>
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
                              <label className="t-label">탑승자(F/C/Y)</label>
                              <span className="text-desc-type1">0/17/218</span>
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
                              <label className="t-label">승무원</label>
                              <span className="text-desc-type1">0/17/218</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //보고서내용보기 상세*/}
              </div>
            </div>
          </dd>
        </dl>
        <dl className={thirdExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setThirdExpaned(!thirdExpaned)}>
            <button type="button" className="btn-tg">
              조사보고서<span className={thirdExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: thirdExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detailForm">
                {/* 보고서내용보기 상세*/}
                <div className="editbox report">
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">개요</label>
                              <span className="text-desc-type1"> 조사보고서 내용입니다.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li>
                              {/* 파일첨부영역 : drag */}
                              <div className="filebox ">
                                <Dragger {...props}>
                                  <p className="ant-upload-text ">
                                    + 이 곳을 클릭하거나 마우스로 업로드할 파일을 끌어서 놓으세요.
                                  </p>
                                </Dragger>
                                {/* <label htmlFor="file" className="file-label">
                                  Attachment <span className="required"></span>
                                </label> */}
                              </div>
                              {/* <span className="errorText">fileerror</span> */}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table line">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">Investigator</label>
                              <span className="text-desc-type1">관리자홍길동</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //보고서내용보기 상세*/}
              </div>
            </div>
          </dd>
        </dl>
        <dl className={fourExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setFourExpaned(!fourExpaned)}>
            <button type="button" className="btn-tg">
              1st Risk Assessment
              <span className={fourExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: fourExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="info-list">
                          <h3>
                            추정원인<span className="required">*</span>
                          </h3>
                          <table className="info-board">
                            <colgroup>
                              <col width="35%" />
                              <col width="40%" />
                              <col width="15%" />
                              <col width="10%" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>Hazard</th>
                                <th>Potential Consequence</th>
                                <th>1st Risk Level</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="left">Lightning strike</td>
                                <td className="left">Aircraft system failure (Powerplant)</td>
                                <td className="">
                                  <div className="Safety-table-cell">
                                    <a href="javascript:void(0);">
                                      <span className="Safety-tag Select">Select</span>
                                    </a>
                                  </div>
                                </td>
                                <td className="">
                                  <a href="javascript:void(0);">
                                    <span className="delete">X</span>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="info-list">
                          <h3>
                            부수요인<span className="required">*</span>
                          </h3>
                          <table className="info-board">
                            <colgroup>
                              <col width="35%" />
                              <col width="40%" />
                              <col width="15%" />
                              <col width="10%" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>Hazard</th>
                                <th>Potential Consequence</th>
                                <th>1st Risk Level</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="left">Hail</td>
                                <td className="left">Old Equipment</td>
                                <td className="">
                                  <div className="Safety-table-cell">
                                    <a href="javascript:void(0);">
                                      <span className="Safety-tag riskLevel level1">5B</span>
                                    </a>
                                  </div>
                                </td>
                                <td className="">
                                  <a href="javascript:void(0);">
                                    <span className="delete">X</span>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
        <dl className={fiveExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setFiveExpaned(!fiveExpaned)}>
            <button type="button" className="btn-tg">
              결재정보
              <span className={fiveExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: fiveExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">결제정보</label>
                              <span className="text-desc-type1">
                                <div className="MemberClass">
                                  <div className="flex-e">
                                    <span className="ant-tag">1</span>
                                    <span className="InfoBox"></span>
                                    <div className="Info">
                                      <div className="Name">홍길동 (170****)</div>
                                      <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                    </div>
                                  </div>
                                  <div className="flex-e">
                                    <span className="ant-tag">2</span>
                                    <span className="InfoBox"></span>
                                    <div className="Info">
                                      <div className="Name">홍길동 (170****)</div>
                                      <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                    </div>
                                  </div>
                                  <div className="flex-e">
                                    <span className="ant-tag">최종</span>
                                    <span className="InfoBox"></span>
                                    <div className="Info">
                                      <div className="Name">홍길동 (170****)</div>
                                      <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
        <dl className={sixExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setSixExpaned(!sixExpaned)}>
            <button type="button" className="btn-tg">
              안전권고
              <div className="tag-info-wrap-end">
                <button type="button" name="button" className="btn_text btn_confirm">
                  + ADD ROW
                </button>
              </div>
              <span className={sixExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: sixExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="info-list">
                          {/* <h3>
                            추정원인<span className="required">*</span>
                          </h3> */}
                          <table className="info-board">
                            <colgroup>
                              <col width="15%" />
                              <col width="25%" />
                              <col width="25%" />
                              <col width="10%" />
                              <col width="10%" />
                              <col width="10%" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>번호</th>
                                <th>안전권고</th>
                                <th>조사사항</th>
                                <th>부서</th>
                                <th>발행일자</th>
                                <th>회신일자</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="left">
                                  <a href="javascript:void(0);">240715A-1-R1</a>
                                </td>
                                <td className="left">운항 중 발생한 사항 중 발생한 사항에 대..</td>
                                <td className="">운항 중 발생한 사항에 조치사항을 입력 ..</td>
                                <td className="">운항본부1팀</td>
                                <td className="">2024-07-15</td>
                                <td className="">2024-07-16</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
        <dl className={sevenExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setSevenExpaned(!sevenExpaned)}>
            <button type="button" className="btn-tg">
              Safety Action
              <div className="tag-info-wrap-end">
                <button type="button" name="button" className="btn_text btn_confirm">
                  + ADD ROW
                </button>
              </div>
              <span className={sevenExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: sevenExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="info-list">
                          {/* <h3>
                            추정원인<span className="required">*</span>
                          </h3> */}
                          <table className="info-board">
                            <colgroup>
                              <col width="15%" />
                              <col width="60%" />
                              <col width="15%" />
                              <col width="10%" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>번호</th>
                                <th>조치결과</th>
                                <th>부서</th>
                                <th>조치일자</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <a href="javascript:void(0);">240715A-1-R1</a>
                                </td>
                                <td className="left">운항 중 발생한 사항 중 발생한 사항에 대..</td>
                                <td className="">운항본부1팀</td>
                                <td className="">2024-07-15</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
        <button type="button" name="button" className="btn_text btn-disabled btn-type01">
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

export default PRiskDetail;
