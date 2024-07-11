import { useState } from 'react';

function PLoadingBar() {
  const [displayLoadingBar, setDisplayLoadingBar] = useState(false);
  const showLoadingBar = () => {
    setDisplayLoadingBar(true);
  };

  return (
    <>
      <button onClick={showLoadingBar}>로딩바 보이게</button>
      <div id="loading-bar-container" style={{ display: displayLoadingBar ? '' : 'none' }}>
        <div className="loading-bar">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default PLoadingBar;
