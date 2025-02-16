import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@shared': `${path.resolve(__dirname, './src/components/shared/')}`,
        '@elements': `${path.resolve(__dirname, './src/components/elements/')}`,
        '@constants': `${path.resolve(__dirname, './src/constants/')}`,
        '@pages': `${path.resolve(__dirname, './src/components/pages/')}`,
        '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
        '@types': `${path.resolve(__dirname, './src/types/')}`,
        '@styles': `${path.resolve(__dirname, './src/styles/')}`,
        '@configuration': `${path.resolve(__dirname, './src/configuration/')}`,
        '@services': `${path.resolve(__dirname, './src/services/')}`,
        '@utils': `${path.resolve(__dirname, './src/utils/')}`
      }
    }
  };
});
