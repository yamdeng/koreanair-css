import { useEffect } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';
import mainphoto from '@/resources/images/av-img.jpg';

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
        <div className="grid-item photo">
          <div className="main-photo">
            <img src={mainphoto} className="" alt="photo" />
          </div>
          <h3 className="img-tit">2024년 1분기 SMS Excellence 우수보고서</h3>

          <ul className="main-photo-btn">
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
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
                  <a href="javascript:void(0);">[최근이슈] KE189/JUN22 여압장치 이상으로 인한..</a>
                </th>
                <td>
                  <span className="date">2024-00-00</span>
                  <span className="wait">관리자</span>
                </td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">[안전지시] 2024 하절기 대비 안전관리 활동 강화</a>
                </th>
                <td>
                  <span className="date">2024-00-00</span>
                  <span className="wait">관리자</span>
                </td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">[공지] 2024년 상반기 SMS Excellence 시상식 개최</a>
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
