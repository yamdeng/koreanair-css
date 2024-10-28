import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextArea from '@/components/common/AppTextArea';
import { Upload } from 'antd';
import { useState } from 'react';
import { DatePicker } from 'antd';
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

function Admindashnew() {
  const rowData = getAllData();
  const [inputValue, setInputValue] = useState('');
  const columns = testColumnInfos;
  const [firstExpaned, setFirstExpaned] = useState(true);
  const [secondExpaned, setSecondExpaned] = useState(true);
  const [thirdExpaned, setThirdExpaned] = useState(true);
  const [fourExpaned, setFourExpaned] = useState(true);
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
            <a href="javascript:void(0);">SMS성숙도점검</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">대시보드 관리</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>대시보드 신규</h2>
      </div>
      {/* 입력영역 */}
      <div className="editbox dashbord">
        <div className="form-table line">
          <div className="form-cell wid30">
            <div className="form-group wid50">
              <AppDatePicker label={'연도 '} required />
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>

        <div className="info-wrap toggle">
          <dl className="{firstExpaned ? 'tg-item active' : 'tg-item'}">
            {/* toggle 선택되면  열어지면 active붙임*/}
            <dt onClick={() => setFirstExpaned(!firstExpaned)}>
              <button type="button" className="btn-tg">
                종합점수<span className={firstExpaned ? 'active' : ''}></span>
              </button>
            </dt>
            <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
              <div className="edit-area">
                <div className="detail-form">
                  <div className="detail-list">
                    <div className="form-table">
                      <div className="form-cell wid30">
                        <div className="form-group wid50">
                          {/*Final Score */}
                          <AppTextInput label="Final Score" />
                        </div>
                      </div>
                    </div>
                    <div className="form-table">
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          {/*안전정책과 목표  */}
                          <AppTextInput label="안전정책과 목표" />
                        </div>
                      </div>
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <AppTextInput label="항공안전 위험도의 관리" />
                        </div>
                      </div>
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <AppTextInput label="항공안전보증" />
                        </div>
                      </div>
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <AppTextInput label="항공안전증진" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
          <dl className={secondExpaned ? 'tg-item active' : 'tg-item'}>
            <dt onClick={() => setSecondExpaned(!secondExpaned)}>
              <button type="button" className="btn-tg">
                부문병 성숙도 점수<span className={secondExpaned ? 'active' : ''}></span>
              </button>
            </dt>
            <dd className="tg-conts" style={{ display: secondExpaned ? '' : 'none' }}>
              <div className="edit-area">
                <div className="detail-form">
                  <div className="detail-list">
                    <div className="form-table">
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <AppTextInput label="운항" />
                        </div>
                      </div>
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <AppTextInput label="정비" />
                        </div>
                      </div>
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <AppTextInput label="종합통제" />
                        </div>
                      </div>
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <AppTextInput label="객실" />
                        </div>
                      </div>
                    </div>
                    <div className="form-table">
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <AppTextInput label="여객" />
                        </div>
                      </div>
                      <div className="form-cell wid50">
                        <div className="form-group wid100">
                          <AppTextInput label="화물" />
                        </div>
                      </div>
                      <div className="form-cell wid50">
                        <div className="form-group wid50">
                          <AppTextInput label="OY" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      {/*//입력영역*/}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
        <button type="button" name="button" className="btn_text btn-del btn-type01">
          취소
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default Admindashnew;
