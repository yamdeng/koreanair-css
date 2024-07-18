import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import CommonPublishList from './components/publish/CommonPublishList';
import AviationPublishList from './components/publish/AviationPublishList';
import IndustryPublishList from './components/publish/IndustryPublishList';
import AdminPublishList from './components/publish/AdminPublishList';
import ModalPublishList from './components/publish/ModalPublishList';

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

  let contentComponent = <CommonPublishList keyword={keyword} checkedNewTab={checkedNewTab} />;
  if (tabIndex === 1) {
    contentComponent = <CommonPublishList keyword={keyword} checkedNewTab={checkedNewTab} />;
  } else if (tabIndex === 2) {
    contentComponent = <AviationPublishList keyword={keyword} checkedNewTab={checkedNewTab} />;
  } else if (tabIndex === 3) {
    contentComponent = <IndustryPublishList keyword={keyword} checkedNewTab={checkedNewTab} />;
  } else if (tabIndex === 4) {
    contentComponent = <AdminPublishList keyword={keyword} checkedNewTab={checkedNewTab} />;
  } else if (tabIndex === 5) {
    contentComponent = <ModalPublishList keyword={keyword} checkedNewTab={checkedNewTab} />;
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
      </div>
      <div style={{ padding: 10, marginBottom: 10 }}>
        이름/파일명 : <input style={{ padding: 5 }} value={keyword} onChange={changeKeyword} />
        {/* 새탭 <input type="checkbox" checked={checkedNewTab} onChange={changeNewTab} /> */}
      </div>
      {contentComponent}
    </>
  );
}

export default PublishHome;
