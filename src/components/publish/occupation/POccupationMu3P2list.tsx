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

function POccupationMu3P2list() {
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
          <div className="group">
            <ul className="group-box">
              <li>프레스</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>전단기</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>절곡기</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>크레인</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>리프트</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>압력용기</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>롤러기</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>사출성형기</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>기계톱</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>연삭기/연마기</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>산업용로봇</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>혼합기</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>식품가공용기계</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>컨베이어</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>공작기계</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>인쇄기</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>곤돌라</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>파쇄기/분쇄기</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>고소작업대</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>국소배기장치</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>원심기</li>
              <li>20</li>
            </ul>
          </div>
          <div className="group">
            <ul className="group-box">
              <li>기타</li>
              <li>0</li>
            </ul>
          </div>
        </div>
        <div className="right-table">
          <div className="group-box">
            <h3 className="table-tit">프레스 기본정보</h3>
            <table>
              <tbody>
                <tr>
                  <th>안전인증</th>
                  <td>대상</td>
                </tr>
                <tr>
                  <th>안전검사</th>
                  <td>대상</td>
                </tr>
                <tr>
                  <th>방호장치</th>
                  <td>광전자식, 양수조작식, 가드식, 손쳐내기식, 수인식</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="group-box">
            <h3 className="table-tit">부문별 프레스 보유 현황</h3>
            <table>
              <tbody>
                <tr>
                  <th>정비본부</th>
                  <td>5</td>
                </tr>
                <tr>
                  <th>항공우주사업본부</th>
                  <td>5</td>
                </tr>
                <tr>
                  <th>여객본부</th>
                  <td>3</td>
                </tr>
                <tr>
                  <th>화물본부</th>
                  <td>2</td>
                </tr>
                <tr>
                  <th>객실본부</th>
                  <td>1</td>
                </tr>
                <tr>
                  <th>기타</th>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* //테이블영역 */}
    </>
  );
}

export default POccupationMu3P2list;
