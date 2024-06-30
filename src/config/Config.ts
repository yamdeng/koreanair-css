const baseFilePath = '/src/components/guide/';
const profileFolderPath = __PROJECT_FOLDER_PATH;
const hrefBasePath = `vscode://file/${profileFolderPath}${baseFilePath}`;

const Config = {
  publishReactFileExtension: '.tsx',
  hrefBasePath: hrefBasePath,
};

export default Config;
