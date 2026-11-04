import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { localeFromPath, localizedPath, type SiteLocale } from './locales'
import { trackPageView } from './utils/analytics'
// 全局布局样式（.container/.btn 等）：SSG 重构时曾被遗漏，导致容器样式全部失效
import './styles/main.css'

// 语言偏好持久化 key：手动切换后写入，自动识别时优先尊重，避免被浏览器语言反复覆盖。
const LOCALE_STORAGE_KEY = 'seekphoto-locale'

/**
 * 浏览器语言 → 站点语言。
 *
 * 繁体优先于简体（台湾/香港/澳门/繁体中文环境），其余非中文环境回退英文。
 * 官网三种语言各是一套独立静态页（/、/zh-tw/、/en/），这里决定裸根路径跳到哪一套。
 */
function detectLocale(): SiteLocale {
  if (typeof navigator === 'undefined') return 'zh-CN'
  const langs =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || '']
  for (const l of langs) {
    if (/^zh[-_]?(TW|HK|MO|Hant)/i.test(l || '')) return 'zh-TW'
    if (/^zh/i.test(l || '')) return 'zh-CN'
  }
  for (const l of langs) {
    if (/^en/i.test(l || '')) return 'en-US'
  }
  return 'zh-CN'
}

function storedLocale(): SiteLocale | null {
  try {
    const v = localStorage.getItem(LOCALE_STORAGE_KEY)
    return v === 'zh-CN' || v === 'zh-TW' || v === 'en-US' ? v : null
  } catch {
    return null
  }
}

/** 记录当前语言，供下次从根路径进入时恢复 */
function saveLocale(locale: SiteLocale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    /* ignore */
  }
}

// 每次整页加载只做一次浏览器语言自动识别（会话内后续 SPA 导航不再触发，尊重手动切换）。
let initialNavHandled = false

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
    /**
     * 语言规则（URL 前缀是唯一真源：/ 简体、/zh-tw 繁体、/en 英文）：
     * 1) 「记住偏好」只在**首次整页加载落到裸根 /** 时生效 —— 从根路径进入时，
     *    按已存偏好（没有则按浏览器语言）跳到对应语言那套。
     * 2) 会话内点击「首页 / logo」落到 / 时**不再跳转**。
     *    否则用户从客户端或分享链接进入子页（首次导航即无前缀路径）后，
     *    点一下 logo 语言就被偏好改掉 —— 表现为「点其他链接语言就切换回去了」。
     * 3) 其余路径一律以 URL 前缀为准，并把当前语言记下来，供下次从根路径进入时恢复。
     */
    router.beforeEach((to) => {
      // SSR 预渲染阶段绝不自动跳转，保证每个静态页各自正确落地。
      if (!isClient) return true
      const isInitial = !initialNavHandled
      initialNavHandled = true
      const locale = localeFromPath(to.path)
      // 首次进入且落在裸根路径：按已存偏好（没有则按浏览器语言）决定去哪一套
      if (isInitial && (to.path === '/' || to.path === '')) {
        const pref = storedLocale() ?? detectLocale()
        saveLocale(pref)
        if (pref !== 'zh-CN') return localizedPath('/', pref)
        return true
      }
      // 其余路径：URL 即语言真源；同时记住当前语言
      // （语言切换也走这里：目标路径的前缀就是用户选中的语言）
      saveLocale(locale)
      return true
    })
    // 百度统计：仅客户端导航时推送 PV（SSR 阶段不触发）
    if (isClient) {
      router.afterEach((to) => trackPageView(to.fullPath))
    }
  }
)
