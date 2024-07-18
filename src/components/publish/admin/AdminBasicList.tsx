import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function AdminBasicList() {
  const rowData = getAllData();
  const columns = testColumnInfos;

  return (
    <>
      <div className="conts-tit">
        <h2>장비코드 관리</h2>
        <div className="controlArea">
          <button type="button" name="button" className="btn btn-control btn-darkblue">
            조회
          </button>
        </div>
      </div>

      {/*검색영역 */}
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
      {/* //검색영역 */}

      <AppTable rowData={rowData} columns={columns} />

      <div className="pagination">
        <a className="first" href="#">
          <span className="sr-only">이전</span>
        </a>
        <a className="prev" href="#">
          <span className="sr-only">이전</span>
        </a>
        <span>
          <a href="#">1</a>
          <a href="#">2</a>
          <strong title="현재페이지">3</strong>
          <a href="#">4</a>
          <a href="#">5</a>
        </span>
        <a className="next" href="#">
          <span className="sr-only">다음</span>
        </a>
        <a className="last" href="#">
          <span className="sr-only">다음</span>
        </a>
      </div>
    </>
  );
}

export default AdminBasicList;
