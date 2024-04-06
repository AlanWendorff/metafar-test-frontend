import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
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
      '@styles': `${path.resolve(__dirname, './src/styles/')}`
    }
  }
});
