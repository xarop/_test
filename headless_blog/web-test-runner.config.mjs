import { vitePlugin } from '@remcovaes/web-test-runner-vite-plugin';

export default {
  files: 'test/**/*.test.js',
  nodeResolve: true,
  plugins: [
    vitePlugin(),
  ],
};
