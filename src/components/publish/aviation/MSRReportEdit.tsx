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
function MSRReportEdit() {
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
            <a href="javascript:void(0);">MSR-100308</a>
          </span>
        </h2>
      </div>

      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" className="active" data-label="Flight">
            Flight
          </a>
          <a href="javascript:void(0);" className="" data-label="Heavy Maintenance">
            Heavy Maintenance
          </a>
        </div>
      </div>

      <div className="info-wrap toggle">
        <dl className="{firstExpaned ? 'tg-item active' : 'tg-item'}">
          {/* 비행정보 */}
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt onClick={() => setFirstExpaned(!firstExpaned)}>
            <button type="button" className="btn-tg">
              비행정보
              {/* 체크박스 선택*/}
              {/* <div className="chk-wrap TopCheck">
                <label>
                  <input type="checkbox" />
                  <span>Heavy Maintenance</span>
                </label>
              </div> */}
              {/* //체크박스 선택*/}
              <span className={firstExpaned ? 'active' : ''}></span>
              {/* info*/}
              <div className="tag-info-wrap-end">
                <div className="tip">
                  <div>
                    <a href="javascript:void(0);" className="txt">
                      작성 예시
                    </a>
                  </div>
                </div>
                <div className="tip">
                  <div>
                    <a href="javascript:void(0);" className="txt">
                      의무보고의범위
                    </a>
                  </div>
                </div>
              </div>
              {/* //info*/}
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="df">
                          <div className="type3">
                            <AppDatePicker label="출발일자" />
                          </div>
                          <div className="type4">
                            <AppSelect label={'UTC'} disabled />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group va-t ant-input wid100">
                        <span className="ant-input-group-addon1">KE</span>
                        <div className="ant-input-group-addon1-input wid50">
                          {/*비행편명 */}
                          <AppSearchInput label="비행편명3" required value="aaa" errorMessage="aaa" />
                          {/* <AppTextInput label="비행편명3" required value="aaa" /> */}
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="btn-area tl">
                        <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group va-t ant-input wid100">
                        <span className="ant-input-group-addon1">HL</span>
                        <div className="ant-input-group-addon1-input wid50">
                          {/*등록번호 */}
                          <AppTextInput label="등록번호" required errorMessage="aaa" />
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*항공기유형 */}
                        <AppSelect label="항공기유형" required errorMessage="aaa" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*출발지 */}
                        <AppAutoComplete label="출발지" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*도착지 */}
                        <AppAutoComplete label="도착지" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*Divert */}
                        <AppAutoComplete label="Divert" />
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
                        <AppTextInput label="공급(F/C/Y)" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="체크인(금/토/일)" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid50">
                        <div className="UserChicebox Flight error">
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
                                  {/*<span className="class leader">Leader</span>*/}
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
                                  {/*<span className="class ">Leader</span>*/}
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
                                  {/*<span className="class ">Leader</span>*/}
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
                                  {/*<span className="class ">Leader</span>*/}
                                  <a href="javascript:void(0);">
                                    <span className="delete">X</span>
                                  </a>
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
                      <div className="form-group wid50">이벤트 카테고리</div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발생공항 */}
                        <AppAutoComplete label="발생공항" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="Notification-wrap wid50">
                          <p className="notice">Notification</p>
                          <ul>
                            <li>
                              <span className="point">①</span>Safety : Asked about Safety Equipments/Regulations mostly.
                            </li>
                            <li>
                              <span className="point">②</span>Security : Asked about Security Equipments/Regulations
                              mostly.
                            </li>
                            <li>
                              <span className="point">③</span>Alcohol/Drug : About the alcohol/drug test
                            </li>
                            <li>
                              <span className="point">④</span>Others : Excluding the above items.
                            </li>
                          </ul>
                          <p className="info-text01">
                            Do not write a simple boarding of a supervisor without questions/checks for cabin crew
                          </p>
                          <p className="info-text01">
                            Inspection officer boarding is not required for other sectors (operation, maintenance, etc.)
                            other than room inspection purposes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">
                          Inspection Type <span className="required">*</span>
                        </span>
                        <div className="radio-wrap error">
                          <label>
                            <input type="radio" checked />
                            <span>Safety</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>Security</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>Alcohol/Drugs</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>Others</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">
                          Base of Authority <span className="required">*</span>
                        </span>
                        <div className="radio-wrap error">
                          <label>
                            <input type="radio" checked />
                            <span>Domestic</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>Foreign</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>KE</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">
                          Finding <span className="required">*</span>
                        </span>
                        <div className="radio-wrap error">
                          <label>
                            <input type="radio" checked />
                            <span>Yes</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>No</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>잘모르겠어요</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="점검관" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="점검기관" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid50">
                        <div className="UserChicebox Flight ">
                          <div className="form-group wid100">
                            <div className="df">
                              <div className="type6">
                                <AppSelect label="점검기관" />
                              </div>
                              <div className="type6">
                                <AppSelect label="점검기관" />
                              </div>
                              <div className="type4 Add">
                                <button type="button" name="button" className="btn_add btn_text">
                                  + Add
                                </button>
                              </div>
                            </div>
                            <label htmlFor="file" className="file-label">
                              은닉물 발견 장소 (있었던 경우)
                            </label>
                            <div className="SelectedList Location mt10">
                              <ul>
                                <li>
                                  Coat Room / Economy Class
                                  <a href="javascript:void(0);">
                                    <span className="delete">X</span>
                                  </a>
                                </li>
                                <li>
                                  Coat Room / Economy Class
                                  <a href="javascript:void(0);">
                                    <span className="delete">X</span>
                                  </a>
                                </li>
                                <li>
                                  Coat Room / Economy Class
                                  <a href="javascript:void(0);">
                                    <span className="delete">X</span>
                                  </a>
                                </li>
                                <li>
                                  Coat Room / Economy Class
                                  <a href="javascript:void(0);">
                                    <span className="delete">X</span>
                                  </a>
                                </li>
                                <li>
                                  Coat Room / Economy Class
                                  <a href="javascript:void(0);">
                                    <span className="delete">X</span>
                                  </a>
                                </li>
                                <li>
                                  Coat Room / Economy Class
                                  <a href="javascript:void(0);">
                                    <span className="delete">X</span>
                                  </a>
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
        {/* Person Involved Detail */}
        <dl className={thirdExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setThirdExpaned(!thirdExpaned)}>
            <button type="button" className="btn-tg">
              Person Involved Detail<span className={thirdExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: thirdExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  {/*PAX */}
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="UserChicebox Fax ">
                          <label htmlFor="file" className="file-label">
                            PAX <span className="required"></span>
                          </label>
                          <div className="form-table">
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppSelect label={'관련자'} />
                              </div>
                            </div>
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppTextInput label="이름" />
                              </div>
                            </div>
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppSelect label={'팩스'} />
                              </div>
                            </div>
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppTextInput inputType={'number'} label="나이" />
                              </div>
                            </div>
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppTextInput label="국적" />
                              </div>
                            </div>
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppTextInput label="좌석번호" />
                              </div>
                            </div>
                            <div className="form-cell wid10">
                              <div className="form-group wid100">
                                <button type="button" className="tabs-tab-remove Mob">
                                  <span className="btn-del delete">Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="form-table">
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppSelect label={'관련자'} />
                              </div>
                            </div>
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppTextInput label="이름" />
                              </div>
                            </div>
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppSelect label={'팩스'} />
                              </div>
                            </div>
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppTextInput inputType={'number'} label="나이" />
                              </div>
                            </div>
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppTextInput label="국적" />
                              </div>
                            </div>
                            <div className="form-cell wid50">
                              <div className="form-group wid100">
                                <AppTextInput label="좌석번호" />
                              </div>
                            </div>
                            <div className="form-cell wid10">
                              <div className="form-group wid100">
                                <button type="button" className="tabs-tab-remove Mob">
                                  <span className="btn-del delete">Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          {/*추가버튼*/}
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                              + Add
                            </button>
                          </div>
                          {/*//추가버튼*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*CREW */}
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="UserChicebox Fax ">
                          <label htmlFor="file" className="file-label">
                            CREW <span className="required"></span>
                          </label>
                          <div className="form-table">
                            <div className="form-cell wid30">
                              <div className="form-group wid100">
                                <AppSelect label={'관련자'} />
                              </div>
                            </div>
                            <div className="form-cell wid100">
                              <div className="form-group wid100">
                                {/* */}
                                <AppAutoComplete label="" required />
                              </div>
                            </div>
                            <div className="form-cell wid10">
                              <div className="form-group wid100">
                                <button type="button" className="tabs-tab-remove Mob">
                                  <span className="btn-del delete">Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>

                          {/*추가버튼*/}
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                              + Add
                            </button>
                          </div>
                          {/*//추가버튼*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
        {/* 이벤트내용 */}
        <dl className={fourExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setFourExpaned(!fourExpaned)}>
            <button type="button" className="btn-tg">
              이벤트 내용2
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
                        {/*제목*/}
                        <AppTextInput inputType="text" placeholder="" label="제목" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap1 wid100 ">
                        {/*내용 */}
                        <Editor
                          hideModeSwitch={true}
                          initialEditType="wysiwyg"
                          previewStyle="vertical"
                          // initialValue={initValue}
                          height={'300px'}
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
                        <span className="errorText">asdasdasd</span>
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

export default MSRReportEdit;
