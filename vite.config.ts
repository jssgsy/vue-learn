import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      "/api": { // 此时前端请求接口为：localhost:5173/api/，注意端口是开发服务器的端口
        target: "http://127.0.0.1:8095", //
        changeOrigin: true, // 统一加上
        rewrite: (path) => path.replace(/^\/api/, '') // 去掉路径中的 `/api` 前缀
      }
    }
  }
})
