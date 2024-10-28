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
function GSRReportEdit() {
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
            <a href="javascript:void(0);">GSR-100308</a>
          </span>
        </h2>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppAutoComplete label={'이벤트분석'} />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid30">
              <AppDatePicker label="출발일자" />
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
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table ar">
                    <div className="form-cell wid100">
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
                      <div className="form-group va-t ant-input wid50">
                        <span className="ant-input-group-addon1">KE</span>
                        <div className="ant-input-group-addon1-input wid100 df">
                          {/*비행편명 */}
                          <AppTextInput label="비행편명" />
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="btn-area">
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
                          {/*등록부호 */}
                          <AppTextInput label="등록부호" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*항공기형식 */}
                        <AppSelect label="항공기형식" />
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
                        <AppTextInput label="좌석수 (F/C/Y)" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="탑승자 (F/C/Y)" />
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
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <span className="toggle_switch-tit">Cargo 상세</span>
                        <label className="toggle_switch">
                          <input type="checkbox" />
                          <span className="slider"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="group-box-wrap wid100">
                          <span className="txt">
                            발견/신고 <span className="required">*</span>
                            <div className="tooltip">
                              <span className="tooltiptext1 tooltip-right">
                                <ul>
                                  <li>발견 : 이벤트 발생 시점 미정 항목에 대한 보고</li>
                                  <li>신고 : 이벤트 발생 시점 보고</li>
                                </ul>
                              </span>
                            </div>
                          </span>
                          <div className="radio-wrap error">
                            <label>
                              <input type="radio" checked />
                              <span>발견</span>
                            </label>
                            <label>
                              <input type="radio" />
                              <span>신고</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*발견유형 */}
                        <AppSelect label={'발견유형'} required disabled />
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
                      <div className="form-group wid100">
                        <AppSelect label="발생위치" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="운영단계" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="램프조작" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="항공기 손상 원인" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppSelect label="램프상태" required />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*multiple Select기능*/}
                        <AppSelect label="날씨" required />
                      </div>
                    </div>
                  </div>

                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="UserChicebox bg">
                          <div className="form-group wid100">
                            <div className="df">
                              <div className="type1">
                                <AppSelect label="항공기 손상 지역" required />
                              </div>
                              <div className="type2">
                                <AppTextArea
                                  label="내용"
                                  errorMessage=""
                                  placeholder=""
                                  style={{ width: '100%', height: 100 }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-table">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        {/*버튼영역*/}
                        <div className="btn-area">
                          <button type="button" name="button" className="btn-x-sm btn_text btn-darkblue-line">
                            + ADD
                          </button>
                        </div>
                        {/*추가리스트*/}
                        <div className="form-table">
                          <div className="form-cell Add wid100">
                            <div className="form-group wid100">
                              <div className="box-view-list">
                                <ul className="view-list">
                                  <li className="accumlate-list">
                                    <span className="text-desc-type1">
                                      <div className="info-box ">
                                        <table className="notice-board Air">
                                          <colgroup>
                                            <col width="5%" />
                                            <col width="80%" />
                                            <col width="15%" />
                                          </colgroup>
                                          <tr>
                                            <th></th>
                                            <th>항공기 손상 지역</th>
                                            <th>Action</th>
                                          </tr>
                                          <tr>
                                            <td className="plus">
                                              <a href="javascript:void(0);" className="btn-plus">
                                                {/* className="btn-minus"*/}+
                                              </a>
                                            </td>
                                            <td className="left">Flaps</td>
                                            <td className="btns">
                                              <a href="javascript:void(0);" className="btn-modify">
                                                수정{' '}
                                              </a>
                                              <a href="javascript:void(0);" className="btn-delete">
                                                삭제{' '}
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td colSpan={3} className="left deps-conts">
                                              내용내용
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="plus">
                                              <a href="javascript:void(0);" className="btn-minus">
                                                {/* className="btn-minus"*/}-
                                              </a>
                                            </td>
                                            <td className="left">
                                              {' '}
                                              <div className="form-table wid50">
                                                <AppSelect label={''} />
                                              </div>
                                            </td>
                                            <td className="btns">
                                              <a href="javascript:void(0);" className="btn-modify">
                                                저장{' '}
                                              </a>
                                              <a href="javascript:void(0);" className="btn-delete">
                                                취소{' '}
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td colSpan={3} className="left deps-conts">
                                              <AppTextArea
                                                label=""
                                                style={{ width: '100%', height: 145 }}
                                                errorMessage=""
                                              />
                                            </td>
                                          </tr>
                                        </table>
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

                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="UserChicebox bg">
                          <div className="form-group wid100">
                            <div className="df">
                              <div className="type6">
                                <AppSelect label="Relevant Equipment/Facility" required />
                              </div>
                              <div className="type6">
                                <AppTextInput label="Registration No." />
                              </div>
                            </div>
                            <div className="df">
                              <div className="type6">
                                <AppTextInput label="Maintenance History" />
                              </div>
                              <div className="type6">
                                <AppSelect label="Relevant GSP" />
                              </div>
                            </div>
                            <div className="df">
                              <div className="type6 Wd">
                                <AppTextInput label="Responsible Division" />
                              </div>
                            </div>
                            <div className="df">
                              <div className="type6 Wd">
                                <AppTextArea
                                  label="Description"
                                  errorMessage=""
                                  placeholder=""
                                  style={{ width: '100%', height: 100 }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-table">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        {/*버튼영역*/}
                        <div className="btn-area">
                          <button type="button" name="button" className="btn-x-sm btn_text btn-darkblue-line">
                            + ADD
                          </button>
                        </div>
                        {/*추가리스트*/}
                        <div className="form-table">
                          <div className="form-cell Add wid100">
                            <div className="form-group wid100">
                              <div className="box-view-list">
                                <ul className="view-list">
                                  <li className="accumlate-list">
                                    <span className="text-desc-type1">
                                      <div className="info-box ">
                                        <table className="notice-board Air2">
                                          <colgroup>
                                            <col width="5%" />
                                            <col width="20%" />
                                            <col width="15%" />
                                            <col width="15%" />
                                            <col width="15%" />
                                            <col width="15%" />
                                            <col width="15%" />
                                          </colgroup>
                                          <tr>
                                            <th></th>
                                            <th>관련 장비/시설</th>
                                            <th>등록 부호</th>
                                            <th>유지보수 이력</th>
                                            <th>관련 GSP</th>
                                            <th>담당부서</th>
                                            <th>Action</th>
                                          </tr>
                                          <tr>
                                            <td className="plus">
                                              <a href="javascript:void(0);" className="btn-plus">
                                                {/* className="btn-minus"*/}+
                                              </a>
                                            </td>
                                            <td className="left Sel">Lavatory service equipment</td>
                                            <td className="left Sel">등록sdsdfsfd</td>
                                            <td className="left Sel">sdsdfsfd</td>
                                            <td className="left Sel">sdsdfsfd</td>
                                            <td className="left Sel">sdsdfsfd</td>
                                            <td className="btns">
                                              <a href="javascript:void(0);" className="btn-modify">
                                                수정
                                              </a>
                                              <a href="javascript:void(0);" className="btn-delete">
                                                삭제
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td colSpan={7} className="left deps-conts">
                                              내용내용
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="plus">
                                              <a href="javascript:void(0);" className="btn-minus">
                                                {/* className="btn-minus"*/}-
                                              </a>
                                            </td>
                                            <td className="Sel">
                                              <AppSelect
                                                label={''}
                                                options={[{ label: 'Test', value: 'aaa' }]}
                                                value="aaa"
                                              />
                                            </td>
                                            <td className="Sel">
                                              <AppTextInput inputType="text" label={''} value="aaa" />
                                            </td>
                                            <td className="Sel">
                                              <AppTextInput inputType="text" label={''} value="aaa" />
                                            </td>
                                            <td className="Sel">
                                              <AppSelect
                                                label={''}
                                                options={[{ label: 'Test', value: 'aaa' }]}
                                                value="aaa"
                                              />
                                            </td>
                                            <td className="Sel">
                                              <AppSelect
                                                label={''}
                                                options={[{ label: 'Test', value: 'aaa' }]}
                                                value="aaa"
                                              />
                                            </td>
                                            <td className="btns">
                                              <a href="javascript:void(0);" className="btn-modify">
                                                저장{' '}
                                              </a>
                                              <a href="javascript:void(0);" className="btn-delete">
                                                취소{' '}
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td colSpan={7} className="left deps-conts">
                                              <AppTextArea
                                                label=""
                                                style={{ width: '100%', height: 145 }}
                                                errorMessage=""
                                              />
                                            </td>
                                          </tr>
                                        </table>
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

                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="UserChicebox bg">
                          <div className="form-group wid100">
                            <div className="df">
                              <div className="group-box-wrap wid100">
                                <span className="txt01">
                                  발견/신고 <span className="required">*</span>
                                </span>
                                <div className="radio-wrap ">
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
                            <div className="df">
                              <div className="type6 Wd">
                                <AppTextArea
                                  label="Description"
                                  errorMessage=""
                                  placeholder=""
                                  style={{ width: '100%', height: 100 }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-table">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        {/*추가리스트*/}
                        <div className="form-table">
                          <div className="form-cell wid50 ">
                            <div className="form-group wid100">
                              {/*조치사항*/}
                              <AppTextArea
                                label="조치사항"
                                errorMessage=""
                                placeholder=""
                                style={{ width: '100%', height: 100 }}
                              />
                            </div>
                          </div>
                        </div>
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
                                        {
                                          type: 'openTag',
                                          tagName: 'table',
                                          outerNewLine: true,
                                          attributes: node.attrs,
                                        },
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
                        {/* 파일첨부영역 : drag */}
                        <div className="form-table ">
                          <div className="form-cell Add wid50">
                            <div className="form-group wid100">
                              {/* 파일첨부영역 : drag */}
                              <div className="filebox error">
                                <Dragger {...props}>
                                  <p className="ant-upload-text ">
                                    <a href="javascript:void(0);" className="btn-plus">
                                      {/* className="btn-minus"*/}+
                                    </a>
                                    이 곳을 클릭하거나 마우스로 업로드할 파일을 끌어서 놓으세요.
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

export default GSRReportEdit;
