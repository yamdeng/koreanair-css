import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppTextArea from '@/components/common/AppTextArea';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
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

function SPIBoardDetail() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전보증</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">게시판</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>게시판 상세</h2>
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
                      게시판 구분 <span className="required">*</span>
                    </label>
                    <span className="text-desc-type1"> 일반공지</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid30">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      제목 <span className="required">*</span>
                    </label>
                    <span className="text-desc-type1">[KSMS]대한항공 통합안전관리시스템</span>
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
                      게시기간 <span className="required">*</span>
                    </label>
                    <span className="text-desc-type1">2024-06-03 ~ 2025-01-15</span>
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
                    <span className="text-desc-type1">
                      항공안전전략실 역시 안전 운항을 위한 대한항공의 노력이 집중된 곳이다. 안전기획팀, 안전품질평가팀,
                      지상안전팀, 안전조사팀, SMS(Safety Management System)팀으로 이뤄진 항공안전전략실 내에는 50여명이
                      근무한다. 이들은 안전정책 및 목표 수립을 통해 안전관리 시스템을 체계화하고, 위험도를 관리한다.
                      <br />
                      <br />
                      코로나 사태와 아시아나항공 인수합병 등 대내외 변화 역시 위험 요소 중 하나다. 유 부사장은
                      “대한항공의 안전 기준은 세계 최고 수준이라고 자부한다”며 “아시아나항공과 인수합병 과정에서
                      안전분야의 통합이 가장 먼저 이뤄져야 하므로 철저하게 준비하고 있다”고 말했다.
                      <br />
                      <br />
                      대한항공은 비행기 내부에서 발생할 수 있는 각종 위험 상황에도 대비하고 있다. 본사 건물 옆에 위치한
                      객실훈련센터가 대표적이다. 이곳에서는 객실승무원들이 안전 훈련을 받는다.
                      <br />
                      <br />
                      가로 25m, 세로 50m 크기의 대형 수영장을 비롯해 보잉 747 등 항공기 동체 모형을 갖추고 있다.
                      승무원들은 이날 도어 작동, 기내 비상 탈출 등을 시연했다. 탈출을 앞두고는 한 승무원이 “벨트 풀어”,
                      “나와”, “짐 버려” 등 단호한 어조로 명령했다. 승객들이 극심한 공포에 빠질 수 있는 만큼, 분명한
                      명령어를 사용한다는 설명이다
                    </span>
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
                    <label className="t-label">첨부파일</label>
                    <span className="text-desc-type1">Safety Portal 개발 Plan.jpg</span>
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
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default SPIBoardDetail;
