import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppSelect from '@/components/common/AppSelect';
import AppTextInput from '@/components/common/AppTextInput';
import { Editor } from '@toast-ui/react-editor';
import { DatePicker, TreeSelect } from 'antd';
import { useState } from 'react';
import Modal from 'react-modal';
import AppRangeDatePicker from '@/components/common/AppRangeDatePicker';
import AppTable from '@/components/common/AppTable';

function ReportDocumentModal(props) {
  const [firstDateRangeValue, setFirstDateRangeValue] = useState(['', '']);
  const [firstTimeValue, setFirstTimeValue] = useState('22:25:50');
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const { isOpen, closeModal } = props;
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };

  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={'alert-modal-overlay'}
      className={'list-common-modal-content'}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <div className="popup-container">
        <h3 className="pop_title">리포트찾기</h3>
        <div className="pop_full_cont_box">
          <div className="pop_flex_group">
            <div className="pop_cont_form">
              <div className="boxForm">
                <div id="" className="area-detail active">
                  <div className="form-table">
                    <div className="form-cell wid30">
                      <span className="form-group wid100">
                        <AppSelect label={'Data'} />
                      </span>
                    </div>
                    <div className="form-cell wid50">
                      <span className="form-group wid100">
                        <AppRangeDatePicker
                          label={'range-date'}
                          onChange={(value) => setFirstDateRangeValue(value)}
                          value={firstDateRangeValue}
                          showNow={false}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        {/*멀티셀렉 */}
                        <AppSelect label={''} />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="제목" />
                      </div>
                    </div>
                    <div className="form-cell wid50">
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
                </div>

                {/*__control명 옆에 active  */}
                <button type="button" name="button" className="arrow button _control active">
                  <span className="hide">접기</span>
                </button>
              </div>
              {/*그리드영역 */}
              <div>
                <AppTable rowData={rowData} columns={columns} />
              </div>
              {/*//그리드영역 */}
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            취소
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            확인
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>
    </Modal>
  );
}

function PReportDocumentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>참고문서번호 모달</h3>
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            참고문서번호 모달 open
          </button>
        </p>
        <ReportDocumentModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PReportDocumentModal;
