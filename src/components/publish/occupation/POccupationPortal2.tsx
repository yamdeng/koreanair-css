import { useState } from 'react';
import AppSearchnput from '@/components/common/AppSearchnput';
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
                <AppSearchnput label="검색" />
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
      <div className="">그리드영역</div>
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
