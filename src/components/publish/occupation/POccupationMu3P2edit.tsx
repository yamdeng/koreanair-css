import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppEditor from '@/components/common/AppEditor';
import AppSelect from '@/components/common/AppSelect';
import AppTextArea from '@/components/common/AppTextArea';
import AppTextInput from '@/components/common/AppTextInput';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppTreeSelect from '@/components/common/AppTreeSelect';
import AppSearchInput from '@/components/common/AppSearchInput';
import { DatePicker } from 'antd';
import { useState } from 'react';
import { Image, Upload } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { PlusOutlined } from '@ant-design/icons';
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

function POccupationMu3P2edit() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
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
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">위험기계기구</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>위험기계기구</h2>
      </div>
      {/* 입력영역 */}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="기계기구 분류" required />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="기계기구 명칭" required />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="Asset No" required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="용량/단위" required />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="방호장치" required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table">
          <div className="form-cell wid50">
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
                위치 및 설명
              </label>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppAutoComplete label={'부문'} required disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppAutoComplete label={'부서'} required disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppAutoComplete label={'팀'} required disabled />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppAutoComplete label={'그룹'} required disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppAutoComplete label={'반/섹션'} required disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppAutoComplete label={'관리자'} required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="사용여부" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppDatePicker label="도입일자" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppDatePicker label="페기일자" />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="안전인증" required />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="인증 합격번호" />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid-300">
              <AppSelect label="안전검사" required />
            </div>
            <div className="ck-edit-box">
              <div className="ck-list">그리드 영역</div>
              <div className="ck-edit">
                <div className="boxForm">
                  <div className="form-table">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <AppDatePicker label={'안전 검사일자'} />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppTextInput label="검사 합격번호" />
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <AppDatePicker label={'차기 안전 검사일자'} />
                      </div>
                    </div>
                  </div>
                  <div className="btn-area-type01 mg-top">
                    <button type="button" name="button" className="btn_text btn_confirm">
                      추가
                    </button>
                  </div>
                </div>
              </div>
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
      </div>
      {/*//입력영역*/}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
        <button type="button" name="button" className="btn_text btn-del">
          취소
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationMu3P2edit;
