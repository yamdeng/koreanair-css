import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';
import AppTextArea from '@/components/common/AppTextArea';

function AdminEquipEdit() {
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
            <a href="javascript:void(0);">Admin</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">장비점검 등록</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>장비점검 등록</h2>
      </div>

      {/*검색영역 */}

      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label="장비코드" />
            </div>
          </div>

          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label="장비명" />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label="모델명" />
            </div>
          </div>
        </div>
        <div className="form-table">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label={'자사구분'} />
            </div>
          </div>

          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label={'부서'} />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppTextInput label="업체명" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="btn-area">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                조회
              </button>
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                초기화
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className="equipbox">
        <div className="left-box">
          <AppTable rowData={rowData} columns={columns} />
        </div>
        <div className="right-box">
          {/*그리드영역 */}
          <div className="list-view">
            <div className="head-top">
              <h3>점검이력 목록</h3>
              <div className="btns-area r-btn">
                <button name="button" className="btn_text btn_confirm text_color_neutral-10">
                  양식 다운로드
                </button>
                <button name="button" className="btn_text btn_confirm text_color_neutral-10">
                  양식 업로드
                </button>
                <button name="button" className="btn_text btn_confirm text_color_neutral-10">
                  신규
                </button>
                <button name="button" className="btn_text btn_confirm text_color_neutral-10">
                  수정
                </button>
              </div>
            </div>
            <div className="gride">
              <table className="equip-table">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>점검일자</th>
                    <th>점검결과</th>
                    <th>작성자</th>
                    <th>작성일자</th>
                    <th>수정자</th>
                    <th>수정일자</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="form-cell wid100">
                        <div className="form-group wid100">
                          <div className="date1">
                            <AppDatePicker label={'작성일'} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="form-cell wid100">
                        <div className="form-group wid100">
                          <AppSelect label={'게시판구분'} />
                        </div>
                      </div>
                    </td>
                    <td>작성자1</td>
                    <td>2024-12-31</td>
                    <td>작성자1</td>
                    <td>2024-12-31</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>2024-12-31</td>
                    <td>책임자</td>
                    <td>작성자1</td>
                    <td>2024-12-31</td>
                    <td>작성자1</td>
                    <td>2024-12-31</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>2024-12-31</td>
                    <td>책임자</td>
                    <td>작성자1</td>
                    <td>2024-12-31</td>
                    <td>작성자1</td>
                    <td>2024-12-31</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="list-dtail">
              <h3></h3>
              <div className="form-table">
                <div className="form-cell">
                  <div className="form-group wid100">
                    <div className="type7">
                      <AppTextArea label="비고" style={{ width: '100%', height: 200 }} errorMessage="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//그리드영역 */}
        </div>
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default AdminEquipEdit;
