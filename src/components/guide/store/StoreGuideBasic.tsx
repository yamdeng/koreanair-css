import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import fileRawString from './StoreGuideBasic?raw';

import { useState } from 'react';
import Config from '@/config/Config';

function StoreGuideBasic({ menuInfo }) {
  const [viewSource, setViewSource] = useState(false);

  const changeViewSource = (event) => {
    const checked = event.target.checked;
    setViewSource(checked);
  };

  const hrefString =
    Config.hrefBasePath + menuInfo.moduleDirectory + '/' + menuInfo.Component.name + Config.reactFileExtension;

  return (
    <div style={{ marginRight: viewSource ? '50%' : 0 }}>
      <div>
        {menuInfo.title} : <a href={hrefString}>{menuInfo.Component.name}</a>
        <input type="checkbox" checked={viewSource} onChange={changeViewSource} /> 소스
      </div>
      <div>소스 영역</div>
      <div className="source-raw-view" style={{ width: viewSource ? '50%' : 0 }}>
        <SyntaxHighlighter language="javascript" style={dark}>
          {fileRawString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default StoreGuideBasic;
