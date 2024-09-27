import { useState } from 'react';
import Modal from 'react-modal';
import { DatePicker, TimePicker, TreeSelect, Select as AntSelect } from 'antd';
import AppTextInput from '@/components/common/AppTextInput';
import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppSelect from '@/components/common/AppSelect';
import AppTextArea from '@/components/common/AppTextArea';
import { Image, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Image001 from '@/resources/images/img001.png';
import Image002 from '@/resources/images/img002.png';
import Image003 from '@/resources/images/img003.png';
import Image004 from '@/resources/images/img004.png';
import Image005 from '@/resources/images/img005.png';
import Image006 from '@/resources/images/img006.png';

const options = [
  { value: 'chocolate', label: 'Chocolate Chocolate Chocolate ChocolateChocolateChocolateChocolate' },
  { value: 'strawberry', label: 'StrawberryStrawberryStrawberryStrawberryStrawberryStrawberryStrawberry' },
  { value: 'vanilla', label: 'VanillaVanillaVanillaVanillaVanillaVanillaVanilla' },
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
function ChecklistModal(props) {
  const { isOpen, closeModal } = props;
  const [inputValue, setInputValue] = useState('');
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
        <h3 className="pop_title">첨부파일 안내문</h3>
        <span className="txt-guide">※ 모든 증빙자료는 신청일을 기준으로 유효한 상태여야함</span>
        <div className="pop_cont pb_0">
          <div className="editbox">
            <table className="pop-img-table">
              <tr>
                <td>
                  <ul>
                    <li>
                      <img src={Image001} className="pop-img-size" alt="차량탑재형 고소작업대 (스카이)" />
                    </li>
                    <li className="img-tit">차량탑재형 고소작업대 (스카이)</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>- 자동차등록증</li>
                    <li>- 안전검사합격증명서</li>
                    <li>- 기능기운전기능사 또는 교육기관 교육 이수</li>
                    <li>- 화물운전 종사 자격증</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>
                  <ul>
                    <li>
                      <img src={Image002} className="pop-img-size" alt="시저형 고소작업대 (렌탈)" />
                    </li>
                    <li className="img-tit">시저형 고소작업대 (렌탈)</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li> - 안전인증서</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>
                  <ul>
                    <li>
                      <img src={Image003} className="pop-img-size" alt="이동식 크레인 (카고크레인)" />
                    </li>
                    <li className="img-tit">이동식 크레인 (카고크레인)</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>- 자동차등록증</li>
                    <li>- 안전검사합격증명서</li>
                    <li>- 기능기운전기능사 또는 교육기관 교육 이수</li>
                    <li>- 화물운전 종사 자격증</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>
                  <ul>
                    <li>
                      <img src={Image004} className="pop-img-size" alt="기중기 (크레인)" />
                    </li>
                    <li className="img-tit">기중기 (크레인)</li>
                  </ul>
                </td>
                <td rowSpan={3}>
                  <ul>
                    <li>- 건설기계등록증</li>
                    <li>- 건설기계조종사 면허증</li>
                    <li>- 건설기계조종사 안전교육 이수증</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>
                      <img src={Image005} className="pop-img-size" alt="굴착기 (굴삭기, 포크레인, 백호우)" />
                    </li>
                    <li className="img-tit">굴착기 (굴삭기, 포크레인, 백호우)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>
                      <img src={Image006} className="pop-img-size" alt="지게차" />
                    </li>
                    <li className="img-tit">지게차</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="pop_btns mt-20">
          <button className="btn_text text_color_neutral-10 btn_confirm" onClick={closeModal}>
            확인
          </button>
        </div>
        <span className="pop_close">X</span>
      </div>
    </Modal>
  );
}

function MU4P3Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        MU4P3Modal
        <p>
          <button className="button" onClick={() => setIsOpen(true)}>
            외주작업허가-참고자료 modal open
          </button>
        </p>
        <ChecklistModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default MU4P3Modal;
