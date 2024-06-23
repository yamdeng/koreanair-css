import { useState, useEffect } from 'react';

// src/reosurces 경로의 resource import
// import reactLogo from '@resources/images/react.svg';

// public 경로의 resource import
import reactLogo from '/images/react.svg';
import viteLogo from '/vite.svg';

import Test from '@components/Test';

function App() {
  const [count, setCount] = useState(0);

  const writeLog = () => {
    console.log('writeLog');
  };

  console.log('env start');

  console.log(JSON.stringify(import.meta.env));

  console.log('env end');

  useEffect(() => {
    writeLog();
    console.log(count);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Test />
    </>
  );
}

export default App;
