import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function AdminReportDateList() {
  const rowData = getAllData();
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
            <a href="javascript:void(0);">Admin</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">보고서 키워드 관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">키워드</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>보고서 기한 관리</h2>
      </div>

      {/*검색영역 */}
      {/* <div className="boxForm">
        <div className="form-table">
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label={'부분'} />
            </div>
          </div>
          <div className="form-cell wid50">
            <div className="form-group wid100">
              <AppTextInput label={'키워드'} />
            </div>
          </div>
          <div className="form-cell wid30">
            <div className="form-group wid100">
              <AppSelect label={'사용여부'} />
            </div>
          </div>

          <div className="btn-area df">
            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
              조회
            </button>
          </div>
        </div>
      </div> */}
      {/* //검색영역 */}

      {/*그리드영역 */}

      <div className="btn-area mb10">
        <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
          조회
        </button>
      </div>
      <div className="history-info">
        <div className="wid100">
          <div className="listtable report">
            <table className="list-table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>기한 구분</th>
                  <th>일수</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="tl">접수</td>
                  <td>
                    {' '}
                    <div className="form-cell">
                      <div className="form-group wid100">
                        <AppTextInput label={''} placeholder={'3'} style={{ textAlign: 'right' }} />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="tl">1차위험도평가</td>
                  <td>
                    {' '}
                    <div className="form-cell">
                      <div className="form-group wid100">
                        <AppTextInput label={''} />
                      </div>
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

export default AdminReportDateList;
