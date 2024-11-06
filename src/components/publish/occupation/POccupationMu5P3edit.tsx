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

const customButtons = [
  {
    title: '추가',
    onClick: () => {
      alert('추가');
    },
  },
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
function POccupationMu5P3edit() {
  const columns = testColumnInfos;
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
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
            <a href="javascript:void(0);">감소대책 수립 및 실시</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>
          감소대책 수립 및 실시
          <span className="print">
            <a href="javascript:void(0);"></a>
          </span>
        </h2>
      </div>
      {/* 입력영역 */}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="작성자" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="작성일자" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="부문" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="부서" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="팀" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="그룹" disabled />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="반/섹션" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="평가년도" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="평가시기" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="공정명" disabled />
            </div>
          </div>
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppTextInput label="세부 작업명" disabled />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="위험분류" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="위험요인" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="위험성 결정" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppAutoComplete label="담당자" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label="개선상태" disabled />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="감소대책 수립" disabled />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>

        <div className="form-table line">
          <div className="form-cell wid100">
            <h3 className="table-tit">감소대책 수립 및 실시</h3>
            <div className="ck-edit-box pd-t0">
              <table className="before-after-table">
                <thead>
                  <tr>
                    <th>개선 전</th>
                    <th>개선 후</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="form-table line">
                        <div className="form-cell wid100">
                          <div className="form-group wid100">
                            <AppDatePicker label="개선 예정일자" />
                          </div>
                        </div>
                      </div>
                      <hr className="line dp-n"></hr>
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
                      <hr className="line dp-n"></hr>
                      <div className="form-table line">
                        <div className="form-cell wid100">
                          <div className="form-group wid100">
                            <AppTextInput label="위험발생 상황 및 결과" disabled />
                          </div>
                        </div>
                        <div className="form-cell wid100">
                          <div className="form-group wid100">
                            <AppTextInput label="가능성" disabled />
                          </div>
                        </div>
                      </div>
                      <hr className="line dp-n"></hr>
                      <div className="form-table line">
                        <div className="form-cell wid100">
                          <div className="form-group wid100">
                            <AppTextInput label="중대성" disabled />
                          </div>
                        </div>
                        <div className="form-cell wid100">
                          <div className="form-group wid100">
                            <AppTextInput label="위험도" disabled />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="form-table line">
                        <div className="form-cell wid100">
                          <div className="form-group wid100">
                            <AppDatePicker label="개선 완료일자" />
                          </div>
                        </div>
                      </div>
                      <hr className="line dp-n"></hr>
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
                          <div className="imgsize">
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
                      </div>
                      <hr className="line dp-n"></hr>
                      <div className="form-table line">
                        <div className="form-cell wid100">
                          <div className="form-group wid100">
                            <AppTextInput label="개선내용" disabled />
                          </div>
                        </div>
                        <div className="form-cell wid100">
                          <div className="form-group wid100">
                            <AppSelect label="가능성" />
                          </div>
                        </div>
                      </div>
                      <hr className="line dp-n"></hr>
                      <div className="form-table line">
                        <div className="form-cell wid100">
                          <div className="form-group wid100">
                            <AppSelect label="중대성" />
                          </div>
                        </div>
                        <div className="form-cell wid100">
                          <div className="form-group wid100">
                            <AppTextInput label="위험도" disabled />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <h3 className="table-tit"> 감소대책 이행에 대한 근로자 의견</h3>
            <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
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

export default POccupationMu5P3edit;
