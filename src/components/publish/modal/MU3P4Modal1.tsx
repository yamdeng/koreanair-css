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
import { Upload } from 'antd';

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
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const { isOpen, closeModal } = props;
  const rowData = getAllData();
  const columns = testColumnInfos;
  const [selectedTreeData, setSelectedTreeData] = useState([]);
  const onTreeSelectChange = (value) => {
    setSelectedTreeData(value);
  };

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
        <h3 className="pop_title">특별교육</h3>
        <span className="txt-guide">산업안전보건법 시행규칙 제26조 및 별표5</span>
        <div className="pop_cont">
          <div className="editbox">
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">
                        아세틸렌 용접장치 또는 가스집합 용접장치를 사용하는 금속의 용접·용단 또는 가열작업(발생기·도관
                        등에 의하여 구성되는 용접장치만 해당한다)
                      </span>
                      <ul className="ck-guide">
                        <li>용접 흄, 분진 및 유해광선 등의 유해성에 관한 사항</li>
                        <li>
                          가스용접기, 압력조정기, 호스 및 취관두(불꽃이 나오는 용접기의 앞부분) 등의 기기점검에 관한
                          사항
                        </li>
                        <li>작업방법·순서 및 응급처치에 관한 사항</li>
                        <li>안전기 및 보호구 취급에 관한 사항</li>
                        <li>화재예방 및 초기대응에 관한사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">
                        밀폐된 장소(탱크 내 또는 환기가 극히 불량한 좁은 장소 를 말한다)에서 하는 용접작업 또는 습한
                        장소에서 하는 전기용접 작업
                      </span>
                      <ul className="ck-guide">
                        <li>작업순서, 안전작업방법 및 수칙에 관한 사항</li>
                        <li>환기설비에 관한 사항</li>
                        <li>전격 방지 및 보호구 착용에 관한 사항</li>
                        <li>질식 시 응급조치에 관한 사항</li>
                        <li>작업환경 점검에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">
                        폭발성·물반응성·자기반응성·자기발열성 물질, 자연발화성 액체·고체 및 인화성 액체의 제조 또는
                        취급작업(시험연구를 위한 취급작업은 제외한다)
                      </span>
                      <ul className="ck-guide">
                        <li>
                          폭발성·물반응성·자기반응성·자기발열성 물질, 자연발화성 액체·고체 및 인화성 액체의 성질이나
                          상태에 관한 사항
                        </li>
                        <li>폭발 한계점, 발화점 및 인화점 등에 관한 사항</li>
                        <li>취급방법 및 안전수칙에 관한 사항</li>
                        <li>이상 발견 시의 응급처치 및 대피 요령에 관한 사항</li>
                        <li>화기·정전기·충격 및 자연발화 등의 위험방지에 관한 사항</li>
                        <li>작업순서, 취급주의사항 및 방호거리 등에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">화학설비의 탱크 내 작업</span>
                      <ul className="ck-guide">
                        <li>차단장치·정지장치 및 밸브 개폐장치의 점검에 관한 사항</li>
                        <li>탱크 내의 산소농도 측정 및 작업환경에 관한 사항</li>
                        <li>안전보호구 및 이상 발생 시 응급조치에 관한 사항</li>
                        <li>작업절차·방법 및 유해·위험에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">
                        1톤 이상의 크레인을 사용하는 작업 또는 1톤 미만의크레인 또는 호이스트를 5대이상 보유한
                        사업장에서 해당기계로 하는 작업(제40호의작업은 제외한다)
                      </span>
                      <ul className="ck-guide">
                        <li>방호장치의 종류, 기능 및 취급에 관한 사항</li>
                        <li>걸고리·와이어로프 및 비상정지장치 등의 기계·기구 점검에관한 사항</li>
                        <li>화물의 취급 및 안전작업방법에 관한 사항</li>
                        <li>신호방법 및 공동작업에 관한 사항</li>
                        <li>인양 물건의 위험성 및 낙하·비래(飛來)·충돌재해 예방에 관한사항</li>
                        <li>인양물이 적재될 지반의 조건, 인양하중, 풍압 등이 인양물과타워크레인에 미치는 영향</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">전압이 75볼트 이상인 정전및 활선작업</span>
                      <ul className="ck-guide">
                        <li>전기의 위험성 및 전격 방지에 관한 사항</li>
                        <li>해당 설비의 보수 및 점검에 관한 사항</li>
                        <li>정전작업·활선작업 시의 안전작업방법 및 순서에 관한 사항</li>
                        <li>절연용 보호구, 절연용 보호구 및 활선작업용 기구 등의 사용에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">
                        콘크리트 파쇄기를 사용하여 하는 파쇄작업(2미터 이상인 구축물의 파쇄작업만 해당한다)
                      </span>
                      <ul className="ck-guide">
                        <li>콘크리트 해체 요령과 방호거리에 관한 사항</li>
                        <li>작업안전조치 및 안전기준에 관한 사항</li>
                        <li>파쇄기의 조작 및 공통작업 신호에 관한 사항</li>
                        <li>보호구 및 방호장비 등에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">
                        굴착면의 높이가 2미터 이상이 되는 지반 굴착(터널 및 수직갱 외의 갱 굴착은 제외한다)작업
                      </span>
                      <ul className="ck-guide">
                        <li>지반의 형태·구조 및 굴착 요령에 관한 사항</li>
                        <li>지반의 붕괴재해 예방에 관한 사항</li>
                        <li>붕괴 방지용 구조물 설치 및 작업방법에 관한 사항</li>
                        <li>보호구의 종류 및 사용에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">
                        높이가 2미터 이상인 물건을 쌓거나 무너뜨리는 작업(하역기계로만 하는 작업은제외한다)
                      </span>
                      <ul className="ck-guide">
                        <li>원부재료의 취급 방법 및 요령에 관한 사항</li>
                        <li>물건의 위험성·낙하 및 붕괴재해 예방에 관한 사항</li>
                        <li>적재방법 및 전도 방지에 관한 사항</li>
                        <li>보호구 착용에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">비계의 조립·해체 또는 변경작업</span>
                      <ul className="ck-guide">
                        <li>비계의 조립순서 및 방법에 관한 사항</li>
                        <li>비계작업의 재료 취급 및 설치에 관한 사항</li>
                        <li>추락재해 방지에 관한 사항</li>
                        <li>보호구 착용에 관한 사항</li>
                        <li>비계상부 작업 시 최대 적재하중에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">
                        콘크리트 인공구조물(그 높이가 2미터 이상인 것만 해당한다)의 해체 또는 파괴작업
                      </span>
                      <ul className="ck-guide">
                        <li>콘크리트 해체기계의 점점에 관한 사항</li>
                        <li>파괴 시의 안전거리 및 대피 요령에 관한 사항</li>
                        <li>작업방법·순서 및 신호 방법 등에 관한 사항</li>
                        <li>해체·파괴 시의 작업안전기준 및 보호구에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">
                        보일러(소형 보일러 및 다음각 목에서 정하는 보일러는제외한다)의 설치 및 취급 작업 <br />
                        가. 몸통 반지름이 750밀리미터 이하이고 그 길이가 1,300밀리미터 이하인 증기보일러
                        <br />
                        나. 전열면적이 3제곱미터 이하인 증기보일러
                        <br />
                        다. 전열면적이 14제곱미터이하인 온수보일러
                        <br />
                        라. 전열면적이 30제곱미터이하인 관류보일러(물관을 사용하여 가열시키는 방식의 보일러)
                      </span>
                      <ul className="ck-guide">
                        <li>기계 및 기기 점화장치 계측기의 점검에 관한 사항</li>
                        <li>열관리 및 방호장치에 관한 사항</li>
                        <li>작업순서 및 방법에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">
                        게이지 압력을 제곱센티미터당 1킬로그램 이상으로 사용하는 압력용기의 설치 및 취급작업
                      </span>
                      <ul className="ck-guide">
                        <li>안전시설 및 안전기준에 관한 사항</li>
                        <li>압력용기의 위험성에 관한 사항</li>
                        <li>용기 취급 및 설치기준에 관한 사항</li>
                        <li>작업안전 점검 방법 및 요령에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">방사선 업무에 관계되는 작업(의료 및 실험용은 제외한다)</span>
                      <ul className="ck-guide">
                        <li>방사선의 유해·위험 및 인체에 미치는 영향</li>
                        <li>방사선의 측정기기 기능의 점검에 관한 사항</li>
                        <li>방호거리·방호벽 및 방사선물질의 취급 요령에 관한 사항</li>
                        <li>응급처치 및 보호구 착용에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">밀폐공간에서의 작업</span>
                      <ul className="ck-guide">
                        <li>산소농도 측정 및 작업환경에 관한 사항</li>
                        <li>사고 시의 응급처치 및 비상 시 구출에 관한 사항</li>
                        <li>보호구 착용 및 보호 장비 사용에 관한 사항</li>
                        <li>작업내용ㆍ안전작업방법 및 절차에 관한 사항</li>
                        <li>장비ㆍ설비 및 시설 등의 안전점검에 관한 사항</li>
                        <li>그 밖에 안전ㆍ보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">허가 또는 관리 대상 유해물질의 제조 또는 취급작업</span>
                      <ul className="ck-guide">
                        <li>취급물질의 성질 및 상태에 관한 사항</li>
                        <li>유해물질이 인체에 미치는 영향</li>
                        <li>국소배기장치 및 안전설비에 관한 사항</li>
                        <li>안전작업방법 및 보호구 사용에 관한 사항</li>
                        <li>그 밖에 안전ㆍ보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">석면해체·제거작업</span>
                      <ul className="ck-guide">
                        <li>석면의 특성과 위험성</li>
                        <li>석면해체·제거의 작업방법에 관한 사항</li>
                        <li>장비 및 보호구 사용에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="form-table">
              <div className="form-cell1 wid50">
                <div className="group-box-wrap wid100">
                  <div className="radio-wrap">
                    <label className="type01">
                      <input type="checkbox" />
                      <span className="type01">가연물이 있는 장소에서 하는 화재위험작업</span>
                      <ul className="ck-guide">
                        <li>작업준비 및 작업절차에 관한 사항</li>
                        <li>작업장 내 위험물, 가연물의 사용·보관·설치 현황에 관한 사항</li>
                        <li>화재위험작업에 따른 인근 인화성 액체에 대한 방호조치에 관한 사항</li>
                        <li>화재위험작업으로 인한 불꽃, 불티 등의 흩날림 방지 조치에관한 사항</li>
                        <li>인화성 액체의 증기가 남아 있지 않도록 환기 등의 조치에 관한 사항</li>
                        <li>화재감시자의 직무 및 피난교육 등 비상조치에 관한 사항</li>
                        <li>그 밖에 안전·보건관리에 필요한 사항</li>
                      </ul>
                    </label>
                  </div>
                  {/*<span className="errorText">error</span>*/}
                </div>
                {/* 파일첨부영역 : button */}
                <div className="form-table">
                  <div className="form-cell wid50">
                    <div className="form-group wid100">
                      <div className="filebox ">
                        <Upload {...props}>
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-big btn_text btn-darkblue-line mg-n">
                              + Upload
                            </button>
                          </div>
                        </Upload>
                        <label htmlFor="file" className="file-label">
                          파일 첨부 {/*<span className="required">*</span>*/}
                        </label>
                      </div>
                      {/*<span className="errorText">fileerror</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line"></hr>
          </div>
        </div>

        <div className="pop_btns mt-20">
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            저장
          </button>
          <button className="btn_text text_color_neutral-90 btn_close" onClick={closeModal}>
            취소
          </button>
        </div>
        <span className="pop_close" onClick={closeModal}>
          X
        </span>
      </div>
    </Modal>
  );
}

function MU3P4Modal1() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>외주작업허가 특별교육 모달</h3>
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            외주작업허가 특별교육 모달 open
          </button>
        </p>
        <UserEditModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default MU3P4Modal1;
