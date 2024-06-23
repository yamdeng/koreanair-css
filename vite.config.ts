import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, resolve(__dirname, './env'), '');

  console.log(`mode : ${mode}`);
  console.log(`loadEnv env VITE_AIR_API : ${env.VITE_AIR_API}`);
  console.log(`ENABLE_HTTPS : ${env.ENABLE_HTTPS}`);

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
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          admin: resolve(__dirname, 'admin.html'),
        },
      },
    },
    base: '/',
    envDir: './env',
    plugins: pluginList,
    server: {
      open: false,
      proxy: {
        '/api': {
          target: 'https://local/api', // 사용할 요청 도메인을 설정한다.
          changeOrigin: true, // HTTP 요청 헤더의 Host 값을 서버의 호스트와 일치하도록 변경한다. 이를 통해 클라이언트의 요청을 target에 설정된 도메인에서 온 것 처럼 변경할 수 있다.
          rewrite: (path) => path.replace(/^\/api/, ''), // 프록시 요청의 경로를 재작성하는 함수를 설정한다.
        },
        '/api/sms': {
          target: 'https://local.sms/', // 사용할 요청 도메인을 설정한다.
          changeOrigin: true, // HTTP 요청 헤더의 Host 값을 서버의 호스트와 일치하도록 변경한다. 이를 통해 클라이언트의 요청을 target에 설정된 도메인에서 온 것 처럼 변경할 수 있다.
          rewrite: (path) => path.replace(/^\/api/, ''), // 프록시 요청의 경로를 재작성하는 함수를 설정한다.
        },
      },
    },
  };
});
