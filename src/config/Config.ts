const baseFilePath = '/src/components/publish/';
const profileFolderPath = __PROJECT_FOLDER_PATH;
const hrefBasePath = `vscode://file/${profileFolderPath}${baseFilePath}`;

const Config = {
  publishReactFileExtension: '.tsx',
  reactFileExtension: '.tsx',
  hrefBasePath: hrefBasePath,
  defaultGridHeight: 550,
  defaultGridNoDataMessage: '데이터가 존재하지 않습니다.',
  defaultGridPageSize: 25,
  defaultPageSizeList: [25, 50, 100],
  defaultGridTotalCountTemplate: '총 {0} 건 입니다.',
};

export default Config;
