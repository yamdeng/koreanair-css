import { useState } from 'react';

import CommonApp from './components/publish/CommonPublishList';
import AviationApp from './components/publish/AviationPublishList';
import IndustryPublishList from './components/publish/IndustryPublishList';
import ModalPublishList from './components/publish/ModalPublishList';

function PublishHome() {
  const [tabIndex, setTabIndex] = useState(1);

  const changeTabIndex = (tabIndex) => {
    setTabIndex(tabIndex);
  };

  let contentComponent = <CommonApp />;
  if (tabIndex === 1) {
    contentComponent = <CommonApp />;
  } else if (tabIndex === 2) {
    contentComponent = <AviationApp />;
  } else if (tabIndex === 3) {
    contentComponent = <IndustryPublishList />;
  } else if (tabIndex === 4) {
    contentComponent = <ModalPublishList />;
  }

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
