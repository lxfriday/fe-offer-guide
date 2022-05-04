import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({})],
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/global.less";',
      },
    },
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]',
      hashPrefix: 'prefix',
    },
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: 'localhost',
    port: '3000',
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: '3000',
    },
  },
})
