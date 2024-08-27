import AppAutoComplete from '@/components/common/AppAutoComplete';

/*

  TODO
   1.textarea
     -label, error border 미반영된 부분 반영
     -textarea 작성시 첫행이 들여쓰기가 됨

   2.에디터 라벨 및 필수 여부 어떻게 할지 고민 필요

*/

function PSelectMultiUser() {
  return (
    <>
      <div className="conts-title">
        <h2>사용자 멀티 검색</h2>
      </div>
      {/*등록 */}
      <div className="editbox">
        {/* 1행 */}
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="group-box-wrap wid100">
              <AppAutoComplete
                label="하단에 목록을 정의해주세요"
                value={''}
                labelKey="nameKor"
                valueKey="userId"
                onlySelect
                // onSelect={(value) => setSelectUser(value)}
              />
              하단에 목록을 정의해주세요.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PSelectMultiUser;
