import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppAutoComplete from '@/components/common/AppAutoComplete';

function PayDetail() {
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
            <a href="javascript:void(0);">안전위험관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">결제상세정보</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>결제 상세 정보</h2>
      </div>
      {/*상세 */}
      <div className="editbox">
        <div className="form-table line">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      내무 결재 번호 <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">
                      <a href="javascript:void(0);">APR-20240925001</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      요청일시
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1"> 2024-09-07 13:43:08</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      요청자사번
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">2499843</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      요청자 성명
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">홍길동</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line dp-n"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">
                      결재 요청 요약 정보 조회
                      <span className="required"></span>
                    </label>
                    <span className="text-desc-type1">정보 조회 영역</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/* 파일첨부영역 : drag */}
        <div className="form-table line">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <div className="box-view-list">
                <ul className="view-list">
                  <li className="accumlate-list">
                    <label className="t-label">의견 </label>
                    <span className="text-desc-type1">
                      <div className="opinion">의견을 입력해 주세요.</div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
      </div>
      {/* //상세 */}
      <div className="listtable">
        <table className="info-board">
          <colgroup>
            <col width="8%" />
            <col width="10%" />
            <col width="20%" />
            <col width="47%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th>순번</th>
              <th>승인자</th>
              <th>승인일시</th>
              <th>의견</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>홍길동</td>
              <td>2024-07-20 12:34</td>
              <td className="tl">
                <a href="javascript:void(0);">하드랜딩 오류 정보 확인 승인</a>
              </td>
              <td>결제완료</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          수정
        </button>
        <button type="button" name="button" className="btn_text btn-del">
          반려
        </button>
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default PayDetail;
