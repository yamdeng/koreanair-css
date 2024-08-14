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
              <th>리프트</th>
              <th>압력용기</th>
              <th>롤러기</th>
              <th>사출성형기</th>
            </tr>
            <tr>
              <td>20</td>
              <td>5</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <th>기계톱</th>
              <th>연삭기/연마기</th>
              <th>산업용로봇</th>
              <th>혼합기</th>
            </tr>
            <tr>
              <td>20</td>
              <td>5</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <th>식품가공용기계</th>
              <th>컨베이어</th>
              <th>공작기계</th>
              <th>인쇄기</th>
            </tr>
            <tr>
              <td>20</td>
              <td>5</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <th>곤돌라</th>
              <th>파쇄기/분쇄기</th>
              <th>고소작업대</th>
              <th>국소배기장치</th>
            </tr>
            <tr>
              <td>20</td>
              <td>5</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <th>원심기</th>
              <th>기타</th>
            </tr>
            <tr>
              <td>20</td>
              <td>5</td>
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
