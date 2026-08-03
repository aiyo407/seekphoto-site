import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.css'
import { trackPageView } from './utils/analytics'

const routes = [
  { path: '/', component: () => import('./views/Home.vue'), meta: { title: '觅影随笔 - 本地图片管理笔记', description: '用一句话找到那张照片。语义搜索、人脸识别、时间线浏览，所有数据只存储在你的电脑上。个人开发者作品。' } },
  { path: '/features', component: () => import('./views/Features.vue'), meta: { title: '功能介绍 - 觅影随笔', description: '文字找图、人物分类、时间线浏览、照片地图，多种方式帮你轻松管理海量照片。个人开发者作品。' } },
  { path: '/guide', component: () => import('./views/Guide.vue'), meta: { title: '使用教程 - 觅影随笔', description: '四步上手觅影，从下载安装到搜索技巧，快速掌握图片管理笔记的完整使用方法。' } },
  { path: '/download', component: () => import('./views/Download.vue'), meta: { title: '下载 - 觅影随笔', description: '免费下载觅影随笔，Windows 10/11 64-bit，本地运行无需联网。个人开发作品。' } },
  { path: '/about', component: () => import('./views/About.vue'), meta: { title: '关于本站 - 觅影随笔', description: '一个个人开发者用心打造的本地图片管理笔记，完全本地运行，保护你的隐私。了解觅影的设计理念与技术栈。' } },
  { path: '/changelog', component: () => import('./views/Changelog.vue'), meta: { title: '更新日志 - 觅影随笔', description: '觅影随笔版本更新历史，持续优化，让找照片越来越简单。' } },
  { path: '/privacy', component: () => import('./views/Privacy.vue'), meta: { title: '隐私政策 - 觅影随笔', description: '觅影随笔隐私政策，所有数据存储在本地，不上传任何服务器。' } },
  { path: '/terms', component: () => import('./views/Terms.vue'), meta: { title: '使用说明 - 觅影随笔', description: '觅影随笔使用说明，个人开发者免费分享的本地图片管理笔记，请阅读后使用。' } },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// 路由切换时动态更新 title / description，提升 SEO
router.afterEach((to) => {
  const meta = to.meta as { title?: string; description?: string }
  if (meta.title) {
    document.title = meta.title
  }
  if (meta.description) {
    let descEl = document.querySelector('meta[name="description"]')
    if (!descEl) {
      descEl = document.createElement('meta')
      descEl.setAttribute('name', 'description')
      document.head.appendChild(descEl)
    }
    descEl.setAttribute('content', meta.description)
  }
  // 百度统计：SPA 路由切换推送 PV
  trackPageView(to.fullPath)
})

const app = createApp(App)
app.use(router)
app.mount('#app')
