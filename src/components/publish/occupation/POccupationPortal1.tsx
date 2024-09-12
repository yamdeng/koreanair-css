import { useEffect } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';

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
      <div className="floatingmenu">글쓰기</div>
      <div className="main-wrap">
        <div className="grid-item">
          <h3>내 태스크</h3>
          <div className="main-table-box">
            <table className="main-table">
              <tr>
                <th>
                  <a href="javascript:void(0);">인천공항 take off</a>
                </th>
                <td>2024-00-00</td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">조류충돌 보고</a>
                </th>
                <td>2024-00-00</td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">FOD 발생 승인요청</a>
                </th>
                <td>2024-00-00</td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">활주로 침범 시도</a>
                </th>
                <td>2024-00-00</td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">하드랜딩(Hard Landing)</a>
                </th>
                <td>2024-00-00</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="grid-item">
          <h3>2024년 1분기 산업안전보건 모범직원</h3>
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
                <th>
                  <a href="javascript:void(0);">KSMS(대한항공 안전관리 시스템)</a>
                  <span className="date">2024-00-00</span>
                </th>
                <td className="name">관리자</td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">지상의 조정실 대한항공 종합통제센터</a>
                  <span className="date">2024-00-00</span>
                </th>
                <td className="name">관리자</td>
              </tr>
              <tr>
                <th>
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
                <th>
                  <a href="javascript:void(0);">공구통에 걸려넘어짐</a>
                  <span className="date">2024-00-00</span>
                </th>
                <td>
                  <span className="part">정비</span>
                </td>
              </tr>
              <tr>
                <th>
                  <a href="javascript:void(0);">객실훈련원 수영장 천장 펜스공사</a>
                  <span className="date">2024-00-00</span>
                </th>
                <td>
                  <span className="part">정비</span>
                </td>
              </tr>
              <tr>
                <th>
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
        </div>
      </div>
    </>
  );
}

export default POccupationPortal1;
