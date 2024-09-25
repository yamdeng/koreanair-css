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
function POccupationMu3P4detail() {
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
            <a href="javascript:void(0);">외주작업허가</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>외주작업허가</h2>
      </div>
      {/* 입력영역 */}
      <div className="info-wrap toggle">
        <dl className="tg-item active">
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt>
            <button type="button" className="btn-tg">
              신청자 정보<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">부문</label>
                              <span className="text-desc-type1">부문</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">부서</label>
                              <span className="text-desc-type1">부서</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">이름</label>
                              <span className="text-desc-type1">홍길동</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">연락처</label>
                              <span className="text-desc-type1">000-0000-0000</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>

          <dt>
            <button type="button" className="btn-tg">
              승인자 정보<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">부문</label>
                              <span className="text-desc-type1">부문</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">부서</label>
                              <span className="text-desc-type1">부서</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">이름</label>
                              <span className="text-desc-type1">홍길동</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">연락처</label>
                              <span className="text-desc-type1">000-0000-0000</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>

          <dt>
            <button type="button" className="btn-tg">
              공사 정보<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">공사명</label>
                              <span className="text-desc-type1">공사명</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">불안전 행동</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="checkbox" checked />
                            <span>건축</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>기계</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>전기</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>소방</span>
                          </label>
                          <label>
                            <input type="checkbox" />
                            <span>이외</span>
                          </label>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="group-box-wrap wid100">
                        <span className="txt">특별교육 대상</span>
                        <div className="radio-wrap">
                          <label>
                            <input type="radio" checked />
                            <span>건축</span>
                          </label>
                          <button className="radio-btn">교육내용</button>
                          <label>
                            <input type="radio" />
                            <span>기계</span>
                          </label>
                        </div>
                        {/*<span className="errorText">error</span>*/}
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">시공사</label>
                              <span className="text-desc-type1">시공사</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">담당자</label>
                              <span className="text-desc-type1">담당자</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">연락처</label>
                              <span className="text-desc-type1">000-0000-0000</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">공사장소</label>
                              <span className="text-desc-type1">공사장소</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">공사위치</label>
                              <span className="text-desc-type1">공사위치</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">공사인원</label>
                              <span className="text-desc-type1">공사인원</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">공사시작일시</label>
                              <span className="text-desc-type1">2024-00-00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">공사 시작시간</label>
                              <span className="text-desc-type1">00:00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">공사 종료일시</label>
                              <span className="text-desc-type1">2024-00-00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">공사 종료시간</label>
                              <span className="text-desc-type1">00:00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <h3 className="table-tit">
                          공사구분 <span className="required">*</span>
                        </h3>
                        <div className="work-group">
                          <table className="work-table">
                            <thead>
                              <tr>
                                <th>
                                  <div className="radio-wrap-type02">
                                    <label className="type02">
                                      <input type="checkbox" checked />
                                      <span className="type02">공통(일반)</span>
                                    </label>
                                  </div>
                                </th>
                                <th>
                                  <div className="radio-wrap-type02">
                                    <label className="type02">
                                      <input type="checkbox" />
                                      <span className="type02">밀폐공간작업</span>
                                    </label>
                                  </div>
                                </th>
                                <th>
                                  <div className="radio-wrap-type02">
                                    <label className="type02">
                                      <input type="checkbox" />
                                      <span className="type02">전기작업</span>
                                    </label>
                                  </div>
                                </th>
                                <th>
                                  <div className="radio-wrap-type02">
                                    <label className="type02">
                                      <input type="checkbox" />
                                      <span className="type02">화재위험작업</span>
                                    </label>
                                  </div>
                                </th>
                                <th>
                                  <div className="radio-wrap-type02">
                                    <label className="type02">
                                      <input type="checkbox" />
                                      <span className="type02">고소작업</span>
                                    </label>
                                  </div>
                                </th>
                                <th>
                                  <div className="radio-wrap-type02">
                                    <label className="type02">
                                      <input type="checkbox" />
                                      <span className="type02">줄걸이작업</span>
                                    </label>
                                  </div>
                                </th>
                                <th>
                                  <div className="radio-wrap-type02">
                                    <label className="type02">
                                      <input type="checkbox" />
                                      <span className="type02">건설기계 사용작업</span>
                                    </label>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colSpan={7}>
                                  {/* 밀폐공간작업선택 - active */}
                                  <div className="work-ck-list active">
                                    <table>
                                      <tr>
                                        <th>밀폐공간작업</th>
                                        <td>해당사항없음</td>
                                        <td></td>
                                      </tr>
                                    </table>
                                  </div>
                                  {/* 전기작업선택 - active */}
                                  <div className="work-ck-list active">
                                    <table>
                                      <tr>
                                        <th>전기작업</th>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">
                                                고압 전기작업 (1,500~7,000V 직류전압 또는 1,000~7,000V 교류전압)
                                              </span>
                                            </label>
                                          </div>
                                        </td>
                                        <td></td>
                                      </tr>
                                    </table>
                                  </div>

                                  {/* 화재위험작업선택 */}
                                  <div className="work-ck-list">
                                    <table>
                                      <tr>
                                        <th rowSpan={3}>화재위험작업</th>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">가스 용접·용단작업</span>
                                            </label>
                                          </div>
                                        </td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">전기 용접작업</span>
                                            </label>
                                          </div>
                                        </td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">연삭기 사용작업</span>
                                            </label>
                                          </div>
                                        </td>
                                        <td></td>
                                      </tr>
                                    </table>
                                  </div>

                                  {/* 고소 작업선택 */}
                                  <div className="work-ck-list active">
                                    <table>
                                      <tr>
                                        <th rowSpan={4}>고소 작업</th>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">이동식 사다리</span>
                                            </label>
                                          </div>
                                        </td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">달비계</span>
                                            </label>
                                          </div>
                                        </td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">시저형 고소작업대(렌탈)</span>
                                            </label>
                                          </div>
                                        </td>
                                        <td>
                                          {/* 파일첨부영역 : button */}
                                          <div className="form-table">
                                            <div className="form-cell wid50 border-b-no">
                                              <div className="form-group wid100">
                                                <div className="box-view-list">
                                                  <ul className="view-list">
                                                    <li className="accumlate-list">
                                                      <label className="t-label">첨부파일</label>
                                                      <span className="text-desc-type1">
                                                        <div className="filebox view">
                                                          <Upload {...props}>
                                                            <div className="btn-area" style={{ display: 'none' }}>
                                                              <button
                                                                type="button"
                                                                name="button"
                                                                className="btn-big btn_text btn-darkblue-line mg-n"
                                                              >
                                                                + Upload
                                                              </button>
                                                            </div>
                                                          </Upload>
                                                        </div>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">차량탑재형 고소작업대(스카이차)</span>
                                            </label>
                                          </div>
                                        </td>
                                        <td>
                                          {/* 파일첨부영역 : button */}
                                          <div className="form-table">
                                            <div className="form-cell wid50 border-b-no">
                                              <div className="form-group wid100">
                                                <div className="box-view-list">
                                                  <ul className="view-list">
                                                    <li className="accumlate-list">
                                                      <label className="t-label">첨부파일</label>
                                                      <span className="text-desc-type1">
                                                        <div className="filebox view">
                                                          <Upload {...props}>
                                                            <div className="btn-area" style={{ display: 'none' }}>
                                                              <button
                                                                type="button"
                                                                name="button"
                                                                className="btn-big btn_text btn-darkblue-line mg-n"
                                                              >
                                                                + Upload
                                                              </button>
                                                            </div>
                                                          </Upload>
                                                        </div>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>

                                  {/* 줄걸이 작업선택 */}
                                  <div className="work-ck-list active">
                                    <table>
                                      <tr>
                                        <th rowSpan={2}>줄걸이 작업</th>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">기중기(건설기계)</span>
                                            </label>
                                          </div>
                                        </td>
                                        <td>
                                          {/* 파일첨부영역 : button */}
                                          <div className="form-table">
                                            <div className="form-cell wid50 border-b-no">
                                              <div className="form-group wid100">
                                                <div className="box-view-list">
                                                  <ul className="view-list">
                                                    <li className="accumlate-list">
                                                      <label className="t-label">첨부파일</label>
                                                      <span className="text-desc-type1">
                                                        <div className="filebox view">
                                                          <Upload {...props}>
                                                            <div className="btn-area" style={{ display: 'none' }}>
                                                              <button
                                                                type="button"
                                                                name="button"
                                                                className="btn-big btn_text btn-darkblue-line mg-n"
                                                              >
                                                                + Upload
                                                              </button>
                                                            </div>
                                                          </Upload>
                                                        </div>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">차량탑재형 이동식크레인(카고크레인)</span>
                                            </label>
                                          </div>
                                        </td>
                                        <td>
                                          {/* 파일첨부영역 : button */}
                                          <div className="form-table">
                                            <div className="form-cell wid50 border-b-no">
                                              <div className="form-group wid100">
                                                <div className="box-view-list">
                                                  <ul className="view-list">
                                                    <li className="accumlate-list">
                                                      <label className="t-label">첨부파일</label>
                                                      <span className="text-desc-type1">
                                                        <div className="filebox view">
                                                          <Upload {...props}>
                                                            <div className="btn-area" style={{ display: 'none' }}>
                                                              <button
                                                                type="button"
                                                                name="button"
                                                                className="btn-big btn_text btn-darkblue-line mg-n"
                                                              >
                                                                + Upload
                                                              </button>
                                                            </div>
                                                          </Upload>
                                                        </div>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>

                                  {/* 줄걸이 작업선택 */}
                                  <div className="work-ck-list active">
                                    <table>
                                      <tr>
                                        <th rowSpan={3}>건설기계 사용 작업</th>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">굴착기</span>
                                            </label>
                                          </div>
                                        </td>
                                        <td>
                                          {/* 파일첨부영역 : button */}
                                          <div className="form-table">
                                            <div className="form-cell wid50 border-b-no">
                                              <div className="form-group wid100">
                                                <div className="box-view-list">
                                                  <ul className="view-list">
                                                    <li className="accumlate-list">
                                                      <label className="t-label">첨부파일</label>
                                                      <span className="text-desc-type1">
                                                        <div className="filebox view">
                                                          <Upload {...props}>
                                                            <div className="btn-area" style={{ display: 'none' }}>
                                                              <button
                                                                type="button"
                                                                name="button"
                                                                className="btn-big btn_text btn-darkblue-line mg-n"
                                                              >
                                                                + Upload
                                                              </button>
                                                            </div>
                                                          </Upload>
                                                        </div>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">지게차</span>
                                            </label>
                                          </div>
                                        </td>
                                        <td>
                                          {/* 파일첨부영역 : button */}
                                          <div className="form-table">
                                            <div className="form-cell wid50 border-b-no">
                                              <div className="form-group wid100">
                                                <div className="box-view-list">
                                                  <ul className="view-list">
                                                    <li className="accumlate-list">
                                                      <label className="t-label">첨부파일</label>
                                                      <span className="text-desc-type1">
                                                        <div className="filebox view">
                                                          <Upload {...props}>
                                                            <div className="btn-area" style={{ display: 'none' }}>
                                                              <button
                                                                type="button"
                                                                name="button"
                                                                className="btn-big btn_text btn-darkblue-line mg-n"
                                                              >
                                                                + Upload
                                                              </button>
                                                            </div>
                                                          </Upload>
                                                        </div>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="radio-wrap-type02">
                                            <label className="type02">
                                              <input type="checkbox" />
                                              <span className="type02">수기 입력 : </span>
                                            </label>
                                          </div>
                                          <div className="form-cell wid100 border-b-no">
                                            <div className="form-group wid100">
                                              <AppTextInput />
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          {/* 파일첨부영역 : button */}
                                          <div className="form-table">
                                            <div className="form-cell wid50 border-b-no">
                                              <div className="form-group wid100">
                                                <div className="box-view-list">
                                                  <ul className="view-list">
                                                    <li className="accumlate-list">
                                                      <label className="t-label">첨부파일</label>
                                                      <span className="text-desc-type1">
                                                        <div className="filebox view">
                                                          <Upload {...props}>
                                                            <div className="btn-area" style={{ display: 'none' }}>
                                                              <button
                                                                type="button"
                                                                name="button"
                                                                className="btn-big btn_text btn-darkblue-line mg-n"
                                                              >
                                                                + Upload
                                                              </button>
                                                            </div>
                                                          </Upload>
                                                        </div>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="link-txt">
                            <a href="javascript:void(0);">※ 첨부 파일 안내문 (Link)</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>

          <dt>
            <button type="button" className="btn-tg">
              사전동의<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <ul className="agree">
                          <li>1. 8시간 이상 진행되는 작업의 경우 작업 종료 후 재시작 시 현장 안전점검 실시</li>
                          <li>2. 현장점검 시 작업에 해당되는 점검표를 활용하여 점검 실시</li>
                          <li>3. 기계⋅전기⋅가스 등의 정지⋅차단 조치가 필요한 경우 Lock-Out, Tag-Out 실시</li>
                          <li>
                            4. 작업종료 후 외주업체 안전교육일지 및 작업 후 조치현황을 작업종료 후 2일 이내 승인부서에
                            통보 할 것
                          </li>
                          <li>5. 현장에서 안전조치 미흡/위반 사례 적발 시 즉시 작업중지 조치 예정</li>
                        </ul>
                        <div className="radio-wrap border-no pd-style">
                          <label>
                            <input type="checkbox" checked />
                            <span>위 사항에 대해 충분히 이해하고 입력한 정보로 작업허가를 신청합니다.</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
          <dt>
            <button type="button" className="btn-tg">
              작업 시작<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid-300">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">실제시작일</label>
                              <span className="text-desc-type1">2024-00-00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">교육일지</label>
                              <span className="text-desc-type1">
                                <div className="filebox view">
                                  <Upload {...props}>
                                    <div className="btn-area" style={{ display: 'none' }}>
                                      <button
                                        type="button"
                                        name="button"
                                        className="btn-big btn_text btn-darkblue-line mg-n"
                                      >
                                        + Upload
                                      </button>
                                    </div>
                                  </Upload>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-cell wid100">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">기타첨부</label>
                              <span className="text-desc-type1">
                                <div className="filebox view">
                                  <Upload {...props}>
                                    <div className="btn-area" style={{ display: 'none' }}>
                                      <button
                                        type="button"
                                        name="button"
                                        className="btn-big btn_text btn-darkblue-line mg-n"
                                      >
                                        + Upload
                                      </button>
                                    </div>
                                  </Upload>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <h3 className="table-tit">체크리스트</h3>
                        <div className="ck-list-tabel">
                          <table>
                            <thead>
                              <tr>
                                <th>작업</th>
                                <th>반입장비</th>
                                <th>체크리스트</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>공통(일반)</td>
                                <td></td>
                                <td>작성 완료</td>
                              </tr>
                              <tr>
                                <td>화기작업</td>
                                <td>가스 용접·용단, 연삭기</td>
                                <td>작성 완료</td>
                              </tr>
                              <tr>
                                <td>공통(일반)</td>
                                <td></td>
                                <td>작성 완료</td>
                              </tr>
                              <tr>
                                <td>공통(일반)</td>
                                <td></td>
                                <td>작성 완료</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">비고</label>
                              <span className="text-desc-type1">비고</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 파일첨부영역 : button */}
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">사진첨부</label>
                              <span className="text-desc-type1">
                                <div className="filebox view">
                                  <Upload {...props} listType="picture-card" fileList={fileList}>
                                    <div className="btn-area" style={{ display: 'none' }}>
                                      <button
                                        type="button"
                                        name="button"
                                        className="btn-big btn_text btn-darkblue-line mg-n"
                                      >
                                        + Upload
                                      </button>
                                    </div>
                                  </Upload>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
          <dt>
            <button type="button" className="btn-tg">
              작업 종료<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid-300">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">실제 종료일</label>
                              <span className="text-desc-type1">2024-00-00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">특이사항</label>
                              <span className="text-desc-type1">특이사항</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <h3 className="table-tit">공사연장 이력</h3>
                        <div className="ck-list-tabel">
                          <table>
                            <thead>
                              <tr className="type01">
                                <th>연장 전 종료 일자</th>
                                <th>연장 요청 일자</th>
                                <th>연장 요청 사유</th>
                                <th>연장 승인 일자</th>
                                <th>승인부서 의견</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="type01">
                                <td>2024.07.16</td>
                                <td>2024.07.18</td>
                                <td>폭우로 인한 공사 연장</td>
                                <td>2024.07.18</td>
                                <td></td>
                              </tr>
                              <tr className="type01">
                                <td>2024.07.16</td>
                                <td>2024.07.18</td>
                                <td>폭우로 인한 공사 연장</td>
                                <td>2024.07.18</td>
                                <td></td>
                              </tr>
                              <tr className="type01">
                                <td>2024.07.16</td>
                                <td>2024.07.18</td>
                                <td>폭우로 인한 공사 연장</td>
                                <td>2024.07.18</td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
          <dt>
            <button type="button" className="btn-tg">
              승인부서 의견<span className="active"></span>
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area">
              <div className="detail-form">
                <div className="detail-list">
                  <div className="form-table">
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <div className="box-view-list">
                          <ul className="view-list">
                            <li className="accumlate-list">
                              <label className="t-label">의견</label>
                              <span className="text-desc-type1">의견...</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
      </div>

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_conblue">
          임시저장
        </button>
        <button type="button" name="button" className="btn_text btn-del">
          취소
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          결재
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_conblue">
          반려
        </button>
        <button type="button" name="button" className="btn_text btn-del">
          취소
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationMu3P4detail;
