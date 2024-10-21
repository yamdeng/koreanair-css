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

function MyAuditProfileDetail() {
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
      <div className="audit-header">
        <ul>
          <li>
            Auditor Coun : <span className="num">120</span>
          </li>
          <li>
            Audit Experience AVG : <span className="num">10Y 5M</span>
          </li>
        </ul>
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
                      <td rowSpan={3}>보안부문(3)</td>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>정비부문(1)</td>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>종합통제(1)</td>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>여객부문(1)</td>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td rowSpan={13}>화물부문(13)</td>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
                      <td>0001</td>
                      <td>대리</td>
                      <td>2024-12-31</td>
                    </tr>
                    <tr>
                      <td>홍길동9</td>
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
                      {/* <AppTextArea label="" style={{ width: '100%', height: 80 }} errorMessage="" /> */}
                      <div className="list">
                        <div className="txt1">Corporate aviation safety strategy Department</div>
                        <div className="txt1">
                          Current Team Audit Experience <span className="point-col">(5Y 3M)</span>
                        </div>
                        <div className="txt1">
                          Total Audit Experience <span className="point-col">(10Y 2M)</span>
                        </div>
                      </div>
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
                      <div className="list">
                        <ul>
                          <li>22 : 18 Times / CAR 9</li>
                          <li>22 : 18 Times / CAR 9</li>
                          <li>22 : 18 Times / CAR 9</li>
                        </ul>
                      </div>
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
                      {/* <AppTextArea label="" style={{ width: '100%', height: 80 }} errorMessage="" />
                       */}
                      <div className="list">
                        <ul>
                          <li>22 : 18 Times / CAR 9</li>
                          <li>22 : 18 Times / CAR 9</li>
                          <li>22 : 18 Times / CAR 9</li>
                        </ul>
                      </div>
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
                      {/* <AppTextArea label="" style={{ width: '100%', height: 80 }} errorMessage="" /> */}
                      <div className="list">
                        <ul>
                          <li>22 : 18 Times / CAR 9</li>
                          <li>SMS </li>
                          <li>Lead Auditor Training</li>
                        </ul>
                      </div>
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
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="name">Hong Gill-Dong5</div>
                      <div className="info-tit">General Manager / Team Leader Auditor</div>
                    </div>
                  </div>
                </div>

                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="cots-area">
                        <div className="title">Summary</div>
                        <div className="detail">
                          <ul>
                            <li>Summary text</li>
                            <li>Summary text</li>
                            <li>Summary text</li>
                            <li>Summary text</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="cots-area">
                        <div className="title">Work Experience</div>
                        <div className="detail">
                          <ul>
                            <li>Maintenance & Engineering - Base Maintenance (7 years)</li>
                            <li>Maintenance & Engineering - Line Maintenance (2 years)</li>
                            <li>Quality Assurance in M&E Division  (4 years)</li>
                            <li>Cabin Safety in Cabin Service Division  (4 years)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>

                <div className="form-table scroll">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="cots-area">
                        <div className="title">Training Records</div>
                        <div className="detail">
                          <ul>
                            <li>
                              <a href="javascript:void(0);">2020 JUL | PROS Lead Auditor Training</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">2020 JUL | PROS Lead Auditor Training</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">2020 JUL | PROS Lead Auditor Training</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line"></hr>
                {/* 파일첨부영역 : drag */}
                <div className="form-table scroll">
                  <div className="form-cell wid100">
                    <div className="form-group wid100">
                      <div className="cots-area">
                        <div className="title">Recurrent Training</div>
                        <div className="detail">
                          <ul>
                            <li>
                              <a href="javascript:void(0);">2020 JUL | PROS Lead Auditor Training</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">2020 JUL | PROS Lead Auditor Training</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">2020 JUL | PROS Lead Auditor Training</a>
                            </li>
                          </ul>
                        </div>
                      </div>
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

export default MyAuditProfileDetail;
