import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
const { Dragger } = Upload;
import { Upload } from 'antd';
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
function PRiskEdit() {
  const [inputValue, setInputValue] = useState('');
  const [firstExpaned, setFirstExpaned] = useState(true);
  const [secondExpaned, setSecondExpaned] = useState(true);
  const [thirdExpaned, setThirdExpaned] = useState(true);
  const [fourExpaned, setFourExpaned] = useState(true);
  const [fiveExpaned, setFiveExpaned] = useState(true);
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
              <AppTextInput label="subject" required />
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}
      <div className="info-wrap toggle">
        <dl className="{firstExpaned ? 'tg-item active' : 'tg-item'}">
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt onClick={() => setFirstExpaned(!firstExpaned)}>
            <button type="button" className="btn-tg">
              발생정보<span className={firstExpaned ? 'active' : ''}></span>
              <div className="tag-info-wrap">
                <div className="tooltip">
                  <span className="hide">툴팁아이콘</span>
                </div>
              </div>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell">
                      <div className="form-group wid20">
                        <div className="date1">
                          <AppDatePicker label="발생일/시간(UTC)" required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생단계 */}
                        <AppSelect label="Event Class" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="Event Type" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생공항 */}
                        <AppAutoComplete label="발생공항" required disabled />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label={'발생단계'} required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*기상조건 */}
                        <AppTextInput label="기상조건" />
                      </div>
                    </div>

                    <div className="form-cell wid50">
                      <div className="group-box-wrap1 wid100">
                        <span className="txt">
                          SPI 여부<span className="required">*</span>
                        </span>
                        <div className="radio-wrap error">
                          <label>
                            <input type="radio" checked />
                            <span>YES</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>NO</span>
                          </label>
                        </div>

                        <div className="form-group wid100 mt15">
                          {/* 파일첨부영역 : drag */}
                          <div className="filebox error">
                            <Dragger {...props}>
                              <p className="ant-upload-text ">
                                + 이 곳을 클릭하거나 마우스로 업로드할 파일을 끌어서 놓으세요.
                              </p>
                            </Dragger>
                            <label htmlFor="file" className="file-label">
                              첨부파일 <span className="required">*</span>
                            </label>
                          </div>
                          <span className="errorText">fileerror</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50 ">
                      <div className="form-group wid100">
                        {/*발생위치 */}
                        <AppTextInput
                          inputType="text"
                          placeholder=""
                          label="발생위치"
                          toolTipMessage="자유형식으로 입력가능
                          예)Waypoint, 이륙 후3시간 경과 시점 등"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap1 wid50">
                        <span className="txt">참고문서번호</span>
                        <div className="round-wrap error">
                          <span className="icon_report"></span>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group">
                        <div className="date2">
                          <AppDatePicker label="출발일자(UTC)" />
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group va-t ant-input wid100">
                        <span className="ant-input-group-addon1">KE</span>
                        <div className="ant-input-group-addon1-input wid50 df">
                          {/*비행편명 */}
                          <AppTextInput label="비행편명" />
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group va-t ant-input wid100">
                        <span className="ant-input-group-addon1">HL</span>
                        <div className="ant-input-group-addon1-input wid50">
                          {/*등록기호 */}
                          <AppTextInput label="등록기호" />
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*항공기형식 */}
                        <AppTextInput label="항공기형식" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*출발공항 */}
                        <AppAutoComplete label="출발공항" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*출발공항 */}
                        <AppAutoComplete label="출발공항" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*회항공항 */}
                        <AppAutoComplete label="회항공항" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="좌석수(F/C/Y)" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="탑승자(F/C/Y)" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*승무원 */}
                        <AppAutoComplete label="승무원" />
                      </div>
                    </div>
                  </div>
                </div>
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
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap1 wid100 ">
                        <span className="txt">
                          개요 <span className="required">*</span>
                        </span>
                        <div className="round-wrap">
                          {/*개요 */}
                          <Editor
                            hideModeSwitch={true}
                            initialEditType="wysiwyg"
                            previewStyle="vertical"
                            // initialValue={initValue}
                            height={'500px'}
                            // onChange={() => {}}
                            usageStatistics={false}
                            customHTMLSanitizer={(html) => {
                              return html;
                            }}
                            viewer={true}
                            autofocus={false}
                            customHTMLRenderer={{
                              htmlBlock: {
                                table(node) {
                                  return [
                                    { type: 'openTag', tagName: 'table', outerNewLine: true, attributes: node.attrs },
                                    { type: 'html', content: node.childrenHTML },
                                    { type: 'closeTag', tagName: 'table', outerNewLine: true },
                                  ];
                                },
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 파일첨부영역 : drag */}
                  <div className="form-table ">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/* 파일첨부영역 : drag */}
                        <div className="filebox error">
                          <Dragger {...props}>
                            <p className="ant-upload-text ">
                              + 이 곳을 클릭하거나 마우스로 업로드할 파일을 끌어서 놓으세요.
                            </p>
                          </Dragger>
                          <label htmlFor="file" className="file-label">
                            첨부파일 <span className="required">*</span>
                          </label>
                        </div>
                        <span className="errorText">fileerror</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid50">
                        {/*Investigator */}
                        <AppAutoComplete label="Investigator" required />
                      </div>
                    </div>
                  </div>
                </div>
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
                        {/*Hazard */}
                        <AppSelect label="Hazard" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">
                          원인구분<span className="required">*</span>
                        </span>
                        <div className="radio-wrap error">
                          <label>
                            <input type="radio" checked />
                            <span>추정원인</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>부수요인</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/*<div className="form-cell wid50">
                      <div className="btn-area inbtn wid100">
                        <button type="button" name="button" className="btn-x-sm btn_text btn-darkblue-line">
                          + ADD
                        </button>
                        <button type="button" name="button" className="btn-x-sm btn_text btn-darkblue-line">
                          위험레벨조회
                        </button>
                      </div>
                    </div>*/}
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*Potential Consequence*/}
                        <AppSelect label="Potential Consequence" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="btn-area inbtn wid100">
                          <button type="button" name="button" className="btn-x-sm btn_text btn-darkblue-line">
                            + ADD
                          </button>
                          <button type="button" name="button" className="btn-x-sm btn_text btn-darkblue-line">
                            위험레벨조회
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      <div className="form-group wid50">
                        <div className="UserChicebox error">
                          <div className="form-group wid100">
                            <AppSelect label={'결재 그룹을 선택해 주세요 '} />
                            <label htmlFor="file" className="file-label">
                              결제정보 <span className="required"></span>
                            </label>
                          </div>
                          <div className="form-group wid100 mt10">
                            <AppAutoComplete label="d" />
                            <div className="SelectedList Payment mt10">
                              <ul>
                                <li>
                                  <span className="InfoBox"></span>
                                  <div className="Info">
                                    <div className="Name">홍길동 (170****)</div>
                                    <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                  </div>
                                  <div className="column-box">
                                    <span className="column-btn">
                                      <a href="javascript:void(0);">
                                        <span className="up">up</span>
                                      </a>
                                      <a href="javascript:void(0);">
                                        <span className="down">down</span>
                                      </a>
                                    </span>
                                  </div>
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
                                  <div className="column-box">
                                    <span className="column-btn">
                                      <a href="javascript:void(0);">
                                        <span className="up">up</span>
                                      </a>
                                      <a href="javascript:void(0);">
                                        <span className="down">down</span>
                                      </a>
                                    </span>
                                  </div>
                                  <a href="javascript:void(0);">
                                    <span className="delete">X</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="btn-area">
                        <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                          결제그룹설정
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

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          출력
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
      {/* //하단버튼영역 */}
    </>
  );
}

export default PRiskEdit;
