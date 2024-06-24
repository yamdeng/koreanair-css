import ModalPageInfo from '@/config/ModalPageInfo';
import Config from '@/config/Config';
import CommonUtil from '../../utils/CommonUtil';
import { useMovePage } from '@/hooks/useMovePage';

const moduleDirectoryPath = 'modal/';

function ModalPublishList({ keyword, checkedNewTab }) {
  const list = CommonUtil.getFilterListByMenuList(ModalPageInfo.list, keyword);
  const movePage = useMovePage();

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
            const { title, path, Component, description, success } = menuInfo;
            const fileName = Component.name;
            const hrefString = Config.hrefBasePath + moduleDirectoryPath + fileName + Config.publishReactFileExtension;
            const trClassName = success ? 'success' : '';
            return (
              <tr key={title} className={trClassName}>
                <td>
                  <a
                    href="javascript:void(0)"
                    onClick={() => movePage(`${moduleDirectoryPath}${path}`, checkedNewTab)}
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

export default ModalPublishList;
