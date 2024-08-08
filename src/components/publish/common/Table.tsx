import shareImage from '@/resources/images/share.svg';

function Table() {
  return (
    <>
      <div className="conts-title">
        <h2>테이블 & 하단버튼</h2>
      </div>
      {/*테이블영역*/}
      <div>
        <table className="notice-board">
          <colgroup>
            <col width="10%" />
            <col width="40%" />
            <col width="30%" />
            <col width="20%" />
          </colgroup>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>본부</th>
            <th>등록일자</th>
          </tr>
          <tr className="fix-bg">
            <td className="fix">상위노출</td>
            <td className="left">
              <a href="javascript:void(0);">제목입니다.</a>
            </td>
            <td>산업안전</td>
            <td>2024-08-05</td>
          </tr>
          <tr className="fix-bg">
            <td className="fix">상위노출</td>
            <td className="left">
              <a href="javascript:void(0);">제목입니다.</a>
            </td>
            <td>산업안전</td>
            <td>2024-08-05</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="left">
              <a href="javascript:void(0);">제목입니다.</a>
            </td>
            <td>산업안전</td>
            <td>2024-08-05</td>
          </tr>
          <tr>
            <td>2</td>
            <td className="left">
              <a href="javascript:void(0);">제목입니다.</a>
            </td>
            <td>산업안전</td>
            <td>2024-08-05</td>
          </tr>
        </table>
        <div className="pagination">
          <a href="javascript:void(0);" className="first">
            <span className="sr-only">이전</span>
          </a>
          <a href="javascript:void(0);" className="prev">
            <span className="sr-only">이전</span>
          </a>
          <span>
            <a href="javascript:void(0);">1</a>
            <a href="javascript:void(0);">2</a>
            <strong title="현재페이지">3</strong>
            <a href="javascript:void(0);">4</a>
            <a href="javascript:void(0);">5</a>
          </span>
          <a href="javascript:void(0);" className="next">
            <span className="sr-only">다음</span>
          </a>
          <a href="javascript:void(0);" className="last">
            <span className="sr-only">다음</span>
          </a>
        </div>
      </div>
      {/*//테이블영역 */}
      {/* 하단버튼영역 - 4개이상일경우 class명 btn-type01 추가 */}
      <div className="contents-btns">
        <button className="btn_text text_color_neutral-10 btn_confirm btn-type01">저장</button>
        <button className="btn_text btn-del">취소</button>
        <button className="btn_text btn_list">목록</button>
        <button type="button" name="button" className="btn_text btn-share">
          <img src={shareImage} />
          <span>공유</span>
        </button>
        <button className="btn_text text_color_neutral-10 btn_confirm btn-type01">인쇄</button>
        <button disabled className="btn_text btn-disabled">
          삭제
        </button>
      </div>
      {/* //하단버튼영역 */}
    </>
  );
}

export default Table;
