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
    <div className="Audit-table-cell">
      <div className="list-box">
        <ul>
          <li>
            <a href="javascript:void(0);" className="text-orange">
              제출(finding)
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" className="text-orange">
              제출(finding)
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" className="text-orange">
              제출(finding)
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" className="text-orange">
              제출(finding)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
function CustomColumnComponent3() {
  return (
    <div className="Audit-table-cell">
      <div className="list-box">
        <ul>
          <li>
            <a href="javascript:void(0);" className="text-blue">
              24-LSA-0401-BE03 / 신상훈
            </a>
          </li>
          {/* <li>
            <a href="javascript:void(0);">24-LSA-0401-BE01 / -</a>
          </li>
          <li>
            <a href="javascript:void(0);">24-LSA-0401-BE02 / 안용성</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
function CustomColumnComponent4() {
  return (
    <div className="Audit-table-cell">
      <div className="tooltip">
        <span className="tooltiptext1 tooltip-right">
          <ul>
            <li>발견 : 이벤트 발생 시점 미정 항목에 대한 보고</li>
          </ul>
        </span>
      </div>
    </div>
  );
}
function CustomColumnComponent5() {
  return (
    <div className="Safety-table-cell">
      <span className="Safety-tag riskLevel level4">1C</span>
      <span className="Safety-tag riskLevel level3">2C</span>
      <span className="Safety-tag riskLevel level2">1A</span>
    </div>
  );
}
function CustomColumnComponent6(paams) {
  return (
    <div className="Safety-table-cell">
      <span className="Safety-tag riskLevel level1">5A</span>
    </div>
  );
}
function CustomColumnComponent7() {
  return (
    <div style={{ fontWeight: 'normal', textDecoration: 'underline' }}>
      <button type="button" className="btn-togo">
        바로가기
      </button>
    </div>
  );
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
function CustomColumnComponent11() {
  return <div style={{ fontWeight: 'normal', textDecoration: 'underline' }}>custom 컴포넌트11</div>;
}

function PTableCustomColumn() {
  const rowData = getAllData();
  const columns = testColumnInfos;

  columns[1].cellRenderer = CustomColumnComponent1;
  columns[2].cellRenderer = CustomColumnComponent2;
  columns[2].width = 300;
  columns[2].wrapText = true;
  columns[2].autoHeight = true;
  columns[3].cellRenderer = CustomColumnComponent3;
  columns[4].cellRenderer = CustomColumnComponent4;
  columns[5].cellRenderer = CustomColumnComponent5;
  columns[6].cellRenderer = CustomColumnComponent6;
  columns[7].cellRenderer = CustomColumnComponent7;
  columns[8].cellRenderer = CustomColumnComponent8;
  columns[9].cellRenderer = CustomColumnComponent9;
  columns[10].cellRenderer = CustomColumnComponent10;

  const customButtons = [
    { title: '타이틀1' },
    { title: '타이틀2' },
    { title: '타이틀2' },
    { title: '타이틀2' },
    { title: '타이틀2' },
  ];

  return (
    <>
      <div>
        <AppTable rowData={rowData} columns={columns} customButtons={customButtons} />
      </div>
    </>
  );
}

export default PTableCustomColumn;
