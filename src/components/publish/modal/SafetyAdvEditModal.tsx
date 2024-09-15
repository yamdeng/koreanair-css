import { useState } from 'react';
import Modal from 'react-modal';
import { DatePicker, TimePicker, TreeSelect, Select as AntSelect } from 'antd';
import AppTextInput from '@/components/common/AppTextInput';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTextArea from '@/components/common/AppTextArea';
const { Dragger } = Upload;
import { Upload } from 'antd';
const props: any = {
  name: 'file',
  multiple: true,
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      // status: 'uploading',
      url: 'http://www.baidu.com/xxx.png',
      percent: 33,
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',

  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      alert(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      alert(`${info.file.name} file upload failed.`);
    }
  },

  onRemove(file) {
    return false;
  },

  onPreview(file) {
    return false;
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

function SafetyAdvEditModal(props) {
  const { isOpen, closeModal } = props;
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
        <h3 className="pop_title">안전권고 관리</h3>

        <div className="pop_cont">
          {/*등록 */}
          <div className="editbox">
            <div className="form-table">
              <div className="form-table line">
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="번호" disabled />
                  </div>
                </div>
                <div className="form-cell wid50">
                  <div className="form-group wid100">
                    <AppTextInput label="부서" />
                  </div>
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table line">
              <div className="form-cell wid50">
                <div className="form-group wid50">
                  <AppDatePicker label={'발행일자'} />
                </div>
              </div>
              <div className="form-cell wid50">
                <div className="form-group wid50">
                  <AppDatePicker label={'회신일자'} />
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table line">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppTextArea label="안전권고" style={{ width: '100%', height: 145 }} errorMessage="" placeholder="" />
                </div>
              </div>
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppTextArea label="조치사항" style={{ width: '100%', height: 145 }} errorMessage="" placeholder="" />
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table line">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  {/* 파일첨부영역 : drag */}
                  <div className="filebox error">
                    <Dragger {...props}>
                      <p className="ant-upload-text ">+ 이 곳을 클릭하거나 마우스로 업로드할 파일을 끌어서 놓으세요.</p>
                    </Dragger>
                    <label htmlFor="file" className="file-label">
                      첨부파일 <span className="required">*</span>
                    </label>
                  </div>
                  <span className="errorText">fileerror</span>
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
          </div>
          {/*//등록 */}
        </div>
        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            삭제
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            임시저장
          </button>
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            닫기
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>

      {/*style="z-index: 1002; display: block; opacity: 0.5;"*/}
    </Modal>
  );
}

function PSafetyAdvEditModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        {' '}
        안전권고 관리 등록
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            안전권고 modal open
          </button>
        </p>
        <SafetyAdvEditModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default PSafetyAdvEditModal;
