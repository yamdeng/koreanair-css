import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppSelect from '@/components/common/AppSelect';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { Editor } from '@toast-ui/react-editor';
import { DatePicker, TreeSelect } from 'antd';
import { useState } from 'react';
import Modal from 'react-modal';
import AppTreeSelect from '@/components/common/AppTreeSelect';
import AppTextInput from '@/components/common/AppTextInput';
import AppTable from '@/components/common/AppTable';
import { Image, Upload } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const options2 = [];
for (let i = 10; i < 36; i++) {
  options2.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const options = [
  { value: 'chocolate', label: 'Chocolate Chocolate Chocolate ChocolateChocolateChocolateChocolate' },
  { value: 'strawberry', label: 'StrawberryStrawberryStrawberryStrawberryStrawberryStrawberryStrawberry' },
  { value: 'vanilla', label: 'VanillaVanillaVanillaVanillaVanillaVanillaVanilla' },
];
const { RangePicker } = DatePicker;
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf2',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf3',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf4',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf5',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
          {
            value: 'leaf6',
            title: 'leaf1222223333333333333333333333333333333333333333',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf11',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf11
              </b>
            ),
          },
        ],
      },
    ],
  },
];

function UserEditModal(props) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const { isOpen, closeModal } = props;
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [selectedTreeData, setSelectedTreeData] = useState([]);
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
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };

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

  const customButtons = [
    {
      title: '추가',
      onClick: () => {
        alert('추가');
      },
    },
  ];

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
        <h3 className="pop_title">작업 시작</h3>
        <div className="pop_cont">
          <div className="editbox">
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid-300">
                  <AppDatePicker label="실제 시작일" required disabled />
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <h3 className="table-tit">체크 리스트</h3>
                  <div className="checklistbox">
                    <table className="check-list">
                      <tbody>
                        <tr>
                          <th>공통(일반)</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>안내표지판 등 작업 구역 설정</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>안전 보호구 착용</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업 시작 전 교육 실시</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>현장 안전 담당 배치</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>화재위험작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>소화기 비치</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업장 주변 인화성,가연성 물질 제거 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>화재 감시자 배치자 성명</td>
                          <td>
                            <div className="form-group modal-input-txt wid100">
                              <AppTextInput label="" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>공정위험, 피난방법 및 안전교육 실시</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>가스 용접·용단 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>특별교육 이수 여부 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업 전 배관 및 연결부의 가스누설 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>용기 게이지 압력 127kPa(1.3㎏/㎠) 초과 금지</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>역화방지기(안전기) 설치</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>용기의 전도 및 충격 방지</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>직사광선 노출 및 용기 표면 온도 40℃ 초과 금지</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>용접면, 안전장갑 등 개인 보호구 착용</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>용접 불티 비산방지덮개, 용접방화포 등의 설치</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>전기 용접작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>특별교육 이수 여부 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>용접봉 홀더, 외함 등 절연조치 적정 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>자동전격방지장치 정상 작동 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>용접기와 연결된 누전차단기 정상 작동 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>용접면, 안전장갑 등 개인 보호구 착용</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>용접 불티 비산방지덮개, 용접방화포 등의 설치</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>연삭기 사용 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>마찰열 및 불티 비산 방지 조치</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>사용 전 시운전 여부 (숫돌 교체 후 3분이상, 작업 시작 전 1분 이상)</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>방호 덮개 부착 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>케이블의 피복손상여부 등 절연조치 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>연삭숫돌의 손상여부 확인(갈라짐, 잔금, 이빠짐, 마모과다 등)</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>전기작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>특별교육 이수 여부 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>주전원 차단</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>접지 및 방전확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>차단 표지판 부착(LOTO)</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>잠금장치 시건</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>자격의 확인 : 전기기능사 이상</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <span className="tooltip-txt">
                              고압 전기작업
                              <div className="tooltip tooltip-box">
                                <span className="tooltiptext tooltip-right">
                                  <ul>
                                    <li>1,500~7,000V 직류전압 및 1,000~7,000V 교류전압</li>
                                  </ul>
                                </span>
                              </div>
                            </span>
                          </th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>전압에 적합한 절연 보호구 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업공간, 접근로 통제 및 조도 확보</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>자격의 확인 : 전기기능사 이상, 직업능력개발훈련 이수 등</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>고소작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>안전대 걸이설비 확인 및 추락방지조치 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>안전난간의 견고한 상태 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>이동식 사다리 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>사다리의 변형 및 이상유무 점검</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>사다리 넘어짐 방지조치 여부(아웃트리거 설치, 근로자가 지지, 시설물에 고정 등)</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>최상부 발판 및 그 하단 디딤대 올라서서 작업 금지 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업높이가 2미터 이상인 경우 안전대/안전모 착용 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업높이 3.5m 초과 시 작업발판으로 사용 금지</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>달비계 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>별도의 수직구명줄 설치 및 안전대 결속</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>별도의 수직구명줄 설치 및 안전대 결속</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2개소 이상의 고정점에 각 로프 결속</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>지지로프가 구조물 등에 마모 가능성 확인 후 로프 보호 조치</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>시저형 고소작업대(렌탈) 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>과상승방지장치 및 비상정지장치 작동 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업대 발판 및 안전난간(4면 설치) 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업방법 및 운행경로의 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>안전인증 취득 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>적재하중, 탑승인원 초과여부 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>차량탑재형 고소작업대(스카이차) 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>10톤 미만(이상) 운전자 1종 보통(대형)면허 보유 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>기중기운전기능사 또는 교육이수 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>화물운전 종사자 자격증 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>적재하중, 탑승인원 초과여부 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업대 발판 및 안전난간(4면 설치) 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업방법 및 운행경로의 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>자동차 정기검사 유효기간 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>안전검사 유효기간 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>아웃트리거 최대 확장 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>줄걸이 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>
                            장비의 과부하방지장치, 권과방지장치, 비상정지장치, 훅해지장치 등 방호장치 정상 작동 확인
                          </td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>체인슬링, 샤클, 훅 등 줄걸이 용구 정상 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>매달린 물건의 내리는 장소, 적재장소 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업방법 및 운행경로의 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>운전자와 신호수 간 줄걸이 작업에 필요한 신호 방법의 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>이동식 크레인(카고 크레인) 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>자동차 정기검사 유효기간 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>안전검사 유효기간 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>기중기운전기능사 또는 교육이수 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>화물운전 종사자 자격증 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>기중기 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>건설기계조종사 운전면허 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>건설기계등록증 정기검사 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>건설기계조종사 안전교육 이수 확인(3년 주기)</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>건설기계 사용작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>작업장 내 제한속도 지정 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>운전위치 이탈 시의 조치 인지 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>용도 외 사용 통제 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업반경 내 근로자 접촉방지 조치 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업계획서 근로자 주지 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>굴착기 사용 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>건설기계조종사 운전면허 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>건설기계등록증 정기검사 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>건설기계조종사 안전교육 이수 확인(3년 주기)</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>굴착면 매설(가스, 수도 등) 현황 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>작업장소의 지형 및 지반상태 확인 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>버킷 등 작업장치의 이탈방지용 안전핀 체결 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>전조등 정상작동 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>좌석안전띠 정상 체결 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>지게차 사용 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>건설기계조종사 운전면허 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>건설기계등록증 정기검사 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>건설기계조종사 안전교육 이수 확인(3년 주기)</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>지게차의 허용하중 이내 작업 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>전조등, 후미등 정상 작동 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>후진경보기와 경광등 또는 후방감지기 작동 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>헤드가드 기준 준수 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>백레스트 정상 장착 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>안전띠 정상 체결 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>덤프트럭 사용 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>작업반경 내 근로자 접촉 위험 시 유도자 배치여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>전조등 정상작동 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>콘크리트 믹서트럭 사용 작업</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>작업반경 내 근로자 접촉 위험 시 유도자 배치여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>전조등 정상작동 여부</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>밀폐공간</th>
                          <th>작성</th>
                        </tr>
                        <tr>
                          <td>관리감독자 지정 확인</td>
                          <td>
                            <div className="form-group modal-input-txt wid100">
                              <AppTextInput label="" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>감시인 지정 확인</td>
                          <td>
                            <div className="form-group modal-input-txt wid100">
                              <AppTextInput label="" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>특별교육 수료 여부 확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>산소 및 유해가스 측정기 구비 및 작동확인</td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            긴급구조장비 구비 여부 (공기호흡기 또는 송기마스크와 공기압축기, 송기팬, 삼각대, 안전대,
                            구명줄, 무전기 등)
                          </td>
                          <td>
                            <div className="chk-wrap center">
                              <label className="text-no">
                                <input type="checkbox" />
                                <span className="text-no"></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell wid50">
                <div className="form-group wid100">
                  <AppTextInput label="비고" />
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
        </div>

        <div className="pop_btns mt-15">
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            저장
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>
    </Modal>
  );
}

function MU3P4ModalS() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>외주작업허가 작업시작 모달</h3>
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            외주작업허가 작업시작 모달 open
          </button>
        </p>
        <UserEditModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default MU3P4ModalS;
