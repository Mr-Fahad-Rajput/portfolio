import { defineConfig } from 'vite';
import gzipPlugin from 'rollup-plugin-gzip';

export default defineConfig({
  plugins: [
    gzipPlugin(),
  ],
});
