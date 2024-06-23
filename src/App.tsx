// import { useState, useEffect } from 'react';
import CommonPageInfo from './config/CommonPageInfo';
import Config from './config/Config';

// src/reosurces 경로의 resource import
// import reactLogo from '@resources/images/react.svg';

// public 경로의 resource import
// import reactLogo from '/images/react.svg';
// import viteLogo from '/vite.svg';

// import Test from '@components/Test';

const baseFilePath = '/src/components/publish/';
// const profileFolderPath = '/Users/yongsungahn/Project/koreanair/koreanair-css';
const profileFolderPath = __PROJECT_FOLDER_PATH;
// const hrefBasePath = `vscode://file/${process.env.PROJECT_FOLDER_PATH}${baseFilePath}`;
const hrefBasePath = `vscode://file/${profileFolderPath}${baseFilePath}`;

function App() {
  // const [count, setCount] = useState(0);

  // const writeLog = () => {
  //   console.log('writeLog');
  // };

  // console.log('env start');

  console.log(JSON.stringify(import.meta.env));

  console.log(__PROJECT_FOLDER_PATH);

  // console.log('env end');

  // useEffect(() => {
  //   writeLog();
  //   console.log(count);
  // }, []);

  const list = CommonPageInfo.list;

  return (
    <>
      <div>
        <h3>퍼블리싱 테스트</h3>
      </div>
      <div>
        {list.map((info) => {
          const { title, component } = info;
          const fileName = component.name;
          const hrefString = hrefBasePath + fileName + Config.publishReactFileExtension;
          return (
            <p key={title}>
              {title} : {fileName}
              <a href={hrefString}>{fileName} GOGO</a>
              <p>hrefString : {hrefString}</p>
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
