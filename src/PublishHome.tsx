import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CommonPageInfo from './config/CommonPageInfo';
import CommonRouteTable from './CommonRouteTable';
import AviationPageInfo from './config/AviationPageInfo';
import OccupationPageInfo from './config/OccupationPageInfo';
import AdminPageInfo from './config/AdminPageInfo';
import ModalPageInfo from './config/ModalPageInfo';
import MobilePageInfo from './config/MobilePageInfo';

function PublishHome() {
  const [tabIndex, setTabIndex] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [checkedNewTab, setCheckedNewTab] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const changeTabIndex = (tabIndex) => {
    setTabIndex(tabIndex);
    setKeyword('');
    navigate(`/?tabIndex=${tabIndex}`, { replace: true });
  };

  let contentComponent = (
    <CommonRouteTable
      moduleDirectoryPath="common/"
      pageList={CommonPageInfo.list}
      keyword={keyword}
      checkedNewTab={checkedNewTab}
    />
  );
  if (tabIndex === 1) {
    contentComponent = (
      <CommonRouteTable
        moduleDirectoryPath="common/"
        pageList={CommonPageInfo.list}
        keyword={keyword}
        checkedNewTab={checkedNewTab}
      />
    );
  } else if (tabIndex === 2) {
    contentComponent = (
      <CommonRouteTable
        moduleDirectoryPath="aviation/"
        pageList={AviationPageInfo.list}
        keyword={keyword}
        checkedNewTab={checkedNewTab}
      />
    );
  } else if (tabIndex === 3) {
    contentComponent = (
      <CommonRouteTable
        moduleDirectoryPath="occupation/"
        pageList={OccupationPageInfo.list}
        keyword={keyword}
        checkedNewTab={checkedNewTab}
      />
    );
  } else if (tabIndex === 4) {
    contentComponent = (
      <CommonRouteTable
        moduleDirectoryPath="admin/"
        pageList={AdminPageInfo.list}
        keyword={keyword}
        checkedNewTab={checkedNewTab}
      />
    );
  } else if (tabIndex === 5) {
    contentComponent = (
      <CommonRouteTable
        moduleDirectoryPath="modal/"
        pageList={ModalPageInfo.list}
        keyword={keyword}
        checkedNewTab={checkedNewTab}
      />
    );
  } else if (tabIndex === 6) {
    contentComponent = (
      <CommonRouteTable
        moduleDirectoryPath="mobile/"
        pageList={MobilePageInfo.list}
        keyword={keyword}
        checkedNewTab={checkedNewTab}
      />
    );
  }

  const changeKeyword = (event) => {
    const value = event.target.value;
    setKeyword(value);
  };

  const changeNewTab = (event) => {
    const checked = event.target.checked;
    setCheckedNewTab(checked);
  };

  useEffect(() => {
    const tabIndex = searchParams.get('tabIndex');
    if (tabIndex) {
      setTabIndex(Number(tabIndex));
    }
  }, []);

  return (
    <>
      <div className="publish-app tab">
        <button className={tabIndex === 1 ? 'active' : ''} onClick={() => changeTabIndex(1)}>
          공통/홈/레이아웃
        </button>
        <button className={tabIndex === 2 ? 'active' : ''} onClick={() => changeTabIndex(2)}>
          항공안전
        </button>
        <button className={tabIndex === 3 ? 'active' : ''} onClick={() => changeTabIndex(3)}>
          산업안전
        </button>
        <button className={tabIndex === 4 ? 'active' : ''} onClick={() => changeTabIndex(4)}>
          관리자
        </button>
        <button className={tabIndex === 5 ? 'active' : ''} onClick={() => changeTabIndex(5)}>
          모달
        </button>
        <button className={tabIndex === 6 ? 'active' : ''} onClick={() => changeTabIndex(6)}>
          모바일
        </button>
      </div>
      <div style={{ padding: 10, marginBottom: 10 }}>
        이름/파일명 :{' '}
        <input style={{ padding: 5, border: '1px solid black' }} value={keyword} onChange={changeKeyword} />
        새탭 <input type="checkbox" checked={checkedNewTab} onChange={changeNewTab} />
      </div>
      {contentComponent}
    </>
  );
}

export default PublishHome;
