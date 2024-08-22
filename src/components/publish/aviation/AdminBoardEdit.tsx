import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { Editor } from '@toast-ui/react-editor';
import { Upload } from 'antd';
const { Dragger } = Upload;
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

function AdminBoardEdit() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: '글쓰기',
      onClick: () => {
        alert('글쓰기');
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
            <a href="javascript:void(0);">Admin</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">게시판관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">SPI게시판 등록</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>SPI게시판 등록</h2>
      </div>
      {/* 입력영역 */}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label={'게시판구분'} required />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid50">
              <div className="df">
                <div className="date1">
                  <AppDatePicker label={'게시기간'} />
                </div>
                <span className="unt">~</span>
                <div className="date2">
                  <AppDatePicker label={'게시기간'} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppTextInput label="제목" required />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100 mr5">
              {/*기상조건 */}
              <Editor
                hideModeSwitch={true}
                initialEditType="wysiwyg"
                previewStyle="vertical"
                // initialValue={initValue}
                height={'500px'}
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
        <hr className="line"></hr>
        {/* 파일첨부영역 : drag */}
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
        <hr className="line"></hr>
      </div>
      {/*//입력영역*/}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_conblue">
          임시저장
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default AdminBoardEdit;
