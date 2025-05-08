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
    // 开发环境可解决跨域问题
    proxy: {
      // 此时前端请求接口须为：http://localhost:5173/api/，必须带schema(http)，注意端口是开发服务器的端口
      "/api": {
        target: "http://127.0.0.1:9010", //
        changeOrigin: true, // 统一加上
        rewrite: (path) => {
          // path是/api及后面的一串(即已经去除了开发服务器的ip及端口号)，如：/api/param/noParam
          return path.replace(/^\/api/, '') // 去掉路径中的 `/api` 前缀
        }
        // 此时请求http://localhost:5173/api/xxx将被转发到http://127.0.0.1:9010/xxx
      }
    }
  }
})
