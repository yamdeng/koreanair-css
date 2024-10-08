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
          <div className="GNB">
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
      <div style={{ position: 'fixed', bottom: 30, zIndex: 10, right: 10 }}>우측 아이콘 영역</div>
      <div style={{ position: 'fixed', bottom: 30, zIndex: 10, right: 10, display: '' }}>
        우측 아이콘 영역 클릭시 나오는 이미지 영역
        {/* (display: '' -> display: 'none') */}
      </div>
      <div style={{ position: 'fixed', bottom: 30, zIndex: 10, left: 100 }} onClick={nextSlide}>
        bottom arrow(필요시에만)
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
                    <video
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                      src="/video/001.mp4"
                      autoPlay
                      playsInline
                      muted
                    ></video>
                    <div className="video-bg"></div>
                  </div>
                </div>
                <div className="video-bg"></div>
              </div>
              <div className="top_shadow"></div>
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
