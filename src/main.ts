import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { i18n, localeFromPath, type AppLocale } from './i18n'
import { trackPageView } from './utils/analytics'
// 全局布局样式（.container/.btn 等）：SSG 重构时曾被遗漏，导致容器样式全部失效
import './styles/main.css'

// 语言偏好持久化 key：手动切换后写入，自动识别时优先尊重，避免被浏览器语言反复覆盖。
const LOCALE_STORAGE_KEY = 'seekphoto-locale'

// 浏览器语言是否偏好繁体（台湾/香港/澳门/繁体中文环境）
function prefersTraditional(): boolean {
  if (typeof navigator === 'undefined') return false
  const langs =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || '']
  return langs.some((l) => /^zh[-_]?(TW|HK|MO|Hant)/i.test(l || ''))
}

function storedLocale(): AppLocale | null {
  try {
    const v = localStorage.getItem(LOCALE_STORAGE_KEY)
    return v === 'zh-CN' || v === 'zh-TW' ? v : null
  } catch {
    return null
  }
}

// 每次整页加载只做一次浏览器语言自动识别（会话内后续 SPA 导航不再触发，尊重手动切换）。
let autoDetectDone = false

// vite-ssg 入口：同一工厂同时服务 SSR 预渲染（构建期）与客户端接管（运行时）。
// head 由 @unhead/vue 自动接管（已在 App.vue 用 useHead 按路由注入）。
export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    // 跨页跳转回顶；hash 锚点下移 72px 避开固定头部遮挡
    scrollBehavior(to, _from, savedPosition) {
      if (to.hash) {
        return { el: to.hash, top: 72, behavior: 'smooth' }
      }
      if (savedPosition) return savedPosition
      return { top: 0 }
    },
  },
  ({ app, router, isClient }) => {
    app.use(router)
    app.use(i18n)
    // 路由切换时按路径前缀切换语言（客户端导航 + vite-ssg 渲染期均会触发）
    router.beforeEach((to) => {
      const locale = localeFromPath(to.path)
      i18n.global.locale.value = locale
      // SSR 预渲染阶段绝不自动跳转，保证 16 个静态页各自正确落地。
      if (!isClient) return true
      // 带语言前缀的路径 = 用户明确选择，记住偏好。
      if (to.path !== '/' && to.path !== '') {
        try {
          localStorage.setItem(LOCALE_STORAGE_KEY, locale)
        } catch {
          /* ignore */
        }
        return true
      }
      // 裸根路径：首次进入按浏览器语言或已存偏好自动跳转繁体。
      if (!autoDetectDone) {
        autoDetectDone = true
        const pref = storedLocale() ?? (prefersTraditional() ? 'zh-TW' : 'zh-CN')
        if (pref === 'zh-TW') return '/zh-tw/'
        try {
          localStorage.setItem(LOCALE_STORAGE_KEY, 'zh-CN')
        } catch {
          /* ignore */
        }
      }
      return true
    })
    // 百度统计：仅客户端导航时推送 PV（SSR 阶段不触发）
    if (isClient) {
      router.afterEach((to) => trackPageView(to.fullPath))
    }
  }
)
