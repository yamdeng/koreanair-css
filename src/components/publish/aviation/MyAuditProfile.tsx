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
              <AppTextInput label="제목" />
            </div>
          </div>

          <div className="btn-area df">
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              조회
            </button>
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              초기화
            </button>
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
              <div className="box">
                <span>
                  Click
                  <br />
                  Attach
                </span>
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
                      <AppAutoComplete label={'공항검색'} />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAuditProfile;
