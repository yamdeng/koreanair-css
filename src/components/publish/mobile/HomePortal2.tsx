import ReactFullpage from '@fullpage/react-fullpage';
import Slider from 'react-slick';

function HomePortal2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const nextSlide = () => {
    const fullpageApi = window.fullpage_api;
    fullpageApi.moveSectionDown();
  };
  return (
    <>
      <div style={{ position: 'fixed', top: 0, zIndex: 10 }}>상단메뉴 영역</div>
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
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
                <video
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  src="/video/002.mp4"
                  autoPlay
                  playsInline
                  muted
                ></video>
              </div>
              <div className="section">
                <div className="home-slider-container">
                  <Slider {...settings}>
                    <div style={{ border: '1px solid black', height: 300 }}>
                      <h3 style={{ border: '1px solid black', height: 300 }}>1</h3>
                    </div>
                    <div style={{ border: '1px solid black', height: 300 }}>
                      <h3 style={{ border: '1px solid black', height: 300 }}>2</h3>
                    </div>
                    <div style={{ border: '1px solid black', height: 300 }}>
                      <h3 style={{ border: '1px solid black', height: 300 }}>3</h3>
                    </div>
                  </Slider>
                </div>
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

export default HomePortal2;
