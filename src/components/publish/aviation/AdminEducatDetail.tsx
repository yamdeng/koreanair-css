import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppTextArea from '@/components/common/AppTextArea';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { useState } from 'react';
import { Upload } from 'antd';
import AppAutoComplete from '@/components/common/AppAutoComplete';
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

function AdminEducatDetail() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [firstExpaned, setFirstExpaned] = useState(true);
  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">관리자</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">교육관리 상세</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>교육관리 상세</h2>
      </div>
      {/*상세페이지*/}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid30">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      교육일자
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1"> 2024-04-21</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      교육구분
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1"> ESP</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      제목
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">2사분기 외부 협력 업체 필수 교육</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      내용 <span className="required">*</span>
                    </label>
                    <span className="text-desc-type1">교육구분에 따른 교육관리 내용을 입력합니다.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">링크</label>
                    <span className="text-desc-type1">
                      <a href="javascript:void(0);">https://www.ksmstest001.com</a>
                    </span>
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
                    <label className="t-label">첨부파일</label>
                    <span className="text-desc-type1">
                      <div className="desc-file">
                        <a href="javascript:void(0);">
                          <span>첨부파일.zip</span>
                          <span className="download"></span>
                        </a>
                      </div>
                    </span>
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
                    <label className="t-label">사용여부</label>
                    <span className="text-desc-type1">사용</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
      </div>
      {/*//상세페이지*/}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button className="btn_text text_color_neutral-10 btn_confirm btn-type01">수정</button>
        <button className="btn_text btn-del btn-type01">삭제</button>
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}

      {/* 이력정보 toggle*/}
      <div className="info-wrap toggle">
        <dl className={firstExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setFirstExpaned(!firstExpaned)}>
            <button type="button" className="btn-tg">
              {/* toggle 열어지면 active붙임*/}
              이력정보<span className={firstExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
            <div className="edit-area edu">
              <div className="detailForm">
                {/*검색영역 */}
                <div className="boxForm">
                  <div className="form-table">
                    <div className="form-cell wid30">
                      <div className="form-group wid100">
                        <AppSelect label={'이력구분'} />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppAutoComplete label={'부서'} />
                      </div>
                    </div>
                    <div className="form-cell wid50">
                      <div className="form-group wid100">
                        <AppAutoComplete label={'이름'} />
                      </div>
                    </div>

                    <div className="btn-area df">
                      <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                        조회
                      </button>
                      <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                        내보내기
                      </button>
                    </div>
                  </div>
                </div>
                {/* //검색영역 */}
                <div className="history-info">
                  <div className="left-box">
                    <div className="listtable">
                      <table className="list-table">
                        <thead>
                          <tr>
                            <th>이력구분</th>
                            <th>부서</th>
                            <th>사번</th>
                            <th>이름</th>
                            <th>일시</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">열람이력</a>
                            </td>
                            <td>안전조사팀</td>
                            <td>1234566</td>
                            <td>홍길동</td>
                            <td>2024-07-20 12:34</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">다운로드이력</a>
                            </td>
                            <td>서비스분석팀</td>
                            <td>1234566</td>
                            <td>홍길동</td>
                            <td>2024-07-20 12:34</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">다운로드이력</a>
                            </td>
                            <td>CCM운영팀</td>
                            <td>1234566</td>
                            <td>홍길동</td>
                            <td>2024-07-20 12:34</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">다운로드이력</a>
                            </td>
                            <td>CCM운영팀</td>
                            <td>1234566</td>
                            <td>홍길동</td>
                            <td>2024-07-20 12:34</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">다운로드이력</a>
                            </td>
                            <td>CCM운영팀</td>
                            <td>1234566</td>
                            <td>홍길동</td>
                            <td>2024-07-20 12:34</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">다운로드이력</a>
                            </td>
                            <td>CCM운영팀</td>
                            <td>1234566</td>
                            <td>홍길동</td>
                            <td>2024-07-20 12:34</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">다운로드이력</a>
                            </td>
                            <td>CCM운영팀</td>
                            <td>1234566</td>
                            <td>홍길동</td>
                            <td>2024-07-20 12:34</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="right-box">
                    <div className="list-view">
                      <table className="list-table">
                        <thead>
                          <tr>
                            <th>업로드 첨부파일</th>
                            <th>업로드 링크</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">업로드첨부파일111.zip</a>
                            </td>
                            <td>
                              <a href="javascript:void(0);">www.naver.com/url/.do</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
        </dl>
      </div>
      {/* //이력정보 toggle*/}
    </>
  );
}

export default AdminEducatDetail;
