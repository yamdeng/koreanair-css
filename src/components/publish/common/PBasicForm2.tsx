import AppTextInput from '@/components/common/AppTextInput';

function PBasicForm2() {
  return (
    <>
      <div className="conts-title">
        <h2>Taxonomy 등록</h2>
      </div>
      {/*등록 */}
      <div className="editbox">
        {/* 1행 */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="일반 text-input" required />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/* 2행 */}
        <div className="form-table">
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label="일반 text-input" errorMessage="bbbb" />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput inputType="number" label="일반 number-input" />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        {/* 3행 */}
        <div className="form-table">
          {/* 라벨이 없는 경우 : radio */}
          <div className="form-cell wid50">
            <div className="group-box-wrap wid100">
              <div className="radio-wrap border-no">
                <label>
                  <input type="radio" checked />
                  <span>체크</span>
                </label>
                <label>
                  <input type="radio" />
                  <span>미체크</span>
                </label>
              </div>
            </div>
          </div>
          {/* 라벨이 있는 경우 : radio */}
          <div className="form-cell wid50">
            <div className="group-box-wrap wid100">
              <span className="txt">
                SPI 여부<span className="required">*</span>
              </span>
              <div className="radio-wrap error">
                <label>
                  <input type="radio" checked />
                  <span>YES</span>
                </label>
                <label>
                  <input type="radio" />
                  <span>NO</span>
                </label>
              </div>
              <span className="errorText">error</span>
            </div>
          </div>
        </div>

        {/* 4행 */}
        <div className="form-table">
          {/* 라벨이 없는 경우 : checkbox */}
          <div className="form-cell wid50">
            <div className="group-box-wrap wid100">
              <div className="radio-wrap border-no">
                <label>
                  <input type="checkbox" checked />
                  <span>체크박스</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>미체크</span>
                </label>
              </div>
            </div>
          </div>
          {/* 라벨이 있는 경우 : checkbox */}
          <div className="form-cell wid50">
            <div className="group-box-wrap wid100">
              <span className="txt">
                타이틀<span className="required">*</span>
              </span>
              <div className="radio-wrap error">
                <label>
                  <input type="checkbox" checked />
                  <span>체크박스</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>미체크</span>
                </label>
              </div>
              <span className="errorText">error</span>
            </div>
          </div>
        </div>
      </div>

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button className="btn_text text_color_neutral-10 btn_confirm">저장</button>
        <button className="btn_text text_color_darkblue-100 btn_close">취소</button>
      </div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default PBasicForm2;
