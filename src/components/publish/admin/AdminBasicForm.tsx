import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function AdminBasicForm() {
  const rowData = getAllData();
  const columns = testColumnInfos;

  return (
    <>
      <div className="conts-tit">
        <h2>장비코드 등록</h2>
        <div className="controlArea">
          <button type="button" name="button" className="btn btn-control btn-darkblue">
            조회
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminBasicForm;
