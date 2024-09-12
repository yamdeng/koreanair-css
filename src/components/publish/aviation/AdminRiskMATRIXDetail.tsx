import AppDatePicker from '@/components/common/AppDatePicker';
import AppSearchInput from '@/components/common/AppSearchInput';
import AppSelect from '@/components/common/AppSelect';
import AppTable from '@/components/common/AppTable';
import AppTextInput from '@/components/common/AppTextInput';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppTextArea from '@/components/common/AppTextArea';

function AdminRiskMATRIXDetail() {
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
            <a href="javascript:void(0);">안전보고서</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">Risk MATRIX</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      <div className="conts-title">
        <h2>Risk Matrix 관리 수정</h2>
      </div>

      {/*그리드영역 */}
      <div className="RiskLevel-Wrap">
        <div className="RiskLevel-Left">
          <div className="h4-tit">발생가능성</div>
          <div className="tableTop">
            <table className="RiskLevelTable left">
              <caption></caption>
              <colgroup>
                <col width="8%" />
                <col width="18%" />
                <col width="37%" />
                <col width="37%" />
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>발생가능성</th>
                  <th>정성적평가</th>
                  <th>정량적평가</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>5</th>
                  <td className="">매우높음</td>
                  <td className="">
                    <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                  </td>
                  <td>
                    <AppTextArea
                      label=""
                      style={{ width: '100%', height: 82 }}
                      errorMessage=""
                      placeholder="5일 단위
(1년 중 65건 이상)
"
                    />
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td className="">높음</td>
                  <td className="">
                    <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                  </td>
                  <td>
                    <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td className="">보통</td>
                  <td className="">
                    <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                  </td>
                  <td>
                    <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td className="">낮음</td>
                  <td className="">
                    <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                  </td>
                  <td>
                    <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td className="">매우 낮음</td>
                  <td className="">
                    <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                  </td>
                  <td>
                    <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="RiskLevel-Right">
          <div className="h4-tit">RISK</div>
          <div className="">
            <table className="RiskLevelTable Risk">
              <caption></caption>
              <colgroup></colgroup>
              <thead>
                <tr>
                  <th rowSpan={2}>
                    발생
                    <br />
                    가능성
                  </th>
                  <th colSpan={5}>심각도</th>
                </tr>
                <tr>
                  <th>LevelA</th>
                  <th>LevelB</th>
                  <th>LevelC</th>
                  <th>LevelD</th>
                  <th>LevelE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>5</th>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td className="">
                    {' '}
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                  <td className="">
                    <AppSelect label={''} />
                    <AppTextInput label="" style={{ marginTop: '0.5rem' }} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="RiskLevel-bottom">
        <p className="h4-tit">심각도</p>
        <div className="tableTop">
          <table className="RiskLevelTable severity">
            <caption></caption>
            <colgroup>
              <col width="5%" />
              <col width="10%" />
              <col width="17%" />
              <col width="17%" />
              <col width="17%" />
              <col width="17%" />
              <col width="17%" />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>심각도구분</th>
                <th>매우심각</th>
                <th>위험</th>
                <th>중요</th>
                <th>경이</th>
                <th>매우경미</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>4</th>
                <td className="">인적상해</td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td className="">안전운항</td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td className="">감항성</td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td className="">비용발생</td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
                <td className="">
                  <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*//그리드영역 */}

      {/* 하단버튼영역 */}
      <div className="contents-btns">
        <button type="button" name="button" className="btn_text text_color_neutral-10 btn_confirm">
          저장
        </button>
        <button type="button" name="button" className="btn_text btn_list">
          목록
        </button>
      </div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default AdminRiskMATRIXDetail;
