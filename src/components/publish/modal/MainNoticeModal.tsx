import { Tree } from 'antd';
import { useState } from 'react';
import Modal from 'react-modal';
import { Editor } from '@toast-ui/react-editor';
import AppSelect from '@/components/common/AppSelect';

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
function TestModal(props) {
  const { isOpen, closeModal } = props;
  const [inputValue, setInputValue] = useState('');
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);

  /*

    overlayClassName : alert-modal-overlay, middle-modal-overlay, full-modal-overlay
     : 크기에 따라 클래스 정의

    className : {커스텀}-modal-content
     모달 마다 별도의 class를 정의해서 커스텀하게 관리

  */
  /* treeData 가공 */
  const x = 3;
  const y = 2;
  const z = 1;
  const treeData = [];

  const generateData = (_level, _preKey = null, _tns = null) => {
    const preKey = _preKey || '0';
    const tns = _tns || treeData;

    const children = [];
    for (let i = 0; i < x; i++) {
      const key = `${preKey}-${i}`;
      tns.push({ title: key, key });
      if (i < y) {
        children.push(key);
      }
    }
    if (_level < 0) {
      return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
      tns[index].children = [];
      return generateData(level, key, tns[index].children);
    });
  };
  generateData(z);
  /* treeData 가공 end*/
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
        <h3 className="pop_title">e-GYRO 2024 (유사 호출부호로인한 교신 오류)</h3>
        <div className="pop_cont">
          <div className="editbox">
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="group-box-wrap1 wid100 ">
                  {/*개요 */}
                  <Editor
                    hideModeSwitch={true}
                    initialEditType="wysiwyg"
                    previewStyle="vertical"
                    // initialValue={initValue}
                    height={'300px'}
                    // onChange={() => {}}
                    usageStatistics={false}
                    customHTMLSanitizer={(html) => {
                      return html;
                    }}
                    viewer={true}
                    autofocus={false}
                    customHTMLRenderer={{
                      htmlBlock: {
                        table(node) {
                          return [
                            { type: 'openTag', tagName: 'table', outerNewLine: true, attributes: node.attrs },
                            { type: 'html', content: node.childrenHTML },
                            { type: 'closeTag', tagName: 'table', outerNewLine: true },
                          ];
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-table">
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
          </div>
        </div>
        <div className="pop_btns">
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            오늘 하루 팝업 안보기
          </button>
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            이전
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            다음
          </button>
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            닫기
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>
    </Modal>
  );
}

function MainNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        공지사항
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            공지사항 modal open
          </button>
        </p>
        <TestModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default MainNoticeModal;
