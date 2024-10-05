import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import SafetyImage from '@/resources/images/photo-1.png';

function SkySafetyList() {
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
            <a href="javascript:void(0);">안전증진</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전 Communication</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">SkySafety21</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>SkySafety21</h2>
      </div>

      {/*ebook정보*/}
      <div className="ebook-wrap">
        <div className="grid-item">
          <div className="main-photo">
            <img src={SafetyImage} className="img-thumbnail" alt="Vol.134" />
          </div>
          <h3 className="img-tit">Vol.134</h3>
        </div>
        <div className="grid-item">
          <div className="main-photo">
            <img src={SafetyImage} className="img-thumbnail" alt="Vol.134" />
          </div>
          <h3 className="img-tit">Vol.134</h3>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
      {/*//ebook정보 */}
    </>
  );
}

export default SkySafetyList;
