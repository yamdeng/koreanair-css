import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppTextArea from '@/components/common/AppTextArea';
import { useState } from 'react';
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

function PSaferRiskEdit() {
  const [firstExpaned, setFirstExpaned] = useState(true);
  const [secondExpaned, setSecondExpaned] = useState(true);
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
            <a href="javascript:void(0);">지상조사</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">지상안전조사보고서</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>지상안전조사보고서</h2>
      </div>
      {/* 입력영역 */}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppAutoComplete label={'담당자(Investigator)'} required />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label={'회의체구분'} required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        {/* 파일첨부영역 : drag */}
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              {/* 파일첨부영역 : drag */}
              <div className="filebox error">
                <Dragger {...props}>
                  <p className="ant-upload-text ">+ 이 곳을 클릭하거나 마우스로 업로드할 파일을 끌어서 놓으세요.</p>
                </Dragger>
                <label htmlFor="file" className="file-label">
                  첨부파일 <span className="required">*</span>
                </label>
              </div>
              <span className="errorText">fileerror</span>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="group-box-wrap line wid100">
              <span className="txt">첨부파일 Link{/*<span className="required">*</span>*/}</span>

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
                <div className="link-box">
                  <a href="javascript:void(0);">첨부Link</a>
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
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSelect label="Occurrence Type" />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSelect label="국내/국제" required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="group-box-wrap wid100">
              <span className="txt">발생구분</span>
              <div className="radio-wrap error">
                <label>
                  <input type="radio" checked />
                  <span>화물</span>
                </label>
                <label>
                  <input type="radio" />
                  <span>여객</span>
                </label>
              </div>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="group-box-wrap wid100">
              <span className="txt">Investigation Type</span>
              <div className="radio-wrap error">
                <label>
                  <input type="radio" checked />
                  <span>Factual Investigation</span>
                </label>
                <label>
                  <input type="radio" />
                  <span>Follow up </span>
                </label>
                <label>
                  <input type="radio" />
                  <span>DB Only</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppTextInput label="나르미(항공안전장애)" />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppTextInput label="Safety Notice" required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSelect label="Operation Impact" />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSelect label="Notifi. GOV" required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSelect label="Weekly" />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSelect label="SPIP" required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSelect label="Safety Goal(SPI)" />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSelect label="Probable Cause" required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSelect label="HFACS" />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppTextInput label="Recovery Time (Minute)" required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppTextInput label="TTL cost (USD)" />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppTextInput label="Material Cost (USD)/삭제" required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSelect label="Property Impact" />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppTextInput label="Remark" required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSelect label="Other Damages" />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppSelect label="DIV(책임부문)" required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>

        <div className="info-wrap toggle">
          <dl className={firstExpaned ? 'tg-item active' : 'tg-item'}>
            <dt onClick={() => setFirstExpaned(!firstExpaned)}>
              <button type="button" className="btn-tg">
                {/* toggle 열어지면 active붙임*/}
                1st Risk Assessment
                <span className={firstExpaned ? 'active' : ''}></span>
              </button>
            </dt>
            <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
              <div className="edit-area">
                <div className="">
                  <div className="form-table line">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label={'Hazard'} required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">
                          원인구분 <span className="required">*</span>
                        </span>
                        <div className="radio-wrap error">
                          <label>
                            <input type="radio" checked />
                            <span>추정원인 </span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>부수요인</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table line">
                    <div className="form-cell wid50">
                      <div className="form-group wid50">
                        <AppSelect label={'Potential Consequence'} />
                      </div>
                    </div>
                  </div>

                  {/* 버튼*/}
                  <div className="contents-btns">
                    <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
                      + Add
                    </button>
                    <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
                      위험레벨조회
                    </button>
                  </div>
                  {/* //버튼*/}
                  <div className="hed-tit">
                    추정원인 <span className="required">*</span>
                  </div>
                  <div className="listtable">
                    <table className="info-board">
                      <colgroup>
                        <col width="36%" />
                        <col width="35%" />
                        <col width="20%" />
                        <col width="9%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>Hazard</th>
                          <th>Potential Consequence</th>
                          <th>Risk Level 1</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tl">Lightning strike Environmental/Weather</td>
                          <td className="tl">Aircraft Change</td>
                          <td>
                            <a href="javascript:void(0);" className="btn-modify">
                              선택
                            </a>
                          </td>
                          <td>
                            <a href="javascript:void(0);" className="btn-modify">
                              delete
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="hed-tit mt10">
                    부수요인 <span className="required">*</span>
                  </div>
                  <div className="listtable">
                    <table className="info-board">
                      <colgroup>
                        <col width="36%" />
                        <col width="35%" />
                        <col width="20%" />
                        <col width="9%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>Hazard</th>
                          <th>Potential Consequence</th>
                          <th>Risk Level 1</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tl">Sandstorm Environmental/Weather</td>
                          <td className="tl">Escape slide deployment</td>
                          <td>
                            <div className="Safety-table-cell">
                              <span className="Safety-tag riskLevel level1">5B</span>
                            </div>
                          </td>
                          <td>
                            <a href="javascript:void(0);" className="btn-modify">
                              delete
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </dd>
          </dl>

          <dl className={secondExpaned ? 'tg-item active' : 'tg-item'}>
            <dt onClick={() => setSecondExpaned(!secondExpaned)}>
              <button type="button" className="btn-tg">
                {/* toggle 열어지면 active붙임*/}
                결제정보
                <span className={secondExpaned ? 'active' : ''}></span>
              </button>
            </dt>
            <dd className="tg-conts" style={{ display: secondExpaned ? '' : 'none' }}>
              <div className="edit-area">
                <div className="">
                  <div className="form-table line">
                    <div className="form-table">
                      <div className="form-cell wid100">
                        <div className="form-group wid100">
                          <div className="UserChicebox error">
                            <div className="form-group wid100">
                              <AppSelect label={'결제정보'} />
                              <label htmlFor="file" className="file-label">
                                결제정보 <span className="required"></span>
                              </label>
                            </div>
                            <div className="form-group wid100 mt10">
                              <AppAutoComplete label="d" />
                              <div className="SelectedList memberClass mt10">
                                <ul>
                                  <li>
                                    <span className="InfoBox"></span>
                                    <div className="Info">
                                      <div className="Name">홍길동 (170****)</div>
                                      <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                    </div>
                                    <span className="class leader">Leader</span>
                                    <a href="javascript:void(0);">
                                      <span className="delete">X</span>
                                    </a>
                                  </li>
                                  <li>
                                    <span className="InfoBox"></span>
                                    <div className="Info">
                                      <div className="Name">홍길동 (170****)</div>
                                      <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                    </div>
                                    <span className="class ">Leader</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-cell wid100">
                        <div className="btn-area">
                          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                            결제 그룹설정
                          </button>
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
      {/*//입력영역*/}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          인쇄
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_conblue">
          제출
        </button>
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default PSaferRiskEdit;
