import { useEffect } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';
import mainphoto from '@/resources/images/img.jpg';
import maingraph from '@/resources/images/graph.png';
import maingraph1 from '@/resources/images/graph01.png';
import maingraph2 from '@/resources/images/graph02.png';

function POccupationPortal1() {
  const { setIsAviationPortal } = useStore(useAppStore, (state) => state) as any;

  useEffect(() => {
    setIsAviationPortal(true);
    return () => {
      setIsAviationPortal(false);
    };
  }, []);
  return (
    <>
      {/*nav-is-visible - 펼침 */}
      <div className="cd-stretchy-nav">
        <a href="javascript:void(0);" className="cd-nav-trigger">
          <span aria-hidden="true"></span>
        </a>
        <span aria-hidden="true" className="stretchy-nav-bg"></span>
      </div>
      <div className="main-wrap">
        <div className="grid-item">
          <h3>내 태스크</h3>
          <div className="main-table-box">
            <table className="main-table">
              <tr>
                <th className="type01">
                  <a href="javascript:void(0);">인천공항 take off</a>
                </th>
                <td>2024-00-00</td>
              </tr>
              <tr>
                <th className="type01">
                  <a href="javascript:void(0);">조류충돌 보고</a>
                </th>
                <td>2024-00-00</td>
              </tr>
              <tr>
                <th className="type01">
                  <a href="javascript:void(0);">FOD 발생 승인요청</a>
                </th>
                <td>2024-00-00</td>
              </tr>
              <tr>
                <th className="type01">
                  <a href="javascript:void(0);">활주로 침범 시도</a>
                </th>
                <td>2024-00-00</td>
              </tr>
              <tr>
                <th className="type01">
                  <a href="javascript:void(0);">하드랜딩(Hard Landing)</a>
                </th>
                <td>2024-00-00</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="grid-item photo">
          <div className="main-photo">
            <img src={mainphoto} className="" alt="photo" />
          </div>
          <div className="img-tit">
            <h3>2024년 1분기 산업안전보건 모범직원</h3>
          </div>
          <ul className="main-photo-btn">
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div className="grid-item">
          <h3>작업허가현황</h3>
          <div>
            <ul className="Status">
              <li className="ing-bar">
                <p>인천 정비고 천장 보수공사</p>
                <span className="part">정비</span>
                <span className="ing">작업중</span>
              </li>
              <li className="wait-bar">
                <p>객실훈련원 수영장 천장 펜스공사</p>
                <span className="part">객실</span>
                <span className="wait">작업대기</span>
              </li>
              <li className="expected-bar">
                <p>인천 정비고 천장 보수공사</p>
                <span className="part">항공우주</span>
                <span className="expected">작업예정</span>
              </li>
              <li className="wait-bar">
                <p>객실훈련원 수영장 천장 펜스공사</p>
                <span className="part">화물</span>
                <span className="wait">작업대기</span>
              </li>
              <li className="complete-bar">
                <p>인천 정비고 천장 보수공사</p>
                <span className="part">정비</span>
                <span className="complete">작업완료</span>
              </li>
              <li className="wait-bar">
                <p>객실훈련원 수영장 천장 펜스공사</p>
                <span className="part">정비</span>
                <span className="wait">작업대기</span>
              </li>
            </ul>
          </div>
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
                <a href="javascript:void(0);">산업안전보건위원회</a>
              </li>
              <li>
                <a href="javascript:void(0);">개정법규</a>
              </li>
            </ul>
          </h3>
          <div className="main-table-box">
            <table className="main-table">
              <tr>
                <th className="pd">
                  <a href="javascript:void(0);">KSMS(대한항공 안전관리 시스템)</a>
                  <span className="date">2024-00-00</span>
                </th>
                <td className="name">관리자</td>
              </tr>
              <tr>
                <th className="pd">
                  <a href="javascript:void(0);">지상의 조정실 대한항공 종합통제센터</a>
                  <span className="date">2024-00-00</span>
                </th>
                <td className="name">관리자</td>
              </tr>
              <tr>
                <th className="pd">
                  <a href="javascript:void(0);">대한항공, 세계 최고 수준 안전도 비결은?</a>
                  <span className="date">2024-00-00</span>
                </th>
                <td className="name">관리자</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="grid-item">
          <h3>
            <span className="siren">아이콘</span>KSMS 사이렌
          </h3>
          <div className="main-table-box">
            <table className="main-table">
              <tr>
                <th className="type02">
                  <a href="javascript:void(0);">공구통에 걸려넘어짐</a>
                  <span className="date">2024-00-00</span>
                </th>
                <td>
                  <span className="part">정비</span>
                </td>
              </tr>
              <tr>
                <th className="type02">
                  <a href="javascript:void(0);">객실훈련원 수영장 천장 펜스공사</a>
                  <span className="date">2024-00-00</span>
                </th>
                <td>
                  <span className="part">정비</span>
                </td>
              </tr>
              <tr>
                <th className="type02">
                  <a href="javascript:void(0);">인천 정비고 천장 보수공사</a>
                  <span className="date">2024-00-00</span>
                </th>
                <td>
                  <span className="part">정비</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="grid-item">
          <h3>
            <ul className="main-tab">
              <li>
                <a className="active" href="javascript:void(0);">
                  Hazard Report 현황
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">시정개선관리</a>
              </li>
            </ul>
          </h3>
          <div className="main-graph">
            <div className="main-graph-group">
              <ul className="main-graph-tit">
                <li>전체</li>
                <li className="graph-low-bg">
                  <span className="txt-low">10%</span>
                </li>
              </ul>
              <meter className="main-graph-meter" min={0} max={100} low={30} high={79} optimum={100} value={10}></meter>
            </div>
            <div className="main-graph-group">
              <ul className="main-graph-tit">
                <li>정비</li>
                <li className="graph-high-bg">
                  <span className="txt-high">30%</span>
                </li>
              </ul>
              <meter className="main-graph-meter" min={0} max={100} low={30} high={79} optimum={100} value={30}></meter>
            </div>
            <div className="main-graph-group">
              <ul className="main-graph-tit">
                <li>항공우주</li>
                <li className="graph-optimum-bg">
                  <span className="txt-optimum">88%</span>
                </li>
              </ul>
              <meter className="main-graph-meter" min={0} max={100} low={30} high={79} optimum={100} value={88}></meter>
            </div>
            <div className="main-graph-group">
              <ul className="main-graph-tit">
                <li>여객</li>
                <li className="graph-optimum-bg">
                  <span className="txt-optimum">100%</span>
                </li>
              </ul>
              <meter
                className="main-graph-meter"
                min={0}
                max={100}
                low={30}
                high={79}
                optimum={100}
                value={100}
              ></meter>
            </div>
            <div className="main-graph-group">
              <ul className="main-graph-tit">
                <li>화물</li>
                <li className="graph-high-bg">
                  <span className="txt-high">70%</span>
                </li>
              </ul>
              <meter className="main-graph-meter" min={0} max={100} low={30} high={79} optimum={100} value={70}></meter>
            </div>
            <div className="main-graph-group">
              <ul className="main-graph-tit">
                <li>객실</li>
                <li className="graph-low-bg">
                  <span className="txt-low">5%</span>
                </li>
              </ul>
              <meter className="main-graph-meter" min={0} max={100} low={30} high={79} optimum={100} value={5}></meter>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <h3>
            <ul className="main-tab">
              <li>
                <a className="active" href="javascript:void(0);">
                  재해율
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">강도율</a>
              </li>
            </ul>
          </h3>
          <div className="main-graph-box graph-list">
            <div className="graph-box">
              <div className="graph-box">
                {/*그래프영역*/}
                <canvas className="canvas" id="" height="150" width="300"></canvas>
              </div>
              <div className="graph-box">
                {/*그래프영역*/}
                <canvas className="canvas" id="" height="150" width="300"></canvas>
              </div>
              <div className="graph-box">
                {/*그래프영역*/}
                <canvas className="canvas" id="" height="150" width="300"></canvas>
              </div>
              <div className="graph-box">
                {/*그래프영역*/}
                <canvas className="canvas" id="" height="150" width="300"></canvas>
              </div>
              <div className="graph-box">
                {/*그래프영역*/}
                <canvas className="canvas" id="" height="150" width="300"></canvas>
              </div>
              <div className="graph-box">
                {/*그래프영역*/}
                <canvas className="canvas" id="" height="150" width="300"></canvas>
              </div>
              <div className="graph-box">
                {/*그래프영역*/}
                <canvas className="canvas" id="" height="150" width="300"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default POccupationPortal1;
