import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextArea from '@/components/common/AppTextArea';
import { useState } from 'react';
import AppAutoComplete from '@/components/common/AppAutoComplete';
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

function ReceiptPayDetail() {
  const [inputValue, setInputValue] = useState('');
  const [firstExpaned, setFirstExpaned] = useState(true);
  const [secondExpaned, setSecondExpaned] = useState(true);
  const [thirdExpaned, setThirdExpaned] = useState(true);
  const [fourExpaned, setFourExpaned] = useState(true);
  const [fiveExpaned, setFiveExpaned] = useState(true);
  const [sixExpaned, setSixExpaned] = useState(true);
  const [sevenExpaned, setSevenExpaned] = useState(true);
  const [eightExpaned, setEightExpaned] = useState(true);
  const [nineExpaned, setNineExpaned] = useState(true);
  const [tenExpaned, setTenExpaned] = useState(true);
  const [elevenExpaned, setElevenExpaned] = useState(true);
  const [twelveExpaned, setTwelveExpaned] = useState(true);
  const [thirteenExpaned, setThirteenExpaned] = useState(true);
  const [fourteenExpaned, setFourteenExpaned] = useState(true);
  const [fifteenExpaned, setFifteenExpaned] = useState(true);
  const [sixteenExpaned, setSixteenExpaned] = useState(true);
  const toggleTr = () => {
    setSixteenExpaned(!sixteenExpaned);
  };
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
            <a href="javascript:void(0);">안전조사 접수 결제관리 상세</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>안전조사 접수 결제관리 상세 정보</h2>
      </div>
      {/*상세 */}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      내무 결재 번호 <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">
                      <a href="javascript:void(0);">APR-20240925001</a>
                    </span>
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
                      요청일시
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1"> 2024-09-07 13:43:08</span>
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
                      요청자사번
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">2499843</span>
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
                      요청자 성명
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">홍길동</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      결재 요청 요약 정보 조회
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">
                      <div className="opinion">
                        <div className="edit-area">
                          <div className="detailForm">
                            {/* 보고서내용보기 상세*/}
                            <div className="editbox report">
                              {/* <div className="header-tit">보고서내용</div> */}
                              <div className="form-table line">
                                <div className="form-cell wid100">
                                  <div className="form-group wid100">
                                    <div className="box-view-list">
                                      <ul className="view-list">
                                        <li className="accumlate-list">
                                          <label className="t-label">Subject</label>
                                          <span className="text-desc-type1">GPS SIGNAL INTERFERENCE IN ANKARA FIR</span>
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
                                          <label className="t-label">Description</label>
                                          <span className="text-desc-type1">
                                            ANKARA FIR 진입 후 "ADS-B OUT" 시현. 관련 CHECK LIST 및 POM 절차수행후
                                            FLIGHT MAINTENANCE LOG 기입.{' '}
                                          </span>
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
                                          <span className="text-desc-type1">관리자 홍길동</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="info-wrap toggle">
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
                            </div>
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
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      결재 요청 메시지
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">
                      <div className="massage">메시지</div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 파일첨부영역 : drag */}
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">의견 </label>
                    <span className="text-desc-type1">
                      <AppTextArea label="" style={{ width: '100%', height: 150 }} errorMessage="" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //상세 */}
      <div className="listtable">
        <table className="info-board">
          <colgroup>
            <col width="8%" />
            <col width="10%" />
            <col width="20%" />
            <col width="47%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th>순번</th>
              <th>승인자</th>
              <th>승인일시</th>
              <th>의견</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>홍길동</td>
              <td>2024-07-20 12:34</td>
              <td className="tl">
                <a href="javascript:void(0);">하드랜딩 오류 정보 확인 승인</a>
              </td>
              <td>결제완료</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          수정
        </button>
        <button type="button" name="button" className="btn_text btn-del">
          반려
        </button>
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default ReceiptPayDetail;
