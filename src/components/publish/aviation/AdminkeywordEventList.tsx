import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function AdminkeywordEventList() {
  const rowData = getAllData();
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: '글쓰기',
      onClick: () => {
        alert('글쓰기');
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
            <a href="javascript:void(0);">Admin</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">보고서 키워드 관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">이벤트</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>보고서 키워드 관리</h2>
      </div>
      {/*탭 */}
      <div className="menu-tab-nav">
        <div className="menu-tab">
          <a href="javascript:void(0);" className="" data-label="키워드">
            키워드
          </a>
          <a href="javascript:void(0);" className="active" data-label="이벤트">
            이벤트
          </a>
        </div>
      </div>
      {/*검색영역 */}
      <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid30">
            <div className="form-group wid20">
              <AppSelect label={'보고서구분'} />
            </div>
          </div>

          {/* <div className="btn-area df">
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              조회
            </button>
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              초기화
            </button>
          </div> */}
        </div>
      </div>
      {/* //검색영역 */}

      {/*그리드영역 */}
      <div className="history-info">
        <div className="wid100">
          <div className="listtable event">
            <table className="list-table">
              <thead>
                <tr>
                  <th>EVENT TYPE</th>
                  <th>운항</th>
                  <th>정비</th>
                  <th>객실</th>
                  <th>통제</th>
                  <th>여객</th>
                  <th>화물</th>
                  <th>OYI</th>
                  <th>OYS</th>
                  <th>추가</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tl">Bird strike</td>
                  <td>
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" disabled />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="tl"> Smoke</td>
                  <td>
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" disabled />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="tl">Bird strike</td>
                  <td>
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" disabled />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="tl"> Smoke</td>
                  <td>
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" disabled />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="chk-wrap center">
                      <label className="text-no">
                        <input type="checkbox" checked />
                        <span className="text-no"></span>
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/*//그리드영역 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
      </div>
      {/*//하단버튼영역*/}
    </>
  );
}

export default AdminkeywordEventList;
