import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import IndustryPageInfo from '@/config/IndustryPageInfo';
import Config from '@/config/Config';
import CommonUtil from '../../utils/CommonUtil';
import { useMovePage } from '@/hooks/useMovePage';
import CommonToolTip from '../common/CommonToolTip';

const moduleDirectoryPath = 'industry/';

function IndustryPublishList({ keyword, checkedNewTab }) {
  const list = CommonUtil.getFilterListByMenuList(IndustryPageInfo.list, keyword);
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

            let descriptionComponent = <div>{description}</div>;
            const descriptionToolTipId = title;

            if (description) {
              descriptionComponent = (
                <CopyToClipboard text={description} onCopy={() => toast.success('설명 클립보드 복사 완료')}>
                  <div>
                    <span data-tooltip-id={descriptionToolTipId} className="publish-tooltip-description">
                      설명
                    </span>
                    <CommonToolTip toolTipId={descriptionToolTipId} message={description} />
                  </div>
                </CopyToClipboard>
              );
            }

            return (
              <tr key={title} className={trClassName}>
                <td>
                  <a
                    href={''}
                    onClick={(event) => {
                      event.preventDefault();
                      movePage(`${moduleDirectoryPath}${path}`, checkedNewTab);
                    }}
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
                <td>{descriptionComponent}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default IndustryPublishList;