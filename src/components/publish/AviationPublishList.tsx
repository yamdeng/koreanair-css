import { Link } from 'react-router-dom';
import AviationPageInfo from '@/config/AviationPageInfo';
import Config from '@/config/Config';

const moduleDirectoryPath = 'aviation/';

function AviationPublishList() {
  const list = AviationPageInfo.list;
  return (
    <div>
      <table className="publish-app-table">
        <thead>
          <tr>
            <th>이름</th>
            <th>파일</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          {list.map((menuInfo) => {
            const { title, path, Component, description } = menuInfo;
            const fileName = Component.name;
            const hrefString = Config.hrefBasePath + moduleDirectoryPath + fileName + Config.publishReactFileExtension;
            return (
              <tr key={title}>
                <td>
                  <Link to={`${moduleDirectoryPath}${path}`}>{title}</Link>
                </td>
                <td>
                  <a href={hrefString}>{fileName}</a>
                </td>
                <td>{description ? description : ''}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AviationPublishList;
