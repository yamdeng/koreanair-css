import { useState } from 'react';
import Config from '@/config/Config';

// document.getElementById("mySidebar").style.width = "70%";
//   document.getElementById("main").style.marginLeft = "70%";

function StoreGuideBasic({ menuInfo }) {
  const [viewSource, setViewSource] = useState(false);

  const changeViewSource = (event) => {
    const checked = event.target.checked;
    setViewSource(checked);
  };

  const hrefString =
    Config.hrefBasePath + menuInfo.moduleDirectory + '/' + menuInfo.Component.name + Config.reactFileExtension;

  return (
    <>
      <div>
        {menuInfo.title} : <a href={hrefString}>{menuInfo.Component.name}</a>
        <input type="checkbox" checked={viewSource} onChange={changeViewSource} /> 소스 보기
      </div>
      <div>소스 영역</div>
      <div className="source-raw-view">소스 file raw 영역</div>
    </>
  );
}

export default StoreGuideBasic;
