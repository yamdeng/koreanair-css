import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import CommonPublishList from './components/publish/CommonPublishList';
import AviationPublishList from './components/publish/AviationPublishList';
import IndustryPublishList from './components/publish/IndustryPublishList';
import ModalPublishList from './components/publish/ModalPublishList';

function PublishHome() {
  const [tabIndex, setTabIndex] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  debugger;

  const changeTabIndex = (tabIndex) => {
    setTabIndex(tabIndex);
  };

  let contentComponent = <CommonPublishList />;
  if (tabIndex === 1) {
    contentComponent = <CommonPublishList />;
  } else if (tabIndex === 2) {
    contentComponent = <AviationPublishList />;
  } else if (tabIndex === 3) {
    contentComponent = <IndustryPublishList />;
  } else if (tabIndex === 4) {
    contentComponent = <ModalPublishList />;
  }

  useEffect(() => {
    const tabIndex = searchParams.get('tabIndex');
    if (tabIndex) {
      changeTabIndex(tabIndex);
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
          모달
        </button>
      </div>
      {contentComponent}
    </>
  );
}

export default PublishHome;
