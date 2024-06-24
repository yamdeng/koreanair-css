import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, resolve(__dirname, './env'), '');

  const enableHttps = env.ENABLE_HTTPS && env.ENABLE_HTTPS === 'true';
  const pluginList = [react(), tsconfigPaths()];
  if (enableHttps) {
    pluginList.push(basicSsl());
  }

  const currentFolderPath = resolve(__dirname);
  console.log(`currentFolderPath : ${currentFolderPath}`);

  return {
    define: {
      __PROJECT_FOLDER_PATH: JSON.stringify(currentFolderPath),
    },
    build: {
      outDir: 'build',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
      },
    },
    base: '/',
    envDir: './env',
    plugins: pluginList,
    server: {
      open: false,
    },
  };
});
