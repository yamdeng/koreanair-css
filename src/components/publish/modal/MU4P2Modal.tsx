import { useState } from 'react';
import Modal from 'react-modal';
import { DatePicker, TimePicker, TreeSelect, Select as AntSelect } from 'antd';
import AppTextInput from '@/components/common/AppTextInput';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppSelect from '@/components/common/AppSelect';
import AppTextArea from '@/components/common/AppTextArea';
import { Image, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const options = [
  { value: 'chocolate', label: 'Chocolate Chocolate Chocolate ChocolateChocolateChocolateChocolate' },
  { value: 'strawberry', label: 'StrawberryStrawberryStrawberryStrawberryStrawberryStrawberryStrawberry' },
  { value: 'vanilla', label: 'VanillaVanillaVanillaVanillaVanillaVanillaVanilla' },
];
const { Dragger } = Upload;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

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
function ChecklistModal(props) {
  const { isOpen, closeModal } = props;
  const [inputValue, setInputValue] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<any>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
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
        <h3 className="pop_title">점검항목-부적합사항</h3>
        <div className="pop_cont">
          <div className="editbox">
            <h3 className="input-box-tit">부적합 사항</h3>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppTextInput label="점검항목" disabled />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label="대분류" required />
                </div>
              </div>
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label="소분류" required />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <textarea
                    id="testArea1"
                    className="form-tag custom_textarea"
                    style={{ width: '100%' }}
                    name="testArea1"
                    value={inputValue}
                    onChange={(event) => {
                      setInputValue(event.target.value);
                    }}
                  />
                  <label className="f-label" htmlFor="testArea1">
                    내용
                  </label>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <textarea
                    id="testArea1"
                    className="form-tag custom_textarea"
                    style={{ width: '100%' }}
                    name="testArea1"
                    value={inputValue}
                    onChange={(event) => {
                      setInputValue(event.target.value);
                    }}
                  />
                  <label className="f-label" htmlFor="testArea1">
                    관계법령
                  </label>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            {/* 파일첨부영역 : button */}
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <div className="filebox error">
                    <Upload
                      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <label htmlFor="file" className="file-label">
                      사진첨부{/*<span className="required">*</span>*/}
                    </label>
                  </div>
                  <span className="errorText">fileerror</span>
                </div>
                {previewImage && (
                  <Image
                    wrapperStyle={{
                      display: 'none',
                    }}
                    preview={{
                      visible: previewOpen,
                      onVisibleChange: (visible) => setPreviewOpen(visible),
                      afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                  />
                )}
              </div>
            </div>
            <hr className="line"></hr>
            {/* 파일첨부영역 : button */}
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <Upload {...props}>
                    <div className="btn-area pd-t0">
                      <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mgn-0">
                        + Upload
                      </button>
                    </div>
                  </Upload>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table line">
              <div className="form-cell wid50">
                <div className="group-box-wrap wid100">
                  <span className="txt">즉시조치</span>
                  <div className="radio-wrap">
                    <label>
                      <input type="radio" />
                      <span>예</span>
                    </label>
                    <label>
                      <input type="radio" />
                      <span>아니오</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppAutoComplete label="조치부서" />
                </div>
              </div>
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppAutoComplete label="승인부서" />
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <h3 className="table-tit mt-10">조치 사항</h3>
            <div className="form-table">
              <div className="form-cell wid100">
                <div className="form-group wid100">
                  <textarea
                    id="testArea1"
                    className="form-tag custom_textarea"
                    style={{ width: '100%' }}
                    name="testArea1"
                    value={inputValue}
                    onChange={(event) => {
                      setInputValue(event.target.value);
                    }}
                  />
                  <label className="f-label" htmlFor="testArea1">
                    조치내용
                  </label>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            {/* 파일첨부영역 : button */}
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <div className="filebox error">
                    <Upload
                      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <label htmlFor="file" className="file-label">
                      사진첨부{/*<span className="required">*</span>*/}
                    </label>
                  </div>
                  <span className="errorText">fileerror</span>
                </div>
                {previewImage && (
                  <Image
                    wrapperStyle={{
                      display: 'none',
                    }}
                    preview={{
                      visible: previewOpen,
                      onVisibleChange: (visible) => setPreviewOpen(visible),
                      afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                  />
                )}
              </div>
            </div>
            <hr className="line"></hr>
            {/* 파일첨부영역 : button */}
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <Upload {...props}>
                    <div className="btn-area">
                      <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mgn-0">
                        + Upload
                      </button>
                    </div>
                  </Upload>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            확인
          </button>
        </div>
        <span className="pop_close">X</span>
      </div>
    </Modal>
  );
}

function MU4P2Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        MU4P2Modal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            점검항목-부적합사항입력 modal open
          </button>
        </p>
        <ChecklistModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default MU4P2Modal;
