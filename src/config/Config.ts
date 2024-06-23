const baseFilePath = '/src/components/publish/';
const profileFolderPath = __PROJECT_FOLDER_PATH;
const hrefBasePath = `vscode://file/${profileFolderPath}${baseFilePath}`;

const Config = {
  publishReactFileExtension: '.tsx',
  hrefBasePath: hrefBasePath,
};

export default Config;
