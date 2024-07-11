import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function AdminBasicList() {
  const rowData = getAllData();
  const columns = testColumnInfos;

  return (
    <>
      <AppTable rowData={rowData} columns={columns} />
    </>
  );
}

export default AdminBasicList;
