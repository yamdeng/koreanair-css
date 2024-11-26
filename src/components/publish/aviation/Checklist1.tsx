import { useState, useRef } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';

function Checklist1() {
  const containerRef = useRef(null);
  const boxRefs = useRef([]); // 각 box에 대한 참조
  const [hiddenBoxes, setHiddenBoxes] = useState([]);

  const checkList = [
    { title: '안전보안일반12 (29)' },
    { title: '항공보안(OYA)' },
    { title: '운항품질(OQA)' },
    { title: '1정비품질보증(M&E)' },
    { title: '2정비품질보증(M&E)' },
    { title: '3정비품질보증(M&E)' },
    { title: '4정비품질보증(M&E)' },
    { title: '5정비품질보증(M&E)' },
    { title: '6정비품질보증(M&E)' },
    { title: '7정비품질보증(M&E)' },
  ];

  const clickMore = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;

    const hiddenBoxes = checkList.filter((box, index) => {
      const boxElement = boxRefs.current[index];
      if (!boxElement) return false;

      // 박스의 시작(left) 위치와 끝(right) 위치 계산
      const boxStart = boxElement.offsetLeft;
      const boxEnd = boxStart + boxElement.offsetWidth;

      // 보이지 않는 박스 필터링
      return boxEnd <= scrollLeft || boxStart >= scrollLeft + containerWidth - 200;
    });

    const element = document.getElementById(`checklist-${hiddenBoxes[hiddenBoxes.length - 1].title}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });

    setHiddenBoxes(hiddenBoxes);
  };

  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">AUDIT</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">Checklist</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="swiper-container">
          <div className="menu-tab Audit" ref={containerRef}>
            {checkList.map((info, index) => {
              const { title } = info;
              return (
                <a
                  id={`checklist-${title}`}
                  key={title}
                  href="javascript:void(0);"
                  className="active"
                  data-label="안전보안일반12"
                  ref={(el) => (boxRefs.current[index] = el)}
                >
                  {title}
                </a>
              );
            })}
          </div>

          <div className="menu-tab-nav-operations">
            <button type="button" name="button" className="menu-tab-nav-more" onClick={clickMore}>
              <span className="hide">더보기</span>
            </button>
            {/* 더보기버튼 리스트 추가 S */}
            <div className="menu-tab-nav-more-list active">
              <ul>
                <li>
                  <a href="javascript:void(0);">안전보안일반12</a>
                </li>
                <li>
                  <a href="javascript:void(0);">항공보안</a>
                </li>
                <li>
                  <a href="javascript:void(0);">운항품질</a>
                </li>
                <li>
                  <a href="javascript:void(0);">정비품질보증</a>
                </li>
              </ul>
            </div>
            {/* 더보기버튼 리스트 추가 E */}
          </div>
        </div>
      </div>

      {/*검색영역 */}
      <div className="form-table Audit">
        <div className="form-cell wid100">
          <div className="form-group wid100">
            <div className="btn-area Audit">
              <div className="type5">
                <AppSelect label={'Lang Type'} />
              </div>
              <div className="btn-area-box">
                {' '}
                <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                  Checklist Upload
                </button>
                <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                  Add Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="btn-area Audit">
        <div className="btn-area-box">
          {' '}
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            Checklist Upload
          </button>
          <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
            Add Checklist
          </button>
        </div>
      </div>
      //검색영역 */}

      <div className="checklist-contents">
        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list editChapter">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>해외공항 원격 안전평가 점검표 (ko)10</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      안전보안일반12안전보안일반12안전보안일반12안전보안일반12안전보안일반12안전보안일반12안전보안일반12안전보안일반12{' '}
                      <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      종합통제12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      정비관리12 <i>(50)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      여객운송12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      여객운송12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      여객운송12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>해외공항 안전평가 점검표 (ko)12</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      안전보안일반12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      종합통제12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      정비관리12 <i>(50)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      여객운송12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      여객운송12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      램프운영12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>해외공항 원격 안전평가 점검표 (en)5</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      안전보안일반 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      종합통제12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      정비관리12 <i>(50)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      여객운송12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      여객운송12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      여객운송12 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>해외공항 원격 안전평가 점검표 (ko)10</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      안전보안일반2 <i>(11)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      종합통제2 <i>(29)</i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>객실 승무편조 안전평가 점검표</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      승무편조3-1 <i>(2)</i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      편조규정3 <i>(2)</i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>운항승무원편조 및 승무자격 안전평가 점검표 | 운항승무원편조 및 승무자격 안전평가 점검표</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      승무편조 일반 승무편조 일반 승무편조 일반 승무편조 일반 승무편조 일반 <i>(4)</i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>운항승무원편조 및 승무자격 안전평가 점검표 | 운항승무원편조 및 승무자격 안전평가 점검표</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      승무편조 일반 승무편조 일반 승무편조 일반 승무편조 일반 승무편조 일반 <i>(4)</i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="checklist-row list">
          <div className="checklist-col">
            <h4>
              <label>
                <button type="button" name="button" className="btn-list">
                  <span className="hide">등록</span>
                </button>
                <a href="javascript:void(0);">
                  <span>운항승무원편조 및 승무자격 안전평가 점검표 | 운항승무원편조 및 승무자격 안전평가 점검표</span>
                </a>
              </label>
            </h4>
            <ul>
              <li className="list-space">
                <div className="ant-space">
                  <div className="ant-space-item">
                    <button type="button" className="btn-list editChapter">
                      <span className="hide">등록</span>
                    </button>
                  </div>
                  <div className="ant-space-item">
                    <a href="javascript:void(0);">
                      승무편조 일반 승무편조 일반 승무편조 일반 승무편조 일반 승무편조 일반 <i>(4)</i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checklist1;
