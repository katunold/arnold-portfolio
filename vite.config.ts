import { defineConfig } from 'vite';

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        work: 'work.html',
      },
    },
  },
});
