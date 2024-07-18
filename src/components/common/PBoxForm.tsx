function PBoxForm() {
  return (
    <div className="boxForm">
      <div className="form-table">
        <form>
          <fieldset>
            <legend>검색</legend>
            <div className="border-box topInputArea">
              <div className="container-fluid">
                <div className="inpup-group-wrap">
                  <div className="row">
                    <div className="col-3">
                      <div className="input-group">
                        <div className="input-tit">
                          <label className="label">장비번호</label>
                        </div>
                        <input type="text" className="textBox flex" disabled />
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="input-group">
                        <div className="input-tit">
                          <label className="label">장비명</label>
                        </div>
                        <input type="text" className="textBox flex" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="input-group">
                        <div className="input-tit">
                          <label className="label">모델명</label>
                        </div>
                        <input type="text" className="textBox flex" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-3">
                      <div className="input-group">
                        <div className="input-tit">
                          <label className="label">구분</label>
                        </div>
                        <select className="searchSelect flex" data-title="선택해주세요.">
                          <option>전체</option>
                          <option>전체</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group">
                        <div className="input-tit">
                          <label className="label">부서</label>
                        </div>
                        <select className="searchSelect flex" data-title="선택해주세요.">
                          <option>전체</option>
                          <option>전체</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group">
                        <div className="input-tit">
                          <label className="label">업체명</label>
                        </div>
                        <input type="text" className="textBox flex" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group">
                        <div className="input-tit">
                          <label className="label">사용유무</label>
                        </div>
                        <select className="searchSelect flex" data-title="선택해주세요.">
                          <option>전체</option>
                          <option>전체</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PBoxForm;
