import AppAutoComplete from '@/components/common/AppAutoComplete';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppEditor from '@/components/common/AppEditor';
import AppSelect from '@/components/common/AppSelect';
import AppTextArea from '@/components/common/AppTextArea';
import AppTextInput from '@/components/common/AppTextInput';
import AppTimePicker from '@/components/common/AppTimePicker';
import AppTreeSelect from '@/components/common/AppTreeSelect';
import { DatePicker } from 'antd';
import { useState } from 'react';

function POccupationMu1P1edit() {
  return (
    <>
      <div className="conts-title">
        <h2>공지사항</h2>
      </div>
      {/* 입력영역 */}
      <div className="editbox">
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="본부" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="등록자" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput disabled label="등록일자" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label={'KSMS 사이렌 여부'} />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppSelect label={'상위 표출 여부'} />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <AppTextInput label="제목" />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppEditor placeholder="입력해주세요." />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="filebox">
                <input className="upload-name" value="첨부파일" placeholder="첨부파일" />
                <input type="file" id="file" />
                <label htmlFor="file" className="f-label">
                  파일찾기(작업중)
                </label>

                <button>추가</button>
                <button>삭제</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//입력영역*/}
      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
        <button type="button" name="button" className="btn_text btn-del">
          삭제
        </button>
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default POccupationMu1P1edit;
