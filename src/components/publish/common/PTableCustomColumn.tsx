import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function CustomColumnComponent1() {
  return <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>custom 컴포넌트aaa1</div>;
}

function CustomColumnComponent2() {
  return <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>custom 컴포넌트2</div>;
}
function CustomColumnComponent3() {
  return <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>custom 컴포넌트3</div>;
}
function CustomColumnComponent4() {
  return <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>custom 컴포넌트4</div>;
}
function CustomColumnComponent5(paams) {
  return <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>custom 컴포넌트5</div>;
}
function CustomColumnComponent6() {
  return <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>custom 컴포넌트6</div>;
}
function CustomColumnComponent7() {
  return <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>custom 컴포넌트7</div>;
}
function CustomColumnComponent8() {
  return <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>custom 컴포넌트8</div>;
}
function CustomColumnComponent9() {
  return <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>custom 컴포넌트9</div>;
}
function CustomColumnComponent10() {
  return <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>custom 컴포넌트10</div>;
}

function PTableCustomColumn() {
  const rowData = getAllData();
  const columns = testColumnInfos;

  columns[1].cellRenderer = CustomColumnComponent1;
  columns[2].cellRenderer = CustomColumnComponent2;
  columns[3].cellRenderer = CustomColumnComponent3;
  columns[4].cellRenderer = CustomColumnComponent4;
  columns[5].cellRenderer = CustomColumnComponent5;
  columns[6].cellRenderer = CustomColumnComponent6;
  columns[7].cellRenderer = CustomColumnComponent7;
  columns[8].cellRenderer = CustomColumnComponent8;
  columns[9].cellRenderer = CustomColumnComponent9;
  columns[10].cellRenderer = CustomColumnComponent10;

  return (
    <>
      <div>
        <AppTable rowData={rowData} columns={columns} />
      </div>
    </>
  );
}

export default PTableCustomColumn;
