import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppTextArea from '@/components/common/AppTextArea';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import SafetyImage from '@/resources/images/img-SafetyPolicy.jpg';

function SafetyPolicy() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  return (
    <>
      <div className="conts-title">
        <h2>안전정책</h2>
      </div>
      {/*상세페이지*/}
      <div className="editbox NoLine">
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="img">
                <img src={SafetyImage} className="img-thumbnail" alt="Safety Policy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//상세페이지*/}
    </>
  );
}

export default SafetyPolicy;
