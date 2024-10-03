import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';

function SMSTotalList() {
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
            <a href="javascript:void(0);">안전위험관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">SMS종합분석현황</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">종합분석결과보고서</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>종합분석결과보고서</h2>
      </div>

      {/*검색영역 */}
      {/* <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="제목" />
            </div>
          </div>
          <div className="btn-area">
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              초기화
            </button>
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              조회
            </button>
          </div>
        </div>
      </div> */}
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className="">
        <div className="listtable">
          <table className="info-board">
            <colgroup>
              <col width="5%" />
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>분석일자</th>
                <th>첨부파일</th>
                <th>등록자</th>
                <th>등록일자</th>
                <th>수정자</th>
                <th>수정일자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2024-10-04</td>
                <td>
                  <a href="javascript:void(0);" className="btn-modify">
                    보기
                  </a>
                </td>
                <td>작성자1</td>
                <td>2024-10-04</td>
                <td>수정자1</td>
                <td>2024-10-04</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*//그리드영역 */}
    </>
  );
}

export default SMSTotalList;
