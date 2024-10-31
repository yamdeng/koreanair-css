import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';
import chartasr from '@/resources/images/ASR-box.svg';
import chartmsr from '@/resources/images/MSR-box.svg';

function setting() {
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
            <a href="javascript:void(0);">환경설정</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>환경설정</h2>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
        <div className="SelectedList type01 memberClass">
          <ul>
            <li>
              <span className="InfoBox"></span>
              <div className="Info">
                <div className="Name">관리자 (Admin)</div>
                <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* //검색영역 */}

      {/*리스트영역 */}
      <div className="setting-wrap">
        <table className="setting-list">
          <colgroup>
            <col width="30%" />
            <col width="70%" />
          </colgroup>
          <tr>
            <th>언어</th>
            <td>
              <div className="form-cell wid-150">
                <div className="form-group wid100">
                  <AppSelect label="" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>보고서별 언어 개별 설정</th>
            <td>
              <div className="form-cell wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap border-no">
                    <label className="text-no">
                      <input type="checkbox" />
                      <span className="text-no"></span>
                    </label>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td className="pd-no">
              <table className="setting-list-type01">
                <colgroup>
                  <col width="50%" />
                  <col width="50%" />
                </colgroup>
                <tr>
                  <th>보고서 유형</th>
                  <th>언어</th>
                </tr>
                <tr>
                  <td>Air Safety Report</td>
                  <td className="ta-c">
                    <div className="form-cell wid-150">
                      <div className="form-group wid100">
                        <AppSelect label="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>객실안전보고서</td>
                  <td className="ta-c">
                    <div className="form-cell wid-150">
                      <div className="form-group wid100">
                        <AppSelect label="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>객실안전보고서</td>
                  <td className="ta-c">
                    <div className="form-cell wid-150">
                      <div className="form-group wid100">
                        <AppSelect label="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>정비안전보고서</td>
                  <td className="ta-c">
                    <div className="form-cell wid-150">
                      <div className="form-group wid100">
                        <AppSelect label="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>운항관리사안전보고서</td>
                  <td className="ta-c">
                    <div className="form-cell wid-150">
                      <div className="form-group wid100">
                        <AppSelect label="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>램프안전보고서</td>
                  <td className="ta-c">
                    <div className="form-cell wid-150">
                      <div className="form-group wid100">
                        <AppSelect label="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>FOQA</td>
                  <td className="ta-c">
                    <div className="form-cell wid-150">
                      <div className="form-group wid100">
                        <AppSelect label="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Hazard Report</td>
                  <td className="ta-c">
                    <div className="form-cell wid-150">
                      <div className="form-group wid100">
                        <AppSelect label="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>안전보고서</td>
                  <td className="ta-c">
                    <div className="form-cell wid-150">
                      <div className="form-group wid100">
                        <AppSelect label="" />
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
      {/*//리스트영역 */}
      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default setting;
