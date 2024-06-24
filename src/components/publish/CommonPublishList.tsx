import { Link } from 'react-router-dom';
import CommonPageInfo from '@/config/CommonPageInfo';
import Config from '@/config/Config';
import CommonUtil from '../../utils/CommonUtil';

const moduleDirectoryPath = 'common/';

function CommonPublishList({ keyword, checkedNewTab }) {
  const list = CommonPageInfo.list;
  const filtedList = list.filter((menuInfo) => {
    const { title, Component } = menuInfo;
    const fileName = Component.name;
    if (keyword) {
      return title.indexOf(keyword) !== -1 || fileName.indexOf(keyword) !== -1;
    } else {
      return true;
    }
  });
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
          {filtedList.map((menuInfo) => {
            const { title, path, Component, description, success } = menuInfo;
            const fileName = Component.name;
            const hrefString = Config.hrefBasePath + moduleDirectoryPath + fileName + Config.publishReactFileExtension;
            const trClassName = success ? 'success' : '';
            return (
              <tr key={title} className={trClassName}>
                <td>
                  <Link
                    to={`${moduleDirectoryPath}${path}`}
                    dangerouslySetInnerHTML={{
                      __html: CommonUtil.replaceHighlightMarkup(title, keyword),
                    }}
                  />
                </td>
                <td>
                  <a
                    href={hrefString}
                    dangerouslySetInnerHTML={{
                      __html: CommonUtil.replaceHighlightMarkup(fileName, keyword),
                    }}
                  />
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

export default CommonPublishList;
