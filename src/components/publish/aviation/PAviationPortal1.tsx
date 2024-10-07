import { useEffect } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';
import AppSelect from '@/components/common/AppSelect';
import mainphoto from '@/resources/images/av-img.jpg';
import chartasr from '@/resources/images/ASR-box.svg';
import chartmsr from '@/resources/images/MSR-box.svg';
import Slider from 'react-slick';

function PAviationPortal1() {
  const { setIsAviationPortal } = useStore(useAppStore, (state) => state) as any;
  const topRiskSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    setIsAviationPortal(true);
    return () => {
      setIsAviationPortal(false);
    };
  }, []);
  return (
    <>
      {/*nav-is-visible - 펼침 */}
      <div className="cd-stretchy-nav nav-is-visible">
        <a href="javascript:void(0);" className="cd-nav-trigger">
          <span aria-hidden="true"></span>
        </a>
        <ul>
          <li>
            <a href="javascript:void(0);" className="active">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>Store</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>0606</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>0707</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>0808</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>0909</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>1010</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>1111</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>1212</span>
            </a>
          </li>
        </ul>

        <span aria-hidden="true" className="stretchy-nav-bg"></span>
      </div>

      <div className="av-main-wrap">
        {/* Top 10 RISK AREAS*/}
        <div className="grid-item">
          <div className="grid-group">
            <div className="head-top">
              <h3>
                Top 10 RISK AREAS
                <span className="txt-info">* 해당 기간 중 이벤트 발생 건 위험도 순위</span>
              </h3>
            </div>

            <Slider {...topRiskSettings} key={'topRiskElement'}>
              <div className="risk-conts-area">
                <div className="risk-box">
                  <div className="IcoTags">
                    <span className="ico-tag">1</span>
                  </div>
                  <div className="risk-conts">
                    <div className="txt">
                      Air turn back/
                      <br />
                      Diversion(Technicalreasons)
                    </div>
                    <span className="sub-txt">
                      Number of occurrence <strong>5</strong>
                    </span>
                  </div>
                  <div className="risk-bottom">
                    <ul className="sort-box">
                      <li className="gray">0</li>
                      <li className="orange">1</li>
                      <li className="yellow">4</li>
                      <li className="gray">0</li>
                    </ul>
                  </div>
                </div>
                <div className="risk-box">
                  <div className="IcoTags">
                    <span className="ico-tag">2</span>
                  </div>
                  <div className="risk-conts">
                    <div className="txt">
                      GPWS
                      <br />
                      (Don't sink)
                    </div>
                    <span className="sub-txt">
                      Number of occurrence <strong>1</strong>
                    </span>
                  </div>
                  <div className="risk-bottom">
                    <ul className="sort-box">
                      <li className="gray">0</li>
                      <li className="gray">0</li>
                      <li className="yellow">1</li>
                      <li className="gray">0</li>
                    </ul>
                  </div>
                </div>
                <div className="risk-box">
                  <div className="IcoTags">
                    <span className="ico-tag">3</span>
                  </div>
                  <div className="risk-conts">
                    <div className="txt">
                      Aircraft damage
                      <br />
                    </div>
                    <span className="sub-txt">
                      Number of occurrence <strong>3</strong>
                    </span>
                  </div>
                  <div className="risk-bottom">
                    <ul className="sort-box">
                      <li className="gray">0</li>
                      <li className="gray">0</li>
                      <li className="yellow">3</li>
                      <li className="gray">0</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="risk-conts-area">
                <div className="risk-box">
                  <div className="IcoTags">
                    <span className="ico-tag">1</span>
                  </div>
                  <div className="risk-conts">
                    <div className="txt">
                      Air turn back/
                      <br />
                      Diversion(Technicalreasons)
                    </div>
                    <span className="sub-txt">
                      Number of occurrence <strong>5</strong>
                    </span>
                  </div>
                  <div className="risk-bottom">
                    <ul className="sort-box">
                      <li className="gray">0</li>
                      <li className="orange">1</li>
                      <li className="yellow">4</li>
                      <li className="gray">0</li>
                    </ul>
                  </div>
                </div>
                <div className="risk-box">
                  <div className="IcoTags">
                    <span className="ico-tag">2</span>
                  </div>
                  <div className="risk-conts">
                    <div className="txt">
                      GPWS
                      <br />
                      (Don't sink)
                    </div>
                    <span className="sub-txt">
                      Number of occurrence <strong>1</strong>
                    </span>
                  </div>
                  <div className="risk-bottom">
                    <ul className="sort-box">
                      <li className="gray">0</li>
                      <li className="gray">0</li>
                      <li className="yellow">1</li>
                      <li className="gray">0</li>
                    </ul>
                  </div>
                </div>
                <div className="risk-box">
                  <div className="IcoTags">
                    <span className="ico-tag">3</span>
                  </div>
                  <div className="risk-conts">
                    <div className="txt">
                      Aircraft damage
                      <br />
                    </div>
                    <span className="sub-txt">
                      Number of occurrence <strong>3</strong>
                    </span>
                  </div>
                  <div className="risk-bottom">
                    <ul className="sort-box">
                      <li className="gray">0</li>
                      <li className="gray">0</li>
                      <li className="yellow">3</li>
                      <li className="gray">0</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="risk-conts-area">
                <div className="risk-box">
                  <div className="IcoTags">
                    <span className="ico-tag">4</span>
                  </div>
                  <div className="risk-conts">
                    <div className="txt">
                      Runway incursion
                      <br />
                    </div>
                    <span className="sub-txt">
                      Number of occurrence <strong>1</strong>
                    </span>
                  </div>
                  <div className="risk-bottom">
                    <ul className="sort-box">
                      <li className="gray">0</li>
                      <li className="gray">0</li>
                      <li className="yellow">1</li>
                      <li className="gray">0</li>
                    </ul>
                  </div>
                </div>
                <div className="risk-box">
                  <div className="IcoTags">
                    <span className="ico-tag">5</span>
                  </div>
                  <div className="risk-conts">
                    <div className="txt">
                      Flight cancelled
                      <br />
                    </div>
                    <span className="sub-txt">
                      Number of occurrence <strong>1</strong>
                    </span>
                  </div>
                  <div className="risk-bottom">
                    <ul className="sort-box">
                      <li className="gray">0</li>
                      <li className="gray">0</li>
                      <li className="yellow">1</li>
                      <li className="gray">0</li>
                    </ul>
                  </div>
                </div>
                <div className="risk-box">
                  <div className="IcoTags">
                    <span className="ico-tag">6</span>
                  </div>
                  <div className="risk-conts">
                    <div className="txt">
                      GPWS warning/caution
                      <br />
                    </div>
                    <span className="sub-txt">
                      Number of occurrence <strong>2</strong>
                    </span>
                  </div>
                  <div className="risk-bottom">
                    <ul className="sort-box">
                      <li className="gray">0</li>
                      <li className="gray">0</li>
                      <li className="yellow">2</li>
                      <li className="gray">0</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          {/* 보고서 처리 현황*/}
          <div className="grid-group">
            <div className="head-top">
              <h3>보고서 처리 현황</h3>
              <ul className="guide-info">
                <li>
                  <span className="color green"></span>90% 이상
                </li>
                <li>
                  <span className="color yellow"></span>80%~90%
                </li>
                <li>
                  <span className="color orange"></span>70%~60%
                </li>
                <li>
                  <span className="color red"></span>60% 미만
                </li>
              </ul>

              {/* <div className="wid70">dfdf</div> */}
            </div>
            <div className="main-conts-graph">
              <div className="graph-box">
                <img src={chartasr} className="" alt="ASR" />
              </div>
              <div className="graph-box">
                <img src={chartmsr} className="" alt="MSR" />
              </div>
              <div className="graph-box">
                <img src={chartmsr} className="" alt="GSR" />
              </div>
              <div className="graph-box">
                <img src={chartmsr} className="" alt="DSR" />
              </div>
            </div>
            <div className="main-conts-graph">
              <div className="graph-box">
                <img src={chartasr} className="" alt="ASR" />
              </div>
              <div className="graph-box">
                <img src={chartmsr} className="" alt="MSR" />
              </div>
              <div className="graph-box">
                <img src={chartmsr} className="" alt="GSR" />
              </div>
              <div className="graph-box">
                <img src={chartmsr} className="" alt="DSR" />
              </div>
            </div>
          </div>
        </div>

        {/* TO DO LIST*/}
        <div className="grid-item">
          <h3>TO DO LIST</h3>
          <div className="main-table-box">
            <table className="main-table-todo">
              <thead>
                <tr>
                  <th>Doc No.</th>
                  <th>Subject.</th>
                  <th>Submit Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="javascript:void(0);">CSR-104005</a>
                  </td>
                  <td>
                    <a href="javascript:void(0);">비행 시간 초과운영</a>
                  </td>
                  <td className="date">2024-07-18</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);">CSR-104005</a>
                  </td>
                  <td>
                    <a href="javascript:void(0);">비행 시간 초과운영</a>
                  </td>
                  <td>2024-07-18</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);">CSR-104005</a>
                  </td>
                  <td>
                    <a href="javascript:void(0);">비행 시간 초과운영</a>
                  </td>
                  <td>2024-07-18</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);">CSR-104005</a>
                  </td>
                  <td>
                    <a href="javascript:void(0);">비행 시간 초과운영</a>
                  </td>
                  <td>2024-07-18</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);">CSR-104005</a>
                  </td>
                  <td>
                    <a href="javascript:void(0);">비행 시간 초과운영</a>
                  </td>
                  <td>2024-07-18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* photo*/}
        <div className="grid-item photo">
          {/*
          <div className="main-photo">
            <img src={mainphoto} className="" alt="photo" />
          </div>
          */}
          <h3 className="img-tit">2024년 1분기 SMS Excellence 우수보고서</h3>

          <Slider {...bannerSettings} key={'topRiskElement'}>
            <div className="main-photo">
              <img src={mainphoto} className="" alt="photo" />
              <h3 className="img-tit">2024년 1분기 SMS Excellence 우수보고서123</h3>
            </div>
            <div className="main-photo">
              <img src={mainphoto} className="" alt="photo" />
              <h3 className="img-tit">2024년 1분기 SMS Excellence 우수보고서555</h3>
            </div>
          </Slider>
        </div>

        {/* 공지사항/사고준사고 현황 */}
        <div className="grid-item">
          <h3>
            <ul className="main-tab">
              <li>
                <a className="active" href="javascript:void(0);">
                  공지사항
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">사고준사고 현황</a>
              </li>
            </ul>
          </h3>
          <div className="main-table-box">
            <table className="main-table">
              <tr>
                <th>
                  <a href="javascript:void(0);">[공지] 안전장려금 제33차 운영 현황 안내</a>
                </th>
                <td>
                  <span className="date">2024-00-00</span>
                  <span className="wait">관리자</span>
                </td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">[최근이슈] KE189/JUN22 여압장치..</a>
                </th>
                <td>
                  <span className="date">2024-00-00</span>
                  <span className="wait">관리자</span>
                </td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">[안전지시] 2024 하절기 대비 안전관리..</a>
                </th>
                <td>
                  <span className="date">2024-00-00</span>
                  <span className="wait">관리자</span>
                </td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">[공지] 2024년 상반기 SMS Excellence..</a>
                </th>
                <td>
                  <span className="wait">2024-00-00</span>
                  <span className="wait">관리자</span>
                </td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">[공지] 2024년 제3차 중앙안전위원회(SRB) 결과 ..</a>
                </th>
                <td>
                  <span className="date">2024-00-00</span>
                  <span className="wait">관리자</span>
                </td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">[공지] 2024년 7월 안전보안월례회의 (MSSM) 결과....</a>
                </th>
                <td>
                  <span className="date">2024-00-00</span>
                  <span className="wait">관리자</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/*}
      <div className="main-top-wrrap">
        <div className="RiskBox" style={{ border: 'solid 1px blue' }}>
          <div className="row-top">
            <h3 className="tit">Top 10 Risk Areas</h3>
          </div>
          <div className="rowListbox">
            <div className="swiper RiskList">
              <div className="swiper-wrapper">
                <div className="swiper-slide"></div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div className="ReprtBox">
          <div className="ReprtBox"></div>
        </div>

        <div className="TOdo-box">
          <div className="">dfdfd</div>
        </div>
        <div className="Photo-box">dfdf</div>
        <div className="Notice-box">dfdf</div>
      </div>
      {/*<div className="main_slide">
        <div className="title-area">
          <div className="h2-tit">Top10 RISK AREAS</div>
          <div className="">고위험고빈도</div>
        </div>
        <div>*해당기간 중 이벤트 발생 건 위험도 순위</div>
      </div>
      <div className="main_grap">
        <div className="main_slide-b">
          <div className="title-area">
            <div className="h2-tit">보고서 처리 현황</div>
            <div className="">고위험고빈도</div>
          </div>
        </div>
      </div>

      <div className="section_2" style={{ border: 'solid 1px red' }}>
        <div className="1">
          <div className="title-area">
            <div className="h2-tit">TO DO LIST</div>
          </div>
        </div>
        <div className="2">사진영역</div>
        <div className="3"></div>
      </div>*/}
    </>
  );
}

export default PAviationPortal1;
