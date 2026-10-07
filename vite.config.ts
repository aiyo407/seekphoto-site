import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// SSG 由 `vite-ssg build` 命令注入插件并预渲染每条路由为真实 .html（带完整 <body>），
// 爬虫无需执行 JS 即可读取正文——解决原 CSR 单页应用空 body 的 SEO 短板。
export default defineConfig({
  plugins: [vue()],
  base: '/',
})
