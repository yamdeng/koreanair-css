const baseFilePath = '/src/components/publish/';
const profileFolderPath = __PROJECT_FOLDER_PATH;
const hrefBasePath = `vscode://file/${profileFolderPath}${baseFilePath}`;

const Config = {
  publishReactFileExtension: '.tsx',
  reactFileExtension: '.tsx',
  hrefBasePath: hrefBasePath,
  defaultGridHeight: 450,
  defaultGridNoDataMessage: '데이터가 존재하지 않습니다.',
  defaultGridPageSize: 10,
  defaultPageSizeList: [10, 50, 100],
  defaultGridTotalCountTemplate: '{0}',
};

export default Config;
