import { useState } from 'react';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppDatePicker from '@/components/common/AppDatePicker';

function POccupationPortal2input() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="conts-title">
        <h2>공지사항</h2>
      </div>
      {/*등록 */}
      <div className="editbox">
        <div className="form-table"></div>
      </div>

      {/*//등록 */}
      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          <span className="share">공유</span>
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          삭제
        </button>
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationPortal2input;
