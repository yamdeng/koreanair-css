import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import AppSelect from '@/components/common/AppSelect';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextInput from '@/components/common/AppTextInput';
import AppTextArea from '@/components/common/AppTextArea';
import AppDatePicker from '@/components/common/AppDatePicker';
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

function MyAuditCAR() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [Finding, setFinding] = useState(true);
  const [Observation, setObservation] = useState(true);

  const customButtons = [
    {
      title: 'ApprReq',
      onClick: () => {
        alert('ApprReq');
      },
    },
    {
      title: 'Approval',
      onClick: () => {
        alert('Approval');
      },
    },
    {
      title: 'Reject',
      onClick: () => {
        alert('Reject');
      },
    },
    {
      title: 'Rollback',
      onClick: () => {
        alert('Rollback');
      },
    },
  ];

  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">AUDIT</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">MyAuditConduct</a>
          </li>
        </ol>
      </div>
      {/*//경로 */}

      <div className="myaudit-container">
        <div className="myaudit-header">
          <div className="ad-number">
            Audit No. <span>24-LSA-0407</span>
          </div>
          <div className="myaudit-tab">
            <ul>
              <li>
                <a className="active" href="javascript:void(0);">
                  <span className="myaudit-tab-icon active">아이콘</span> Plan
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <span className="myaudit-tab-icon">아이콘</span>Conduct
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <span className="myaudit-tab-icon">아이콘</span> CAR
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <span className="myaudit-tab-icon">아이콘</span>Close
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="myaudit-contents">
          <h3 className="audit-tit">CAR</h3>
          {/*그리드영역 */}
          <div className="mt-10 mb-20">
            <AppTable rowData={rowData} columns={columns} customButtons={customButtons} hiddenPagination />
          </div>
          {/*//그리드영역 */}
          <div className="info-wrap toggle">
            <dl className="{firstExpaned ? 'tg-item active' : 'tg-item'}">
              {/* 비행정보 */}
              {/* toggle 선택되면  열어지면 active붙임*/}
              <dt onClick={() => setFinding(!Finding)}>
                <button type="button" className="btn-tg">
                  Finding<span className={Finding ? 'active' : ''}></span>
                </button>
              </dt>
              <dd className="tg-conts" style={{ display: Finding ? '' : 'none' }}>
                {/* 입력영역 */}
                <div className="editbox edit-audit-bg">
                  <h3 className="s-tit">
                    해외공항 원격 안전평가 점검표 (ko)10 <span>CAR No. 24-LSA-0407-BE01</span>
                  </h3>
                  <ul>
                    <li>안전보안일반2</li>
                    <li>
                      7-1 공항 지점은 자체보안계획과 현지 관련규정에 부합하는 지점 표준 업무 절차를 수립하여 항상
                      최신판으로 유지하여야 한다. 상기 평가항목 내용에 대해 입증할 수 있는 자료(관련 교육 또는 회람 실시
                      내용, 소속 전 직원의 Read & Sign 결과지 등) 및 사진을 첨부하여 주시기 바랍니다.
                    </li>
                    <li>ASP 5.2.7 1</li>
                    <li>
                      {' '}
                      <div className="group-box-wrap wid100">
                        <div className="radio-wrap border-no ta-r">
                          <label>
                            <input type="radio" checked />
                            <span>Finding</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>Observation</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>N/A</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>Yes</span>
                          </label>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </li>
                  </ul>
                </div>
                {/*//입력영역*/}
              </dd>
            </dl>

            <dl className="{firstExpaned ? 'tg-item active' : 'tg-item'}">
              {/* 비행정보 */}
              {/* toggle 선택되면  열어지면 active붙임*/}
              <dt onClick={() => setObservation(!Observation)}>
                <button type="button" className="btn-tg">
                  Observation<span className={Observation ? 'active' : ''}></span>
                </button>
              </dt>
              <dd className="tg-conts" style={{ display: Observation ? '' : 'none' }}></dd>
            </dl>
            {/*추가버튼*/}
            <div className="btn-area mt-15 mb-10 ta-c">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                + Add Questionnaire
              </button>
            </div>
            {/*//추가버튼*/}
          </div>
          {/* 하단버튼영역 */}
          <div className="contents-btns">
            <button className="btn_text text_color_neutral-10 btn_confirm ">인쇄</button>
            <button className="btn_text btn_list ">목록</button>
            <button disabled className="btn_text btn-disabled">
              삭제
            </button>
            <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
              수정
            </button>
          </div>
          {/*//하단버튼영역*/}
        </div>
      </div>
    </>
  );
}

export default MyAuditCAR;
