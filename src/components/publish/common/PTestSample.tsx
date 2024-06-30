import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import shaderString from './PTestSample?raw';

function PTestSample() {
  const codeHtml = shaderString;
  return (
    <>
      <p>
        <SyntaxHighlighter language="javascript" style={dark}>
          {codeHtml}
        </SyntaxHighlighter>
      </p>
    </>
  );
}

export default PTestSample;
