import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import { useState } from 'react';

function SMSinstructorDetail() {
  const rowData = getAllData();
  const [firstExpaned, setFirstExpaned] = useState(true);
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: '신규',
      onClick: () => {
        alert('신규');
      },
    },
  ];
  return (
    <>
      {/*경로 */}
      <div className="Breadcrumb">
        <ol>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">홈</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전증진</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">강사현황</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">강사이력현황</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>강사이력현황 상세</h2>
      </div>
      {/*상세페이지*/}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">암용일자</label>
                    <span className="text-desc-type1"> 2024-09-23</span>
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
                    <label className="t-label">강사명</label>
                    <span className="text-desc-type1">홍길동</span>
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
                    <label className="t-label">임용구분</label>
                    <span className="text-desc-type1">신규</span>
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
                    <label className="t-label">임용여부</label>
                    <span className="text-desc-type1">Y</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">비고</label>
                    <span className="text-desc-type1">
                      내용은 필수입력란은 아닙니다. 내용은 필수입력란은 아닙니다. 내용은 필수입력란은 아닙니다. 내용은
                      필수입력란은 아닙니다. 내용은 필수입력란은 아닙니다. 내용은 필수입력란은 아닙니다. 내용은
                      필수입력란은 아닙니다. 내용은 필수입력란은 아닙니다. 내용은 필수입력란은 아닙니다. 내용은
                      필수입력란은 아닙니다. 내용은 필수입력란은 아닙니다. 내용은 필수입력란은 아닙니다. 내용은
                      필수입력란은 아닙니다.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table line">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">링크 </label>
                    <span className="text-desc-type1">
                      <a href="javascript:void(0);">http://www.ksmstestdomain.com</a>
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
        </div>
        <hr className="line dp-n"></hr>
      </div>
      {/*//상세페이지*/}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}

      {/* 교수이수현황 toggle*/}
      <div className="info-wrap toggle">
        <dl className={firstExpaned ? 'tg-item active' : 'tg-item'}>
          <dt onClick={() => setFirstExpaned(!firstExpaned)}>
            <button type="button" className="btn-tg">
              {/* toggle 열어지면 active붙임*/}
              교수이수현황
              <div className="tag-info-wrap-end">
                <button type="button" name="button" className="btn_text btn_confirm">
                  추가
                </button>
                <button type="button" name="button" className="btn_text btn_confirm">
                  저장
                </button>
              </div>
              <span className={firstExpaned ? 'active' : ''}></span>
            </button>
          </dt>
          <dd className="tg-conts" style={{ display: firstExpaned ? '' : 'none' }}>
            <div className="edit-area edu">
              <div className="detailForm">
                <div className="history-info">
                  <div className="wid100">
                    <div className="listtable structor">
                      <table className="list-table">
                        <thead>
                          <tr>
                            <th>번호</th>
                            <th>
                              시작일자 <span className="required">*</span>
                            </th>
                            <th>
                              종료일자 <span className="required">*</span>
                            </th>
                            <th>교육명</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>2024-01-23</td>
                            <td>2024-01-23</td>
                            <td>1사분기 항공안전 안내프로그램</td>
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
      {/* //교수이수현황 toggle*/}
    </>
  );
}

export default SMSinstructorDetail;
