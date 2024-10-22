import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';

function AuditQuality() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: 'Add Audit',
      onClick: () => {
        alert('Add Audit');
      },
    },
  ];

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
            <a href="javascript:void(0);">예외 Audit 관리</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      {/* <div className="conts-title">
        <h2>예외 Audit 관리</h2>
      </div> */}
      <div className="myaudit-container">
        <div className="myaudit-header">
          <div className="ad-number">
            Audit No. <span>24-Autority-001-0407</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuditQuality;
