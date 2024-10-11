import ReactFullpage from '@fullpage/react-fullpage';
import Slider from 'react-slick';
import koreanairLogoImage from '@/resources/images/Koreanair-logo.svg';
import TopMenuImage from '@/resources/images/menu-fries-w.svg';
import SafetyPolicy from '@/resources/images/safetypolicy.jpg';
import cont01 from '@/resources/images/cont01.png';
import cont02 from '@/resources/images/cont02.png';
import cont03 from '@/resources/images/cont03.png';
import cont031 from '@/resources/images/cont03-1.png';

function HomePortal1() {
  const nextSlide = () => {
    const fullpageApi = window.fullpage_api;
    fullpageApi.moveSectionDown();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="intro-top-menu">
        <div className="top_container">
          <div className="logo">
            <a href="javascript:void(0);">
              <img src={koreanairLogoImage} />
            </a>
          </div>
          {/*'close'-모바일메뉴활성화 */}
          <button className="top_menu_btn close">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </button>
          <div className="top_menu dropmenu">
            <ul>
              <li>
                <a className="active" href="javascript:void(0);">
                  항공안전
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">산업안전</a>
              </li>
              <li>
                <a href="javascript:void(0);">안전보고서</a>
                {/* dropmenu */}
                <div>
                  <table className="portal-menu">
                    <tr>
                      <th>
                        <a href="javascript:void(0);">운항</a>
                      </th>
                      <td>
                        <a href="javascript:void(0);">ASR</a>
                      </td>
                      <td>
                        <a href="javascript:void(0);">HZR</a>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>
                        <a href="javascript:void(0);">객실</a>
                      </th>
                      <td>
                        <a href="javascript:void(0);">CSR</a>
                      </td>
                      <td>
                        <a href="javascript:void(0);">HZR</a>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>
                        <a href="javascript:void(0);">정비</a>
                      </th>
                      <td>
                        <a href="javascript:void(0);">MSR</a>
                      </td>
                      <td>
                        <a href="javascript:void(0);">HZR</a>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>
                        <a href="javascript:void(0);">통제</a>
                      </th>
                      <td>
                        <a href="javascript:void(0);">GSR</a>
                      </td>
                      <td>
                        <a href="javascript:void(0);">DSR</a>
                      </td>
                      <td>
                        <a href="javascript:void(0);">HZR</a>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <a href="javascript:void(0);">여객</a>
                      </th>
                      <td>
                        <a href="javascript:void(0);">GSR</a>
                      </td>
                      <td>
                        <a href="javascript:void(0);">HZR</a>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>
                        <a href="javascript:void(0);">화물</a>
                      </th>
                      <td>
                        <a href="javascript:void(0);">GSR</a>
                      </td>
                      <td>
                        <a href="javascript:void(0);">HZR</a>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>
                        <a href="javascript:void(0);">안전</a>
                      </th>
                      <td>
                        <a href="javascript:void(0);">GSR</a>
                      </td>
                      <td>
                        <a href="javascript:void(0);">HZR</a>
                      </td>
                      <td>
                        <a href="javascript:void(0);">RSR</a>
                      </td>
                    </tr>
                  </table>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fix-card">
        <span className="txt">안전정책</span>
      </div>
      <div className="fix-card-conts">
        <img src={SafetyPolicy} />
        {/* 우측 아이콘 영역 클릭시 나오는 이미지 영역*/}
        {/* (이미지활성화 -'active') */}
      </div>
      <div className="bottom-arrow" onClick={nextSlide}>
        <a href="javascript:void(0);">
          <span></span>
          <span></span>
          <span></span>
          Scroll
        </a>
      </div>
      {/*<div className="fix-card">
        <span className="txt">안전정책</span>
      </div>*/}
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        navigation
        anchors={['firstPage', 'secondPage', 'thirdPage']}
        sectionsColor={['#red', '#red', '#red']}
        scrollingSpeed={1000} /* Options here */
        scrollOverflow={false}
        render={({ state, fullpageApi }) => {
          window.fullpage_api = fullpageApi;
          return (
            <ReactFullpage.Wrapper>
              <div className="section" style={{ color: 'white' }}>
                {/*<p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>*/}
                <div className="body_container_video">
                  <div id="visual01" className="videovisual active">
                    <div className="title">대한항공 안전 - KSMS</div>
                    <div className="subtitle">
                      항공 및 산업안전 데이터 수집⬝분석, 위험도 평가 및 안전성과 모니터링을 지원하는 통합안전관리
                      시스템입니다.
                    </div>
                    <video src="/video/001.mp4" autoPlay playsInline muted></video>
                    <div className="video-bg"></div>
                  </div>
                  <div id="visual02" className="videovisual">
                    <div className="title">항공안전 목표</div>
                    <div className="subtitle">
                      1. 인적 요인 등 핵심리스크 집중 관리를 통한 안전관리체계 고도화
                      <br />
                      2. 기업 결합 등 경영환경 변화에 대비한 선제적 변화관리
                    </div>
                    <video src="/video/002.mp4" autoPlay playsInline muted></video>
                    <div className="video-bg"></div>
                  </div>
                  <div id="visual03" className="videovisual">
                    <div className="title">산업안전 목표</div>
                    <div className="subtitle">
                      1. 대한항공 임직원의 안전하고 쾌적한 근무환경 조성
                      <br />
                      2. 위험성평가 중심의 유해위험요인 관리 및 자율안전예방체계 구축
                    </div>
                    <video src="/video/003.mp4" autoPlay playsInline muted></video>
                    <div className="video-bg"></div>
                  </div>

                  <div className="top_shadow"></div>

                  <div className="video_paging">
                    <ul>
                      <li className="dp-n" id="videoList01">
                        <div className="title">대한항공 안전포털</div>
                      </li>
                      <li className="active" id="videoList02">
                        <a href="javascript:void(0);">
                          <div className="title">항공안전</div>
                        </a>
                      </li>
                      <li id="videoList03">
                        <a href="javascript:void(0);">
                          <div className="title">산업안전</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="section main-visual01">
                <div className="page1_conts">
                  <div className="swiper">
                    <Slider {...settings}>
                      <div className="swiper-slide">
                        <img src={cont01} />
                      </div>
                      <div className="swiper-slide">
                        <img src={cont02} />
                      </div>
                    </Slider>
                  </div>
                  <div className="btn-more">
                    <button>view more</button>
                  </div>
                </div>
              </div>
              <div className="section main-visual02">
                <div className="page2_conts">
                  <div className="page2_title">
                    <div className="title">2024년 산업안전목표</div>
                    <div className="subtitle">
                      <div className="subtitle-bg">
                        <div className="subtitle-box">
                          <span>정성목표</span>
                          <ul>
                            <li>대한항공 임직원의 안전하고 쾌적한 근무 환경 조성</li>
                            <li>위험성평가 중심의 유해위험요인 관리 및 자율안전예방체계 구축</li>
                          </ul>
                        </div>
                        <div className="subtitle-box">
                          <span>정량목표</span>
                          <ul>
                            <li>재해율 0.58, 강도율 0.13 달성</li>
                            <li>중대재해 및 중상재해 ZERO 달성</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="page2_contents">
                    <div className="contents-box">
                      <div className="contents-tit">
                        <ul>
                          <li>
                            24년 목표 재해율: <span>0.58</span>
                          </li>
                          <li>
                            2024년 재해율(연간누적): <span>0.30</span>, 전사 산업재해 승인 건수: <span>55</span>
                          </li>
                          <li>* 근로복지공단 승인 완료 산업재해 대상 집계</li>
                        </ul>
                      </div>
                      <div className="graph-box pr-10">
                        <div className="graph-box-bg">
                          {/*<div>타이틀</div>*/}
                          <div className="main-graph">
                            <img src={cont03} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contents-box">
                      <div className="contents-tit">
                        <ul>
                          <li>
                            24년 목표 강도율: <span>0.13</span>
                          </li>
                          <li>
                            강도율(월평균): <span>0.10</span>, 연간 근로손실일수: <span>1,639</span>
                          </li>
                          <li>* 근로복지공단 승인 최초 요양일(입원/통원/재가) 기준 집계</li>
                        </ul>
                      </div>
                      <div className="graph-box pl-10">
                        <div className="graph-box-bg">
                          {/*<div className="">타이틀</div>*/}
                          <div className="main-graph">
                            <img src={cont031} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-more">
                    <button>view more</button>
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default HomePortal1;
