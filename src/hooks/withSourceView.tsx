import { useState } from 'react';
import Config from '@/config/Config';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function withSourceView(WrappedComponent) {
  return function ParentComponent(props) {
    const { menuInfo } = props;
    const [viewSource, setViewSource] = useState(false);

    const changeViewSource = (event) => {
      const checked = event.target.checked;
      setViewSource(checked);
    };
    const hrefString = Config.hrefBasePath + menuInfo.moduleDirectory + '/' + menuInfo.path + Config.reactFileExtension;

    return (
      <div style={{ marginRight: viewSource ? '50%' : 0 }}>
        <div className="guide-detail-top-common">
          <div className="guide-detail-top-title">{menuInfo.title}</div>
          <a href={hrefString}>{menuInfo.path}</a>{' '}
          <input type="checkbox" checked={viewSource} onChange={changeViewSource} /> 소스보기
        </div>
        <div className="source-raw-view" style={{ width: viewSource ? '50%' : 0 }}>
          <SyntaxHighlighter language="javascript" style={dark}>
            {menuInfo.fileRawString}
          </SyntaxHighlighter>
        </div>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

// function withSourceView(WrappedComponent) {
//   return function ParentComponent(props) {
//     return <WrappedComponent {...props} />;
//   };
// }

export default withSourceView;
