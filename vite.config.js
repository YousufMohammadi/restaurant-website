import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This should point to the correct directory
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
});
