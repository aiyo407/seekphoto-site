import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.css'

const routes = [
  { path: '/', component: () => import('./views/Home.vue'), meta: { title: '觅影 SeekPhoto - 智能图片搜索管理工具', description: '用一句话找到那张照片。AI 语义搜索、人脸识别、时间线浏览，所有数据只存储在你的电脑上。' } },
  { path: '/features', component: () => import('./views/Features.vue'), meta: { title: '核心功能 - 觅影 SeekPhoto', description: '文字找图、人物分类、时间线浏览，三种方式帮你轻松管理海量照片。' } },
  { path: '/pricing', component: () => import('./views/Pricing.vue'), meta: { title: '定价 - 觅影 SeekPhoto', description: '免费版永久免费不限照片数量，专业版 ¥99 一次买断终身使用，解锁全部 AI 功能。' } },
  { path: '/download', component: () => import('./views/Download.vue'), meta: { title: '下载 - 觅影 SeekPhoto', description: '免费下载觅影 SeekPhoto，Windows 10/11 64-bit，本地运行无需联网。' } },
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
})

const app = createApp(App)
app.use(router)
app.mount('#app')
