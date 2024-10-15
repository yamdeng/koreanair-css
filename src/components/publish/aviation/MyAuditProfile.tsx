import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppRangeDatePicker from '@/components/common/AppRangeDatePicker';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppTextArea from '@/components/common/AppTextArea';
import infophoto from '@/resources/images/no_img_pro.jpg';
import logoKoreanair from '@/resources/images/logo-Koreanair.svg';
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

function MyAuditProfile() {
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
            <a href="javascript:void(0);">AUDIT</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">품질심사원 프로필</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>품질심사원 프로필</h2>
      </div>

      <div className="user-wrap">
        <div className="user-box ">ㅇㅇ</div>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="Audited Div." />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="Auditor Name | Auditor EmpNo" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="chk-wrap">
              <label>
                <input type="checkbox" />
                <span>비활성 포함 조회</span>
              </label>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="btn-area">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                조회
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      <div className="equipbox">
        <div className="left-box">
          <div className="list-view">
            <div className="">
              <div className="btn-area inbtn mb5">
                <button name="button" className="btn_text btn_confirm text_color_neutral-10">
                  + Add AUDITOR
                </button>
              </div>
              <div className="pro-table">
                <table>
                  <colgroup>
                    <col width="30%" />
                    <col width="15%" />
                    <col width="15%" />
                    <col width="15%" />
                    <col width="15%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>부분</th>
                      <th>이름</th>
                      <th>사번</th>
                      <th>직급</th>
                      <th>전입일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan={5}>전사 품질(5)</td>
                      <td>홍길동</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>전사 품질(5)</td>
                      <td>홍길동</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="right-box">
          <div className="use-wrap">
            <div className="use-left">
              {/*사진 */}
              <div className="imgBox-wrap">
                <div className="imgBox">
                  <img src={infophoto} className="" alt="인물사진" />
                </div>
              </div>
              {/*//사진 */}

              {/*Division/ Team */}
              <div className="mu-wrap">
                <div className="h4">Division/ Team</div>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <AppTextArea label="" style={{ width: '100%', height: 80 }} errorMessage="" />
                    </div>
                  </div>
                </div>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <AppDatePicker label="date1" />
                    </div>
                  </div>
                </div>
              </div>
              {/*Number of Audit */}
              <div className="mu-wrap">
                <div className="h4">Number of Audit</div>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100 h8">
                      {/* <AppTextArea label="" style={{ width: '100%', height: 80 }} errorMessage="" /> */}
                    </div>
                  </div>
                </div>
              </div>

              {/*AUDIT SCOPE */}
              <div className="mu-wrap">
                <div className="h4">Audit Scope</div>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <AppTextArea label="" style={{ width: '100%', height: 80 }} errorMessage="" />
                    </div>
                  </div>
                </div>
              </div>

              {/*CERTIFICATION*/}
              <div className="mu-wrap">
                <div className="h4">Certification</div>
                <div className="form-table">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <AppTextArea label="" style={{ width: '100%', height: 80 }} errorMessage="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bottom-box">
                <div className="imgBox">
                  <img src={logoKoreanair} className="" alt="인물사진" />
                </div>
              </div>
            </div>
            <div className="use-right">
              <div className="editbox equip">
                <div className="form-table">
                  <div className="form-cell wid30">
                    <div className="form-group wid100">
                      <AppSelect label={'Audit 부문 '} required />
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppAutoComplete label={'Search Auditor Name'} />
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextArea label="Auditor Info" style={{ width: '100%', height: 80 }} errorMessage="" />
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextArea label="Summary" style={{ width: '100%', height: 80 }} errorMessage="" />
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <AppTextArea label="Work Experience" style={{ width: '100%', height: 80 }} errorMessage="" />
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                {/* 파일첨부영역 : drag */}
                <div className="form-table scroll">
                  {/* form-cell 영역이 한 그룹입니다. */}
                  <div className="form-cell wid100">
                    <div className="form-group wid70">
                      <AppTextInput label={'Training Records'} />
                    </div>
                    <div className="form-group wid30">
                      <div className="btn-box">
                        <button type="button" name="button" className="btn-more">
                          <span className="hide">더보기</span>
                        </button>
                      </div>
                    </div>
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
                <hr className="line"></hr>
                {/* 파일첨부영역 : drag */}
                <div className="form-table scroll">
                  <div className="form-cell wid100">
                    <div className="form-group wid70">
                      <AppTextInput label={'Recurrent Training'} />
                    </div>
                    <div className="form-group wid30">
                      <div className="btn-box">
                        <button type="button" name="button" className="btn-more">
                          <span className="hide">더보기</span>
                        </button>
                      </div>
                    </div>
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
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">signature space</div>
                  <div className="form-cell wid50">
                    {/* 버튼*/}
                    <div className="contents-btns">
                      <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
                        저장
                      </button>
                    </div>
                    {/* //버튼*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAuditProfile;
