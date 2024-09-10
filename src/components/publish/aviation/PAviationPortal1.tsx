import { useEffect } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';

function PAviationPortal1() {
  const { setIsAviationPortal } = useStore(useAppStore, (state) => state) as any;

  useEffect(() => {
    setIsAviationPortal(true);
    return () => {
      setIsAviationPortal(false);
    };
  }, []);
  return (
    <>
      <div className="floatingmenu">글쓰기</div>
      <div className="av-main-wrap">
        <div className="grid-item">
          <div className="grid-group">Top 10 Risk Areas</div>
          <div className="grid-group">보고서 처리 현황</div>
        </div>

        <div className="grid-item">TO DO LIST</div>
        <div className="grid-item">우수보고서</div>
        <div className="grid-item">공지사항</div>
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
