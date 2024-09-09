import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppTextArea from '@/components/common/AppTextArea';
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
function ReportEdit() {
  const [inputValue, setInputValue] = useState('');
  const [firstExpaned, setFirstExpaned] = useState(true);
  const [secondExpaned, setSecondExpaned] = useState(true);
  const [thirdExpaned, setThirdExpaned] = useState(true);
  const [fourExpaned, setFourExpaned] = useState(true);
  const [fiveExpaned, setFiveExpaned] = useState(true);
  const [firstTimeValue, setFirstTimeValue] = useState('22:25:50');
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
            <a href="javascript:void(0);">보고서분석</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2 className="reportview">
          보고서분석
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
          {/* 비행정보 */}
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt onClick={() => setFirstExpaned(!firstExpaned)}>
            <button type="button" className="btn-tg">
              비행정보<span className={firstExpaned ? 'active' : ''}></span>
              <div className="tag-info-wrap-end">
                <div className="tip">
                  <div>
                    <a href="javascript:void(0);" className="txt">
                      보고서 작성 가이드
                    </a>
                  </div>
                </div>
                <div className="tip">
                  <div>
                    <a href="javascript:void(0);" className="txt">
                      의무보고의 범위
                    </a>
                  </div>
                </div>
              </div>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group">
                        <div className="date2">
                          <AppDatePicker label="출발일자(UTC)" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group va-t ant-input wid100">
                        <span className="ant-input-group-addon1">KE</span>
                        <div className="ant-input-group-addon1-input wid50 df">
                          {/*비행편명 */}
                          <AppTextInput label="비행편명" required />
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
                          <AppTextInput label="등록부호" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*항공기형식 */}
                        <AppTextInput label="항공기형식" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*출발공항 */}
                        <AppAutoComplete label="출발공항" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*출발공항 */}
                        <AppAutoComplete label="도착공항" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*회항공항 */}
                        <AppAutoComplete label="회항공항" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*STD */}
                        <AppTimePicker
                          label={'STD'}
                          onChange={(value) => setFirstTimeValue(value)}
                          value={firstTimeValue}
                          showNow={true}
                          needConfirm={true}
                        />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*STA */}
                        <AppTimePicker
                          label={'STA'}
                          onChange={(value) => setFirstTimeValue(value)}
                          value={firstTimeValue}
                          showNow={true}
                          needConfirm={true}
                        />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*ATD */}
                        <AppTimePicker
                          label={'ATD'}
                          onChange={(value) => setFirstTimeValue(value)}
                          value={firstTimeValue}
                          showNow={true}
                          needConfirm={true}
                        />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*ATA */}
                        <AppTimePicker
                          label={'ATA'}
                          onChange={(value) => setFirstTimeValue(value)}
                          value={firstTimeValue}
                          showNow={true}
                          needConfirm={true}
                        />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*Delay */}
                        <AppTextInput inputType={'number'} label="Delay" />
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
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid50">
                        <div className="UserChicebox Flight error">
                          {/* <div className="form-group wid100">
                            <AppSelect label={'비행승무원'} />
                            <label htmlFor="file" className="file-label">
                              비행승무원 <span className="required"></span>
                            </label>
                          </div> */}
                          {/* <div className="form-group wid100">
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
                          </div> */}
                          {/* 2개만 존재하는 경우 */}
                          <div className="form-group wid100">
                            <AppAutoComplete label="d" />
                            <label htmlFor="file" className="file-label">
                              비행승무원 <span className="required"></span>
                            </label>
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
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
        {/* 이벤트 */}
        <dl className={secondExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setSecondExpaned(!secondExpaned)}>
            <button type="button" className="btn-tg">
              이벤트<span className={secondExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: secondExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50 ">
                      <div className="form-group wid50">
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
                      <div className="form-group wid100">
                        {/*발생공항 */}
                        <AppAutoComplete label="발생공항" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*통로 */}
                        <AppTextInput label="통로" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="df">
                          <div className="type3">
                            <AppDatePicker label="발생시간" showTime />
                          </div>
                          <div className="type4">
                            <AppSelect label={'UTC'} disabled />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid50">
                        {/*비행단계 */}
                        <AppSelect label="비행단계" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="UserChicebox error">
                          <div className="form-group wid100">
                            <div className="df">
                              <div className="type1">
                                <AppTextInput inputType={'number'} label="" />
                                <label htmlFor="file" className="file-label">
                                  Altitude <span className="required"></span>
                                </label>
                              </div>
                              <div className="type2">
                                {/*Altitude 선택 */}
                                <AppSelect label="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="UserChicebox error">
                          <div className="form-group wid100">
                            <div className="df">
                              <div className="type1">
                                <AppTextInput inputType={'number'} label="" />
                                <label htmlFor="file" className="file-label">
                                  Speed <span className="required"></span>
                                </label>
                              </div>
                              <div className="type2">
                                {/*Speed 선택 */}
                                <AppSelect label="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="제목" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap1 wid100 ">
                        <span className="txt">
                          내용 <span className="required">*</span>
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
                </div>
              </div>
            </div>
          </dd>
        </dl>
        {/* 날씨 */}
        <dl className={thirdExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setThirdExpaned(!thirdExpaned)}>
            <button type="button" className="btn-tg">
              날씨<span className={thirdExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: thirdExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid50">
                        {/*Met */}
                        <AppSelect label="Met" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="UserChicebox error">
                          <div className="form-group wid100">
                            <div className="flex-between">
                              <div className="flex-start">
                                <div className="type5">
                                  <AppTextInput inputType={'number'} label={'바람'} />
                                </div>
                                <span className="unt">/</span>
                                <div className="type5">
                                  <AppTextInput inputType={'number'} label={'바람'} />
                                </div>
                              </div>
                              <div className="df type5">
                                <AppTextInput inputType={'number'} label={'격발'} />
                                <span className="info-tit">케츠</span>
                              </div>
                            </div>
                            <label htmlFor="file" className="file-label">
                              실제 날씨 <span className="required"></span>
                            </label>
                          </div>
                          <div className="form-group wid100 mt10">
                            <AppTextInput label="시계" />
                          </div>
                          <div className="form-group wid100 mt10">
                            <div className="flex-between">
                              <div className="type5">
                                <AppSelect label="구름" />
                              </div>
                              <div className="df type5">
                                <AppTextInput inputType={'number'} label={'온도'} />
                                <span className="info-tit">℃</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*multiple selection 처리 */}
                        <AppSelect label="심각한 날씨(다중 섹션)" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
        {/* 조류충돌 */}
        <dl className={fourExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setFourExpaned(!fourExpaned)}>
            <button type="button" className="btn-tg">
              조류충돌
              <span className={fourExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: fourExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50 ">
                      <div className="form-group wid100">
                        {/*새의 종류
                         */}
                        <AppTextInput
                          inputType="text"
                          placeholder=""
                          label="새의 종류"
                          toolTipMessage="자유형식으로 입력가능
                          예)Waypoint, 이륙 후3시간 경과 시점 등"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">Size of Bird</span>
                        <div className="radio-wrap error">
                          <label>
                            <input type="radio" checked />
                            <span>작은</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>중간</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>크기가 큰</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">Number Seen</span>
                        <div className="radio-wrap error">
                          <label>
                            <input type="radio" checked />
                            <span>1</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>2-10</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>11-100</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>More</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">Number Struck</span>
                        <div className="radio-wrap error">
                          <label>
                            <input type="radio" checked />
                            <span>1</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>2-10</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>11-100</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>More</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">Time</span>
                        <div className="radio-wrap error">
                          <label>
                            <input type="radio" checked />
                            <span>새벽</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>낮</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>황혼</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>밤</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">Landing Light</span>
                        <div className="radio-wrap error">
                          <label>
                            <input type="radio" checked />
                            <span>On</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>Off</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">Pilot Warned of Birds</span>
                        <div className="radio-wrap error">
                          <label>
                            <input type="radio" checked />
                            <span>Yes</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>No</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50 ">
                      <div className="form-group wid100">
                        {/*Impact Point*/}
                        <AppTextInput inputType="text" placeholder="" label="Impact Point" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50 ">
                      <div className="form-group wid100">
                        <AppTextArea
                          label="Describe: Damage, Injuries and other information"
                          style={{ width: '100%', height: 100 }}
                          errorMessage=""
                          placeholder=""
                        />
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
      </div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default ReportEdit;
