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

function AlarmList() {
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
            <a href="javascript:void(0);">알림</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>알림</h2>
        <span className="btn-right">
          <a href="javascript:void(0);">...</a>
        </span>
      </div>

      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="btn-area">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                모두
              </button>
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                읽지않음
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}

      {/*리스트영역 */}
      <div className="alarmlist-wrap">
        <div className="alarmlist">
          <dl>
            <dt>
              MSR-draft-115508 보고서 미제출 안내
              <span className="commt">하루 전</span>
            </dt>
            <dd>MSR-draft-115508의 보고서 저장 후 제출되지 않은 상태입니다. 보고서를 제출 해 주시기 바랍니다.</dd>
          </dl>
          <dl>
            <dt>
              MSR-draft-115508 보고서 미제출 안내
              <span className="commt">하루 전</span>
            </dt>
            <dd>MSR-draft-115508의 보고서 저장 후 제출되지 않은 상태입니다. 보고서를 제출 해 주시기 바랍니다.</dd>
          </dl>
        </div>
      </div>
      {/*//리스트영역 */}
    </>
  );
}

export default AlarmList;
