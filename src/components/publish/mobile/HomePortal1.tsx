import ReactFullpage from '@fullpage/react-fullpage';
import koreanairLogoImage from '@/resources/images/Koreanair-logo.svg';

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
                <video
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  src="/video/002.mp4"
                  autoPlay
                  playsInline
                  muted
                ></video>
                <div className="video-bg"></div>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
              <div className="section">
                <p>Section 3</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default HomePortal1;
