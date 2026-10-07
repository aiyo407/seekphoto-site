import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { trackPageView } from './utils/analytics'

// vite-ssg 入口：同一工厂同时服务 SSR 预渲染（构建期）与客户端接管（运行时）。
// head 由 @unhead/vue 自动接管（已在 App.vue 用 useHead 按路由注入）。
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app, router, isClient }) => {
    app.use(router)
    // 百度统计：仅客户端导航时推送 PV（SSR 阶段不触发）
    if (isClient) {
      router.afterEach((to) => trackPageView(to.fullPath))
    }
  }
)
