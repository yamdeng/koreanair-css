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

function SafetyDetail() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  return (
    <>
      <div className="conts-title">
        <h2>
          보고서 보기{' '}
          <span>
            <a href="javascript:void(0);">ASR-100308</a>
          </span>
        </h2>
      </div>
      {/*상세페이지
      <div className="editbox">
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">정책구분</label>
                    <span className="text-desc-type1"> AMO</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
      </div>
      //상세페이지*/}
      <div className="c-step-wrap">
        <ol className="c-step-list-type-5">
          <li className="active">
            {/* 선택된 class명에 active */}
            <a href="javascript:void(0);" data-label="접수">
              {/* 선택된 class명에 active */}
              <p className="info-title active">
                <span className="hide">1단계</span>
                접수
              </p>
            </a>
            <span className="after-arrow"></span>
          </li>
          <li>
            <a href="javascript:void(0);" data-label="1차 위험평가">
              <p className="info-title">
                <span className="hide">2단계</span>
                1차 위험평가
              </p>
            </a>
            <span className="after-arrow"></span>
          </li>
          <li>
            <a href="javascript:void(0);" data-label="경감조치">
              <p className="info-title">
                <span className="hide">3단계</span>
                경감조치
              </p>
            </a>
            <span className="after-arrow"></span>
          </li>
          <li>
            <a href="javascript:void(0);" data-label="2차 위험평가">
              <p className="info-title">
                <span className="hide">4단계</span>
                2차 위험평가
              </p>
            </a>
            <span className="after-arrow"></span>
          </li>
          <li>
            <a href="javascript:void(0);" data-label="종결">
              <p className="info-title">
                <span className="hide">5단계</span>
                종결
              </p>
            </a>
          </li>
        </ol>
      </div>
      <div className="c-step-wrap -mb-8n-3">
        <ol className="c-step-list default">
          <li className="is-active">
            <p className="info-title">
              <span className="hide">1단계</span> 보고서접수
              <span className="hide">현재 </span>
            </p>
          </li>
          <li className="">
            <p className="info-title">
              <span className="hide">2단계</span> 조회
              <span className="hide">현재 </span>
            </p>
          </li>
          <li className="">
            <p className="info-title">
              <span className="hide">3단계</span> 조회
              <span className="hide">현재 </span>
            </p>
          </li>
          <li className="">
            <p className="info-title">
              <span className="hide">4단계</span> 조회
              <span className="hide">현재 </span>
            </p>
          </li>
          <li className="">
            <p className="info-title">
              <span className="hide">5단계</span> 조회
              <span className="hide">현재 </span>
            </p>
          </li>
          <li className="">
            <p className="info-title">
              <span className="hide">6단계</span> 조회
              <span className="hide">현재 </span>
            </p>
          </li>
          <li className="">
            <p className="info-title">
              <span className="hide">7단계</span> 조회
              <span className="hide">현재 </span>
            </p>
          </li>
          <li className="">
            <p className="info-title">
              <span className="hide">8단계</span> 조회
              <span className="hide">현재 </span>
            </p>
          </li>
          <li className="">
            <p className="info-title">
              <span className="hide">9단계</span> 조회
              <span className="hide">현재 </span>
            </p>
          </li>
          <li className="">
            <p className="info-title">
              <span className="hide">10단계</span> 조회
              <span className="hide">현재 </span>
            </p>
          </li>
        </ol>
      </div>
      {/* 보고서 상세 toggle*/}
      <div className="info-wrap toggle">
        <dl className="tg-item active">
          {/* toggle 선택되면  열어지면 active붙임*/}
          <dt>
            <button type="button" className="btn-tg">
              보고서 내용보기
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area"></div>
          </dd>
        </dl>
        <dl className="tg-item">
          <dt>
            <button type="button" className="btn-tg">
              보고서 분석
            </button>
          </dt>
          <dd className="tg-conts">
            <div className="edit-area"></div>
          </dd>
        </dl>
      </div>
      {/* //보고서 상세 toggle*/}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          수정
        </button>
        <button type="button" name="button" className="btn_text btn-del">
          삭제
        </button>
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default SafetyDetail;