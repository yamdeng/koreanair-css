import { Tree } from 'antd';
import { useState } from 'react';
import Modal from 'react-modal';
import { Editor } from '@toast-ui/react-editor';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppSelect from '@/components/common/AppSelect';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppTextInput from '@/components/common/AppTextInput';

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
        <h3 className="pop_title">변화관리 추가</h3>
        <div className="pop_cont">
          <div className="editbox">
            <div className="form-table ">
              <div className="form-cell wid50">
                <div className="form-group wid30">
                  <AppDatePicker label={'연도'} required />
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppSelect label={'소관부문'} required />
                </div>
              </div>
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppAutoComplete label={'수행담당자'} />
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppDatePicker label={'변화관리 시작일'} required />
                </div>
              </div>
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppDatePicker label={'변화관리 종료일'} required />
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppTextInput label={'변화관리 주제'} required />
                </div>
              </div>
            </div>
            <hr className="line dp-n"></hr>
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
            <hr className="line dp-n"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                {' '}
                <div className="group-box-wrap line wid100">
                  <span className="txt">첨부파일 Link{/*<span className="required">*</span>*/}</span>

                  <button type="button" name="button" className="btn-plus">
                    추가
                  </button>
                  <div className="file-link">
                    <div className="link-box">
                      <a href="javascript:void(0);">첨부Link첨부Link첨부Link</a>
                      <a href="javascript:void(0);">
                        <span className="close-btn">close</span>
                      </a>
                    </div>
                    <div className="link-box">
                      <a href="javascript:void(0);">첨부Link</a>
                      <a href="javascript:void(0);">
                        <span className="close-btn">close</span>
                      </a>
                    </div>
                    <div className="link-box">
                      <a href="javascript:void(0);">첨부Link</a>
                      <a href="javascript:void(0);">
                        <span className="close-btn">close</span>
                      </a>
                    </div>
                    <div className="link-box">
                      <a href="javascript:void(0);">첨부Link</a>
                      <a href="javascript:void(0);">
                        <span className="close-btn">close</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pop_btns">
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            저장
          </button>
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            제출
          </button>
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            삭제
          </button>
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            닫기
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>

        {/*레이어팝업 */}
        <div className="modal-overlay"></div>
        <div className="modal">
          <div className="pop_lg_cont_box">
            <h3 className="pop_title">수행 담당 지정</h3>
            <div className="pop_flex_group">
              <div className="editbox">
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid50">
                      <AppSelect label={'기술관리팀'} />
                    </div>
                  </div>
                </div>

                <div className="manager-checkbox">
                  <div className="checklist manager">
                    <div className="search_box">
                      <div className="search">
                        <div className="tit">
                          팀구성원<em>(28)</em>
                        </div>
                        <div className="search-list">
                          <ul className="list">
                            <li>
                              <div className="form-cell">
                                <div className="chk-wrap">
                                  <label>
                                    <input type="checkbox" checked />
                                    <span className="InfoBox"></span>
                                    <div className="Info">
                                      <div className="Name">홍길동 (170****)</div>
                                      <div className="Dept">상무대우수석사무장 / (주)대한항공</div>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="form-cell">
                                <div className="chk-wrap">
                                  <label>
                                    <input type="checkbox" />
                                    <span className="ck-list">최윤정(YJCHOI) / - / 대한항공 KBSYS</span>
                                  </label>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="checkbutton">
                    <button></button>
                  </div>
                  <div className="selectlist">
                    <div className="title">
                      <p>
                        선택목록
                        <a className="icon" href="javascript:void(0);">
                          <span></span>
                        </a>
                      </p>
                    </div>
                    <div className="uesrlist">
                      <p className="stitle">사용자 목록</p>
                      <ul className="list">
                        <li>
                          지유진(YJJI) / - / 대한항공 KBSYS
                          <a href="javascript:void(0);">
                            <span className="delete">X</span>
                          </a>
                        </li>
                        <li>
                          최윤정(YJCHOI) / - / 대한항공 KBSYS
                          <a href="javascript:void(0);">
                            <span className="delete">X</span>
                          </a>
                        </li>
                        <li>
                          김영기(YKKIM) / 전산1급 / 대한항공 KBSYS
                          <a href="javascript:void(0);">
                            <span className="delete">X</span>
                          </a>
                        </li>
                        <li>
                          김영기(YKKIM) / 전산1급 / 대한항공 KBSYS
                          <a href="javascript:void(0);">
                            <span className="delete">X</span>
                          </a>
                        </li>
                        <li>
                          김영기(YKKIM) / 전산1급 / 대한항공 KBSYS
                          <a href="javascript:void(0);">
                            <span className="delete">X</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="departmentlist">
                      <div className="stitle">부서 목록</div>
                      <ul className="list">
                        <li>
                          김영기(YKKIM) / 전산1급 / 대한항공 KBSYS
                          <a href="javascript:void(0);">
                            <span className="delete">X</span>
                          </a>
                        </li>
                        <li>
                          김영기(YKKIM) / 전산1급 / 대한항공 KBSYS
                          <a href="javascript:void(0);">
                            <span className="delete">X</span>
                          </a>
                        </li>
                        <li>
                          김영기(YKKIM) / 전산1급 / 대한항공 KBSYS
                          <a href="javascript:void(0);">
                            <span className="delete">X</span>
                          </a>
                        </li>
                        <li>
                          김영기(YKKIM) / 전산1급 / 대한항공 KBSYS
                          <a href="javascript:void(0);">
                            <span className="delete">X</span>
                          </a>
                        </li>
                        <li>
                          김영기(YKKIM) / 전산1급 / 대한항공 KBSYS
                          <a href="javascript:void(0);">
                            <span className="delete">X</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pop_btns">
            <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
              저장
            </button>
            <button disabled className="btn_text text_color_neutral-90 btn_close">
              닫기
            </button>
          </div>
          <span className="pop_close" onClick={closeModal}>
            X
          </span>
        </div>
        {/*//레이어팝업 */}
      </div>
    </Modal>
  );
}

function ChangeAddModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        변화관리 추가
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            변화관리 추가modal open
          </button>
        </p>
        <TestModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default ChangeAddModal;
