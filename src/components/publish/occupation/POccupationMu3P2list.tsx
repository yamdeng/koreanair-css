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

function POPOccupationMu3P2list() {
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
            <a href="javascript:void(0);">안전관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">위험기계기구</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>위험기계기구</h2>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" className="active" data-label="현황">
            현황
          </a>
          <a href="javascript:void(0);" data-label="조회">
            조회
          </a>
        </div>
      </div>
      {/*//탭 */}
      {/*테이블영역 */}
      <div className="conts-title">
        <h3>전사 위험기계기구 보유 현황: 100대</h3>
      </div>
      <div className="table-box">
        <div className="left-table">
          <table>
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
            <tr>
              <th>프레스</th>
              <th>전단기</th>
              <th>절곡기</th>
              <th>크레인</th>
            </tr>
            <tr>
              <td>20</td>
              <td>5</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <th>프레스</th>
              <td>20</td>
            </tr>
          </table>
        </div>
        <div className="right-table">오른쪽영역</div>
      </div>
      {/* //테이블영역 */}
    </>
  );
}

export default POPOccupationMu3P2list;
