import AppTable from '@/components/common/AppTable';
import { getAllData } from '@/data/grid/example-data-new';
import { testColumnInfos } from '@/data/grid/table-column';

function CustomColumnComponent1() {
  return (
    <div className="Safety-table-cell tl">
      <a href="javascript:void(0);">링크되는 텍스트 형식</a>
    </div>
  );
}

function CustomColumnComponent2() {
  return (
    <div className="Safety-table-cell">
      <span>일반 텍스트</span>
    </div>
  );
}
function CustomColumnComponent3() {
  return (
    <div className="Safety-table-cell">
      <span className="">일반 텍스트</span>
    </div>
  );
}
function CustomColumnComponent4() {
  return (
    <div className="Safety-table-cell">
      <span className="Safety-tag riskLevel level4">1C</span>
      <span className="Safety-tag riskLevel level3">2C</span>
      <span className="Safety-tag riskLevel level2">1A</span>
    </div>
  );
}
function CustomColumnComponent5(paams) {
  return (
    <div className="Safety-table-cell">
      <span className="Safety-tag riskLevel level1">5A</span>
    </div>
  );
}
function CustomColumnComponent6() {
  return (
    <div style={{ fontWeight: 'normal', textDecoration: 'underline' }}>
      <button type="button" className="btn-togo">
        바로가기
      </button>
    </div>
  );
}
function CustomColumnComponent7() {
  return <div style={{ fontWeight: 'normal', textDecoration: 'underline' }}>custom 컴포넌트7</div>;
}
function CustomColumnComponent8() {
  return <div style={{ fontWeight: 'normal', textDecoration: 'underline' }}>custom 컴포넌트8</div>;
}
function CustomColumnComponent9() {
  return <div style={{ fontWeight: 'normal', textDecoration: 'underline' }}>custom 컴포넌트9</div>;
}
function CustomColumnComponent10() {
  return <div style={{ fontWeight: 'normal', textDecoration: 'underline' }}>custom 컴포넌트10</div>;
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
