import { useState } from 'react';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';

function POccupationPortal2() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="conts-title">
        <h2>공지사항</h2>
      </div>
      {/*검색영역 */}
      <div className="TopButton-area">
        <div className="boxForm">
          <div className="form-table">
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'본부'} />
              </div>
            </div>
            <div className="form-cell wid100">
              <div className="form-group form-glow">
                <div className="df">
                  <div className="date1">
                    <AppDatePicker label="등록일자" />
                  </div>
                  <span className="unt">~</span>
                  <div className="date2">
                    <AppDatePicker label="등록일자" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell wid50">
              <div className="form-group wid100">
                <AppSelect label={'구분'} />
              </div>
            </div>
            <div className="form-cell wid100">
              <div className="form-group wid100">
                <AppSearchInput label="검색" />
              </div>
            </div>
            <div className="btn-area">
              <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                조회
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //검색영역 */}
      {/*그리드영역 */}
      <div className="">
        <table className="notice-board">
          <colgroup>
            <col width="10%" />
            <col width="40%" />
            <col width="30%" />
            <col width="20%" />
          </colgroup>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>본부</th>
            <th>등록일자</th>
          </tr>
          <tr className="fix-bg">
            <td className="fix">상위노출</td>
            <td className="left">
              <a href="javascript:void(0);">제목입니다.</a>
            </td>
            <td className="department">산업안전</td>
            <td className="date">2024-08-05</td>
          </tr>
          <tr className="fix-bg">
            <td className="fix">상위노출</td>
            <td className="left">
              <a href="javascript:void(0);">제목입니다.</a>
            </td>
            <td>산업안전</td>
            <td>2024-08-05</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="left">
              <a href="javascript:void(0);">제목입니다.</a>
            </td>
            <td>산업안전</td>
            <td>2024-08-05</td>
          </tr>
          <tr>
            <td>2</td>
            <td className="left">
              <a href="javascript:void(0);">제목입니다.</a>
            </td>
            <td>산업안전</td>
            <td>2024-08-05</td>
          </tr>
        </table>
        <div className="pagination"></div>
      </div>
      {/*//그리드영역 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          신규
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationPortal2;
