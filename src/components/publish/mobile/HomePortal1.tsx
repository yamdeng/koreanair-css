import ReactFullpage from '@fullpage/react-fullpage';
import koreanairLogoImage from '@/resources/images/Koreanair-logo.svg';
import TopMenuImage from '@/resources/images/menu-fries-w.svg';

function HomePortal1() {
  const nextSlide = () => {
    const fullpageApi = window.fullpage_api;
    fullpageApi.moveSectionDown();
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
          {/*모바일메뉴-아이콘 */}
          <div className="M-GNB">
            <a href="javascript:void(0);">
              <img src={TopMenuImage} />
            </a>
          </div>
        </div>
      </div>
      {/*
      <div style={{ position: 'fixed', bottom: 30, zIndex: 10, right: 10 }}>우측 아이콘 영역</div>
      <div style={{ position: 'fixed', bottom: 30, zIndex: 10, right: 10, display: '' }}>*/}
      {/* 우측 아이콘 영역 클릭시 나오는 이미지 영역*/}
      {/* (display: '' -> display: 'none') */}
      {/*</div>*/}
      <div className="bottom-arrow" onClick={nextSlide}>
        <a href="javascript:void(0);">
          <span></span>
          <span></span>
          <span></span>
          Scroll
        </a>
      </div>
      <div className="fix-card">
        <span className="txt">Safety Policy</span>
      </div>
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
                      <li style={{ display: 'none' }} id="videoList01">
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

              <div className="section main-visual01-bg">
                <p>준비중</p>
              </div>
              <div className="section main-visual02-bg">
                <p>준비중</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default HomePortal1;
