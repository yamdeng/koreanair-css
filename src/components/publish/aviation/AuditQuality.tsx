import { useState } from 'react';
import { DatePicker, TimePicker, Select as AntSelect } from 'antd';
import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';
import AppDatePicker from '@/components/common/AppDatePicker';
import AppTextInput from '@/components/common/AppTextInput';
import AppSelect from '@/components/common/AppSelect';
import iconrefresh from '@/resources/images/icon_refresh.svg';

function AuditQuality() {
  const [inputValue, setInputValue] = useState('');
  const rowData = getAllData();
  const columns = testColumnInfos;
  const customButtons = [
    {
      title: 'Add Audit',
      onClick: () => {
        alert('Add Audit');
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
            <a href="javascript:void(0);">AUDIT</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">품질심사현황</a>
          </li>
        </ol>
      </div>
      {/*경로 */}
      {/* <div className="conts-title">
        <h2>예외 Audit 관리</h2>
      </div> */}
      <div className="equip-container">
        <div className="equip-contents">
          <div className="equip-left-box">
            {/*Audit 계획 대비 실적 */}
            <div className="plan-box">
              <div className="boxForm">
                <div className="form-table">
                  <div className="form-cell wid20">
                    <div className="form-group wid100">
                      <AppSelect label={'2024'} />
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <span className="title">부문별 Audit계획대비실적</span>
                  </div>
                  <div className="form-cell wid50">
                    <span className="info-tit">AVG. 72%</span>
                  </div>
                  <div className="form-cell wid20">
                    <div className="btn-area">
                      <button className="refresh">
                        <img src={iconrefresh} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-area">그래프 영역</div>
            </div>

            {/*CAR 처리 현황*/}
            <div className="plan-box">
              <div className="boxForm">
                <div className="form-table">
                  <div className="form-cell wid20">
                    <div className="form-group wid100">
                      <AppSelect label={'2024'} />
                    </div>
                  </div>
                  <div className="form-cell wid50">
                    <span className="title">부문별 CAR 처리현황</span>
                  </div>
                  <div className="form-cell wid50">
                    <span className="info-tit">AVG. 58%</span>
                  </div>
                  <div className="form-cell wid20">
                    <div className="btn-area">
                      <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                        새로고침
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxcons">
                <div className="box-wrap">
                  <div className="box-area">
                    <div className="box-area-top">
                      <div className="tit">
                        <span className="tit-top">총괄</span>
                      </div>
                      <div className="num">
                        87 / <span className="num-color">95%</span>
                      </div>
                    </div>
                    <div className="box-area-bottom">
                      <div className="text-bottom">
                        <ul>
                          <li>접수:10건</li>
                          <li>종결 : 20건</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-wrap">
                  <div className="box-area">
                    <div className="box-area-top">
                      <div className="tit">
                        <span className="tit-top">운항</span>
                      </div>
                      <div className="num">
                        42 / <span className="num-color">97%</span>
                      </div>
                    </div>
                    <div className="box-area-bottom">
                      <div className="text-bottom">
                        <ul>
                          <li>접수:10건</li>
                          <li>종결 : 20건</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-wrap">
                  <div className="box-area">
                    <div className="box-area-top">
                      <div className="tit">
                        <span className="tit-top">종합</span>
                      </div>
                      <div className="num">
                        75 / <span className="num-color">83%</span>
                      </div>
                    </div>
                    <div className="box-area-bottom">
                      <div className="text-bottom">
                        <ul>
                          <li>접수:10건</li>
                          <li>종결 : 20건</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-wrap">
                  <div className="box-area">
                    <div className="box-area-top">
                      <div className="tit">
                        <span className="tit-top">정비</span>
                      </div>
                      <div className="num">
                        50 / <span className="num-color">60%</span>
                      </div>
                    </div>
                    <div className="box-area-bottom">
                      <div className="text-bottom">
                        <ul>
                          <li>접수:10건</li>
                          <li>종결 : 20건</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="boxcons">
                <div className="box-wrap">
                  <div className="box-area">
                    <div className="box-area-top">
                      <div className="tit">
                        <span className="tit-top">객실</span>
                      </div>
                      <div className="num">
                        90 / <span className="num-color">33%</span>
                      </div>
                    </div>
                    <div className="box-area-bottom">
                      <div className="text-bottom">
                        <ul>
                          <li>접수:10건</li>
                          <li>종결 : 20건</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-wrap">
                  <div className="box-area">
                    <div className="box-area-top">
                      <div className="tit">
                        <span className="tit-top">여객</span>
                      </div>
                      <div className="num">
                        90 / <span className="num-color">33%</span>
                      </div>
                    </div>
                    <div className="box-area-bottom">
                      <div className="text-bottom">
                        <ul>
                          <li>접수:10건</li>
                          <li>종결 : 20건</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-wrap">
                  <div className="box-area">
                    <div className="box-area-top">
                      <div className="tit">
                        <span className="tit-top">화물</span>
                      </div>
                      <div className="num">
                        90 / <span className="num-color">33%</span>
                      </div>
                    </div>
                    <div className="box-area-bottom">
                      <div className="text-bottom">
                        <ul>
                          <li>접수:10건</li>
                          <li>종결 : 20건</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-wrap">
                  <div className="box-area">
                    <div className="box-area-top">
                      <div className="tit">
                        <span className="tit-top">보안</span>
                      </div>
                      <div className="num">
                        90 / <span className="num-color">33%</span>
                      </div>
                    </div>
                    <div className="box-area-bottom">
                      <div className="text-bottom">
                        <ul>
                          <li>접수:10건</li>
                          <li>종결 : 20건</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*탭*/}
          <div className="equip-right-box">
            <div className="boxForm audit">
              <div className="form-table audit">
                <div className="form-cell wid20">
                  <div className="form-group wid100">
                    <AppSelect label={'2024'} />
                  </div>
                </div>
                <div className="form-cell wid30">
                  <div className="form-group wid100">
                    <AppSelect label={'부문'} />
                  </div>
                </div>
                <div className="form-cell wid100">
                  <div className="menu-tab-nav">
                    <div className="menu-tab">
                      <a href="javascript:void(0);" className="active" data-label="HZR 전사 TOP RISK 분석 현황">
                        지역별현황
                      </a>
                      <a href="javascript:void(0);" className="" data-label="TOP EVENT 현황">
                        ESP
                      </a>
                      <a href="javascript:void(0);" className="" data-label="TOP EVENT 현황">
                        비행단계별
                      </a>
                      <a href="javascript:void(0);" className="" data-label="TOP EVENT 현황">
                        TOP 10 CAR
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-area">
              <div className="world">운항 영역</div>
              <div className="">객실 영역</div>
              <div className="">그리드</div>
            </div>
          </div>
        </div>

        {/*년도별 car평균*/}
        <div className="equip-bottom-box">
          <div className="boxForm ">
            <div className="form-table">
              <div className="form-cell wid10">
                <span className="title">년도별 CAR 평균</span>
              </div>
              <div className="form-cell wid100">
                <div className="radio-wrap border-no">
                  <label>
                    <input type="checkbox" />
                    <span>ESP 포함</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="user-box-cons">
            <div className="cons-wrap2">
              {/*Region */}
              <div className="cons-box gr">
                <div className="txt">Region</div>
                <div className="cons-list scroll">
                  <ul className="list">
                    <li>
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap gr active btn-txt active">
                          KOR
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap gr btn-txt">
                          AME
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap gr btn-txt">
                          EUR,MEA
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap gr active btn-txt">
                          CHN
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap gr active btn-txt">
                          JPN
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="list-area wid100">
                        <button type="button" className="btn-wrap gr active btn-txt">
                          SEA,OCN
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cons-box gr">그래프영역</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuditQuality;
