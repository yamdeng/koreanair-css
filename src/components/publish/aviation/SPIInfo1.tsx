import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';

function SPIInfo1() {
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
            <a href="javascript:void(0);">안전보증</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">운영현황</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">운항정보</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>운영현황</h2>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" className="active" data-label="운항정보">
            운항정보
          </a>
          <a href="javascript:void(0);" className="" data-label="SPI지표별 현황">
            SPI지표별 현황
          </a>
        </div>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid30">
              <div className="row1">
                <div className="date1">
                  <AppDatePicker label="date1" required />
                </div>
              </div>
            </div>
          </div>
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
      {/* //검색영역 */}
      {/*테이블영역*/}
      <div className="info-box">
        <p className="h4">PAX/CGO 별 비행편 수</p>
        <table className="info-board">
          <colgroup>
            <col width="8%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
          </colgroup>
          <tr>
            <th>PAX/CGO</th>
            <th>01</th>
            <th>02</th>
            <th>03</th>
            <th>04</th>
            <th>05</th>
            <th>06</th>
            <th>07</th>
            <th>08</th>
            <th>09</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>TTL</th>
          </tr>
          <tr>
            <td>PAX</td>
            <td className="right">872</td>
            <td className="right">561</td>
            <td className="right">3,312</td>
            <td className="right">7,565</td>
            <td className="right">124</td>
            <td className="right">5,968</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">17,089</td>
          </tr>
          <tr>
            <td>CGO</td>
            <td className="right">98</td>
            <td className="right">87</td>
            <td className="right">970</td>
            <td className="right">1,276</td>
            <td className="right">96</td>
            <td className="right">1,142</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">2,871</td>
          </tr>
          <tr className="cons-bottom">
            <th>Total</th>
            <td className="right">970</td>
            <td className="right">638</td>
            <td className="right">4,282</td>
            <td className="right">8,841</td>
            <td className="right">970</td>
            <td className="right">7,110</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">19,960</td>
          </tr>
        </table>
      </div>
      <div className="info-box">
        <p className="h4">국내/국제선 비행편 수</p>
        <table className="info-board">
          <colgroup>
            <col width="8%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
          </colgroup>
          <tr>
            <th>국내/국제</th>
            <th>01</th>
            <th>02</th>
            <th>03</th>
            <th>04</th>
            <th>05</th>
            <th>06</th>
            <th>07</th>
            <th>08</th>
            <th>09</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>TTL</th>
          </tr>
          <tr>
            <td>PAX</td>
            <td className="right">280</td>
            <td className="right">561</td>
            <td className="right">855</td>
            <td className="right">2,648</td>
            <td className="right">872</td>
            <td className="right">2,101</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">5,884</td>
          </tr>
          <tr>
            <td>CGO</td>
            <td className="right">690</td>
            <td className="right">87</td>
            <td className="right">2,184</td>
            <td className="right">6,193</td>
            <td className="right">98</td>
            <td className="right">5,009</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">14,076</td>
          </tr>
          <tr className="cons-bottom">
            <th>Total</th>
            <td className="right">970</td>
            <td className="right">638</td>
            <td className="right">3,039</td>
            <td className="right">8,841</td>
            <td className="right">970</td>
            <td className="right">7,110</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">0</td>
            <td className="right">19,960</td>
          </tr>
        </table>
      </div>
      <div className="info-box">
        <p className="h4">Fleet 별 비행편 수</p>
        <table className="info-board">
          <colgroup>
            <col width="8%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
          </colgroup>
          <tr>
            <th>Fleet</th>
            <th>01</th>
            <th>02</th>
            <th>03</th>
            <th>04</th>
            <th>05</th>
            <th>06</th>
            <th>07</th>
            <th>08</th>
            <th>09</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>TTL</th>
          </tr>
          <tr>
            <td>220</td>
            <td className="right">124</td>
            <td className="right">947</td>
            <td className="right">365</td>
            <td className="right">1,120</td>
            <td className="right">124</td>
            <td className="right">947</td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right">2,556</td>
          </tr>
          <tr>
            <td>321</td>
            <td className="right">96</td>
            <td className="right">762</td>
            <td className="right">289</td>
            <td className="right">799</td>
            <td className="right">96</td>
            <td className="right">762</td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right">1,946</td>
          </tr>
          <tr>
            <td>330</td>
            <td className="right">169</td>
            <td className="right">1,165</td>
            <td className="right">540</td>
            <td className="right">1,558</td>
            <td className="right">169</td>
            <td className="right">1,165</td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right">3,432</td>
          </tr>
          <tr>
            <td>380</td>
            <td className="right">10</td>
            <td className="right">105</td>
            <td className="right">30</td>
            <td className="right">89</td>
            <td className="right">10</td>
            <td className="right">105</td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right">234</td>
          </tr>
          <tr>
            <td>737</td>
            <td className="right">229</td>
            <td className="right">1,597</td>
            <td className="right">738</td>
            <td className="right">2,102</td>
            <td className="right">229</td>
            <td className="right">1,597</td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right">4,666</td>
          </tr>
          <tr>
            <td>747</td>
            <td className="right">71</td>
            <td className="right">629</td>
            <td className="right">254</td>
            <td className="right">743</td>
            <td className="right">71</td>
            <td className="right">629</td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right">1,697</td>
          </tr>
          <tr>
            <td>777</td>
            <td className="right">219</td>
            <td className="right">1,528</td>
            <td className="right">656</td>
            <td className="right">1,940</td>
            <td className="right">219</td>
            <td className="right">1,528</td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right">4,343</td>
          </tr>
          <tr>
            <td>787</td>
            <td className="right">52</td>
            <td className="right">377</td>
            <td className="right">167</td>
            <td className="right">490</td>
            <td className="right">52</td>
            <td className="right">377</td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right">1,086</td>
          </tr>
          <tr className="cons-bottom">
            <th>Total</th>
            <td className="right">970</td>
            <td className="right">7,110</td>
            <td className="right">3,309</td>
            <td className="right">8,841</td>
            <td className="right">970</td>
            <td className="right">7,110</td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right"></td>
            <td className="right">19,960</td>
          </tr>
        </table>
      </div>
      {/*//테이블영역 */}
    </>
  );
}

export default SPIInfo1;
