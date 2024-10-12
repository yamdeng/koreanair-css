import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';

function SPIPList() {
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
            <a href="javascript:void(0);">Safety Program</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">SPIP</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>SPIP</h2>
      </div>

      {/*SPIP*/}
      <div className="sp-wrap">
        <div className="sp-box">
          <h3>
            <a href="javascript:void(0);">제33차 안전장려금제도 운영 현황</a>
          </h3>
          <div className="img">이미지</div>
        </div>

        <div className="sp-box">
          <h3>
            <a href="javascript:void(0);">제33차 안전장려금제도 운영 현황</a>
          </h3>
          <div className="img">이미지</div>
        </div>
      </div>
      {/*//SPIP */}
    </>
  );
}

export default SPIPList;
