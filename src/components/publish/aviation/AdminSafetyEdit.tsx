import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextArea from '@/components/common/AppTextArea';
import AppEditor from '@/components/common/AppEditor';

function AdminSafetyEdit() {
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
            <a href="javascript:void(0);">Admin</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">게시판관리</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">안전목표</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>안전목표 신규</h2>
      </div>

      {/* 입력영역 */}
      <div className="editbox">
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid30">
              <AppDatePicker label={'연도'} required />
            </div>
          </div>
        </div>
        <hr className="line"></hr>

        <div className="form-table">
          <div className="form-cell wid100">
            <h3 className="table-tit">Subject</h3>
            <div className="form-group wid100">
              <AppTextInput label="제목" />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid50">
            <h3 className="table-tit">Description</h3>
            <div className="form-group wid100">
              <AppEditor placeholder="입력해주세요." />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid50">
            <h3 className="table-tit">Description</h3>
            <div className="form-group wid100">
              <AppEditor placeholder="입력해주세요." />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid30">
              <AppTextInput label="목표치(SPT)" />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="admin-table-box">
              <table className="admin-table">
                <colgroup>
                  <col width="8%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="7%" />
                  <col width="8%" />
                </colgroup>
                <tr>
                  <th>구분</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                  <th>11</th>
                  <th>12</th>
                  <th>13</th>
                  <th>TTL</th>
                </tr>
                <tr>
                  <th>엔진시간(Hour)</th>
                  <td>
                    <AppTextInput label="" />
                  </td>
                  <td>
                    <AppTextInput label="" />
                  </td>
                  <td>
                    <AppTextInput label="" />
                  </td>
                  <td>
                    <AppTextInput label="" />
                  </td>
                  <td>
                    <AppTextInput label="" />
                  </td>
                  <td>
                    <AppTextInput label="" />
                  </td>
                  <td>
                    <AppTextInput label="" />
                  </td>
                  <td>
                    <AppTextInput label="" />
                  </td>
                  <td>
                    <AppTextInput label="" />
                  </td>
                  <td>
                    <AppTextInput label="" />
                  </td>
                  <td>
                    <AppTextInput label="" />
                  </td>
                  <td>
                    <AppTextInput label="" />
                  </td>
                  <td>2609731.46</td>
                </tr>
                <tr>
                  <th>누적 엔진시간(Hour)</th>
                  <td>115496.90</td>
                  <td>115496.90</td>
                  <td>115496.90</td>
                  <td>fd</td>
                  <td>fd</td>
                  <td>fd</td>
                  <td>fd</td>
                  <td>fd</td>
                  <td>fd</td>
                  <td>fd</td>
                  <td>fd</td>
                  <td>2609731.46</td>
                  <td>-</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
      </div>
      {/*//입력영역*/}

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

export default AdminSafetyEdit;
